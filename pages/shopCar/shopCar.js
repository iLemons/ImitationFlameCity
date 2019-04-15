// pages/shopCar/shopCar.js
const app = getApp()
Page({
        /**
         * 页面的初始数据
         */
        data: {
                locPageHeaderBgImgUrl: null,
                hasSelectedNum:0,
                globCartDatas : null,
                locCartDatas : null,
                locWanaBuyArr: null,
                totalMoney:'0.00',
                totalGoods:0,
                checkedAll:false
        },

        /**
        * 生命周期函数--监听页面加载
        */
        onLoad: function (options) {
                let that = this;
                that.refreshData(that);
                // console.log(this.data.locWanaBuyArr);
                that.setData({
                        locPageHeaderBgImgUrl: app.globalData.pageHeaderBgImgUrl
                })
                console.log(app.globalData.wanaBuyArr)
        },
        // 去往结算页面
        goToconfirmOfOrderPage:function(){
                let goodsNum = 0;
                for (let tempIndex in this.data.locWanaBuyArr){
                        if (this.data.locWanaBuyArr[tempIndex].isSelected){
                                goodsNum++
                        }
                }
                if (goodsNum == 0){
                        wx.showToast({
                                title: "您未选中商品！！！",
                                icon:"none",
                                duration:2000
                        })
                }else{
                        wx.navigateTo({
                                url: '/pages/confirmOfOrder/confirmOfOrder?buyRightNow=0',
                        })
                }
        },

        // 刷新数据
        refreshData:function(that){
                
                that.setData({
                        hasSelectedNum: app.globalData.wanaBuyArr.length,
                        locWanaBuyArr: app.globalData.wanaBuyArr
                })
                that.acountPrice();
                if (that.data.hasSelectedNum == that.data.locWanaBuyArr.length) {
                        that.setData({
                                checkedAll: true
                        })
                } else {
                        that.setData({
                                checkedAll: false
                        })
                }
        },
        // 购物车为空时显示页面，点击“去逛逛”跳转到首页
        goShopping:function(){
                wx.reLaunch({
                        url: '../index/index',
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
                let that = this;
                that.refreshData(that);
        },
        // 单选框点击事件
        alterStatus:function(e){
                let that = this;
                let currenttEleIndex = e.currentTarget.dataset.index;
                let currentEleNum = that.data.locWanaBuyArr[currenttEleIndex].wnnaBuyNum;
                let currentSelectStatus = e.currentTarget.dataset.isselected;
                let str = 'locWanaBuyArr[' + currenttEleIndex + '].isSelected';
                if (currentEleNum ==0){
                        that.setData({
                                [str]: false,
                        })
                } else if (currentSelectStatus){
                        that.setData({
                                [str]:false,
                                hasSelectedNum: that.data.hasSelectedNum-1
                        });
                }else{
                        that.setData({
                                [str]:true,
                                hasSelectedNum: that.data.hasSelectedNum + 1
                        });
                } 
                that.acountPrice();
                that.isSelectedAll();
        },


        // 计算价格
        acountPrice:function(){
                let that = this;
                let goodNum = 0;
                let priceSum = 0;
                let cartGoods = this.data.locWanaBuyArr;
                // console.log(cartGoods[0].isSelected);
                for (let temp in cartGoods) { 
                        if (cartGoods[temp].isSelected){
                                goodNum += cartGoods[temp].wnnaBuyNum;
                                priceSum += cartGoods[temp].wnnaBuyNum * cartGoods[temp].goodPrice;
                        }
                };

                this.setData({
                        totalGoods: goodNum,
                        totalMoney: Number(priceSum).toFixed(2)
                })
        },

        // 减少商品数量
        goodNumReduce:function(e){
                let that = this;
                let currentIndex = e.currentTarget.dataset.index;
                // 目前想要购买的数量
                let currentGoodWnnaNum = that.data.locWanaBuyArr[currentIndex].wnnaBuyNum;
                // 勾选框目前的选中状态
                let currentSelectStatus = that.data.locWanaBuyArr[currentIndex].isSelected;
                // 为修改数据做准备
                let str1 = 'locWanaBuyArr[' + currentIndex + '].wnnaBuyNum';
                let str2 = 'locWanaBuyArr[' + currentIndex + '].isSelected';
                // 点击减少按钮后，欲购数量-1
                currentGoodWnnaNum -=1; 
                // 若预购商品数量小于0时重置为0
                if (currentGoodWnnaNum <= 0){ 
                        currentGoodWnnaNum = 0;
                        // 判断这次点击时，勾选框是否被选中
                        if (currentSelectStatus){
                                // 被选中数量-1
                                that.data.hasSelectedNum -= 1;
                                that.setData({
                                        [str2]:false,
                                        hasSelectedNum: that.data.hasSelectedNum
                                })
                        }
                }

                that.setData({
                        [str1]: currentGoodWnnaNum
                });
                that.acountPrice();
                that.isSelectedAll();

        },

        // 增加商品数量
        goodNumAdd:function(e){
                let that = this;
                // 获取元素下标
                let currentIndex = e.currentTarget.dataset.index;
                // 勾选框目前的选中状态
                let currentSelectStatus = that.data.locWanaBuyArr[currentIndex].isSelected;
                // 获取欲购数量
                let currentGoodWnnaNum = that.data.locWanaBuyArr[currentIndex].wnnaBuyNum;
                // 为修改数据做准备
                let str = 'locWanaBuyArr[' + currentIndex + '].wnnaBuyNum';
                let str2 = 'locWanaBuyArr[' + currentIndex + '].isSelected';
                // 函数调用后欲购数量+1
                currentGoodWnnaNum += 1;
                // 获取库存数量
                let currentGoodStockNum = that.data.locWanaBuyArr[currentIndex].stockNum;
                // 若欲购数大于库存数弹出提示
                if (currentGoodWnnaNum >= currentGoodStockNum) {
                        currentGoodWnnaNum = currentGoodStockNum;
                        wx.showToast({
                                title: '库存已经没有更多了！',
                                icon: 'none',
                                image: '',
                                duration: 1500,
                                mask: true,
                                success: function(res) {},
                                fail: function(res) {},
                                complete: function(res) {},
                        })
                };
                if (!currentSelectStatus){
                        that.setData({
                                [str]: currentGoodWnnaNum,
                                [str2]:true,
                                hasSelectedNum:that.data.hasSelectedNum+1
                        })
                }else{
                        that.setData({
                                [str]: currentGoodWnnaNum
                        })
                }
                that.acountPrice();
                that.isSelectedAll();
        },

        // 是否已经全选
        isSelectedAll:function(){
                let that = this;
                let arrLength = that.data.locWanaBuyArr.length;
                console.log(arrLength +'   '+that.data.hasSelectedNum);
                if (that.data.hasSelectedNum == arrLength && arrLength!=0 ) {
                        that.setData({
                                checkedAll: true
                        })
                } else {
                        that.setData({
                                checkedAll: false
                        })
                }
        },

        // 全选商品
        selectAll:function(){
                let that = this;
                let checkedAll = !that.data.checkedAll;
                let cartGoods = that.data.locWanaBuyArr;
                if(checkedAll){
                        for (let temp in cartGoods){
                                let str = 'locWanaBuyArr[' + temp + '].isSelected';
                                that.setData({
                                        [str]: true
                                })
                        };
                        that.setData({
                                checkedAll:true
                        })
                }else{
                        console.log(22);
                        for (let temp in cartGoods) {
                                let str = 'locWanaBuyArr[' + temp + '].isSelected';
                                that.setData({
                                        [str]: false
                                })
                        };
                        that.setData({
                                checkedAll: false
                        })

                };
                that.acountPrice();
               
            
        },
        // 移除商品函数
        removeGood:function(e){
                let that = this;
                let currentIndex = e.currentTarget.dataset.index;
                wx.showModal({
                        title: '提示信息',
                        content: '是否移除选中商品？',
                        success(res) {
                                if (res.confirm) {
                                        that.removeGoodFn(that,currentIndex);
                                } else if (res.cancel) {
                                }
                        }
                })
        },


        // 移除商品方法
        removeGoodFn: function (that,currentIndex){
                // let that = this;
                // let currentIndex = e.currentTarget.dataset.index;
                if(that.data.locWanaBuyArr[currentIndex].isSelected){
                        that.setData({
                                hasSelectedNum: that.data.hasSelectedNum - 1
                        })
                }else{
                        that.setData({
                                hasSelectedNum: that.data.hasSelectedNum
                        })
                }
                that.data.locWanaBuyArr.splice(currentIndex,1);
                that.setData({
                        locWanaBuyArr: that.data.locWanaBuyArr
                });
                that.isSelectedAll();
                that.acountPrice();
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