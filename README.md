# react-native-wxpay

## Getting started

`$ npm install react-native-wxpay --save`

### Mostly automatic installation

`$ react-native link react-native-wxpay`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-wxpay` and add `WxpayModule.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libWxpayModule.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.WxpayModulePackage;` to the imports at the top of the file
  - Add `new WxpayModulePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-wxpay'
  	project(':react-native-wxpay').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-wxpay/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-wxpay')
  	```


## Usage
```javascript
import WxpayModule from 'react-native-wxpay';

// TODO: What to do with the module?
WxpayModule;
```
