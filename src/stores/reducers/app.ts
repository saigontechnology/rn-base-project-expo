import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IApp } from '../types/app'
import configs from '@/constants/configs'

export const appInitialState: IApp = {
  showGlobalIndicator: false,
  showSearchBar: false,
  apiUrl: configs.API_URL,
}

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    getSettings: () => {
      // TODO: add action when user get settings
    },
    setShowGlobalIndicator: (state, action: PayloadAction<boolean>): void => {
      state.showGlobalIndicator = action.payload
    },
    setApiUrl: (state, action: PayloadAction<string>) => {
      state.apiUrl = action.payload
    },
    setCodePushKey: (state, action: PayloadAction<string>) => {
      // state.codepushKey = action.payload
    },
  },
})

export const appActions = appSlice.actions

export default appSlice.reducer
