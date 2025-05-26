import { RouteKeys } from '@/routes/RouteKeys'
import { IInitialState } from './types'

const INITIAL_STATE: IInitialState = {
  app: { showGlobalIndicator: false, appState: RouteKeys.SplashScreen },
  user: {
    userInfo: {},
  },
  loading: {},
}

export default INITIAL_STATE
