// pages/index/new.js
var app = getApp();
var R_htmlToWxml = require('../../utils/htmlToWxml.js');//引入公共方法
var R_util = require('../../utils/util.js');//引入公共方法
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: app.globalData.imgurl, 
    dataurl: app.globalData.dataurl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1111)
    
    var mythis = this;
 var id = options.id;
    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/Index/news', //仅为示例，并非真实的接口地址
      data: {
        id: id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        res.data.archives.body = R_htmlToWxml.html2json(res.data.archives.body );
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

  // onLoad: function () {
  //   var mythis = this;
  //   //最新产品推荐

  //   wx.request({
  //     url: app.globalData.dataurl + '/index.php/Home/News/index', //仅为示例，并非真实的接口地址
  //     data: {

  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res.data)
  //       mythis.setData({ data: res.data })
  //     }
  //   })

  // }
})