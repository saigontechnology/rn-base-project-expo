# Config scheme (android & ios) with EAS

Many times when developing an application, we developers need to create different builds with different configurations. Facilitating the maintenance and testing process. Usually 3 different builds are created: **development**, **staging** and **production**.

## Requiremnts

```bash
npm install -g eas-cli

eas login
```

## Create new project in EAS

1. Go to https://expo.dev/accounts/your_account_name/projects and click `Create a Project` button then a popup will be shown:

![Create EAS project popup](images/create-eas-project.png)

2. Fill all required informations and click `Create` and the popup success will be shown.

![Finish created EAS project](images/finish-created-eas-project.png)

3. Update EAS values to .env file

```bash
# .env.development .env.staging .env.production

# example from step 2: 942adb10-294e-4c5e-bdcd-89df492e1ba3
EAS_PROJECT_ID=your_eas_project_id

# format URL: https://u.expo.dev/your_eas_project_id
EAS_PROJECT_URL=your_eas_project_url

# your account name
EAS_PROJECT_OWNER=your_eas_project_owner
```

> Notes:
> Refer documentation for more information: https://docs.expo.dev/build/setup/

## Config new environment variables

If you want to add more env variables, here is steps to create new variables inside .env files

1. Go to eas.json in root folder, there is a object `env` contains env variables can be used

```bash
"channel": "production",
"env": {
    "APP_ENV": "$APP_ENV",
    "APP_SCHEME": "$APP_SCHEME",
    "APP_NAME": "$APP_NAME",
    "APP_ID": "$APP_ID",
    "EAS_PROJECT_ID": "$EAS_PROJECT_ID",
    "EAS_PROJECT_URL": "$EAS_PROJECT_URL",
    "EAS_PROJECT_OWNER": "$EAS_PROJECT_OWNER",
    "API_URL": "$API_URL"
}
...
```

2. Add new variable into `env` object:

```bash
"channel": "production",
"env": {
    "APP_ENV": "$APP_ENV",
    "APP_SCHEME": "$APP_SCHEME",
    "APP_NAME": "$APP_NAME",
    "APP_ID": "$APP_ID",
    "EAS_PROJECT_ID": "$EAS_PROJECT_ID",
    "EAS_PROJECT_URL": "$EAS_PROJECT_URL",
    "EAS_PROJECT_OWNER": "$EAS_PROJECT_OWNER",
    "API_URL": "$API_URL",
    "NEW_VARIABLE": "$NEW_VARIABLE", // new added variable
}
...
```

> Notes: this variables can be initialized in all schemes `development` `staging` `production` since this **env** is extends from other schemes as well

```bash
"staging": {
    ...
    "env": {
        "extends": "production"
    },
    ...
}
```

3. Add new variable `NEW_VARIABLE` in all .env schemes

```bash
# .env.development .env.staging .env.production
NEW_VARIABLE=NEW_VARIABLE_VALUES
```

4. To use it, simply call `process.env.NEW_VARIABLE`
