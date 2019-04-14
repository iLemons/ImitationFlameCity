// pages/goodDetail/goodDetail.js
const app = getApp();

Page({

        /**
         * 页面的初始数据
         */
        data: {
                locPageHeaderBgImgUrl:null,
                imgUrls:[
                        '../../images/lighter/lh01.png',
                        '../../images/detail/detailBannerImg/banner02.png',
                        '../../images/detail/detailBannerImg/banner03.png'
                ],
                chouseSpecBoxStatus:false,
                buyRightNowStatus:false,
                currentSwiper: 0,
                indicatorColor: '#DEDCDD',
                indicatorActiveColor: '#B73E23',
                autoplay: true,
                interval: 5000,
                duration: 400,
                circular: true,
                locGoodDetailData:null,
                // 当前页面展示的数据
                currentExhibitionData:true,
                currentExhibitionData123:true,
                privateCurrentGoodDataArr:true,
                currentArr:[],
                isCurrentIndex:0,
                // 用于记录商品选择数
                countNum:1,
                currentGoodSpecId:1,
                goodIntroduceData:[
                        "../../images/detail/introduceImg/1551506487-4573.png",
                        "../../images/detail/introduceImg/1551506489-4475.png",
                        "../../images/detail/introduceImg/1551506489-4013.png"
                ]
        },
        // 回到顶部方法
        scrollTop: function () {
                wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 300
                });
        },
        //   swiper切换调用
        swiperChange: function (e) {
                // console.log(e.detail);
                this.setData({
                        currentSwiper: e.detail.current
                })

        },
        // 返回上一页面
        backToAheadPage:function(){
                wx.navigateBack({
                        delta: 1
                })
        },


        //点击mask盒子隐藏规格选择页面
                // 加入购物车模态框隐藏
        chouseSpecBoxHide:function(){
                let that = this;
                that.setData({
                        chouseSpecBoxStatus:false
                })
        },
        // 立即购买模态框隐藏
        buyRightNowBoxHide:function(){
                let that = this;
                that.setData({
                        buyRightNowStatus: false
                })
        },
                // 加入购物车模态框显示
        chouseSpecBoxShow:function(){
                let taht = this;
                taht.setData({
                        chouseSpecBoxStatus:true
                })
        },
                // 立即购买模态框显示
        buyRightNowBoxShow:function(){
                let taht = this;
                taht.setData({
                        buyRightNowStatus: true
                })
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                 
                this.setData({
                        locGoodDetailData: app.globalData.cartDatas,
                        locPageHeaderBgImgUrl: app.globalData.pageHeaderBgImgUrl
                });
                let opIndex = options.goodIdCard - 1;
                // 此处简单的赋值为浅拷贝---先将数据转化为字符串，在转换json对象
                // 将当前的商品信息转化为字符串
                let aaa = [];
                aaa.push(this.data.locGoodDetailData[opIndex]);

                this.setData({
                        currentExhibitionData123: aaa
                })
                console.log(this.data.currentExhibitionData123);
                let privateCurrentGoodDatas = JSON.stringify(this.data.locGoodDetailData[opIndex]);
                let privateCurrentArr = JSON.parse(privateCurrentGoodDatas);
                this.data.currentArr.push(privateCurrentArr);
                this.setData({
                        currentExhibitionData: this.data.currentArr
                })
     
        },
        // 选择商品类别
        chooseThisSpec:function(e){
                let that = this;
                let theEleIndex = e.currentTarget.dataset.currentindex;
                // console.log(e.currentTarget.dataset.currentindex);
                that.setData({
                        isCurrentIndex: theEleIndex
                })
        },

        // 将选择商品加入购物车
        addToCartArr:function(){
                let that = this;
                // 调用加入购物车方法
                that.addToCartArrFn(that);
                // 点击添加按钮后关闭模态框
                that.setData({
                        chouseSpecBoxStatus: false
                });
                // 弹出提示：加入成功
                wx.showToast({
                        title: '成功添入购物车',
                        icon: 'none',
                        duration: 2000
                })

        },
        // 将选择商品加入购物车函数
        addToCartArrFn: function (that) {
                // 点击时修改数组中欲购商品数量
                let str = 'currentExhibitionData[0].wnnaBuyNum';
                this.setData({
                        [str]: that.data.countNum,
                        // 本地欲购数重置为1
                        countNum: 1
                })
                let query = wx.createSelectorQuery();
                let fathat = that;
                // 获取到当前被选中的商品类别
                query.select('.goodSpecBox .active').boundingClientRect(function (res) {
                        let specIndex = null;
                        specIndex = res.dataset.currentindex;
                        // 取得当前商品的类型ID
                        that.setData({
                                currentGoodSpecId: res.dataset.specid
                        })
                        let currentGoodSpecArr = that.data.currentExhibitionData[0].goodSpec;
                        // 将所有类别置为未选中
                        for (let item in currentGoodSpecArr) {
                                currentGoodSpecArr[item].isChose = 0
                        }
                        let str = 'currentExhibitionData[0].goodSpec[' + specIndex + '].isChose';
                        // let str1 = 'currentExhibitionData[0].goodSpec[0].isChose';
                        // 更新被选中的商品类型
                        that.setData({
                                [str]: 1
                        });
                        // 调用函数判断当前选中商品及类别是否在购物车中已存在
                        that.currentGoodIsInCarts(fathat);
                }).exec();
        },

        // 将选择商品加入购物车函数
        buyGoodRoghtNowrFn: function (that) {
                // 点击时查看商品数是否为1，不为1则修改数组中的数量
                // if (this.data.countNum != 1) {
                //         console.log("changearr")
                //         let str = 'currentExhibitionData[0].wnnaBuyNum';
                //         this.setData({
                //                 [str]: this.data.countNum,
                //                 // 本地欲购数重置为1
                //                 countNum:1
                //         })
                // }
                let str = 'currentExhibitionData[0].wnnaBuyNum';
                this.setData({
                        [str]: that.data.countNum,
                        // 本地欲购数重置为1
                        countNum: 1
                })
                let query = wx.createSelectorQuery();
                // let fathat  = that;
                // 获取到当前被选中的商品类别
                query.select('.goodSpecBox .active').boundingClientRect(function (res) {
                        let specIndex = null;
                        specIndex = res.dataset.currentindex;
                        // 取得当前商品的类型ID
                        that.setData({
                                currentGoodSpecId: res.dataset.specid
                        })
                        let currentGoodSpecArr = that.data.currentExhibitionData[0].goodSpec;
                        // 将所有类别置为未选中
                        for (let item in currentGoodSpecArr){
                                currentGoodSpecArr[item].isChose = 0
                        }
                        let str = 'currentExhibitionData[0].goodSpec[' + specIndex + '].isChose';
                        // 更新被选中的商品类型
                        that.setData({
                                [str]: 1
                        });
                        app.globalData.buyRightNowArr.push(JSON.parse(JSON.stringify(that.data.currentExhibitionData[0])));
                }).exec();
        },
        currentGoodIsInCarts:function(that){
                // 点击确定后，将当前展示商品数据添加到购物车数组中
                        // 若欲购数组为空，直接将数据加入数组
                let glbDataWanaBuyArr = app.globalData.wanaBuyArr;
                if (glbDataWanaBuyArr.length == 0){
                        app.globalData.wanaBuyArr.push(JSON.parse(JSON.stringify(that.data.currentExhibitionData[0])));
                } else{
                        // 欲购数组不为空时，判断当前选择商品是否已在购物车中
                                // 商品是否已经在数组中，默认为false
                        let goodIsInArr = false;
                                // 获取当前商品的GoodID
                        let currentGoodId = that.data.currentExhibitionData[0].goodId;
                                // 遍历购物车数组，判断当前商品是否已存在于购物车
                        for (let item in glbDataWanaBuyArr){
                                // 如果购物车中存在当前商品的GoodID，则进行后续判断
                                if (glbDataWanaBuyArr[item].goodId == currentGoodId){
                                        // 获取商品类型数组
                                        let specArr = glbDataWanaBuyArr[item].goodSpec;
                                        // 购物车中被选中的类型
                                        let tempSpecId = null;
                                        // 遍历商品类型数组
                                        for (let specItem in specArr) {
                                                // 取得被选中的类型
                                                if (specArr[specItem].isChose) {
                                                        console.log(specArr[specItem]);
                                                        tempSpecId = specArr[specItem].specId
                                                }
                                        }
                                        // 判断购物车中该商品类型和当前类型是否一致
                                        if (tempSpecId == that.data.currentGoodSpecId){
                                                // 若类型一致，则将购物车中该商品欲购数量+1
                                                app.globalData.wanaBuyArr[item].wnnaBuyNum = app.globalData.wanaBuyArr[item].wnnaBuyNum+1; 
                                                // 当该项数据前存在同一类商品不同类别时，已将goodIsInArr置为true，在该项时发现已存在后，重置为false
                                                goodIsInArr = false;
                                                // 发现已经存在后退出循环
                                                break;
                                        }else{
                                                // 若不是同一类，则goodIsInArr为true,待后续继续判断
                                                goodIsInArr = true;
                                        }
                                } 
                                        // 不是同一个商品时，判断购物车数组是否遍历完成
                                else if (item == glbDataWanaBuyArr.length-1){
                                        goodIsInArr = true;
                                }
                                        // 最后判断goodIsInArr和是否遍历完成
                                if (goodIsInArr && (item == glbDataWanaBuyArr.length - 1)) {
                                        app.globalData.wanaBuyArr.push(JSON.parse(JSON.stringify(that.data.currentExhibitionData[0])));
                                }
                        }
                }
        },
        // 点击模态框中的立即购买实现跳转到确认信息页面
        buyGoodRoghtNow:function(){

                let that = this;
                that.buyGoodRoghtNowrFn(that);
                // 点击添加按钮后关闭模态框
                that.setData({
                        buyRightNowStatus: false
                });

                // 关闭页面后直接跳转页面
                wx.navigateTo({
                        url: '/pages/confirmOfOrder/confirmOfOrder?buyRightNow=1',
                })
        },

        // 模态框减少商品按钮
        reduceGoodNum:function(){
                let currentNum = this.data.countNum-1;
                console.log(currentNum);
                // 当商品数小于等于0时重置为0
                if (currentNum <= 1) {
                        // this.data.countNum = 1;
                        this.setData({
                                countNum: 1
                        })
                }else{
                        this.setData({
                                countNum: currentNum
                        })
                }
                console.log("reduce");
        },
         // 模态框增加商品按钮
        addGoodNum:function(){
                let currentNum = this.data.countNum+1;
                this.setData({
                        countNum: currentNum
                })
                // let str = 'currentExhibitionData[0].wnnaBuyNum';
                // this.setData({
                //         [str]: this.data.countNum
                // })
                console.log("add");
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

        },
        /**
         * 监听页面滚动
         */
        onPageScroll: function (e) {
                        let btnshow = 0;
                        if (parseInt(e.scrollTop) >= 500) {
                                btnshow = 1;
                        } else {
                                btnshow = 0;
                        }
                        this.setData(
                                { btnshow }
                        );

                }


})