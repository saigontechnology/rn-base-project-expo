import packageJSON from '../../package.json'
import Constants from 'expo-constants'

const AppEnv = {
  DEV: 'dev',
  STAGING: 'staging',
  PRODUCTION: 'production',
}

export const EXPO_ENV_VARIABLES = Constants.expoConfig?.extra

const configs = {
  appVersion: packageJSON.version,
  APP_ENV: EXPO_ENV_VARIABLES?.APP_ENV ?? 'dev',
  DEBUG_ENABLED: EXPO_ENV_VARIABLES?.APP_ENV !== AppEnv.PRODUCTION,
  API_URL: EXPO_ENV_VARIABLES?.API_URL,
  buildEvn: EXPO_ENV_VARIABLES?.APP_ENV,
  projectName: EXPO_ENV_VARIABLES?.PROJECT_NAME,
}

export const BOTTOM_SHEET_TYPE = {
  env: '0',
  codePush: '1',
}

export const EXTRA_QA_ENVS =
  configs.APP_ENV === AppEnv.DEV ? ['https://qa1.com/api/', 'https://qa2.com/api/'] : []

export default configs
