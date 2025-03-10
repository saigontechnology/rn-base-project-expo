export type IUserInfo = object

export type ITokenData = object

export interface IUser {
  userInfo: IUserInfo
  isEndUser?: boolean
  tokenData?: ITokenData
  contentFlagged?: string
}

export interface IUserSignInPayload {
  email: string
  password: string
}
