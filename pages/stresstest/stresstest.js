// pages/stresstest/stresstest.js
var complete = 0;
var scorearr = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test_index:1,
    pro_index:0,
    questions: [{
      title: "因为发生了某些没有预料的事，你感到心烦。",
      trueIsChecked:false,
      falseIsChecked:false,
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你感到你不能控制生活中的重要事情。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你常常感到紧张和压力。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你常常不能成功地应付生活中有威胁性的争吵。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你觉得不能成功应付生活中所发生的重要变化。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
      ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你对把握你的个人问题没有信心。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你感到事情不是按你的意愿发展。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你发现你不能应付你必须去做的所有事情。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你不能控制生活中的一切烦恼。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你觉得你所有方面都是失败的。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "因为事情都是发生在你所能控制的范围之外，你会因此而烦恼。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
      ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你发现自己常常考虑必须完成的那些事情。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你不能控制消磨时间的方式。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "你感觉积累的大量困难不能克服。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "朋友的生日免不了花钱，你不想在这类场合出现以免花钱。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "若你刚买的新鞋穿了一天就裂口了，你会气愤、痛苦地抱怨。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "由于某件小事跟好朋友生气，大家互不相让，结果你会一个人生闷气，想忘掉这件事却忘不掉。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
      ]
    },
    {
      trueIsChecked:false,
      falseIsChecked:false,
      title: "当领导因为工作责备你时，你不会和他们吵架，一个人压抑情感。",
      content: [{
        name: '1',
        value: '是'
      },
      {
        name: '0',
        value: '否'
      },
    ]
    }
    ],
  },
    /**submitTest
   * 自定义函数--提交测试
   */
  submitTest: function (options) {
    let testscore = 0;
    for(let i in scorearr){
      testscore += parseInt(scorearr[i]);
    }
    console.log(testscore);
    if(complete < 18){
      wx.showToast({
        title: '有题目未完成！',
        icon:'none'
      })
    }else{
      wx.showModal({
        title:'提交测试',
        content:'是否确认提交测试',
        success(res){
          if(res.confirm){
              wx.navigateTo({
                url: '/pages/result/result?testscore='+testscore,
                
              })
          }
        }
      })
    }
  },
    /**
   * 自定义函数--上一题
   */
  last: function (options) {
    let pro_index = parseInt(this.data.test_index / 18 * 100);
    let test_index = this.data.test_index - 1;
    if(test_index <= 1){
      test_index = 1;
    }
    this.setData({test_index:test_index,pro_index:pro_index})
  },
   /**
   * 自定义函数--自动跳转下一题
   */
  autonext: function (value='') {
    //console.log(value)
    let pro_index = parseInt(this.data.test_index / 18 * 100);
    let test_index = this.data.test_index + 1;
    let a = test_index - 1;
    let b = test_index - 2;
    if(test_index > 18){
      test_index = 18;
    }
    this.setData({test_index:test_index,pro_index:pro_index})
    this.setData({['questions['+a+'].'+value]:false})
    this.setData({['questions['+b+'].'+value]:true})
  },
     /**
   * 自定义函数--下一题
   */
  next: function () {
    //console.log(value)
      let pro_index = parseInt(this.data.test_index / 18 * 100);
      let test_index = this.data.test_index + 1;
      if(test_index > 18){
        test_index = 18;
      }
      this.setData({test_index:test_index,pro_index:pro_index})

  },
    /**
   * 生命周期函数--用户选择是或否
   */
  radiochange: function (options) {
    //console.log(options)
    let testscore_index = options.currentTarget.dataset.testscore_index;
    complete ++;
    let value = options.detail.value;
    if(value == 'trueIsChecked'){
      scorearr[testscore_index] = 1;
    }else{
      scorearr[testscore_index] = 0;
    }
    setTimeout(() => {
      this.autonext(value);  
    }, 240);
  },
  /**radiochange
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