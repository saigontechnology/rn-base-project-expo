const {version: APP_VERSION} = require('./package.json')
const APP_ID = process.env.APP_ID

export default ({config}) => ({
  ...config,
  name: process.env.APP_NAME,
  scheme: process.env.APP_SCHEME,
  version: APP_VERSION,
  ios: {
    ...config.ios,
    bundleIdentifier: APP_ID,
  },
  android: {
    ...config.android,
    package: APP_ID,
  },
  extra: {
    ...config.extra,
    API_URL: process.env.API_URL,
    APP_ENV: process.env.APP_ENV,
    APP_ID: process.env.APP_ID,
    APP_NAME: process.env.APP_NAME,
    APP_SCHEME: process.env.APP_SCHEME,
    PROJECT_NAME: process.env.PROJECT_NAME,
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
    },
  },
  updates: {
    url: process.env.EAS_PROJECT_URL,
  },
  owner: process.env.EAS_PROJECT_OWNER,
})
