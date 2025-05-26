import { ExpoConfig } from 'expo/config'

const { version: APP_VERSION } = require('./package.json')

export default ({ config }: { config: ExpoConfig }) => ({
  ...config,
  name: process.env.APP_NAME || '',
  scheme: process.env.APP_SCHEME,
  version: APP_VERSION,
  newArchEnabled: true,
  userInterfaceStyle: 'automatic',
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
  experiments: {
    typedRoutes: true,
  },
  owner: process.env.EAS_PROJECT_OWNER,
  ios: {
    ...config.ios,
    bundleIdentifier: process.env.APP_ID,
    entitlements: {
      'aps-environment': process.env.APP_ENV,
    },
  },
  android: {
    ...config.android,
    package: process.env.APP_ID,
    versionCode: parseInt(process.env.BITBUCKET_BUILD_NUMBER || '1'),
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
  runtimeVersion: process.env.EXPO_RUNTIME_VERSION || '1.0.0',
})
