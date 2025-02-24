const {version: APP_VERSION} = require('./package.json')

const APP_NAME = process.env.APP_NAME
const APP_BUNDLE_ID = process.env.APP_BUNDLE_ID
const SCHEME = process.env.SCHEME

export default ({config}) => ({
  ...config,
  name: APP_NAME,
  scheme: SCHEME,
  version: APP_VERSION,
  ios: {
    ...config.ios,
    bundleIdentifier: APP_BUNDLE_ID,
  },
  android: {
    ...config.android,
    package: APP_BUNDLE_ID,
  },
})
