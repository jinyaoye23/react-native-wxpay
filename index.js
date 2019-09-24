import { NativeModules } from 'react-native';

const Wxpay = NativeModules.WxpayModule;

export default class WxpayModule {
  async wxPayAction(wxDic) {
    //wxDic为从服务器获取的支付信息
    Wxpay.isSupported().then((isSupported) => {
      if (isSupported) {
        Wxpay.pay(wxDic).then((data) => {
          console.log('data=' + JSON.stringify(data));
          //data = {"errCode":0}//支付成功
          //data={"errCode":-2} //取消支付
          if (data.errCode == 0) {
            //支付成功

          } else {
            //支付失败
          }
        });
      } else {
        //未安装微信或当前微信版本较低
      }
    }).catch((err) => {
      console.log('err=' + err);
      this.refs.toast.show('支付失败');
    });
  }
};
