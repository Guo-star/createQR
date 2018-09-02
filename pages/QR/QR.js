import QR from "../../utils/qrcode.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.createQR("有字符长度限制，太多扫码扫不出来")
  },

  /**
   * 二维码生成
   */
  createQR(text) {

    let size = this.setCanvasSize();
    //绘制二维码 Data.qrCodeValue
    this.createQrCode(text, "mycanvas", size.w, size.h);
  },

  /**
   * 调用插件中的draw方法，绘制二维码图片
   */
  createQrCode(url, canvasId, cavW, cavH) {
    QR.api.draw(url, canvasId, cavW, cavH, this);
    wx.hideToast()
  },

  /**
   * 适配不同屏幕大小的canvas
   */
  setCanvasSize() {
    let size = {};
    try {
      let res = wx.getSystemInfoSync();
      let scale = 500 / 750; //不同屏幕下canvas的适配比例；设计稿是750宽
      let width = res.windowWidth * scale;
      let height = width; //canvas画布为正方形
      size.w = width;
      size.h = height;
    } catch (e) {
      console.log("获取设备信息失败" + e);
    }
    return size;
  },
})