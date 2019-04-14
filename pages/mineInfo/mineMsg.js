// pages/mineInfo/mineMsg.js
const app = getApp();
Page({

        /**
         * 页面的初始数据
         */
        data: {
                locPageHeaderBgImgUrl: null,
                pendingPayment:false,//待付款1
                toBeDelivered: false,//待发货2
                pendingReceipt:false,//待收货3
                toBeEvaluated:false,//待评价4
                completed:false,//已完成5

                becomeAgent:false,//我的资产6
                shippingAddress:false,//收货地址7
                feedBack:false,//意见反馈8
                aboutUs:false,//关于我们9
                contactCustomerService:false, //联系客服10
                currentExhibitionData:false,
                upImgArr: [],
                inputCharacterNum:0,
                personName:'',//姓名
                phoneNum:'',//电话
                detailAddress:'',//地址
                receiverMsg:{}//收货信息

        },
        /**
      * 生命周期函数--监听页面加载
      */
        onLoad: function (options) {
                this.setData({
                        locPageHeaderBgImgUrl: app.globalData.pageHeaderBgImgUrl,
                        receiverMsg:app.globalData.receiverInfo
                })
                let currentType = options.tagtype;
                
                switch (currentType){
                        case 'payment':
                                this.setData({
                                        pendingPayment: true
                                });
                                break;
                        case 'deliverGoods':
                                this.setData({
                                        toBeDelivered: true
                                });
                                break;
                        case 'receiveGoods':
                                this.setData({
                                        pendingReceipt: true
                                });
                                break;
                        case 'evaluate':
                                this.setData({
                                        toBeEvaluated: true
                                });
                                break;
                        case 'complete':
                                this.setData({
                                        completed: true
                                });
                                break;

                        case 'assets':
                                this.setData({
                                        becomeAgent: true
                                });
                                break;
                        case 'address':
                                this.setData({
                                        shippingAddress: true
                                });
                                break;
                        case 'opinion':
                                this.setData({
                                        feedBack: true
                                });
                                break;
                        case 'aboutUs':
                                this.setData({
                                        aboutUs: true
                                });
                                break;
                }
        },
        // 保存收货人姓名
        personNameInput:function(e){
                let that = this;
                that.setData({
                        personName: e.detail.value
                })
                // console.log(e.detail.value)
        },

        // 保存手机号码
        personPhoneNumInput: function (e) {
                let that = this;
                that.setData({
                        phoneNum: e.detail.value
                })
                // console.log(e.detail.value)
        },
        // 保存详细地址
        detailAddressInput: function (e) {
                let that = this;
                that.setData({
                        detailAddress: e.detail.value
                })
                // console.log(e.detail.value)
        },

        // 保存收货地址信息
        saveAddressMsg:function(){
                let nameStr = 'receiverMsg.name';
                let phoneStr = 'receiverMsg.phone';
                let addressStr = 'receiverMsg.address';
                this.setData({
                        [nameStr]: this.data.personName,
                        [phoneStr]: this.data.phoneNum,
                        [addressStr]: this.data.detailAddress
                })
                app.globalData.receiverInfo = this.data.receiverMsg;
                wx.showToast({
                        title: '保存成功',
                        icon: 'none',
                        duration: 2000
                });
                // 保存后延时返回上以页面
                setTimeout(function(){
                        wx.navigateBack({
                                delta: 1
                        });
                },2000);
        },

        // 意见反馈字符输入计数
        acountNum:function(e){
                let that = this;
                let inputChaNum = e.detail.value.length;
                that.setData({
                        inputCharacterNum: inputChaNum
                })
        },

        // 选择上传的照片
        chooseImg:function(){
                var that = this;
                if (this.data.upImgArr.length < 3) {
                        wx.chooseImage({
                                sizeType: ['original', 'compressed'],
                                success: function (res) {
                                        that.setData({
                                                upImgArr: that.data.upImgArr.concat(res.tempFilePaths)
                                        })
                                }
                        })
                } else {
                        wx.showToast({
                                title: '最多上传三张图片',
                                icon: 'loading',
                                duration: 2000
                        });
                }
        },

        // 返回上一页面
        backToAheadPage: function () {
                wx.navigateBack({
                        delta: 1
                })
        },
        aaa:function(){
                // wx.previewImage({
                //         current: 'https://img.fetow.com/Public/Index/images/shewm.jpg', // 当前显示图片的http链接
                //         urls: ['https://img.fetow.com/Public/Index/images/shewm.jpg'] // 需要预览的图片http链接列表
                // })

                wx.showActionSheet({
                        itemList: ['A', 'B', 'C'],
                        success(res) {
                                console.log(res.tapIndex)
                        },
                        fail(res) {
                                console.log(res.errMsg)
                        }
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