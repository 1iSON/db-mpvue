/**
 * @description 搜索
 * @author blues
 */
//获取应用实例
const app = getApp();
Page({
    data: {
        cdn: app.globalData.CDN
    },
    onLoad: function () {
    },

    onShow() {},

    // /获取首页数据分类
    async getClassify() {
        const res = await this.$API('school/type', 'get', {});
        if (res.code === 200) {
        } else {
            wx.showToast({
                icon: 'loading',
                title: res.msg,
                duration: 1500
            })
        }
    },

    // 页面上拉触底事件的处理函数
    onReachBottom: function () {
        if (!this.data.isFooter) {
            this.getArticleList(this.data.type)
        }
    }

})