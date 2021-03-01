/**
 * @description 详情
 * @author blues
 */
//获取应用实例
const app = getApp();
Page({
    data: {
        cdn: app.globalData.CDN,
        list: null
    },
    onLoad: function () {
    },

    onShow() {},

    onLoad: function (options) {
        this.$API('foodsApi/recipe/detail?id=' + options.id, 'get', {}).then(res => {
            if (res.state === 'success') {
                this.setData({
                    list: res.result.recipe
                })
            } else {
                wx.showToast({
                    icon: 'loading',
                    title: '服务器异常',
                    duration: 1500
                })
            }
            console.log(this.data.list.title, 'res222')
        });
    },

    onReachBottom: function () {}

})