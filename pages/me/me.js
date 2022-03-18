// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    fayam:11,
    famount:2,
    muissuelist:[
      {
        picsrc:"http://m.qpic.cn/psc?/V53NDsF102OjyD2xUfsv1a2qsC2dRBoH/ruAMsa53pVQWN7FLK88i5pKrnffUUcZ7N0T2fimklMUmaXnpG16ZSS0qv1RHRHUUHqDu5HPtsJV8gv8Ch4VUSIL1jSKXTKr98YeZClojR94!/mnull&bo=uAFqAgAAAAABB*E!&rf=photolist&t=5",
        issctx:"最近脱发严重",
        time:"2021/04/27",
      },
      {
        picsrc:"http://m.qpic.cn/psc?/V53NDsF102OjyD2xUfsv1a2qsC2dRBoH/ruAMsa53pVQWN7FLK88i5puYQe816cII7vvhGo2UW8C1FyEgQrOZ0Gz*1hZhOmIkIDZVfjAndn3EwMfYrqPh5gcnUwcu0H2PpjgGCdFnNDk!/mnull&bo=7gIzAwAAAAABB*w!&rf=photolist&t=55",
        issctx:"最近脱发严重",
        time:"2021/04/27",
      },
      {
        picsrc:"http://m.qpic.cn/psc?/V53NDsF102OjyD2xUfsv1a2qsC2dRBoH/ruAMsa53pVQWN7FLK88i5vyTO1gab0*JNO0517ZHbfyH3powxGSI0dazK7pW9zHAzYQcZYTYSZzRmfUq2mnlrgRAdNH.ASs3vhsh3NwFX94!/mnull&bo=UgPuAgAAAAABB50!&rf=photolist&t=5",
        issctx:"哼！头发又双叒叕掉了",
        time:"2021/04/27",
      },
      {
        picsrc:"http://m.qpic.cn/psc?/V53NDsF102OjyD2xUfsv1a2qsC2dRBoH/ruAMsa53pVQWN7FLK88i5mn81EG49knhdznMTPlxdk2iaBPVejfO6ihubwsK7hdtY3QO2wvzmQrOTU1EoSh9iDS5Z*LW8XJQqq4WFdV9kis!/mnull&bo=uAFqAgAAAAABB*E!&rf=photolist&t=5",
        issctx:"我的头发什么时候能像",
        time:"2021/04/27",
      },
    ]
  },
      /**
   * 自定义函数--跳转到反馈界面
   */
  toFeedback:function(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },
    /**
   * 自定义函数--跳转到客服界面
   */
  toService:function(){
    wx.navigateTo({
      url: '/pages/service/service',
    })
  },
  /**
   * 自定义函数--监听页面加载
   */
  toHquality: function (options) {
    wx.navigateTo({
      url: '/pages/hquality/hquality',
    })
  },
  /**
   * 自定义函数--跳转到发布界面
   */
  toIssue:function(){
    wx.navigateTo({
      url: '/pages/issue/issue',
    })
  },
    /**
   * 自定义函数--跳转到反馈界面
   */
  toFeedback:function(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },
    /**
   * 自定义函数--跳转到客服界面
   */
  toService:function(){
    wx.navigateTo({
      url: '/pages/service/service',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      userInfo:getApp().globalData.userInfo
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

  }
})