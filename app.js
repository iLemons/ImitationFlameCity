//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)



    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
        userInfo: null,
        pageHeaderBgImgUrl:"http://www.hs1105.com/static/home/images/header.png",
        cartDatas:[
                            {
                                        "goodId":1,
                                        "goodType":"lighter",
                                        "goodName":"新款时尚小巧便携式USB充电广告打火机电子点烟器",
                                        "goodDetailMsg": "颜力觉醒 时尚之作！合金外壳，时尚轻便！改变，永无止境！双面钨丝，USB充电，锂电池，无名火更安全，户外防风，小巧轻便，循环充电，静音点烟！",
                                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551507052-5299.png",
                                        "goodBannerImgUrl":[
                                                "http://www.hs1105.com/static/upload/product_images/1551507052-5299.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551507052-8462.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551507053-8525.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551507053-4127.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551507053-7148.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551507053-0440.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551507053-6088.png"
                                        ],
                                        "goodDetailImgUrl":[
                                                "http://www.hs1105.com/static/upload/details_images/1551507053-5150.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507053-3592.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507053-0558.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507053-1745.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507053-9636.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-8758.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-2099.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-1776.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-8372.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-9649.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-2984.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-7206.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551507054-8337.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513042-2317.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513042-3471.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513042-8438.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513042-1224.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513043-9335.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513043-7390.png"
                                        ],
                                        "goodPrice":18.88,
                                        "oldPrice":"26.00",
                                        "soldOutNum":232,
                                        "isHotSold":1,
                                        "wnnaBuyNum": 1,
                                        "goodSpec":[
                                            {
                                                    "specId":1,
                                                    "spec":"黑冰",
                                                    "isChose":1
                                            },
                                            {
                                                    "specId": 2,
                                                    "spec": "蓝冰",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 3,
                                                    "spec": "金冰",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 4,
                                                    "spec": "银冰",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 5,
                                                    "spec": "红冰",
                                                    "isChose": 0
                                            },
                                    ],                                    
                                        "goodServicesData": ["七天无理由退换","提供优质售后保障"],
                                        "stockNum": 8,
                                        "isSelected": true
                            },
                            {
                                    "goodId": 2,
                                    "goodType": "lighter",
                                    "goodName": "创意防风USB电子指纹感应触摸充电双面点打火机",
                                    "goodDetailMsg":"智在为你改变，双面点烟，便携充电，感应快人一步！科技时尚融为一体，体现自身魅力！上面升级加粗钨丝，轻松处理烟灰！灵敏感应 指纹识别点火，更加安全可靠！科技引领时尚！一款值得你拥有珍藏的高科技充电点火机！",
                                    "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551506487-8785.png",
                                    "goodBannerImgUrl":[
                                            "http://www.hs1105.com/static/upload/product_images/1551506487-8785.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551506487-1518.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551506487-4868.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551506487-2186.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551506487-9588.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551506487-0526.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551506487-2496.png"
                                    ],
                                    "goodDetailImgUrl":[
                                            "http://www.hs1105.com/static/upload/details_images/1551506487-4573.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506487-2584.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506488-1025.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506488-9931.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506488-1270.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506488-8689.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506488-2154.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506488-6511.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506488-0853.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506489-4475.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506489-4013.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506489-0541.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551506489-7226.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-6938.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-4724.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-4847.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-7686.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-0196.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-4021.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-4074.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-5441.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551513236-4899.png"
                                    ],
                                    "goodPrice": 29.99,
                                    "oldPrice": "",
                                    "soldOutNum": 155,
                                    "isHotSold": 0,
                                        "goodSpec": [
                                                {
                                                        "specId": 1,
                                                        "spec": "睿智黑",
                                                        "isChose": 1
                                                },
                                                {
                                                        "specId": 2,
                                                        "spec": "拉丝蓝",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 3,
                                                        "spec": "磨砂金",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 4,
                                                        "spec": "磨砂银",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 5,
                                                        "spec": "科技银",
                                                        "isChose": 0
                                                }, 
                                                {
                                                        "specId": 6,
                                                        "spec": "拉丝金",
                                                        "isChose": 0
                                                }, 
                                                {
                                                        "specId": 7,
                                                        "spec": "拉丝红",
                                                        "isChose": 0
                                                }
                                        ],  
                                    "wnnaBuyNum": 1,
                                    "goodServicesData": ["七天无理由退换", "无忧保障", "提供3年保修服务", "提供优质售后保障"],
                                    "stockNum": 8,
                                    "isSelected": true
                            },
                            {
                                    "goodId": 3,
                                    "goodType": "lighter",
                                    "goodName": "个性创意手表充电打火机 usb金属男士带真手表点烟器",
                                    "goodDetailMsg":"手表打火机！下滑点火，便携充电！智能时尚手表点烟器，男人的好搭档！！将智慧科技融入时尚生活中 - 手表于火机二合一！智能芯片，电热丝点烟，手表看时，USB便携充电，防风设计，循环充电，无名火更安全，炫酷指示灯！",
                                    "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551498225-7735.png",
                                    "goodBannerImgUrl":[
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-7735.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-8265.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-0595.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-3395.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-4930.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-6185.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-2530.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-8246.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-0728.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-9830.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498225-4368.png"
                                    ],
                                    "goodDetailImgUrl": [
                                            "http://www.hs1105.com/static/upload/details_images/1551498225-7531.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498225-4721.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498226-8071.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498226-6014.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498226-2612.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498226-4414.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498226-2546.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498226-8055.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498226-6871.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-3456.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-3243.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-8110.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-5047.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-6524.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-6635.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-7677.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551512958-3176.png"
                                            ],
                                    "goodPrice": 68.88,
                                    "oldPrice": "",
                                    "soldOutNum": 68,
                                    "isHotSold": 0,
                                    "goodSpec": [
                                            {
                                                    "specId": 1,
                                                    "spec": "银壳白底数字面",
                                                    "isChose": 1
                                            },
                                            {
                                                    "specId": 2,
                                                    "spec": "银壳黑底数字面",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 3,
                                                    "spec": "金壳白底数字面",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 4,
                                                    "spec": "金壳黑底数字面",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 5,
                                                    "spec": "银壳白底罗马面",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 6,
                                                    "spec": "银壳黑底罗马面",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 7,
                                                    "spec": "金壳白底罗马面",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 8,
                                                    "spec": "金壳黑底罗马面",
                                                    "isChose": 0
                                            }
                                    ],  
                                    "wnnaBuyNum": 1,
                                    "goodServicesData": ["七天无理由退换", "无忧保障","提供3年保修服务", "提供优质售后保障"],
                                    "stockNum": 8,
                                    "isSelected": true
                            },
                            {
                                    "goodId": 4,
                                    "goodType": "lighter",
                                    "goodName": "创意个性下拉长条指纹触摸款防风无声USB充电礼品打火机",
                                    "goodDetailMsg":"智能触摸感应点烟器！型-圆润边角，手感更佳！引领潮流 备受关注，不同色彩，表达不同的感情！礼盒包装，珍藏、送礼佳品！",
                                    "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551498785-1275.png",
                                    "goodBannerImgUrl":[
                                            "http://www.hs1105.com/static/upload/product_images/1551498785-1275.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498785-2306.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498785-4845.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498785-9129.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498785-6179.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498786-0207.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498786-1540.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498786-0211.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551498786-4977.png"
                                    ],
                                    "goodDetailImgUrl":[
                                            "http://www.hs1105.com/static/upload/details_images/1551498786-2747.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498786-6825.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498786-0556.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498786-6367.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498786-5646.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498786-2972.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498786-2947.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498787-8141.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498787-9885.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498787-7117.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551498787-6732.png"
                                    ],
                                    "goodPrice": "36.00",
                                    "soldOutNum": 97,
                                    "oldPrice": "",
                                    "isHotSold": 0,
                                    "goodSpec": [
                                            {
                                                    "specId": 1,
                                                    "spec": "拉丝黑",
                                                    "isChose": 1
                                            },
                                            {
                                                    "specId": 2,
                                                    "spec": "红色",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 3,
                                                    "spec": "金色",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 4,
                                                    "spec": "亮铬",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 5,
                                                    "spec": "蓝色",
                                                    "isChose": 0
                                            }
                                    ],  
                                    "wnnaBuyNum": 1,
                                    "goodServicesData": ["七天无理由退换", "无忧保障", "提供3年保修服务", "提供优质售后保障"],
                                    "stockNum": 8,
                                    "isSelected": true
                            },
                            {
                                    "goodId": 5,
                                    "goodType": "lighter",
                                    "goodName": "中邦679充电usb打火机超薄金属打火机电子点烟器",
                                    "goodDetailMsg":"精致生活 魅力闪现！一款小巧的充电点火机，静音点火，浅薄机身，绚丽色彩，生而不凡，一直被模仿，从未被超越！多种色彩供君选择，体现生活的品味！",
                                    "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551514976-9165.png",
                                    "goodBannerImgUrl":[
                                            "http://www.hs1105.com/static/upload/product_images/1551514976-9165.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514977-0411.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514977-2805.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514977-4759.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514977-1611.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514977-8144.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514977-8980.png"
                                    ],
                                    "goodDetailImgUrl":[
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-6565.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-6318.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-1241.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-6521.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-3804.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-5253.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-1340.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-5942.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-4170.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-4995.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-1377.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-9982.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-8873.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-0262.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514977-6032.png"
                                    ],
                                    "goodPrice": "42.00",
                                    "oldPrice": "",
                                    "soldOutNum": 56,
                                    "isHotSold": 0,
                                    "goodSpec": [
                                            {
                                                    "specId": 1,
                                                    "spec": "玫瑰金拉丝",
                                                    "isChose": 1
                                            },
                                            {
                                                    "specId": 2,
                                                    "spec": "热情电泳红",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 3,
                                                    "spec": "烂漫炫彩",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 4,
                                                    "spec": "潮流黑褐色",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 5,
                                                    "spec": "时尚电泳蓝",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 6,
                                                    "spec": "神秘黑冰",
                                                    "isChose": 0
                                            }
                                    ],  
                                    "wnnaBuyNum": 1,
                                    "goodServicesData": ["打火机"],
                                    "stockNum": 8,
                                    "isSelected": true
                            },
                            {
                                    "goodId": 6,
                                    "goodType": "lighter",
                                    "goodName": "创意usb充电打火机ZCB101摇一摇智能感应双面点电子点烟器",
                                    "goodDetailMsg":"智能摇一摇感应充电打火机！重力感应，变形金刚；时尚个性的额外观造型，舒适的手感；USB便携充电，智能兼容；PVD侵染冰面，光亮如镜，炫酷如冰，随光而变，绚丽动人，加上精美礼盒包装，值得您拥有和珍藏！",
                                    "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551841143-5132.png",
                                    "goodBannerImgUrl":[
                                            "http://www.hs1105.com/static/upload/product_images/1551841143-5132.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551841143-5365.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551841143-7850.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551841144-1511.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551841144-5918.png"
                                    ],
                                    "goodDetailImgUrl":[
                                            "http://www.hs1105.com/static/upload/details_images/1551841144-0889.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841144-1708.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841144-5810.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841144-9435.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841145-7915.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841145-7669.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841145-2707.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841145-7167.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841145-0471.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841145-2798.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841145-5095.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841146-5202.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841146-1189.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841146-2980.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551841146-8580.png"
                                    ],
                                    "goodPrice": 56.88,
                                    "oldPrice": "",
                                    "soldOutNum": 66,
                                    "isHotSold": 0,
                                    "goodSpec": [
                                            {
                                                    "specId": 1,
                                                    "spec": "炫冰",
                                                    "isChose": 1
                                            },
                                            {
                                                    "specId": 2,
                                                    "spec": "蓝冰",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 3,
                                                    "spec": "黑冰",
                                                    "isChose": 0
                                            },
                                            {
                                                    "specId": 4,
                                                    "spec": "金冰",
                                                    "isChose": 0
                                            }
                                    ],  
                                    "wnnaBuyNum": 1,
                                    "goodServicesData": ["摇一摇点火"],
                                    "stockNum": 8,
                                    "isSelected": true
                            },
                            {
                                    "goodId": 7,
                                    "goodType": "lighter",
                                    "goodName": "2018新款创意带灯真手表USB电子点烟器充电打火机",
                                    "goodDetailMsg":"非凡品味 臻至直选！电热丝点烟，上推滑盖，电热丝即燃，关闭即灭！手表、打火机二合一，为你所想，在简单的日常，也要智慧搭配，职场精英的优雅选择！时尚经典，炫酷有型，双色可选不简单！需要一个好火机和一块好手表的你，它值得拥有和珍藏！",
                                    "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551514149-3703.png",
                                    "goodBannerImgUrl":[
                                            "http://www.hs1105.com/static/upload/product_images/1551514149-3703.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514149-7184.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514149-7984.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514150-5028.png",
                                            "http://www.hs1105.com/static/upload/product_images/1551514150-1541.png"
                                    ],
                                    "goodDetailImgUrl":[
                                            "http://www.hs1105.com/static/upload/details_images/1551514150-2525.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514150-1500.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514150-5228.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514150-0328.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514150-5032.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514150-0166.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-2954.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-5957.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-5836.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-3478.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-6977.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-9810.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-3958.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-0862.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514151-7163.png",
                                            "http://www.hs1105.com/static/upload/details_images/1551514152-0205.png"
                                    ],
                                    "goodPrice": "68.00",
                                    "oldPrice": "78.00",
                                    "soldOutNum": 122,
                                    "isHotSold": 0,
                                    "goodSpec": [
                                            {
                                                    "specId": 1,
                                                    "spec": "土豪金",
                                                    "isChose": 1
                                            },
                                            {
                                                    "specId": 2,
                                                    "spec": "光亮银",
                                                    "isChose": 0
                                            }
                                    ],  
                                    "wnnaBuyNum": 1,
                                    "goodServicesData":[],
                                    "stockNum": 8,
                                    "isSelected": true
                            },
                                {
                                        "goodId": 8,
                                        "goodType": "lighter",
                                        "goodName": "厂家直销创意火柴款带七彩灯光USB火柴金属充电打火机",
                                        "goodDetailMsg":"七彩炫灯，钨丝点烟，火柴棒造型充电打火机！使用充电点火，循环充电！通用充电口，智能兼容，真正的随用随充！",
                                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551839368-1955.png",
                                        "goodBannerImgUrl": [
                                                "http://www.hs1105.com/static/upload/product_images/1551839368-1955.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551839368-8761.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551839368-0465.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551839368-8528.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551839368-9086.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551839369-3287.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551839369-1076.png" 
                                        ],
                                        "goodDetailImgUrl": [
                                                "http://www.hs1105.com/static/upload/details_images/1551839369-1213.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839369-1780.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839370-5516.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839371-9828.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839371-4463.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839372-5509.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839373-8969.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839373-9461.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839373-6847.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839373-6371.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839375-8987.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839375-8052.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839375-4260.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839375-7795.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839375-6655.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839375-0166.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551839375-0046.png"
                                        ],
                                        "goodPrice": 28.99,
                                        "oldPrice": "",
                                        "soldOutNum": 43,
                                        "isHotSold": 0,
                                        "goodSpec": [
                                                {
                                                        "specId": 1,
                                                        "spec": "磨砂黑",
                                                        "isChose": 1
                                                },
                                                {
                                                        "specId": 2,
                                                        "spec": "树纹黄",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 3,
                                                        "spec": "树纹红",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 4,
                                                        "spec": "磨砂金",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 5,
                                                        "spec": "磨砂银",
                                                        "isChose": 0
                                                }
                                        ],
                                        "wnnaBuyNum": 1,
                                        "goodServicesData": ["打火机"],
                                        "stockNum": 8,
                                        "isSelected": true
                                },
                                {
                                        "goodId": 9,
                                        "goodType": "lighter",
                                        "goodName": "速8个性创意USB指尖陀螺充电打火机金属带炫彩灯",
                                        "goodDetailMsg":"指尖陀螺USB充电打火机，七彩炫灯-炫酷出众！有人喜欢抖腿，有人喜欢转笔，有人喜欢转硬币，也有人喜欢按圆珠笔的键帽，而指尖陀螺就是这些的进阶版！！精工制造，钢珠轴承，优质的轴承会带来更高的效益，静音旋转，防尘效果佳！让点烟成为一件有趣的事！",
                                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551512776-7998.png",
                                        "goodBannerImgUrl": [
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-7998.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-6674.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-8157.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-6332.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-1579.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-3353.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-1863.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512776-2629.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512777-6172.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512777-7576.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551512777-7233.png"
                                        ],
                                        "goodDetailImgUrl": [
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-6657.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-2366.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-7108.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-0712.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-3320.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-5032.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-6093.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-2368.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512777-0252.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-5890.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-1238.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-2730.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-4261.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-7892.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-1465.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-4265.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-5161.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-9521.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-8500.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-3318.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-6893.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-6958.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-3238.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551512846-4940.png"
                                        ],
                                        "goodPrice":"52.00",
                                        "oldPrice": "",
                                        "soldOutNum": 67,
                                        "isHotSold": 0,
                                        "goodSpec": [
                                                {
                                                        "specId": 1,
                                                        "spec": "黑冰",
                                                        "isChose": 1
                                                },
                                                {
                                                        "specId": 2,
                                                        "spec": "拉丝黑",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 3,
                                                        "spec": "金冰",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 4,
                                                        "spec": "炫彩冰",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 5,
                                                        "spec": "拉丝金",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 6,
                                                        "spec": "酷蓝冰",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 7,
                                                        "spec": "拉丝银",
                                                        "isChose": 0
                                                }
                                        ],
                                        "wnnaBuyNum": 1,
                                        "goodServicesData": [],
                                        "stockNum": 8,
                                        "isSelected": true
                                },
                                {
                                        "goodId": 10,
                                        "goodType": "lighter",
                                        "goodName": "厂家直销三桥牌触摸感应金属超薄礼盒USB双面点打火机",
                                        "goodDetailMsg":"触摸感应充电打火机！迷你纤薄 - 指纹感应 - 双面点烟！钨丝点烟、USB2.0、电量显示、安全无名火、感应开关、小巧轻便、循环充电、安静点烟！配上精美礼盒，值得亲拥有！",
                                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551513877-5164.png",
                                        "goodBannerImgUrl": [
                                                "http://www.hs1105.com/static/upload/product_images/1551513877-5164.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551513877-3416.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551513878-8347.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551513878-2889.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551513878-1134.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551513878-9819.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551513878-5249.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551513878-0885.png"
                                        ],
                                        "goodDetailImgUrl": [
                                                "http://www.hs1105.com/static/upload/details_images/1551513878-9502.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513878-0299.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513878-5468.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513878-2484.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513878-6195.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-9154.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-4934.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-7207.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-8108.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-3979.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-3386.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-8615.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513879-7016.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-1606.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-6404.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-6114.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-2136.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-1054.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-4302.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-9177.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551513880-2834.png"
                                        ],
                                        "goodPrice": "36.00",
                                        "oldPrice": "",
                                        "soldOutNum": 33,
                                        "isHotSold": 0,
                                        "goodSpec": [
                                                {
                                                        "specId": 1,
                                                        "spec": "黑电容",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 2,
                                                        "spec": "炫彩冰",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 3,
                                                        "spec": "黑冰",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 4,
                                                        "spec": "树脂红",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 5,
                                                        "spec": "金冰",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 6,
                                                        "spec": "树脂黑",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 7,
                                                        "spec": "树脂白",
                                                        "isChose": 0
                                                }
                                        ],
                                        "wnnaBuyNum": 1,
                                        "goodServicesData": ["打火机"],
                                        "stockNum": 8,
                                        "isSelected": true
                                },

                           {
                                   "goodId": 11,
                                   "goodType": "wrap",
                                   "goodName": "真皮钱包男士短款头层牛皮韩版时尚休闲钱夹驾驶证皮夹",
                                   "goodDetailMsg":"优选头层油蜡牛皮，天然牧场产出真牛皮，质感细腻，柔软舒适！复古又态度大容量，手感柔软，舒适透气，优质牛皮，干净耐脏！一包在手/说走就走；轻松出门一件不落 满足日常生活！",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551427688-3903.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551427688-3903.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551427688-2484.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551427688-6979.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551427688-0821.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551427688-4094.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551428676-8882.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428676-4698.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428765-4402.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428765-7735.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428765-0461.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-9776.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-8463.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-1087.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-0490.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-4409.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-8015.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-7518.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-9898.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428766-6754.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428767-1183.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428767-2612.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428767-0125.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428767-5243.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551428767-3691.png"
                                   ],
                                   "goodPrice": 99.50,
                                   "oldPrice": "",
                                   "soldOutNum": 34,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "卡其色",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "黑色",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "酒红色",
                                                   "isChose": 0
                                           }
                                   ],
                                   "wnnaBuyNum": 1, 
                                   "goodServicesData": ["真皮钱包"],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 12,
                                   "goodType": "wrap",
                                   "goodName": "男士钱包短款竖款复古牛皮腊皮多卡位男钱夹厂家直销",
                                   "goodDetailMsg":"复古经典 品牌设计 复古油蜡真牛皮！大容量、多功能的钱包！舒适抗皱、色牢耐用、质感舒适、解释耐磨！卡其色、黑色、酒红色提供选择！",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551426983-4379.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551426983-4379.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551426983-3905.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551426983-4540.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551426983-3043.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551426983-0545.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551426984-2289.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551429523-9937.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429523-7369.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429523-0628.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-2019.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-0604.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-6959.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-0775.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-5425.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-3520.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-9909.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429524-6388.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429525-3974.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429525-6882.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429525-8428.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429525-1047.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429525-4637.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551429525-1580.png"
                                   ],
                                   "goodPrice": 68.99,
                                   "oldPrice": "",
                                   "soldOutNum": 68,
                                   "isHotSold": 0,
                                   "wnnaBuyNum": 1,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "卡其色二折页款",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "卡其色三折页款",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "黑色二折页款",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "黑色三折页款",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "酒红色二折页款",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 6,
                                                   "spec": "酒红色三折页款",
                                                   "isChose": 0
                                           }
                                   ],  
                                   "goodServicesData": ["真皮皮包"],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 13,
                                   "goodType": "wrap",
                                   "goodName": "油蜡牛皮男士钱包真皮短款防RFID盗刷男士钱包双拉链钱夹",
                                   "goodDetailMsg":"时尚商务手提包-年轻的特别甄选！头层油蜡皮，视觉厚实时尚，手感厚实 纹路粗犷 具有牛皮自然激励！",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551410749-8420.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551410749-8420.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551410749-4574.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551410749-1510.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551410749-7268.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551410749-4448.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551410749-8307.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551410749-2309.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410749-5614.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410749-0345.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-9290.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-8106.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-3748.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-2960.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-2685.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-0945.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-5506.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-9418.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-6084.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-2906.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551410750-6549.png"
                                   ],
                                   "goodPrice": "98.00",
                                   "oldPrice": "108.00",
                                   "soldOutNum": 28,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "卡其色",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "褐色",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "酒红色",
                                                   "isChose": 0
                                           }
                                   ],  
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": ["七天免费退换货","真皮手提包"],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 14,
                                   "goodType": "wrap",
                                   "goodName": "钱包男短款真皮竖款钱夹男士牛皮多功能卡包驾驶证皮夹",
                                   "goodDetailMsg":"复古时尚-年轻的特别甄选！多卡位-大容量；可放驾驶证！流行时尚的都市色彩，方便小巧的同时满足使用，原理那些年的华而不实！！双色油蜡皮，视觉复古，手感厚实 文理粗犷 具有自然机理！",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551405605-6323.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551405605-6323.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551405605-9968.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551405605-9897.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551405606-0764.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551405606-5613.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551405606-6279.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551405606-1662.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405606-0206.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405606-6296.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405606-2652.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405606-4495.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405606-2507.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405607-2219.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405607-4896.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405607-5585.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405607-8825.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405607-1214.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405607-8663.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405607-1683.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551405608-2814.png"
                                   ],
                                   "goodPrice": 89.99,
                                   "oldPrice": "",
                                   "soldOutNum": 32,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "黑色",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "卡其色",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "褐色",
                                                   "isChose": 0
                                           }
                                   ],  
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": ["七天免费退换货", "平台商品包邮"],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 15,
                                   "goodType": "wrap",
                                   "goodName": "2018新款三折短款钱包男士韩版搭扣耐用皮夹休闲钱夹",
                                   "goodDetailMsg":"休闲风格，为性价比而生！源于意大利的精湛工艺！风范气场，现代轮廓/利落线条。在伸手可及的地方，品质生活！",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551434265-5991.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551434265-5991.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551434266-7703.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551434266-5963.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551434266-3825.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551434266-9633.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551434266-2896.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-9592.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-2057.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-3880.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-6942.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-8052.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-9888.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-5228.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-8331.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-4893.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-4857.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-7483.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-3252.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434267-3142.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551434266-3614.png"
                                   ],
                                   "goodPrice": 39.99,
                                   "oldPrice": "48.00",
                                   "soldOutNum": 21,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "深咖色",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "大红色",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "玫瑰红",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "黑色",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "浅咖色",
                                                   "isChose": 0
                                           }
                                   ],  
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": ["七天免费退换货"],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 16,
                                   "goodType": "wrap",
                                   "goodName": "现货热卖钱包男短款真皮钱夹青年牛皮男士皮夹子竖款拉链小零钱包",
                                   "goodDetailMsg":"能装在口袋里的牛皮钱包；精致小巧，手握舒适！一款收纳不臃肿的钱包；功能俱全，时尚有型！天然牧场产出真牛皮，质感细腻，柔软舒适，天然耐磨，光亮度好，手感舒适，耐脏干净！",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551424562-4168.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551424562-4168.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424562-7865.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424562-0293.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424563-3975.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424563-6709.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424563-0376.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551424563-3952.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424563-3647.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424563-7064.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424563-8209.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424564-5028.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424564-9046.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424564-8458.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424564-7341.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424564-2045.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424564-6833.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424564-9088.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424565-2888.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424565-9078.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424565-1149.png"
                                   ],
                                   "goodPrice": 98.99,
                                   "oldPrice": "",
                                   "soldOutNum": 23,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "卡其色",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "黑色",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "酒红色",
                                                   "isChose": 0
                                           }
                                   ],  
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": ["七天免费退换货"],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 17,
                                   "goodType": "wrap",
                                   "goodName": "胸包单肩包帆布斜跨包韩版休闲男包时尚潮男士胸包",
                                   "goodDetailMsg":"简约出行，乐享清闲！如此轻便美观实用，你想带TA去哪里？正值踏青出游好时节，一款胸包携带着梦想，携您一起出行！",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551424808-0144.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551424808-0144.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424808-0433.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424809-3903.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424809-0169.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424809-2853.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551424809-1387.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551424809-6747.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424809-0191.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424809-3754.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424809-5105.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424809-8928.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424810-1414.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424810-2773.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424811-8645.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424811-3922.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424811-8512.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424811-1396.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424811-5018.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551424811-8729.png"
                                   ],
                                   "goodPrice": 168.99,
                                   "oldPrice": "",
                                   "soldOutNum": 12,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "黑色",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "亲蓝色",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "棕色",
                                                   "isChose": 0
                                           }
                                   ], 
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": ["七天无理由退换"],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                                {
                                        "goodId": 18,
                                        "goodType": "wrap",
                                        "goodName": "新款男士手拿包长款时尚商务拉链大容量压花PU手抓包钱包",
                                        "goodDetailMsg":"热卖款式 强势登陆！时尚简约，演绎简约时尚的生活元素！大气而不是优雅！",
                                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551627238-6914.png",
                                        "goodBannerImgUrl":[
                                                "http://www.hs1105.com/static/upload/product_images/1551627238-6914.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551627238-8740.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551627238-1548.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551627238-3212.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551627238-5518.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551627238-2527.png"
                                        ],
                                        "goodDetailImgUrl":[
                                                "http://www.hs1105.com/static/upload/details_images/1551627238-7780.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-0926.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627238-9462.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627238-6482.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627238-4072.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627238-7139.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-5448.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-9759.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-1227.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-6091.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-0638.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-8785.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-5665.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-5811.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-3692.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-3424.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-7423.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-4145.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-8846.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627239-5220.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551627240-9864.png"
                                        ],
                                        "goodPrice": 48.68,
                                        "oldPrice": "",
                                        "soldOutNum": 17,
                                        "isHotSold": 0,
                                        "goodSpec": [
                                                {
                                                        "specId": 1,
                                                        "spec": "黑色",
                                                        "isChose": 1
                                                },
                                                {
                                                        "specId": 2,
                                                        "spec": "棕色",
                                                        "isChose": 0
                                                }
                                        ],
                                        "wnnaBuyNum": 1,
                                        "goodServicesData": ["7天包换"],
                                        "stockNum": 8,
                                        "isSelected": true
                                },
                                {
                                        "goodId": 19,
                                        "goodType": "wrap",
                                        "goodName": "厂家直销韩版男士钱包商务超薄长款钱夹复古多卡位夹子爆款",
                                        "goodDetailMsg":"优质PU皮，柔软始终，挺括有型！商务休闲，复古时尚，魅力男士必备品！黑色 - 棕色提供选择！",
                                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551434013-5741.png",
                                        "goodBannerImgUrl":[
                                                "http://www.hs1105.com/static/upload/product_images/1551434013-5741.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551434013-8876.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551434013-7525.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551434014-0076.png"
                                        ],
                                        "goodDetailImgUrl":[
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-9910.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-0668.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-7399.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-2511.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-4419.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-3871.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-4064.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-0410.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434014-3214.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434015-8725.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434015-0155.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434015-6649.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434015-1505.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434015-4878.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434015-8338.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551434015-8492.png"
                                        ],
                                        "goodPrice": 36.80,
                                        "oldPrice": "",
                                        "soldOutNum": 23,
                                        "isHotSold": 0,
                                        "goodSpec": [
                                                {
                                                        "specId": 1,
                                                        "spec": "黑色",
                                                        "isChose": 1
                                                },
                                                {
                                                        "specId": 2,
                                                        "spec": "棕色",
                                                        "isChose": 0
                                                }
                                        ],
                                        "wnnaBuyNum": 1,
                                        "goodServicesData": ["七天无理由退换货"],
                                        "stockNum": 8,
                                        "isSelected": true
                                },
                                {
                                        "goodId": 20,
                                        "goodType": "wrap",
                                        "goodName": "休闲男包单肩包男士韩版男式斜跨包竖款潮流商务包",
                                        "goodDetailMsg":"青春的路上充满了彷徨。青春的热血在我们的身体中流淌，叛逆的力量在沉默中爆发。叛逆、嚣张、标新立异...使我们的标识。我们渴望成长，渴望挣脱种种的束缚，却又羽翼未丰。我们渴望能独当一面，渴望被认可，却又能力不足。我们有满腔的激情与理想，可又无法释放。于是，我们纷纷发表独立宣言，希望得到成人世界的认可，我们纷纷反抗，希望挣脱束缚。我们徘徊于梦想与堕落的边缘，不知路在何方。",
                                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551435152-5351.png",
                                        "goodBannerImgUrl":[
                                                "http://www.hs1105.com/static/upload/product_images/1551435152-5351.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551435152-0729.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551435152-9208.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551435152-4837.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551435152-5774.png",
                                                "http://www.hs1105.com/static/upload/product_images/1551435153-5657.png"
                                        ],
                                        "goodDetailImgUrl":[
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-6937.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-5650.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-0011.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-8407.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-7161.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-9084.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-7693.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-2419.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-4469.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-1192.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-2131.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-5393.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-5544.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-6394.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435592-6812.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435592-7406.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435592-0585.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435592-9748.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435592-5356.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-8486.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-1483.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-5881.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-6934.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-4314.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-9098.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-7462.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435593-7295.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435594-6717.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435594-1017.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435594-8985.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435594-9193.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435594-5174.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-6503.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-3921.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-2682.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-4875.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-2067.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-2048.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-2463.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-4210.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-7241.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-2624.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-2167.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435683-9432.png",
                                                "http://www.hs1105.com/static/upload/details_images/1551435153-0011.png"
                                        ],
                                        "goodPrice": 88.68,
                                        "oldPrice": "",
                                        "soldOutNum": 15,
                                        "isHotSold": 0,
                                        "goodSpec": [
                                                {
                                                        "specId": 1,
                                                        "spec": "商务版深啡色",
                                                        "isChose": 1
                                                },
                                                {
                                                        "specId": 2,
                                                        "spec": "商务版浅啡色",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 3,
                                                        "spec": "商务版黑色",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 4,
                                                        "spec": "横款手提版浅啡色",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 5,
                                                        "spec": "横款手提版黑色",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 6,
                                                        "spec": "竖款无手提版黑色",
                                                        "isChose": 0
                                                },
                                                {
                                                        "specId": 7,
                                                        "spec": "竖款无手提浅啡色",
                                                        "isChose": 0
                                                }
                                        ],
                                        "wnnaBuyNum": 1,
                                        "goodServicesData": ["七天无理由退换"],
                                        "stockNum": 8,
                                        "isSelected": true
                                },

                           {
                                   "goodId": 21,
                                   "goodType": "shose",
                                   "goodName": "时尚滑板休闲鞋个性时尚帆布鞋2019新品潮流厚底板鞋时尚百搭单鞋",
                                   "goodDetailMsg":"火焰商城年轻时尚男鞋，穿出个性，走出姿态！时尚滑板休闲鞋个性时尚帆布鞋2019新品潮流厚底板鞋时尚百搭单鞋",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551879469-9698.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551879469-9698.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551879469-2437.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551879469-6663.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1553009821-3780.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553009822-2814.png"
                                   ],
                                   "goodPrice": 49.99,
                                   "oldPrice": "",
                                   "soldOutNum": 18,
                                   "isHotSold": 1,
                                   "goodSpec": [
                                            {
                                                   "specId": 1,
                                                   "spec": "白黑色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "白黑色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "白黑色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "白黑色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "白黑色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 6,
                                                   "spec": "白黑色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 7,
                                                   "spec": "白色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 8,
                                                   "spec": "白色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 9,
                                                   "spec": "白色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 10,
                                                   "spec": "白色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 11,
                                                   "spec": "白色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 12,
                                                   "spec": "白色 44",
                                                   "isChose": 0
                                           }
                                   ], 
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": [],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 22,
                                   "goodType": "shose",
                                   "goodName": "ins超火鞋子春季新款运动鞋男韩版百搭休闲鞋老爹鞋悟道跑步男鞋",
                                   "goodDetailMsg":"火焰商城年轻时尚男鞋，穿出个性，走出姿态！ins超火鞋子春季新款运动鞋男韩版百搭休闲鞋老爹鞋悟道跑步男鞋",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551879693-2143.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551879693-2143.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551879693-6517.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551879693-3724.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-3957.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-7814.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-4557.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-6541.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-6988.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-5077.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-1122.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-9003.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-0617.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-4329.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-9775.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-2179.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879695-1577.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879695-6557.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879695-7707.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879695-7117.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879695-8253.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-7630.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879695-6725.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-2197.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-4156.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-2629.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-1034.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551879694-1887.png"
                                   ],
                                   "goodPrice": 68.88,
                                   "oldPrice": "",
                                   "soldOutNum": 23,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "白黑色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "白黑色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "白黑色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "白黑色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "白黑色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 6,
                                                   "spec": "白黑色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 7,
                                                   "spec": "白色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 8,
                                                   "spec": "白色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 9,
                                                   "spec": "白色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 10,
                                                   "spec": "白色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 11,
                                                   "spec": "白色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 12,
                                                   "spec": "白色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 13,
                                                   "spec": "白红色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 14,
                                                   "spec": "白红色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 15,
                                                   "spec": "白红色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 16,
                                                   "spec": "白红色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 17,
                                                   "spec": "白红色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 18,
                                                   "spec": "白红色 44",
                                                   "isChose": 0
                                           }
                                   ],
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": [],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 23,
                                   "goodType": "shose",
                                   "goodName": "2019春夏季男士休闲鞋韩版布鞋英伦板鞋男鞋印花男鞋",
                                   "goodDetailMsg":"火焰商城年轻时尚男鞋，穿出个性，走出姿态！2019春夏季男士休闲鞋韩版布鞋英伦板鞋男鞋印花男鞋",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551877694-1858.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551877694-1858.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551877694-5248.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1553009016-3808.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553009017-8772.png"
                                   ],
                                   "goodPrice": 38.99,
                                   "oldPrice": "",
                                   "soldOutNum": 32,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "黑色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "黑色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "黑色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "黑色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "黑色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 6,
                                                   "spec": "黑色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 7,
                                                   "spec": "白色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 8,
                                                   "spec": "白色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 9,
                                                   "spec": "白色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 10,
                                                   "spec": "白色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 11,
                                                   "spec": "白色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 12,
                                                   "spec": "白色 44",
                                                   "isChose": 0
                                           }
                                   ],
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": [],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 24,
                                   "goodType": "shose",
                                   "goodName": "2019新款男鞋子韩版潮流秋季帆布鞋休闲男士板鞋大码布鞋冬季潮鞋",
                                   "goodDetailMsg":"火焰商城年轻时尚男鞋，穿出个性，走出姿态！2019新款男鞋子韩版潮流秋季帆布鞋休闲男士板鞋大码布鞋冬季潮鞋",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551880424-6358.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551880424-6358.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551880424-8864.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551880424-5383.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551880424-9248.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1553009965-4974.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553009965-5830.png"
                                   ],
                                   "goodPrice": 78.99,
                                   "oldPrice": "",
                                   "soldOutNum": 16,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "黑橘色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "黑橘色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "黑橘色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "黑橘色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "黑橘色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 6,
                                                   "spec": "黑橘色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 7,
                                                   "spec": "黑白色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 8,
                                                   "spec": "黑白色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 9,
                                                   "spec": "黑白色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 10,
                                                   "spec": "黑白色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 11,
                                                   "spec": "黑白色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 12,
                                                   "spec": "黑白色 44",
                                                   "isChose": 0
                                           }
                                   ],
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": [],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 25,
                                   "goodType": "shose",
                                   "goodName": "潮品2019春夏季韩版潮流青少年男鞋子时尚百搭小白鞋学生平底板鞋",
                                   "goodDetailMsg":"火焰商城年轻时尚男鞋，穿出个性，走出姿态！潮品2019春夏季韩版潮流青少年男鞋子时尚百搭小白鞋学生平底板鞋",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551881027-0620.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551881027-0620.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551881027-5252.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551881027-8792.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1553010193-6711.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553010193-4764.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553010193-1229.png"
                                   ],
                                   "goodPrice": 59.99,
                                   "oldPrice": "68.00",
                                   "soldOutNum": 13,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "spec": "驼色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "spec": "驼色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "驼色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "驼色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "驼色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "驼色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "米色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "spec": "米色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "米色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "米色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "米色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "米色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "白色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "spec": "白色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "白色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "白色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "白色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "spec": "白色 44",
                                                   "isChose": 0
                                           }
                                   ],
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": [],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 26,
                                   "goodType": "shose",
                                   "goodName": "春夏2019新款男士男鞋韩版时尚学生板鞋休闲潮鞋低帮运动鞋子",
                                   "goodDetailMsg":"火焰商城年轻时尚男鞋，穿出个性，走出姿态！春夏2019新款男士男鞋韩版时尚学生板鞋休闲潮鞋低帮运动鞋子",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551877278-2049.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551877278-2049.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551877279-2931.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551877279-7297.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1551877279-1740.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551877279-8654.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551877279-6369.png",
                                           "http://www.hs1105.com/static/upload/details_images/1551877279-5070.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553008562-3903.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553008562-7065.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553008563-8825.png"
                                   ],
                                   "goodPrice": 46.88,
                                   "oldPrice": "",
                                   "soldOutNum": 9,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "驼色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "驼色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "驼色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "驼色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "驼色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 6,
                                                   "spec": "驼色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 7,
                                                   "spec": "驼色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 8,
                                                   "spec": "驼色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 9,
                                                   "spec": "驼色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 10,
                                                   "spec": "驼色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 11,
                                                   "spec": "驼色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 12,
                                                   "spec": "驼色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 13,
                                                   "spec": "米色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 14,
                                                   "spec": "米色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 15,
                                                   "spec": "米色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 16,
                                                   "spec": "米色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 17,
                                                   "spec": "米色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 18,
                                                   "spec": "米色 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 19,
                                                   "spec": "白色 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 20,
                                                   "spec": "白色 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 21,
                                                   "spec": "白色 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 22,
                                                   "spec": "白色 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 23,
                                                   "spec": "白色 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 24,
                                                   "spec": "白色 44",
                                                   "isChose": 0
                                           }
                                   ],
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": [],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                                   "goodId": 27,
                                   "goodType": "shose",
                                   "goodName": "超火低帮男鞋休闲运动小白鞋子男板鞋韩版潮英伦百搭帆布鞋春夏季",
                                   "goodDetailMsg": "火焰商城年轻时尚男鞋，穿出个性，走出姿态！超火低帮男鞋休闲运动小白鞋子男板鞋韩版潮英伦百搭帆布鞋春夏季",
                                   "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551878485-0810.png",
                                   "goodBannerImgUrl":[
                                           "http://www.hs1105.com/static/upload/product_images/1551878485-0810.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551880858-8664.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551880858-0138.png",
                                           "http://www.hs1105.com/static/upload/product_images/1551880858-0035.png"
                                   ],
                                   "goodDetailImgUrl":[
                                           "http://www.hs1105.com/static/upload/details_images/1553010128-4490.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553010127-8914.png",
                                           "http://www.hs1105.com/static/upload/details_images/1553010129-9488.png"
                                   ],
                                   "goodPrice":56.99,
                                   "oldPrice": "78.00",
                                   "soldOutNum": 12,
                                   "isHotSold": 0,
                                   "goodSpec": [
                                           {
                                                   "specId": 1,
                                                   "spec": "黑红 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 2,
                                                   "spec": "黑红 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 3,
                                                   "spec": "黑红 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 4,
                                                   "spec": "黑红 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 5,
                                                   "spec": "黑红 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 6,
                                                   "spec": "黑红 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 7,
                                                   "spec": "黑蓝 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 8,
                                                   "spec": "黑蓝 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 9,
                                                   "spec": "黑蓝 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 10,
                                                   "spec": "黑蓝 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 11,
                                                   "spec": "黑蓝 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 12,
                                                   "spec": "黑蓝 44",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 13,
                                                   "spec": "黑白 39",
                                                   "isChose": 1
                                           },
                                           {
                                                   "specId": 14,
                                                   "spec": "黑白 40",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 15,
                                                   "spec": "黑白 41",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 16,
                                                   "spec": "黑白 42",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 17,
                                                   "spec": "黑白 43",
                                                   "isChose": 0
                                           },
                                           {
                                                   "specId": 18,
                                                   "spec": "黑白 44",
                                                   "isChose": 0
                                           }
                                   ],
                                   "wnnaBuyNum": 1,
                                   "goodServicesData": [],
                                   "stockNum": 8,
                                   "isSelected": true
                           },
                           {
                        "goodId": 28,
                        "goodType": "shose",
                        "goodName": "春夏2019新款男士男鞋韩版时尚学生板鞋休闲潮鞋低帮运动鞋子",
                        "goodDetailMsg": "火焰商城年轻时尚男鞋，穿出个性，走出姿态！春夏2019新款男士男鞋韩版时尚学生板鞋休闲潮鞋低帮运动鞋子",
                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551880858-1839.png",
                        "goodBannerImgUrl": [
                                        "http://www.hs1105.com/static/upload/product_images/1551880858-1839.png",
                                        "http://www.hs1105.com/static/upload/product_images/1551878485-1631.png",
                                        "http://www.hs1105.com/static/upload/product_images/1551878485-1253.png",
                                        "http://www.hs1105.com/static/upload/product_images/1551878485-3610.png"
                                   ],
                        "goodDetailImgUrl":[
                                "http://www.hs1105.com/static/upload/details_images/1553009450-0729.png",
                                "http://www.hs1105.com/static/upload/details_images/1553009452-0309.png",
                                "http://www.hs1105.com/static/upload/details_images/1553009451-8060.png",
                                "http://www.hs1105.com/static/upload/details_images/1553009453-5880.png"
                        ],
                        "goodPrice": 78.99,
                        "oldPrice": "",
                        "soldOutNum":16,
                        "isHotSold": 0,
                        "goodSpec": [
                                {
                                        "specId": 1,
                                        "spec": "黑红 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 2,
                                        "spec": "黑红 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 3,
                                        "spec": "黑红 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 4,
                                        "spec": "黑红 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 5,
                                        "spec": "黑红 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 6,
                                        "spec": "黑红 44",
                                        "isChose": 0
                                },
                                {
                                        "specId": 7,
                                        "spec": "黑蓝 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 8,
                                        "spec": "黑蓝 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 9,
                                        "spec": "黑蓝 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 10,
                                        "spec": "黑蓝 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 11,
                                        "spec": "黑蓝 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 12,
                                        "spec": "黑蓝 44",
                                        "isChose": 0
                                },
                                {
                                        "specId": 13,
                                        "spec": "黑白 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 14,
                                        "spec": "黑白 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 15,
                                        "spec": "黑白 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 16,
                                        "spec": "黑白 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 17,
                                        "spec": "黑白 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 18,
                                        "spec": "黑白 44",
                                        "isChose": 0
                                }
                        ],
                        "wnnaBuyNum": 1,
                        "goodServicesData": ["七天免费退换货", "平台商品包邮"],
                        "stockNum": 8,
                        "isSelected": true
                },
                {
                        "goodId": 29,
                        "goodType": "shose",
                        "goodName": "棉麻布鞋时尚百搭超板鞋2019新品单鞋浅口系带时尚潮男鞋",
                        "goodDetailMsg": "火焰商城年轻时尚男鞋，穿出个性，走出姿态！棉麻布鞋时尚百搭超板鞋2019新品单鞋浅口系带时尚潮男鞋",
                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551879203-8620.png",
                        "goodBannerImgUrl":[
                                "http://www.hs1105.com/static/upload/product_images/1551879203-8620.png",
                                "http://www.hs1105.com/static/upload/product_images/1551879204-3615.png",
                                "http://www.hs1105.com/static/upload/product_images/1551879204-9782.png"
                        ],
                        "goodDetailImgUrl":[
                                "http://www.hs1105.com/static/upload/details_images/1553009749-4096.png",
                                "http://www.hs1105.com/static/upload/details_images/1553009751-8550.png",
                                "http://www.hs1105.com/static/upload/details_images/1553009752-7475.png"
                        ],
                        "goodPrice": 49.99,
                        "oldPrice": "",
                        "soldOutNum": 6,
                        "isHotSold": 0,
                        "goodSpec": [
                                {
                                        "specId": 1,
                                        "spec": "黑色 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 2,
                                        "spec": "黑色 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 3,
                                        "spec": "黑色 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 4,
                                        "spec": "黑色 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 5,
                                        "spec": "黑色 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 6,
                                        "spec": "黑色 44",
                                        "isChose": 0
                                },
                                {
                                        "specId": 7,
                                        "spec": "绿色 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 8,
                                        "spec": "绿色 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 9,
                                        "spec": "绿色 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 10,
                                        "spec": "绿色 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 11,
                                        "spec": "绿色 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 12,
                                        "spec": "绿色 44",
                                        "isChose": 0
                                },
                                {
                                        "specId": 13,
                                        "spec": "红色 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 14,
                                        "spec": "红色 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 15,
                                        "spec": "红色 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 16,
                                        "spec": "红色 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 17,
                                        "spec": "红色 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 18,
                                        "spec": "红色 44",
                                        "isChose": 0
                                },
                                {
                                        "specId": 19,
                                        "spec": "白色 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 20,
                                        "spec": "白色 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 21,
                                        "spec": "白色 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 22,
                                        "spec": "白色 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 23,
                                        "spec": "白色 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 24,
                                        "spec": "白色 44",
                                        "isChose": 0
                                }
                        ],
                        "wnnaBuyNum": 1,
                        "goodServicesData": [],
                        "stockNum": 8,
                        "isSelected": true
                },
                {
                        "goodId": 30,
                        "goodType": "shose",
                        "goodName": "2019春夏季网布透气男士学生拼色滑板鞋子休闲运动旅游潮流系带男鞋",
                        "goodDetailMsg": "火焰商城年轻时尚男鞋，穿出个性，走出姿态！2019春夏季网布透气男士学生拼色滑板鞋子休闲运动旅游潮流系带男鞋",
                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551881607-7756.png",
                        "goodBannerImgUrl":[
                                "http://www.hs1105.com/static/upload/product_images/1551881607-7756.png",
                                "http://www.hs1105.com/static/upload/product_images/1551881607-6917.png",
                                "http://www.hs1105.com/static/upload/product_images/1551881607-5799.png",
                                "http://www.hs1105.com/static/upload/product_images/1551881607-8713.png",
                                "http://www.hs1105.com/static/upload/product_images/1551881607-2233.png",
                                "http://www.hs1105.com/static/upload/product_images/1551881608-6939.png"
                        ],
                        "goodDetailImgUrl":[
                                "http://www.hs1105.com/static/upload/details_images/1553010291-5046.png",
                                "http://www.hs1105.com/static/upload/details_images/1553010290-0189.png",
                                "http://www.hs1105.com/static/upload/details_images/1553010292-6452.png"
                        ],
                        "goodPrice": 89.99,
                        "oldPrice": "",
                        "soldOutNum": 16,
                        "isHotSold": 0,
                        "goodSpec": [
                                {
                                        "specId": 1,
                                        "spec": "米色 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 2,
                                        "spec": "米色 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 3,
                                        "spec": "米色 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 4,
                                        "spec": "米色 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 5,
                                        "spec": "米色 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 6,
                                        "spec": "米色 44",
                                        "isChose": 0
                                },
                                {
                                        "specId": 7,
                                        "spec": "白色 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 8,
                                        "spec": "白色 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 9,
                                        "spec": "白色 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 10,
                                        "spec": "白色 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 11,
                                        "spec": "白色 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 12,
                                        "spec": "白色 44",
                                        "isChose": 0
                                },
                                {
                                        "specId": 13,
                                        "spec": "驼色 39",
                                        "isChose": 1
                                },
                                {
                                        "specId": 14,
                                        "spec": "驼色 40",
                                        "isChose": 0
                                },
                                {
                                        "specId": 15,
                                        "spec": "驼色 41",
                                        "isChose": 0
                                },
                                {
                                        "specId": 16,
                                        "spec": "驼色 42",
                                        "isChose": 0
                                },
                                {
                                        "specId": 17,
                                        "spec": "驼色 43",
                                        "isChose": 0
                                },
                                {
                                        "specId": 18,
                                        "spec": "驼色 44",
                                        "isChose": 0
                                }
                        ],
                        "wnnaBuyNum": 1,
                        "goodServicesData": [],
                        "stockNum": 8,
                        "isSelected": true
                }
    ],
        wanaBuyArr:[],
        wanaBuyArrr:[
                {
                        "goodId": 1,
                        "goodType": "lighter",
                        "goodName": "新款时尚小巧便携式USB充电广告打火机电子点烟器",
                        "goodDetailMsg": "颜力觉醒 时尚之作！合金外壳，时尚轻便！改变，永无止境！双面钨丝，USB充电，锂电池，无名火更安全，户外防风，小巧轻便，循环充电，静音点烟！",
                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551507052-5299.png",
                        "goodBannerImgUrl": [
                                "http://www.hs1105.com/static/upload/product_images/1551507052-5299.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507052-8462.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-8525.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-4127.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-7148.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-0440.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-6088.png"
                        ],
                        "goodDetailImgUrl": [
                                "http://www.hs1105.com/static/upload/details_images/1551507053-5150.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-3592.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-0558.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-1745.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-9636.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-8758.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-2099.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-1776.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-8372.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-9649.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-2984.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-7206.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-8337.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-2317.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-3471.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-8438.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-1224.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513043-9335.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513043-7390.png"
                        ],
                        "goodPrice": 18.88,
                        "oldPrice": "26.00",
                        "soldOutNum": 232,
                        "isHotSold": 1,
                        "wnnaBuyNum": 1,
                        "goodSpec": [
                                {
                                        "specId": 1,
                                        "spec": "黑冰",
                                        "isChose": 1
                                },
                                {
                                        "specId": 2,
                                        "spec": "蓝冰",
                                        "isChose": 0
                                },
                                {
                                        "specId": 3,
                                        "spec": "金冰",
                                        "isChose": 0
                                },
                                {
                                        "specId": 4,
                                        "spec": "银冰",
                                        "isChose": 0
                                },
                                {
                                        "specId": 5,
                                        "spec": "红冰",
                                        "isChose": 0
                                },
                        ],
                        "goodServicesData": ["七天无理由退换", "提供优质售后保障"],
                        "stockNum": 8,
                        "isSelected": true
                },
                {
                        "goodId": 1,
                        "goodType": "lighter",
                        "goodName": "新款时尚小巧便携式USB充电广告打火机电子点烟器",
                        "goodDetailMsg": "颜力觉醒 时尚之作！合金外壳，时尚轻便！改变，永无止境！双面钨丝，USB充电，锂电池，无名火更安全，户外防风，小巧轻便，循环充电，静音点烟！",
                        "goodImgUrl": "http://www.hs1105.com/static/upload/product_images/1551507052-5299.png",
                        "goodBannerImgUrl": [
                                "http://www.hs1105.com/static/upload/product_images/1551507052-5299.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507052-8462.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-8525.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-4127.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-7148.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-0440.png",
                                "http://www.hs1105.com/static/upload/product_images/1551507053-6088.png"
                        ],
                        "goodDetailImgUrl": [
                                "http://www.hs1105.com/static/upload/details_images/1551507053-5150.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-3592.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-0558.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-1745.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507053-9636.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-8758.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-2099.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-1776.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-8372.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-9649.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-2984.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-7206.png",
                                "http://www.hs1105.com/static/upload/details_images/1551507054-8337.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-2317.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-3471.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-8438.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513042-1224.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513043-9335.png",
                                "http://www.hs1105.com/static/upload/details_images/1551513043-7390.png"
                        ],
                        "goodPrice": 18.88,
                        "oldPrice": "26.00",
                        "soldOutNum": 232,
                        "isHotSold": 1,
                        "wnnaBuyNum": 1,
                        "goodSpec": [
                                {
                                        "specId": 1,
                                        "spec": "黑冰",
                                        "isChose": 1
                                },
                                {
                                        "specId": 2,
                                        "spec": "蓝冰",
                                        "isChose": 0
                                },
                                {
                                        "specId": 3,
                                        "spec": "金冰",
                                        "isChose": 0
                                },
                                {
                                        "specId": 4,
                                        "spec": "银冰",
                                        "isChose": 0
                                },
                                {
                                        "specId": 5,
                                        "spec": "红冰",
                                        "isChose": 0
                                },
                        ],
                        "goodServicesData": ["七天无理由退换", "提供优质售后保障"],
                        "stockNum": 8,
                        "isSelected": true
                }
        ],
        buyRightNowArr:[],
        // receiverInfo:{},
        receiverInfo:{
                "name":"岑军",
                "phone":"18333333333",
                "address":"重庆涌上是打发"
        }
  }
})