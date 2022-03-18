// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbackcon:"",
  },

  /**
   * 自定义函数--用户提交反馈
   */
  submitFeedback: function (e) {
    wx.showToast({
      title: '提交成功',
    })
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      })
    }, 500);

    //提交用户的反馈信息字段名：feedbackcon
    // wx.request({
    //   url: 'url',
    //   data:{
    //     feedbackcon:this.data.feedbackcon
    //   },
    //   method:'POST',
    //   header:{
    //     'content-type': 'application/json'
    //   },
    //   success:function(res){
    //     if(res.data.status == 'success'){
    //       wx.showToast({
    //         title: '提交成功',
    //       })
    //       wx.navigateBack({
    //         delta: 0,
    //       })
    //     }else{
    //       wx.showToast({
    //         title:  res.data.data.errorMsg,
    //       })
    //     }
    //   }
    // })
    
  },
    /**
   * 自定义函数--得到用户反馈信息
   */
  getFeedback: function (e) {
    //console.log(e.detail.value)
    this.setData({feedbackcon:e.detail.value})
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

  }
})