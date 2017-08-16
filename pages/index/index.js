// //index.js
// //获取应用实例
// var app = getApp()
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })
var app = getApp()

Page({
  data: {
    imgurl: app.globalData.imgurl,
    data:[1,2,3],
    imgUrls: [
      'images/banner1.jpg',
      'images/banner2.jpg', 
     
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

    // 获取数据
    onLoad: function () {
        var mythis = this;
        //最新产品推荐

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