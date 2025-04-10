import {ExpoConfig} from 'expo/config'

const {version} = require('./package.json')
const APP_ID = process.env.APP_ID

export default ({config}: {config: ExpoConfig}) => ({
  ...config,
  name: process.env.APP_NAME,
  scheme: process.env.APP_SCHEME,
  version: version,
  newArchEnabled: true,
  userInterfaceStyle: 'automatic',
  ios: {
    ...config.ios,
    bundleIdentifier: APP_ID,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    ...config.android,
    package: APP_ID,
    adaptiveIcon: {
      foregroundImage: './src/assets/images/sts.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './src/assets/images/favicon.png',
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
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './src/assets/images/sts.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
    'expo-font',
  ],
  updates: {
    url: process.env.EAS_PROJECT_URL,
  },
  experiments: {
    typedRoutes: true,
  },
  owner: process.env.EAS_PROJECT_OWNER,
  runtimeVersion: process.env.EXPO_RUNTIME_VERSION || '1.0.0',
})
