var app = getApp()

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
    duration: 1000,
    p: 1,
    product: [],
    msg: '暂无数据',
    status: false,
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
    console.log('sssss')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var p_ = this.data.p;
    console.log(p_)
    var arr = ({ p: p_ })
    this.onLoad(arr)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  // 获取数据
  onLoad: function (options) {
    var p = options.p?options.p:1;
    var mythis = this;  
    //最新产品推荐

    wx.request({
      url: app.globalData.dataurl + '/index.php/Home/Product/product', //仅为示例，并非真实的接口地址
      data: {
        p: p
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.product.length > 0) {

          var list = mythis.data.product;
          for (var i = 0; i < res.data.product.length; i++) {
            list.push(res.data.product[i]);
          }
          mythis.setData(
            {
              product: list,
              p: ++p
            }
          )
        } else {
          mythis.setData({
            msg: p > 0 ? '没有了！' : '暂无数据!',
            status: true,
          })
        }
        // console.log(res.data)
      }
        // console.log(res.data)
        // mythis.setData({ data: res.data })
      }
    )

  }
})