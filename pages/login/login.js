import WxValidate from '../../static/js/plugin/WxValidate'
const app = getApp();
Page({
  data:{
    validateMsg:false
  },
  onLoad:function(){
    this._initValidate();
    console.dir("onLoad")
  },
  formSubmit: function (e) {
    const params = e.detail.value;
    console.log(params);
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      this.setData({
        validateMsg:error.msg
      })
      return false
    }else{
      console.dir("xxx");
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