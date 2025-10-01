# Environment Setup

This project uses environment variables to configure different aspects of the application. You need to create a `.env` file in the root directory of your project.

## Creating the .env File

1. Copy the sample environment configuration below
2. Create a new file named `.env` in your project root
3. Update all placeholder values with your actual configuration

## Required Environment Variables

```env
# App Configuration
APP_NAME=Your App Name
APP_ID=com.yourcompany.yourapp
APP_SCHEME=yourappscheme
PROJECT_NAME=YourAppName

# Environment
APP_ENV=development

# API Configuration
API_URL=https://api.yourapp.com

# Expo Configuration
EAS_PROJECT_OWNER=your-eas-owner
EAS_PROJECT_ID=your-eas-project-id
EXPO_RUNTIME_VERSION=1.0.0

# iOS Configuration (for Fastlane)
APPLE_TEAM_ID=your-apple-team-id

# Android Configuration (for Fastlane)
FIREBASE_APP_ID=1:123456789:android:abcdef123456
FIREBASE_TOKEN=your-firebase-token
DISTRIBUTE_GROUP=testers

# Google Play Console (for production Android builds)
GOOGLE_PLAY_JSON_KEY_PATH=/path/to/google-play-service-account.json

# Bitbucket Build Number (for CI/CD)
BITBUCKET_BUILD_NUMBER=1
```

## Environment Variable Descriptions

### App Configuration

- `APP_NAME`: Display name of your app (used in app stores and notifications)
- `APP_ID`: Bundle identifier for iOS / Package name for Android (e.g., com.company.appname)
- `APP_SCHEME`: Custom URL scheme for deep linking
- `PROJECT_NAME`: Xcode project name (spaces removed, used for build paths)

### Environment

- `APP_ENV`: Current environment (`development`, `staging`, `production`)

### API Configuration

- `API_URL`: Base URL for your API endpoints

### Expo Configuration

- `EAS_PROJECT_OWNER`: Your Expo Application Services (EAS) account owner
- `EAS_PROJECT_ID`: Your EAS project ID
- `EXPO_RUNTIME_VERSION`: Runtime version for updates (used for OTA updates)

### iOS Configuration (Fastlane)

- `APPLE_TEAM_ID`: Your Apple Developer Team ID (required for code signing)

### Android Configuration (Fastlane)

- `FIREBASE_APP_ID`: Firebase App ID for Android (used for Firebase App Distribution)
- `FIREBASE_TOKEN`: Firebase CLI token (for authentication with Firebase)
- `DISTRIBUTE_GROUP`: Firebase App Distribution tester group name

### Google Play Console (Production Android)

- `GOOGLE_PLAY_JSON_KEY_PATH`: Path to your Google Play service account JSON key file (required for production builds)

### CI/CD Configuration

- `BITBUCKET_BUILD_NUMBER`: Build number (automatically set in CI/CD pipelines)

## Environment-Specific Setup

### Development

```env
APP_ENV=development
API_URL=https://dev-api.yourapp.com
```

### Staging

```env
APP_ENV=staging
API_URL=https://staging-api.yourapp.com
```

### Production

```env
APP_ENV=production
API_URL=https://api.yourapp.com
```

## Security Notes

- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Keep your Firebase tokens and Apple Team IDs secure
- Use different Firebase projects for different environments when possible

## Validation

After setting up your environment variables, you can validate your configuration by running:

```bash
npx expo-doctor
```

This will check if all required environment variables are properly configured.
