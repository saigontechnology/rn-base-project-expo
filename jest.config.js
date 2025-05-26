module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/', '/__tests__/providers/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|' +
      '@react-native(-community)?)|' +
      'expo(nent)?|@expo(nent)?/.*|' +
      '@expo-google-fonts/.*|' +
      'react-navigation|' +
      '@react-navigation/.*|' +
      '@sentry/react-native|' +
      'native-base|' +
      'rn-base-component|' +
      'react-native-svg)',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'json-summary', 'text', 'text-summary'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage' }]],
  verbose: true,
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node', 'mts', 'cts', 'svg'],
  coveragePathIgnorePatterns: [],
}
