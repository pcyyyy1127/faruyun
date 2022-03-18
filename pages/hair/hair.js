// pages/hair/hair.js
var daysdata = [30,10,50,30,100,60];
var ballY = 0;
var today = 0;
function preData(){
  for(let i = 0; i < daysdata.length; i ++){
    if(daysdata[i] == 0){
      daysdata[i] =  parseInt((1 / (210*8))*10000);
    }else{
      daysdata[i] = parseInt((1 / (daysdata[i]*8))*10000);
    }
    console.log(daysdata[i])
  }
};
preData();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowConfirm:true,
    hairamount:0,
    isball:true,
  },
     /**
   * 自定义函数--绘制canvas折线
   */
  drawline: function(){
    var ctx = wx.createCanvasContext('canvasLine',this);
    ctx.setLineWidth(2);
    var grd=ctx.createLinearGradient(0,0,200,0);
    var grd1=ctx.createLinearGradient(150,50,200,160);
    ctx.clearRect(0,0,350,220);
    ctx.setFillStyle(grd1)
    grd.addColorStop(1,'#913D3F');
    grd.addColorStop(0,'#FF9455');
    grd1.addColorStop(0,'#D5B5B6');
    grd1.addColorStop(1,'#ffffff');
    ctx.setStrokeStyle(grd); 
    ctx.setLineCap('round');
    ctx.beginPath();
    /**开始绘制折现 */
    ctx.moveTo(0,210);
    ctx.lineTo(42,daysdata[0]);
    ctx.lineTo(82,daysdata[1]);
    ctx.lineTo(122,daysdata[2]);
    ctx.lineTo(162,daysdata[3]);
    ctx.lineTo(222,daysdata[4]);
    ctx.lineTo(262,daysdata[5]);
    ctx.lineTo(302,today);
    ctx.setFontSize(20);
    ctx.fillText(this.data.hairamount,308,today)
    ctx.stroke();
    ctx.draw();
  },
    /**
   * 自定义函数--动画小球
   */
  myball:function(){
    this.animate('#ball2', [
      { translateX: 0.0,translateY:0.0 },
      { translateX: -55.0,translateY:50.0 },
      { translateX: -55.0,translateY:50.0 },
      { translateX: 78.0,translateY:ballY },
      ], 2000, function () {
        this.clearAnimation('#ball2', { backgroundColor: true, width: true }, function () {
          
        })
    }.bind(this))
  },
  /**
   * 自定义函数--得到用户输入值
   */
  
  confirmAcceptance: function () {
      this.setData({
        isShowConfirm:false,
      })
      //console.log(amount);
      this.animate('#ball1', [
        { translateX: -4.0,width:'20rpx'},
        { translateX: 0.0,width:'250rpx'},
        ], 700, function () {
          this.setData({isball:false});
          this.myball();
          this.clearAnimation('#ball1', { backgroundColor: true, width: true }, function () {
            
          })
      }.bind(this))
      let y = this.data.hairamount;
      today = parseInt((1 / (y * 8))*10000);
      ballY = today + 194;
      console.log(today)
      this.drawline();
  },
    /**
   * 自定义函数--获取用户输入值
   */
  
  setValue: function (e) {
      this.setData({
          hairamount:e.detail.value,
      })
  },
  myanimation:function(){
    
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