// pages/mine/mine.js
const app = getApp()

Page({

        /**
         * 页面的初始数据
         */
        data: {
                locPageHeaderBgImgUrl: null,
                userInfo: {},
                hasUserInfo:false,
                contactCustomerService:false,
                canIUse: wx.canIUse('button.open-type.getUserInfo'),
                tradeMenuInfo: [
                        {
                                "title": "待付款",
                                "imgUrl": "http://www.hs1105.com/static/home/images/l-1.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "payment"
                        },
                        {
                                "title": "待发货",
                                "imgUrl": "http://www.hs1105.com/static/home/images/l-2.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "deliverGoods"
                        },
                        {
                                "title": "待收货",
                                "imgUrl": "http://www.hs1105.com/static/home/images/l-3.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "receiveGoods"
                        },
                        {
                                "title": "待评价",
                                "imgUrl": "http://www.hs1105.com/static/home/images/l-3.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "evaluate"
                        },
                        {
                                "title": "已完成",
                                "imgUrl": "http://www.hs1105.com/static/home/images/l-4.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "complete"
                        }
                ],
                openUrl:'http://www.hs1105.com/static/home/css/css_public/open.png',
                otherMsgData:[
                        {
                                "title":"我的资产",
                                "classTag":'',
                                "imgUrl":"http://www.hs1105.com/static/home/images/asset.png",
                                "bindtapFn":"navigateToMinedetail",
                                "tagNum":"assets"
                        },
                        {
                                "title": "收货地址",
                                "classTag": 1,
                                "imgUrl": "http://www.hs1105.com/static/home/images/m-07.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "address"
                        },
                        {
                                "title": "意见反馈",
                                "classTag": '',
                                "imgUrl": "http://www.hs1105.com/static/home/images/m-08.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "opinion"
                                
                        },
                        {
                                "title": "关于我们",
                                "classTag": '',
                                "imgUrl": "http://www.hs1105.com/static/home/images/m-09.png",
                                "bindtapFn": "navigateToMinedetail",
                                "tagNum": "aboutUs"
                        },
                        {
                                "title": "联系客服",
                                "classTag": 1,
                                "imgUrl": "http://www.hs1105.com/static/home/images/m-10.png",
                                "bindtapFn": "showMask",
                                "tagNum": "customerService"
                        }
                ]

        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function () {
                this.setData({
                        locPageHeaderBgImgUrl: app.globalData.pageHeaderBgImgUrl
                })
                // 获取用户信息
                if (app.globalData.userInfo) {
                        this.setData({
                                userInfo: app.globalData.userInfo,
                                hasUserInfo: true
                        })
                } else if (this.data.canIUse) {
                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        app.userInfoReadyCallback = res => {
                                this.setData({
                                        userInfo: res.userInfo,
                                        hasUserInfo: true
                                });
                        }
                } else {
                        // 在没有 open-type=getUserInfo 版本的兼容处理
                        wx.getUserInfo({
                                success: res => {
                                        app.globalData.userInfo = res.userInfo
                                        this.setData({
                                                userInfo: res.userInfo,
                                                hasUserInfo: true
                                        })
                                }
                        })
                }
        },
        showMask:function(){
                this.setData({
                        contactCustomerService:true
                })
        },
        // 点击进入对应行情页面
        navigateToMinedetail:function(e){
                let that = this;
                console.log(e.currentTarget.dataset.tagtype);
                let currentEleType = e.currentTarget.dataset.tagtype;
                wx.navigateTo({
                        url: '../mineInfo/mineMsg?tagtype=' + currentEleType,
                })
        },
        // 点击遮罩层隐藏模态框
        hideMask:function(){
                this.setData({
                        contactCustomerService:false
                })
        },



        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
                // console.log(this.data.userInfo);
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