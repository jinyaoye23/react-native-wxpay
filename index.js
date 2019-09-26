import { NativeModules,Platform } from 'react-native';


const Wxpay = NativeModules.WxpayModuleModule;
// export default NativeModules.WxpayModuleModule;

export default class WxpayModule {
  static registerApp(appid){
    Wxpay.registerApp(appid)
  }
  static wxPayAction(wxDic) {
    //wxDic为从服务器获取的支付信息
    return new Promise((resolve, reject) => {
      Wxpay.isSupported().then((isSupported) => {
        if (isSupported) {
          Wxpay.pay(wxDic).then((data) => {
            console.log('data=' + JSON.stringify(data));
            //data = {"errCode":0}//支付成功
            //data={"errCode":-2} //取消支付
            if (data.errCode == 0) {
              //支付成功
              resolve(data)
            } else {
              //支付失败
              reject(data)
            }
          });
        } else {
          //未安装微信或当前微信版本较低
          reject(isSupported)
        }
      }).catch((err) => {
        console.log('err=' + err);
        // this.refs.toast.show('支付失败');
        reject(err)
      });
    })
  }
};
