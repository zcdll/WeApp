// pages/user/user.js
var app = getApp();
Page({
  data:{
    username: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    if(app.appData.userinfo == null ){

        wx.redirectTo({url:"../login/login"})
    }else{

      this.setData({username:app.appData.userinfo.username})


    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})