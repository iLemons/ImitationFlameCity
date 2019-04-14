//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
        headerTitle:"火焰之城",
        locPageHeaderBgImgUrl:null,
        loacCartDatas:null,
        goodsData:null,
        goodIdCard:'',
        headerHeight:'',
         num:0,
         userInfo: {},
         hasUserInfo: false,
         canIUse: wx.canIUse('button.open-type.getUserInfo'),
         imgUrls: [
               "../../images/banner01.png",
               "../../images/banner02.png"
        ],
        currentSwiper:0,
        indicatorColor:'#DEDCDD',
        indicatorActiveColor: '#B73E23',
        autoplay: true,
        interval: 5000,
        duration: 400,
        circular:true,
        footerData:'&nbsp;---- 哥，底线了，再往下看打你哦 ----',
        hotSoldImgUrl:"http://www.hs1105.com/static/home/images/hot.png",
        lighterData:[],
        shoseData:[],
        wrapData: [],
        navData:[
                {
                        "category":"火机专场",
                        "index":0
                },
                {
                        "category": "包包专场",
                        "index": 1
                },
                {
                        "category": "鞋子专场",
                        "index": 2
                }
        ]
  },

onReady: function () {
        //   获取切换栏开始高度
        this.getNavtabPos();
        this.getHeaderHeight();

        this.dealGoodData();
        // 展示商品
        this.goodsShow();
},
dealGoodData:function(){
        let dealData = this.data.loacCartDatas;
        // console.log(dealData[0].goodType);
        for(let i in dealData){
                if (dealData[i].goodType == 'lighter'){
                        this.data.lighterData.push(dealData[i]);
                } else if (dealData[i].goodType == 'wrap'){
                        this.data.wrapData.push(dealData[i]);
                }else{
                        this.data.shoseData.push(dealData[i]);
                }
        }
},

//   显示商品
goodsShow:function(){
        switch(this.data.num) {
                case 0:
                        this.lighterShow();
                        this.scrollTop();
                        break;
                case 1:
                        this.bagShow();
                        this.scrollTop();
                        break;
                case 2:
                        this.shoseShow();
                        this.scrollTop();
                        break;

        }
},
// 显示火机
lighterShow:function(){
        // console.log("lighter");
        this.setData(
                {
                        goodsData: this.data.lighterData
                }
        );
},
// 显示包包
bagShow: function () {
        // console.log("bags");
        this.setData(
                {
                        goodsData: this.data.wrapData
                }
        )
},
// 显示鞋子
shoseShow: function () {
        // console.log("shose");
        this.setData(
                {
                        goodsData: this.data.shoseData
                }
        )
},
// 进入商品详情页
navigateToDetail:function(e){
        // 页面跳转时传递选中商品的ID
        let goodid = e.currentTarget.dataset.goodid;
        wx.navigateTo({
                url: '../goodDetail/goodDetail?goodIdCard=' + goodid,
        })
},
//   swiper切换调用
swiperChange:function(e){
        // console.log(e.detail);
        this.setData({
                currentSwiper : e.detail.current
        })

} ,
// navTab栏点击切换
tabSwitch:function(event){
        this.setData({
                num: event.currentTarget.dataset.num
        });
        console.log(this.data.num);
        this.goodsShow();
  },
//   监听页面滚动
  onPageScroll:function(e){
        let isfixed = 0;
        let btnshow = 0;
          if (parseInt(e.scrollTop) >= (this.data.fixedTop - this.data.headerHeight)){
                isfixed = 1
        }else{
                isfixed = 0;
        }
          this.setData(
                  { isfixed }
          );
          if (parseInt(e.scrollTop) >=500){
                  btnshow = 1;
          }else{
                  btnshow =0;
          }
        this.setData(
                {btnshow}
        );

}, 
// 回到顶部方法
scrollTop:function(){
        wx.pageScrollTo({
                scrollTop:0,
                duration:300
        });
},
// 获取tab栏高度
getNavtabPos:function(){
        let query = wx.createSelectorQuery();
        let that = this;
        query.select('.nav-tab').boundingClientRect(function (res) {
                that.setData({
                        fixedTop: res.top
                });

                // console.log(that.data.fixedTop);
                // console.log(that.data.headerHeight);

                //   query.select('#navTab').boundingClientRect( res =>{
                //           this.setData({
                //                   fixedTop: res.top
                //           })
                //   })
        }).exec();
},
// 获取顶部高度
getHeaderHeight:function(){
        const query = wx.createSelectorQuery();
        let headerHeight = 0;
        let that = this;
        query.select('.hearder-img-box').boundingClientRect();
        // query.selectViewport.scrollOffset();
        query.exec(function(res){
                that.setData({
                        headerHeight: res[0].height
                })
                // console.log(that.data.headerHeight);
        })
},


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
          this.setData({
                  loacCartDatas: app.globalData.cartDatas,
                  locPageHeaderBgImgUrl: app.globalData.pageHeaderBgImgUrl
          });
          
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
