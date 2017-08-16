var app = getApp()
var R_htmlToWxml = require('../../utils/htmlToWxml.js');//引入公共方法
var R_util = require('../../utils/util.js');//引入公共方法
Page({
  data: {
    imgurl: app.globalData.imgurl,
    data: [1, 2, 3],
    imgUrls: [
      'images/banner1.jpg',
      'images/banner2.jpg',

    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mythis = this;
    var id = options.id;
    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/Work/index', //仅为示例，并非真实的接口地址
      data: {
        id: id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        res.data.index.product.body = R_htmlToWxml.html2json(res.data.index.product.body);
        console.log(res.data)
        mythis.setData({ data: res.data })
      }
    })

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
    //最新产品推荐

    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/Work/index', //仅为示例，并非真实的接口地址
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