import { AnyAction, Store } from '@reduxjs/toolkit'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { AXIOS_TIMEOUT, RESPONSE_CODE, TOKEN, TOKEN_TYPE } from '../../constants'
import { getData, setData, removeData } from '../../utilities/storage'
import { AUTH_API } from '../api/api'
import { userActions } from '@/stores/reducers'
import { RootState } from '@/stores/store'
import configs from '@/constants/configs'

// Extend the AxiosRequestConfig interface to include _retry property
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

let store: Store<RootState, AnyAction>

let isRefreshing = false
let failedQueue: {
  resolve: (value: string | null) => void
  reject: (error: unknown) => void
}[] = []

const instance = axios.create({
  baseURL: configs.API_URL,
  timeout: AXIOS_TIMEOUT,
  withCredentials: false,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  data: {},
})

export const injectStore = (_store: Store<RootState, AnyAction>) => {
  store = _store
}

export function setBaseURL(baseURL: string) {
  instance.defaults.baseURL = baseURL
}

export function setToken(token: string, type: string) {
  switch (type) {
    case TOKEN_TYPE.Bearer:
      instance.defaults.headers.common.Authorization = `Bearer ${token}`
      break
    default: {
      instance.defaults.headers.common.Authorization = token
    }
  }
}

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error)
    } else {
      resolve(token)
    }
  })

  failedQueue = []
}

const logout = () => {
  store.dispatch(userActions.logout())
}

const clearTokens = async () => {
  try {
    await removeData(TOKEN.token)
    await removeData(TOKEN.refreshToken)
    delete instance.defaults.headers.common.Authorization
  } catch (error) {
    console.log('Error clearing tokens:', error)
  }
}

// Helper function to validate JSON response
const isValidJSONResponse = (response: unknown): boolean => {
  try {
    if (typeof response === 'string') {
      JSON.parse(response)
    } else if (response && typeof response === 'object') {
      return true
    }
    return false
  } catch {
    return false
  }
}

const handleRefreshToken = async (
  refreshToken: string,
  originalConfig: ExtendedAxiosRequestConfig,
): Promise<AxiosResponse> => {
  if (isRefreshing) {
    // If already refreshing, queue this request
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject })
    }).then(() => instance(originalConfig))
  }

  isRefreshing = true

  try {
    const response = await instance.post(AUTH_API.refreshToken, { refreshToken })

    // Validate response structure
    if (!response?.data || !isValidJSONResponse(response.data)) {
      throw new Error('Invalid response format from refresh token endpoint')
    }

    // Extract tokens from the response structure
    const newAccessToken = response?.data?.accessToken
    const newRefreshToken = response?.data?.refreshToken

    // Validate tokens before saving
    if (!newAccessToken || !newRefreshToken) {
      throw new Error('Invalid tokens received from refresh response')
    }

    // Save new tokens
    setToken(newAccessToken, TOKEN_TYPE.Bearer)
    await setData(TOKEN.token, newAccessToken)
    await setData(TOKEN.refreshToken, newRefreshToken)

    // Process queued requests
    processQueue(null, newAccessToken)

    // Update the original request with new token
    if (originalConfig.headers) {
      originalConfig.headers.Authorization = `Bearer ${newAccessToken}`
    }

    // Retry the original request
    return instance(originalConfig)
  } catch (error) {
    // Handle refresh token failure
    processQueue(error, null)
    await clearTokens()
    logout()

    throw error
  } finally {
    isRefreshing = false
  }
}

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add request logging for debugging
    if (configs.DEBUG_ENABLED) {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`)
    }
    return config
  },
  (error: AxiosError) => {
    console.error('[API Request Error]', error)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Add response logging for debugging
    if (configs.DEBUG_ENABLED) {
      console.log(`[API Response] ${response.status} ${response.config.url}`)
    }
    return response
  },
  async (error: AxiosError) => {
    const originalConfig = error?.config as ExtendedAxiosRequestConfig

    // Log error details for debugging
    if (configs.DEBUG_ENABLED) {
      console.error('[API Error]', {
        status: error?.response?.status,
        statusText: error?.response?.statusText,
        url: originalConfig?.url,
        method: originalConfig?.method,
        data: error?.response?.data,
      })
    }

    // Handle JSON parse errors
    if (error?.response?.data && typeof error.response.data === 'string') {
      try {
        // Try to parse the response as JSON
        const parsedData = JSON.parse(error.response.data)
        error.response.data = parsedData
      } catch {
        // If it's not valid JSON, create a structured error
        error.response.data = {
          message: 'Invalid response format',
          originalData: error.response.data,
        }
      }
    }

    const token = await getData<string>(TOKEN.token)
    const refreshToken = await getData<string>(TOKEN.refreshToken)

    const isTokenExpired = token && RESPONSE_CODE.unauthorized.includes(error?.response?.status as number)

    if (isTokenExpired && !originalConfig._retry) {
      // Mark this request as retried to prevent infinite loops
      originalConfig._retry = true

      if (refreshToken) {
        try {
          return await handleRefreshToken(refreshToken, originalConfig)
        } catch (refreshError) {
          return Promise.reject(refreshError)
        }
      } else {
        await clearTokens()
        logout()
      }
    }

    return Promise.reject(error)
  },
)

export default instance
