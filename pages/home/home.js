
// 获取应用实例

Page({
  data: {
    sciencelist:[],
   
  },
  //js里的事件
mydata(e){ //可获取日历点击事件
  let data = e.detail.data
  console.log(data)
},
  todetail:function(e){
    console.log("ccccccc"),
    console.log(e);
    var that = this
    //拿到点击的index下标
    var index = e.currentTarget.dataset.index
    console.log(that.data.sciencelist[index]);
    //将对象转为string
    getApp().globalData.article=that.data.sciencelist[index];

    wx.navigateTo({
      url: '/pages/science/science',
    })
  },

  wenzhen:function(){
    wx.navigateTo({
      url: '../inquriy/inquriy',
    })
  },

  onLoad:function(){
    var that=this;
    wx.request({
      url: 'http://39.103.234.231:8080/getTodayArticle',
      
      method:"GET",
      
      success: function (result){
        console.log(result);
        that.setData({
          sciencelist:result.data.data.todayArticle
        })
        if(result.data.status=="success"){
         
        }else{
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '获取每日科普失败',
          })
        }
      
      }
      
     
      

    })

  }

  


  

})
