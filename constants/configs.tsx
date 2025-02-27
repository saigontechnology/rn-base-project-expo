import {getBundleId} from 'react-native-device-info'
import packageJSON from '../package.json'

const AppEnv = {
  DEV: 'dev',
  STAGING: 'staging',
  PRODUCTION: 'production',
}

const configs = {
  appBundleID: getBundleId(),
  appVersion: packageJSON.version,
  APP_ENV: process.env.APP_ENV || 'dev',
  DEBUG_ENABLED: process.env.APP_ENV !== AppEnv.PRODUCTION,
  API_URL: process.env.API_URL,
  buildEvn: process.env.APP_ENV,
  // codePushKey: Platform.select({
  //   ios: process.env.CODEPUSH_KEY_IOS,
  //   android: process.env.CODEPUSH_KEY_ANDROID,
  // }),
}

export const BOTTOM_SHEET_TYPE = {
  env: '0',
  codePush: '1',
}

export const EXTRA_QA_ENVS =
  configs.APP_ENV === AppEnv.DEV ? ['https://qa1.com/api/', 'https://qa2.com/api/'] : []

// export const CODEPUSH_KEYS =
//   configs.APP_ENV === AppEnv.DEV
//     ? [
//         {
//           dev: 'Dev',
//           key: configs.codePushKey,
//         },

//         {
//           dev: 'Thinh',
//           key: Platform.select({
//             android: '',
//             ios: '',
//           }),
//         },
//       ]
//     : [
//         {
//           dev: '',
//           key: '',
//         },

//         {
//           dev: '',
//           key: Platform.select({
//             android: '',
//             ios: '',
//           }),
//         },
//       ]

export default configs
