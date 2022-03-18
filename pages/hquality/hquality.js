// pages/hquality/hquality.js
var index = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOption:true,
    opisfalse:true,
    isOption:false,
    title:'请选择您的发质',
    htitle: "中性发质",
    hquality:['中性发质','油性发质','干性发质','受损发质','混合性发质','敏感型发质'],
    hctxlist:[
      `<div>洗发建议：两天一次</div>
      <div>(1)	一定要使用护发素.</div>
      <div>(2)	建议中性发质的女生用冷风吹干头发，相较于热风，冷风吹干发丝，能够保持发丝的水分，减少干枯毛糙的效果!</div>
      <div>(3)	注意头皮保养，洗发时多进行头皮按摩，注意使用护发素，定期使用发膜</div>
      <div>(4)	护理：选用温和而含水份量大的产品</div>`,
      `<div>洗发建议：每天都要清洗头发</div>
      <div>切记不要：</div>
      <div>1、大力梳擦，按摩头皮。 </div>
      <div>2)	用太强洗发剂，要用专有平衡油脂的洗发产品。 </div>
      <div>建议： </div>
      <div>(1)	不要用过热水温洗发，以免刺激油脂分泌;</div>
      <div> (2)	使用护发素或是发膜，但不要涂抹在头皮上; </div>
      <div>(3)	注意清洁头皮，所以选择洗发水的时候，注意选择清洁度较好的洗发水</div>
      <div>(4)	使用酸性洗发水有效清洁，纯净护理</div>`,
      `洗发建议：一周洗1—2次为宜 </div>
      <div>1)	洗发水是保湿锁水，并且去除头皮屑的</div>
      <div> 2)	护发素不能缺少，时间充足的女生，尽量使用两次护发素，每次停留时间要五分钟以。</div>
      <div>3)	定期还要去理发店做护理，最大程度的为发丝提供营养，增强韧性。</div>
      <div>4)	坚决抵制热风吹干的，要进行冷风吹干，后续再涂抹一些发膜来保护发丝，也能够很大程度的减少头发的掉落量!</div>
      <div>5)	建议：使用乌黑柔亮型、负离子、游离子焗油型洗护产品</div>
      <div>6)	洗发后，最好涂一些头油或发脂等油性护理液加以保护，要用干性头发专用的洗发水。 </div>
      <div>7)	选用滋养效果较佳的洗发露，用鬃毛梳均匀刷头皮刺激油脂分泌，注意头皮保养。</div>`,
      `洗发建议：两天一次</div>
      <div> 1.在用洗发水清洁头皮时应先将头皮和发丝用温水全部浸湿。 </div>
      <div>⒉将洗发产品在掌心揉搓均匀并起泡，再涂抹于头皮用指腹按摩，这样可以使清洁产品轻柔均匀 </div>
      <div>3.选择含有精油配方的洗发产品清洁头发。</div>
      <div>4.洗发后，可以选择天然草本成分的护法精华涂抹在湿发上，为头发补充营养、水分</div>`,
      `洗发建议：两至三天清洗一次</div>
      <div>1.选用保湿型护发素，注意头部按摩;</div>
      <div>2.尽量减少染发烫发的频率，让头发得到修养。</div>
      <div>3.对于发尾干枯分叉，我们平日洗头时可选用含硅油的护发素抹在发梢，</div>
      <div>4.选用含有植物成分的综合洗发水，</div>
      <div>5.洗发时水温不宜过高，减少油脂分泌。</div>
      `,
      `
      <div> 1.集中修护发梢干燥的部分，避免头发开叉或折断。</div>
      <div>⒉停止烫染，修剪干枯发干，让头发得到充分的缓解。</div>
      <div> 3.选用保湿型护发素，并在洗发时注意对头部的按摩，，使用保湿效果佳的洗发露及水溶性护发乳，以保证营养成分和水分的有效吸收。</div>
      <div> 4.改善个人饮食，少食油腻食品，增加黑色食品的摄入量。</div>
      <div>5.修护干燥毛发，避免长期暴晒在阳光下。</div>
      `,
    ]
  },
      /**
   * 自定义函数--用户点击取消
   */
  cancelpPicker: function (options) {
    this.setData({isOption:false})
  },
    /**
   * 自定义函数--用户点击确定
   */
  confirmPicker: function (options) {
    this.setData({opisfalse:false,isOption:false,title:'您的发质是'})
    this.setData({hctx:this.data.hctxlist[index],htitle:this.data.hquality[index]})
    index = 0;
    /*保存用户发质数据 */
    // wx.request({
    //   url: 'url',
    //   data:{
    //     hctx:this.data.hctx,
    //     htitle:this.data.htitle
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
   * 自定义函数--用户滑动picker选择发质
   */
  bindChange: function (options) {
    index = options.detail.value[0];
  },
  /**
   * 自定义函数--用户点击选择发质
   */
  option: function (options) {
    this.setData({isOption:true})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      userInfo:getApp().globalData.userInfo
    })
    this.setData({
      hctx:this.data.hctxlist[0],
      htitle:this.data.hquality[0],
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