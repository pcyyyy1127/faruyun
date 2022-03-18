// pages/sleep.js
var playclick = 0;
var sleepdata;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   getup:'00:00',
   sleep:'00:00',
   isiamge:true,
   isSign:false,
   sleeptime:"0",
   signNum: 0,
   hour:12,
   remindyaya:`人是在碰壁 苦恼 思考的过程中塑造自我以跨越难关来不断获得自信的`,
   playsrc:"/images/play.png",
   poster:"http://m.qpic.cn/psc?/V53NDsF102OjyD2xUfsv1a2qsC2dRBoH/ruAMsa53pVQWN7FLK88i5vyTO1gab0*JNO0517ZHbfyqVgxaDAmPnTjUHGpgbs7XWCutGKbTcOwLQD2u.ktWxjDg8sFV3oyGrGeLRBeR7*Y!/mnull&bo=AAXQAgAAAAABB*c!&rf=photolist&t=5",
   sleepconlist:[
     {
       content:`只有在你工作堆积如山时，你才可能享受闲暇。当你无事可做时，空闲就变得一点也不有趣，因为空闲就是你的工作，而且是最耗人的工作。闲懒和吻一样，只有偷来的才甜美。——J.K.杰罗姆《懒人闲思录》`,
       sleepimgsrc:"http://m.qpic.cn/psc?/V53NDsF102OjyD2xUfsv1a2qsC2dRBoH/ruAMsa53pVQWN7FLK88i5tfNNLWL.g9Q7BizmTm6vDt34CVc6J4ol6ylNxupuyMDhEHIlM395YCa41XTdFTjtz1YgOSTYcqe.UCHgjTnXvE!/mnull&bo=YgTeAwAAAAABB5s!&rf=photolist&t=5"
     },
   ],
   audiolist:[
     {
      src:"https://m10.music.126.net/20210505174831/1a30b1a20c6246b6882b8ca1fedfdaac/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/4023735214/172b/dad3/3bb0/15cde936a30bf2fd8fd1a73b7ec19700.mp3",
      poster:"http://m.qpic.cn/psc?/V53NDsF102OjyD2xUfsv1a2qsC2dRBoH/ruAMsa53pVQWN7FLK88i5vyTO1gab0*JNO0517ZHbfyqVgxaDAmPnTjUHGpgbs7XWCutGKbTcOwLQD2u.ktWxjDg8sFV3oyGrGeLRBeR7*Y!/mnull&bo=AAXQAgAAAAABB*c!&rf=photolist&t=5",
      name:"A Soulmate Who Wasn't",
      author:"Jess Benko"
     }
   ]
  },
    /**
   * 自定义函数--用户滑动选择时间
   */
  bindTimeChange: function (e) {
   this.setData({
    [sleepdata]:e.detail.value
  })
  console.log(typeof(this.data.getup))
    let hour = parseInt(this.data.getup.split(":")[0]) + 24 - parseInt(this.data.sleep.split(":")[0]);
    let min = parseInt(this.data.getup.split(":")[1]) - parseInt(this.data.sleep.split(":")[1]);
    if(min < 0){
      hour --;
      min = 60 + min
    }
    this.setData({sleeptime:hour+'h'+min+'m'})
    console.log(hour, min)
  },
      /**
   * 自定义函数--用户滑动选择时间
   */
  calSleeptime: function (e) {
    let sleeptime = parseInt(this.data.getup);
    console.log(sleepdata)
   },
  /**
   * 自定义函数--用户点击取消
   */
  cancelpPicker: function (options) {
    this.setData({isClock:false})
  },
    /**
   * 自定义函数--用户点击确定
   */
  confirmPicker: function (options) {
    this.setData({isClock:false})
    /*保存用户睡眠时间数据 */
    // wx.request({
    //   url: 'url',
    //   data:{
    //     getup:this.data.getup,
    //     sleep:this.data.sleep
    //   },
    //   method:'POST',
    //   header:{
    //     'content-type': 'application/json'
    //   },
    //   success:function(res){
    //     if(res.data.status == 'success'){
    //       wx.showToast({
    //         title: '保存成功',
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
   * 自定义函数--监听页面加载
   */
  setAclock:function(e){
      sleepdata = e.currentTarget.dataset.sleepdata
      this.setData({isClock:!this.data.isClock})
  },
  SignIn: function() {
    if(this.data.isSign) {
      this.setData({signNum:this.data.signNum-1})
    } else {
      this.setData({signNum:this.data.signNum+1})
      wx.showToast({
        title: '签到成功',
      })
    }
    this.setData({isSign:!this.data.isSign})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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