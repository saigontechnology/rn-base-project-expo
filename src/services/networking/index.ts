import { AxiosError, AxiosResponse } from 'axios'
import { IAxiosMethod, IAxiosError, IParams } from '../../constants/interface/services/axios'
import { isObject } from '../../utilities/utils'
import instance from './axios'

const AxiosMethod: IAxiosMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
}

async function axiosAPI<TResponse, TRequest = unknown, TParams = unknown>(
  request: IParams<TRequest, TParams>,
): Promise<AxiosResponse<TResponse, TRequest>> {
  const { url, method, body, config, params } = request
  let data = body

  if (isObject(body)) {
    data = JSON.stringify(body)
  }
  return instance({
    url,
    method,
    data,
    params,
    headers: { ...config },
  })
    .then((response: AxiosResponse) => ({ ...response.data, status: response.status }))
    .catch((error: AxiosError<TResponse>) => ({
      error: error?.response?.data,
      status: error?.response?.status,
    }))
}

export function getRequest<TResponse, TRequest = unknown, TParams = unknown>(
  request: IParams<TRequest, TParams>,
): Promise<AxiosResponse<TResponse, TRequest>> {
  const { url, config, params } = request
  return axiosAPI<TResponse, TRequest, TParams>({ url, method: AxiosMethod.get, config, params })
}

export function postRequest<TResponse, TRequest = unknown, TParams = unknown>(
  request: IParams<TRequest, TParams>,
): Promise<AxiosResponse<TResponse, TRequest>> {
  const { url, body, config, params } = request
  return axiosAPI<TResponse, TRequest, TParams>({ url, method: AxiosMethod.post, body, config, params })
}

export function postFormDataRequest<TResponse, TRequest = unknown>(
  request: IParams<TRequest>,
): Promise<AxiosResponse<TResponse, TRequest>> | IAxiosError {
  const { url, body, config } = request
  try {
    if (body?.constructor !== FormData) {
      throw new Error('Unrecognized FormData part')
    }

    const customConfig = {
      ...config,
      'Content-Type': 'multipart/form-data',
    }
    return axiosAPI<TResponse, TRequest>({ url, method: AxiosMethod.post, body, config: customConfig })
  } catch (error: unknown) {
    const err = error as AxiosError<Error>
    return { error: err.response?.data.message || err.message }
  }
}

export function putRequest<TResponse, TRequest = unknown>(
  request: IParams<TRequest>,
): Promise<AxiosResponse<TResponse, TRequest>> {
  const { url, body, config } = request
  return axiosAPI<TResponse, TRequest>({ url, method: AxiosMethod.put, body, config })
}

export function patchRequest<TResponse, TRequest = unknown>(
  request: IParams<TRequest>,
): Promise<AxiosResponse<TResponse, TRequest>> {
  const { url, body, config } = request
  return axiosAPI<TResponse, TRequest>({ url, method: AxiosMethod.patch, body, config })
}

export function deleteRequest<TResponse, TRequest = unknown>(
  request: IParams<TRequest>,
): Promise<AxiosResponse<TResponse, TRequest>> {
  const { url, body, config } = request
  return axiosAPI<TResponse, TRequest>({ url, method: AxiosMethod.delete, body, config })
}
