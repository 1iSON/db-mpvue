/**
 * @description 首页
 * @author blues
 */
const app = getApp();
Page({
    data: {
        cdn: app.globalData.CDN,
        list: [],
        isShit: false
    },
    onLoad: function () {},

    onShow() {},
    bindValue: function (e) {
        if (e.detail.value != '') {
            this.$API('foodsApi/recipe/list', 'get', {
                keyword: e.detail.value
            }).then(res => {
                if (res.state === 'success') {
                    if (res.result.list.length > 0) {
                        this.setData({
                            list: res.result.list
                        })
                    } else {
                        this.setData({
                            isShit: true
                        })
                    }
                } else {
                    wx.showToast({
                        icon: 'loading',
                        title: '服务器异常',
                        duration: 1500
                    })
                }
            });
        } else {
            this.setData({
                isShit: false,
                list: []
            })
        }
    },
    goDetail(e) {
        wx.navigateTo({
            url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id
        })
    },
    onReachBottom: function () {}

})