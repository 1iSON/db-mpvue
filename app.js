/**
 * @description 入口及公共挂载
 * @author Jeff.Guo
 * */
const $API = require('./utils/request');
App({
    onLaunch: function () {

        this.enhancePage();
    
        this.globalShare()

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
                            // console.log(res, '已经授权信息');
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

        /**
         * @description 获取系统状态栏信息
         * @author Jeff.Guo
         * */
        wx.getSystemInfo({
            success: e => {
                this.globalData.StatusBar = e.statusBarHeight;
                let capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    this.globalData.Custom = capsule;
                    this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                } else {
                    this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        })
    },

    /**
    * @description 设置全局分享方法
    * @author Blues.Li
    * */
    globalShare() {
        wx.onAppRoute(res => {
            const pages = getCurrentPages()
            const view = pages[pages.length - 1]
            // console.log(view, 'view')
            // 显示当前页面的转发按钮
            wx.showShareMenu({
                withShareTicket: true
            })
            view.onShareAppMessage = function () {
                let sharePage = view.route + "?id=" + view.data.id || ''
                if (view.route === "pages/search/search" || view.route === "pages/dataPack/dataPack") {
                    sharePage = "pages/index/index"
                } else if (view.route === "pages/evaluating/evaluating" || view.route === "pages/scheme/scheme" || view.route === "pages/break/break") {
                    sharePage = "pages/mapping/mapping"
                }
                return {
                    title: view.data.shareTxt,
                    imageUrl: view.data.shareUrl,
                    path: sharePage
                }
            }
        })
    },

    // 增强Page能力，小程序不支持prototype拓展
    enhancePage() {
        const oPage = Page;
        Page = config => oPage(Object.assign(config, {
            $API,
        }));
    },

    globalData: {
        userInfo: null,
        // cdn前缀
        CDN: 'http://cache.galaxy-immi.com/cts/mp/'
    }
})