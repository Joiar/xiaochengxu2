// pages/index/about.js
var app = getApp()

Page({
  data: {
    imgurl: app.globalData.imgurl,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  // 获取数据
    onLoad: function () {
    var mythis = this;
    
    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/About/index', //仅为示例，并非真实的接口地址
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