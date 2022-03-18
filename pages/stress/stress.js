// pages/stress/stress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id: 0,
        title: "测评理论",
        content: `<div>本测评以经典的心理健康量表改编</div>
        <div>收集近两年数十万的测评数据分析制得。</div>`
      },
      {
        id: 1,
        title: "你将获得",
        content: `<div>1、综合评估你的心理健康状况</div>
        <div>2、深入解析你的心理状况</div>
        <div>3、专业健康小贴士</div>`
      }
    ]
  },
  /**
   * 自定义函数--开始测试
   */
  startTest: function (options) {
    wx.navigateTo({
      url: '/pages/stresstest/stresstest',
    })
  },
  /**startTest
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

  }
})