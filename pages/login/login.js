import WxValidate from '../../static/js/plugin/WxValidate'
const app = getApp();
Page({
  onLoad:function(){
    this._initValidate();
  },
  formSubmit: function (e) {
    const params = e.detail.value;
    console.log(params);
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      wx.showToast({
        title: error.msg,
        icon: 'none',
        duration: 2000
      })  
      return false
    }
  },
  _initValidate() {
    const rules={
      username:{
        required: true
      },
      password:{
        required: true
      }
    }

    const messages = {
      username: {
        required: "请输入账号"
      },
      password: {
        required: "请输入密码"
      }
    }

    this.WxValidate = new WxValidate(rules, messages);
  }
})