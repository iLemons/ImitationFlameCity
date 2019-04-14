// pages/confirmOfOrder/confirmOfOrder.js
const app = getApp();
Page({

        /**
         * 页面的初始数据
         */
        data: {
                locPageHeaderBgImgUrl: null,
                locreciverInfo:null,
                totalPrice:0
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                // 判断数据是有哪个页面过来
                let dataType = options.buyRightNow
                if (options.buyRightNow){
                        this.setData({
                                locWanaBuyArr: app.globalData.buyRightNowArr
                        })
                }else{
                        this.setData({
                                locWanaBuyArr: app.globalData.wanaBuyArr
                        })
                }
                // 获取并判断收货人信息是否存在
                let temoReciverInfo = app.globalData.receiverInfo;
                if (temoReciverInfo.name){
                        this.setData({
                                locreciverInfo: temoReciverInfo
                        })
                }else{
                        this.setData({
                                locreciverInfo: false
                        })
                }
                // 计算商品价格总和
                for(let index in this.data.locWanaBuyArr){
                        var  tempPrice = 0
                        tempPrice += this.data.locWanaBuyArr[index].goodPrice * this.data.locWanaBuyArr[index].wnnaBuyNum;
                        console.log(tempPrice);
                }
                

                this.setData({
                        locPageHeaderBgImgUrl: app.globalData.pageHeaderBgImgUrl,
                        totalPrice: tempPrice
                });
        },
        // 返回上一个页面
        backToAheadPage:function(){
                app.globalData.buyRightNowArr=[];
                wx.navigateBack({
                        delta:1
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