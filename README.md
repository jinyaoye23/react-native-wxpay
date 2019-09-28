# react-native-wxpay

## Getting started

`$ npm install https://github.com/kumbaya123/react-native-wxpay.git --save`

### Mostly automatic installation

`$ react-native link react-native-wxpay`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-wxpay` and add `WxpayModule.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libWxpayModule.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

##### 自动集成微信SDK

` pod 'WechatOpenSDK'`


##### iOS 原生代码处理

AppDelegate.h 文件中导入 `WXApi.h`头文件 和添加代理 `WXApiDelegate`

```
#import <UIKit/UIKit.h>
#import <WXApi.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, WXApiDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
```
AppDelegate.m 文件中实现方法

1.导入头文件`#import <WXApi.h>`

2.向微信注册
```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    //向微信注册
    [WXApi registerApp:APP_ID];
    return YES;
}

//支付回调9以后
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary*)options {
 return  [WXApi handleOpenURL:url delegate:self];
}
//支付回调9以前
- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url {
 return  [WXApi handleOpenURL:url delegate:self];
}
//ios9以后的方法
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
 return [WXApi handleOpenURL:url delegate:self];
}

#pragma mark - wx callback

- (void) onReq:(BaseReq*)req
{
 // TODO Something
}

- (void)onResp:(BaseResp *)resp
{
 //判断是否是微信支付回调 (注意是PayResp 而不是PayReq)
 if ([resp isKindOfClass:[PayResp class]])
 {
   //发出通知 从微信回调回来之后,发一个通知,让请求支付的页面接收消息,并且展示出来,或者进行一些自定义的展示或者跳转
   NSNotification * notification = [NSNotification notificationWithName:@"WXPay" object:nil userInfo:@{@"errCode":@(resp.errCode)}];
   [[NSNotificationCenter defaultCenter] postNotification:notification];
 }
}

```




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
