# General Setup #

若你使用 Mac OS 你可以使用官網安裝方式或是使用 homebrew 安裝

    $ brew install node

watchman 可以監看檔案是否有修改

    $ brew install watchman

安裝 React Native command line 工具

    $ npm install -g react-native-cli

## Android ##

由於我們是要開發 Android 平台，所以必須安裝：

- 安裝 JDK
- 安裝 Android SDK
- 設定一些環境變數

[Install Android Studio](https://developer.android.com/studio/install.html) 官網和 [官方安裝說明](https://facebook.github.io/react-native/docs/getting-started.html) 步驟完成。

## Create New Project ##

    $ react-native init ReactNativeFirebaseMotto
    $ cd ReactNativeFirebaseMotto

### Development Tools and Packages ###

    npm install --save redux react-redux immutable redux-immutable redux-actions uuid firebase

    $ npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react babel-preset-react-native eslint-plugin-react-native  eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react redux-logger

### Running Project ###

- Android
    
        $ react-native run-android

- iOS

        $ react-native run-ios

## References ##

- [一看就懂的 React Native + Firebase Mobile App 入門教學](http://blog.techbridge.cc/2016/09/10/react-native-redux-android-firebase/)