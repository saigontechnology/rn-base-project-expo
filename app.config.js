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
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
    },
  },
  updates: {
    url: process.env.EAS_PROJECT_URL,
  },
  owner: process.env.EAS_PROJECT_OWNER,
})
