module.exports = {
  extends: [
    'expo',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'import', 'unused-imports'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        semi: 'off',
        'comma-dangle': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-cycle': 'warn',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'unused-imports/no-unused-imports': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-require-imports': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  ignorePatterns: ['node_modules/', '.expo/', 'scripts/', 'jest.config.js'],
}
