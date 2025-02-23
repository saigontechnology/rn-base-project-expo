import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {IApp} from '../types/app'
import {RouteKeys} from '@/routes/RouteKeys'

export const appInitialState: IApp = {
  showGlobalIndicator: false,
  appState: RouteKeys.Home,
  showSearchBar: false,
  // apiUrl: Config.API_URL,
  apiUrl: '',
}

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    getSettings: () => {
      // TODO: add action when user get settings
    },
    setAppStack: (state, action: PayloadAction<string>): void => {
      state.appState = action.payload
    },
    setShowGlobalIndicator: (state, action: PayloadAction<boolean>): void => {
      state.showGlobalIndicator = action.payload
    },
    setApiUrl: (state, action: PayloadAction<string>) => {
      state.apiUrl = action.payload
    },
  },
})

export const appActions = appSlice.actions

export default appSlice.reducer
