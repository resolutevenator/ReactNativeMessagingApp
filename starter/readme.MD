### Running the App: Fresh install

1. `npm install`
2. In a separate terminal: `cd AppData\Local\Android\Sdk\platform-tools`
3. `adb reverse tcp:8081 tcp:8081`
4. Inside project: `react-native run-android`

#### Common Problems:

Unable to load script from assets....

1. `mkdir android/app/src/main/asset`
2. `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`
