// pages/index/message.js
var app = getApp()
Page({
  isDefault: false,
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var realname = e.detail.value.realname;
    var mobile = e.detail.value.mobile;
    var email = e.detail.value.email;
    var text = e.detail.value.text;


    if (realname == '') {
      wx.showToast({
        title: '请填写收件人',
      });
      return;
    }
    
    if (mobile == '') {
      wx.showToast({
        title: '请填写电话',
      });
      return;
    }
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
      wx.showToast({
        title: '请填写正确手机号码',
      });
      return;
    }

    if (text == '') {
      wx.showToast({
        title: '请填写内容',
      });
      return;
    }

    // 提交留言数据
    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/Message/getMessage',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: { name: realname, mobile: mobile, email: email, message: text },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: res.data.data.info,
            icon: 'loading',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: res.data.data.info,
            icon: 'success',
            duration: 1000
          })
          
          wx.switchTab({
            url: '../index/index'
          })

        }

      }

    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function () {
    var mythis = this;
    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/Index/index', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        mythis.setData({ data: res.data })
      }
    })

  }

})

