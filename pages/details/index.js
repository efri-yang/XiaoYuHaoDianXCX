Page({
  data: {
    isIntroDialogShow: false
  },
  onShareAppMessage: function (res) {
    return {
      title: '你喜欢的才是好店',
      path: '/pages/details/index?id='+this.data.id,
      imageUrl:"http://hdi.xiaoyu.com/images/wechatapp/common/common_haodian_share.jpg",
      success: function (res) {
        wx.showToast({
          title: '转发成功！',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      id: options.id,
      dataDetail: ""
    });
    wx.request({
      url: "https://m3.xiaoyu.com/welcome/wechatapp?callback=haodian.detail&id=" + this.data.id,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          dataDetail: res.data
        });
        
      },
      fail: function (res) {
       
      }
    })
  },





  shopIntroDialog: function () {
    var that=this;
    wx.request({
      url: "https://m3.xiaoyu.com/welcome/wechatapp?callback=haodian.about",
      method: 'GET',
      success: function (res) {
        that.setData({
          dataAbout: res.data
        });
      }
    });
    this.setData({
      isIntroDialogShow: !this.data.isIntroDialogShow
    })
  }

});






