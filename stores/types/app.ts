import {IActionDispatch} from './action'

export interface IApp {
  showGlobalIndicator?: boolean
  showSearchBar?: boolean
  codePushKey?: string
  apiUrl?: string
}

export interface IAppActions {
  getSettings: IActionDispatch
  getSettingsSuccess: IActionDispatch
  setShowGlobalIndicator: IActionDispatch
  setCodePushKey: IActionDispatch
  setApiUrl: IActionDispatch
}
