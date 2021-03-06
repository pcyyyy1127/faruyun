// pages/result/result.js
var testscore = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pro_percent:0,
    stress_index:0,
    resultlist:[
      {
        id:0,
        title:"正常范围",
        scontent:`你能应付生活中的许多事情，但有时也会有些烦恼，这是正常的。`,
        fcontent:`日常中的压力大多能被你化解，但是有时候也可以通过音乐、美食、风景或者其他能够使你放松的娱乐方式解放自己。毕竟生活的主题应该是快乐呀。  `
      },
      {
        id:1,
        title:"轻微压力",
        scontent:`你有轻度的心理压力，虽然常会体验到不必要的烦恼，但你基本能处理生活中的问题。压力伴随烦恼，这是正常的，毕竟没有一个人是完美的，所以有时候我们可以对自己要求放低，或者改变我们的思维，调整心态让自己轻松一下，再继续拼搏。旅途中，虽然辛苦但是生活还在等着继续呀。压力太大，身体太累的时候，请停下来休息一下吧`,
        fcontent:`<div> 1、吃甜食
        吃甜食能让我们更开心，不妨准备些喜欢吃的小甜点，水果等。不开心的时候吃颗否蕉也许就会好很多。一些小蛋糕啊，香蕉啊等都是不错的选择，选择自己喜欢的甜食就好。pS:牙不好的同学，请少吃啊，或者采用其他方法。毕竟身体健康最重要不是。</div><br>
        <div> 2、旅游
     找个周未或者请假，背上背包，投怀于大自然，当你看到一颗石缝里的蓬勃生长的小草，粗犷安详的参天大树，品莹剔透的晨露，浩渺的宇宙，不知还会不会在意自己的儿女情长。</div><br>
     <div>3、运动
     找个自己喜欢的运动，疯传的玩一把，个人觉得打乒乓球就不错，玩的时候，所有注意力都在小球上，敏捷迅速的打来打去，想不忘掉压力都难。把不开心的情绪，用打找个小球发泄出来。</div><br>
     <div>4、跟朋友谈心
     找个知心朋友，买上两罐啤酒，在买点炸鸡，边吃边聊，让朋友倾听你的心思，安慰你的心灵，如果不想让亲密知道，可以找个愿意聊天的网友，但是不要见面哦，为了安全考虑，在网上聊聊，倾诉倾诉就好。</div><br>
     <div>5、去唱歌
     唱歌也是一个很好的宣泄情绪的方法，失恋的人，唱着悲伤的歌也许能流出眼泪，眼泪流出来了也午心情也好了，压力大可以唱激情澎湃的歌，也可以是鼓舞士气的歌，总之，自己喜欢的就好。</div>  `
      },     
       {
        id:2,
        title:"需要缓解",
        scontent:`你已经在承受巨大的心理压力，你不能处理生活中的许多问题，因此是你紧张、不安并影响到你的生活身心健康。你应该尽快改变这种情况，学会调节自己的心情，保持轻松愉快的心境，否则会使你学习生活更加糟糕，不能正常进行。`,
        fcontent:`<div> 1、向外释放
        "宣泄法"，是缓解压力的一项有效措施指，是指把自己的动机、想法、态度和欲望投射到别人或外界的事物上的一种方式，投射出去的往往是被自己压抑的东西。你可以找个悲伤或者刺激的影片，哭一下，尖叫一下，把自己压在内心的情绪通过这种方式渲泄出来。</div><br>
        <div> 2、谈心聊天
        你遇到不顺心和烦恼的事后，不可把痛苦埋藏在心底，而是将这些烦恼倾诉给你所信赖的人、头脑冷静的人，包括你的父母、领导、丈夫、妻子、挚友、老师、同事等等。</div><br>
        <div>3、自言自语
        当一个人坐在某处旁若无人地自言自语或是大喊数声时人们总觉得这个人发“神经病”，由于这种错误的认识而误导了很多人不用这种健康的调节方法。其实，自我交谈也可以发泄心中的不满、郁闷、愤怒、悲伤等不良情绪，它有助于消除紧张，恢复心理平衡。</div><br>
       <div> 4、运动宣泄
        研究表明，心情阻丧的原因是脑神经元中缺乏荷尔蒙。运动时，荷尔蒙增加，运动后，荷尔蒙分泌量还能增高，所以，运动能消除人的沮丧心理。</div>  `
      },
    ]
  },
    /**
   * 自定义函数--绘制canvas圆形进度条
   */
  drawProgress: function(pro){
    //画圆形背景
    var ctx = wx.createCanvasContext('canvasProgressbg',this)
    ctx.setLineWidth(6);
    ctx.setStrokeStyle('#eeeeee'); 
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(90, 90, 50, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.draw();
    //画圆形进度条
    var ctx = wx.createCanvasContext('canvasProgress',this)
    ctx.setLineWidth(6);
    ctx.setStrokeStyle('#9C5052'); 
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(90, 90, 50,1.5*Math.PI, pro * Math.PI, false);
    ctx.stroke();
    ctx.draw();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    testscore = options.testscore;
   // console.log(testscore);
   let pro_percent = parseInt(testscore / 18 * 100);
   this.setData({pro_percent:pro_percent})
    if(testscore > 14){
      this.setData({ stress_index:2  })
    }else if(testscore < 7){
      this.setData({ stress_index:0  })
    }else{
      this.setData({ stress_index:1  })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let pro = testscore / 18 * 2 - 0.49;
    console.log(pro)
    if(pro == 1.51)
      pro = -0.5;
    this.drawProgress(pro);
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
    /**
   * 页面关闭
   */
  onUnload:function(){
    wx.navigateBack({
      delta: 3,
    })
  }
})