## fastlane documentation

# Available Actions

## iOS

### ios upload

```sh
[bundle exec] fastlane ios upload env:development
[bundle exec] fastlane ios upload env:staging
[bundle exec] fastlane ios upload env:production
```

Build and upload to TestFlight with automatic changelog generation including environment name and date.

**Required environment variables:**

- `APP_NAME`: Display name of the app (spaces will be removed)
- `PROJECT_NAME`: Xcode project name
- `APP_ID_IOS`: iOS bundle identifier
- `APPLE_TEAM_ID`: Apple Developer Team ID

**Optional parameters:**

- `buildNumber`: Build number for CI builds
- `ci`: Set to true for CI builds (enables code signing setup)
- `changelog`: Custom changelog text

### ios build

```sh
[bundle exec] fastlane ios build env:development
[bundle exec] fastlane ios build env:staging
[bundle exec] fastlane ios build env:production
```

Build iOS app (calls upload lane internally)

---

## Android

### android upload

```sh
[bundle exec] fastlane android upload env:development
[bundle exec] fastlane android upload env:staging
[bundle exec] fastlane android upload env:production
```

Build APK/AAB and upload to appropriate distribution platform:

- **Development/Staging**: Upload APK to Firebase App Distribution
- **Production**: Build AAB and upload to Google Play Console

**Required environment variables:**

- `FIREBASE_APP_ID`: Firebase App ID for Android
- `FIREBASE_TOKEN`: Firebase CLI token
- `DISTRIBUTE_GROUP`: Firebase distribution group
- `GOOGLE_PLAY_JSON_KEY_PATH`: Path to Google Play service account JSON key (for production)

**Optional parameters:**

- `buildNumber`: Version code for the build

### android build

```sh
[bundle exec] fastlane android build env:development
[bundle exec] fastlane android build env:staging
[bundle exec] fastlane android build env:production
```

Build Android app (calls upload lane internally)

---

## Environment Configuration

The fastlane configuration supports three environments:

- `development`: Development builds
- `staging`: UAT/Staging builds
- `production`: Production builds

Set the environment using:

```sh
fastlane [platform] [lane] env:environment_name
```

Or set the `APP_ENV` environment variable.

---

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
