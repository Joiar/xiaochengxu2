// detail.js
var app = getApp();
var R_htmlToWxml = require('../../utils/htmlToWxml.js');//引入公共方法
var R_util = require('../../utils/util.js');//引入公共方法
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    imgurl: app.globalData.imgurl, 
    dataurl: app.globalData.dataurl,
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    tabs: ["图文详情","商品参数", "相关推荐"],
    activeIndex: 0,
    actionSheetHidden1: true,
    actionSheetHidden2: true,
    actionSheetHidden3: true,
    actionSheetHidden4: true,
    actionSheet1Items: [
      {
        logo: "../../images/detail_true.png",
        text: "正品保证"
      },
      {
        logo: "../../images/detail_true.png",
        text: "七天退换货"
      }, {
        logo: "../../images/detail_true.png",
        text: "保修"
      }

    ]

  },

  

  // 第一个弹窗
  action: function () {
    this.setData({
      actionSheetHidden1: false
    })
  },
  actionSheetChange: function () {
    this.setData({
      actionSheetHidden1: !this.data.actionSheetHidden1
    })
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },
  //加入购物车的弹出页面
  action2: function (e) {
    this.setData({
      actionSheetHidden2: false,
    })
  },
  actionSheet2Change: function () {
    this.setData({
      actionSheetHidden2: !this.data.actionSheetHidden2
    })
  },
  //立即购买的弹出页面
  action3: function (e) {
    this.setData({
      actionSheetHidden3: false,
    })
  },
  actionSheet3Change: function () {
    this.setData({
      actionSheetHidden3: !this.data.actionSheetHidden3
    })
  },
  //立即购买的弹出页面
  action4: function (e) {
    this.setData({
      actionSheetHidden4: false,
    })
  },
  actionSheet4Change: function () {
    this.setData({
      actionSheetHidden4: !this.data.actionSheetHidden4
    })
  },

  addcart: function () {
    this.setData({
      actionSheetHidden2: !this.data.actionSheetHidden2
    })
    wx.showToast({
      title: '加入成功',
      duration: 1000
    })
  },
  addcart4: function () {
    this.setData({
      actionSheetHidden4: !this.data.actionSheetHidden4
    })
    wx.showToast({
      title: '加入成功',
      duration: 1000
    })
  },

  onLoad: function (options) {
    var mythis = this;
    var id = options.id;
    // console.log(options.id)
    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/Details/index', //仅为示例，并非真实的接口地址
      data: {
        id: id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        res.data.detail.body = R_htmlToWxml.html2json(res.data.detail.body);
        console.log(res.data)
        mythis.setData({ data: res.data })
      }
    })

  },

});
