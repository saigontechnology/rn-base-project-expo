<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="docs/images/Logo.png" alt="Markdownify" width="100%"></a>
  <br>
    Expo Template
  <br>
</h1>

<h4 align="center">This project is a template for <a href="http://electron.atom.io" target="_blank">Expo React Native</a> that can be used to build mobile application.</h4>

<p align="center">
  <a href="https://choosealicense.com/licenses/mit/">
    <img src="https://img.shields.io/github/license/saigon-technology/rn-base-project-typescript"
         alt="MIT">
  </a>
  <img src="https://img.shields.io/npm/v/rn-base-project-ts">
  <a href="https://www.npmjs.com/package/rn-base-project-ts">
      <img src="https://img.shields.io/npm/dm/rn-base-project-ts">
  </a>
  <img src="https://img.shields.io/github/release-date/saigon-technology/rn-base-project-typescript">
  <img src="https://img.shields.io/github/stars/saigon-technology/rn-base-project-typescript">
  <img src="https://img.shields.io/github/languages/top/saigon-technology/rn-base-project-typescript">
  <img src="https://img.shields.io/github/contributors/saigon-technology/rn-base-project-typescript">
</p>

<p align="center">
  <a href="#requirements">Requirements</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#features">Features</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#documents">Documents</a> •
  <a href="#scripts">Scripts</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#about-us">About Us</a> •
  <a href="#mission">Mission</a> •
  <a href="#history">History</a> •
  <a href="#contact-us">Contact Us</a> •
  <a href="#license">License</a>
</p>

## Requirements

NodeJS (version 16 or later) and NPM is required.
To make sure you have them available on your machine, try running the following command

```sh
$ npm -v && node -v
9.2.0
v16.19.0
```

> **Note**
> You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Quick Start

1. Init project

    ```sh
    npx create-expo-app@latest YourApp --template rn-base-project-expo
    ```

2. Install node_modules

    ```sh
    yarn install
    ```

    > **Note**
    > Pod install automatically after run `yarn install`  

3. Run `Android` or `Ios` via package.json

    ```sh
    # Run android
    yarn android

    # Run ios
    yarn ios
    ```

## ⭐ Features

- 🎉 Provide scripts that perform various tasks, such as building the project, generate files, starting the development server and more.
- 💅 Integrate in-app debug menu that help you to get the information of device, environment, bundleId, version,... and also allow you to change environment directly in your app.
- ⚙️ Support for multiple environment builds, including Production, Staging, and Development.
- 🦊 Husky for Git Hooks, to automate your git hooks and enforce code standards.
- 💡 State management with [Redux Toolkit](https://redux-toolkit.js.org) along with [Redux Saga](https://redux-saga.js.org).
- 🚫 Lint-staged to ensure that your code is always up to standards.
- ☂️ Pre-installed [React Navigation](https://reactnavigation.org) to provide a comprehensive navigation solution for your app.
- 💫 [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) as a storage solution to save sensitive data.
- 🛠 A simple workflow for building, releasing, and distributing your app using [fastlane](https://fastlane.tools).
- 🔥 [axios](https://github.com/axios/axios) for fetching data, to help you build efficient and performant apps.
- 🧵 [CodePush](https://github.com/microsoft/react-native-code-push) to deploy mobile app updates directly to their users’ devices.
- 🎯 Localization with [i18n-js](https://github.com/fnando/i18n).

## Dependencies

Our template is ship with the following rock-solid technical decisions out of the box:

| Library           | Category             | Version | Description                                    |
| ----------------- | -------------------- | ------- | ---------------------------------------------- |
| React Native      | Mobile Framework     | v0.70   | The best cross-platform mobile framework       |
| React             | UI Framework         | v18     | The most popular UI framework in the world     |                         |
| React Native Code Push      | CI/CD     | v7   | Easily add a dynamic update experience to your React Native app       |
| React Native Config            | ENV Configuration         | v18     | The most popular UI framework in the world     |                         |
| React Navigation  | Navigation           | v1      | Expose config variables to your javascript code |                |             |                         |
| i18n-js     | Translation           | v4      | Provide the i18n translations on the JavaScript            |
| RN Reanimated     | Animations           | v2      | Beautiful and performant animations            |
| Async-storage      | Persistence          | v1     | State persistence                              |
| React Native SVG      | SVG Image          | v13     | Provides SVG support to React Native                              |
| Axios      | Network Services          | v1     | Provides promise based HTTP client                              |
| Redux / Redux-toolkit      | State Management          | v8     | Provides state container for JavaScript apps                              |
| Redux Saga      | Redux side-effect          | v1     | Provides Redux side effect manager                              |
| ESLint              | Code Formater          | v8     | Tool for identifying and reporting on patterns Javascript              |
| Jest              | Test Runner          | v26     | Standard test runner for JS apps               |
| Husky             | Native Git Hook    | v8     | Improves your commits and more testing                     |

## Documents

- [Networking](docs/networking.md)
- [Multiple schemes](docs/config-scheme.md)
- [Redux persist](docs/config-redux-persist.md)
- [Config redux persist](docs/config-redux-persist.md)
- [Check out the full documentation!](#documents)

## Scripts

| Script | Description | Syntax |
| ------ | ----------- | ------ |
| [Generate images](template/scripts/genimg.js) | Get all images from [src/assets/images](template/src/assets/images/) and require images in [src/themes/images](template/src/themes/images.js) | ```yarn generateimages``` |
| [Run App](template/scripts/run-app.sh) | Run app in Android or iOS with selected variants | ```yarn android```<br /> ```yarn ios``` |

## Contributors ✨

Thanks goes to these wonderful people
<table>
  <tr>
    <td align="center"><a href="https://github.com/honghoangsts/"><img src="https://avatars.githubusercontent.com/u/63329049?v=4" width="100px;" alt="Hong Hoang" style="border-radius: 10%;"/><br /><sub><b>Hong Hoang</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/huydosgtech/"><img src="https://avatars.githubusercontent.com/u/105196859?v=4" width="100px;" alt="Huy Do" style="border-radius: 10%;"/><br /><sub><b>Huy Do</b></sub></a><br /></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ThinhKimVo/"><img src="https://avatars.githubusercontent.com/u/104345392?v=4" width="100px;" alt="Thinh Vo" style="border-radius: 10%;"/><br /><sub><b>Thinh Vo</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/loc-nguyenthien/"><img src="https://avatars.githubusercontent.com/u/114563576?v=4" width="100px;" alt="Loc NguyenT" style="border-radius: 10%;"/><br /><sub><b>Loc NguyenT</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/hoangSTS/"><img src="https://avatars.githubusercontent.com/u/117052298?v=4" width="100px;" alt="Hoang Dinh Tien" style="border-radius: 10%;"/><br /><sub><b>Hoang Dinh Tien</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/loido/"><img src="https://avatars.githubusercontent.com/u/117077260?v=4" width="100px;" alt="Loi Do" style="border-radius: 10%;"/><br /><sub><b>Loi Do</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ngochuyduong/"><img src="https://avatars.githubusercontent.com/u/124558477?v=4" width="100px;" alt="Huy Duong" style="border-radius: 10%;"/><br /><sub><b>Huy Duong</b></sub></a><br /></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/hangnguyensaigontech/"><img src="https://avatars.githubusercontent.com/u/124117862?v=4" width="100px;" alt="Hang Nguyen" style="border-radius: 10%;"/><br /><sub><b>Hang Nguyen</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/tuledu/"><img src="https://avatars.githubusercontent.com/u/111717882?v=4" width="100px;" alt="Tung Le" style="border-radius: 10%;"/><br /><sub><b>Tung Le</b></sub></a><br /></td>
  </tr>
</table>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
This project follows the [all-contributors](https://github.com/saigontechnology/rn-base-project-typescript/graphs/contributors) specification. Contributions of any kind welcome!

## About Us

Welcome to Awesome Library! We're a small team of developers passionate about creating library that make people's lives easier.

### Mission

Our mission is to create the best library for implementing project stucture easily. We believe that everyone can benefit from tools that help them work smarter, not harder. We're committed to building an library that's easy to use, reliable, and affordable for everyone.

### History

My library was founded on Oct 2022 with the goal of making productivity library more accessible to everyone. Since then, we've been working tirelessly to improve the library and add new features.

### Contact Us

If you have any questions or feedback, we'd love to hear from you! You can reach us at <reactnativeststeam@gmail.com>

## License

[MIT](https://choosealicense.com/licenses/mit/)
