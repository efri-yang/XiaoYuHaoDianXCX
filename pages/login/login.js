import WxValidate from '../../static/js/plugin/WxValidate'
const app = getApp();
Page({
  data: {
    validateMsg: false
  },
  onLoad: function () {
    this._initValidate();
    console.dir("onLoad")
  },
  formSubmit: function (e) {
    const params = e.detail.value;
    console.log(params);
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      this.setData({
        validateMsg: error.msg
      })
      return false
    } else {
      
      wx.request({
        url: "https://m3.xiaoyu.com/welcome/wechatapp?callback=haodian.cates",
        data: {},
        method: 'post',
        header: {
          'content-type': 'application/json' // 默认值
        },
        dataType:"json",
        success: function (res) {
          that.setData({
            dataNav: res.data
          });
          that.ajaxGetRankList(that.data.dataNav.data.list[0]);
        }
      })
    }
  },
  //账号输入框事件
  bindInputTap: function () {
    this.setData({
      validateMsg: false
    })
  },
  //初始化验证插件
  _initValidate() {
    const rules = {
      username: {
        required: true
      },
      password: {
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