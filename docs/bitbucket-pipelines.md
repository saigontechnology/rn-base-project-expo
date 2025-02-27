# 📌 Bitbucket Pipelines Guide

## 📖 Overview

This project uses **Bitbucket Pipelines** for automating builds, deployments
Bitbucket Pipelines is configured with firebase to:

- **Auto-trigger builds** when pushing code to `develop`, `staging`, or `production`.
- **Support manual execution** using **custom pipelines** for specific tasks.

---

## 🚀 Automatic Branch-Based Pipelines

When code is pushed to a branch (`develop`, `staging`, `production`), Bitbucket Pipelines will execute different tasks depending on what has changed.

### 🔹 Conditional Builds

```yaml
condition:
  changesets:
    includePaths:
      - "ios/**"
      - "android/**"
      - "package.json"
      - "*.env.*"
      ...
```

• If these files change, a full build (Xcode & Android) is triggered.

### 🔹 Pipeline Execution Flow

| Branch       | Condition                                                    | Action                                 |
| ------------ | ------------------------------------------------------------ | -------------------------------------- |
| `develop`    | Code changes in `ios/`, `android/`, `package.json`, `.env.*` | Full Build & Upload to TestFlight(iOS) |
| `staging`    | Always builds                                                | Full Build & Upload                    |
| `production` | Always builds                                                | Full Build & Upload                    |

## 🛠️ Running Pipelines in Bitbucket

### 🔹 How to Trigger a Pipeline Manually

1. Open **Bitbucket** → Navigate to your repository.
2. Click **Pipelines** (left menu).
3. Click **Run Pipeline**.
4. Select a **Branch** (e.g., `develop`).
5. Choose a **Custom Pipeline** from the dropdown:
   - **`buildDev`** → Manually build development version
   - **`buildStaging`** → Manually build staging version
   - **`buildProduction`** → Manually build production version
6. Click **Run**.

# 🔄 Environment Variables in Bitbucket Pipelines

Bitbucket Pipelines relies on **environment variables** to securely manage sensitive data like API keys, App IDs, and credentials. This guide explains how to update and manage these variables effectively.

---

## 📌 Environment Variables Used in Bitbucket Pipelines

| Variable Name            | Description                                       | Example Value          |
| ------------------------ | ------------------------------------------------- | ---------------------- |
| `BITBUCKET_BUILD_NUMBER` | Auto-generated build number for tracking.         | `123`                  |
| `PROJECT_NAME`           | The name of your React Native project.            | `MyApp`                |
| `APP_ID`                 | The application identifier (package name).        | `com.example.myapp`    |
| `KEYCHAIN_PASSWORD`      | **macOS Keychain password** for signing iOS apps. | `"my-secure-password"` |

---

## 🚀 Updating Variables in Fastlane for Bitbucket

If you update any **environment variables**, make sure **Fastlane** picks up the changes by modifying your `.env` files.

### 🔹 Updating `.env` File

1. Navigate to the project root.
2. Open or create `.env.development`, `.env.staging`, `.env.production`.
3. Update the variables as needed:
   ```sh
   APP_ID=com.example.myapp
   PROJECT_NAME=MyApp
   ```
