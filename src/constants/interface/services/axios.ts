import { AxiosRequestHeaders, HeadersDefaults, RawAxiosRequestHeaders } from 'axios'

export interface IToken {
  token: string
  refreshToken: string
}

export interface IResponseCode {
  success: number[]
  unauthorized: number[]
}

export interface ITokenType {
  Bearer: string
  Basic: string
}

export interface IAxiosHeaders extends HeadersDefaults {
  Authorization: string
  baseURL: string
}

export interface IAxiosMethod {
  get: string
  post: string
  put: string
  delete: string
  patch: string
}

export interface IAxiosError {
  error: string | undefined
}

export interface IParams<TRequest = undefined, TParams = undefined> {
  url: string
  method?: string
  body?: TRequest | string
  params?: TParams
  config?: AxiosRequestHeaders | RawAxiosRequestHeaders
}
