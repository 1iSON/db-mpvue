/**
 * @description  sku
 * @author blues
 */
const app = getApp();
const API = require('../../utils/request');
Component({
    options: {
        multipleSlots: true
    },
    //  组件的属性列表
    properties: {
        searchsArr: {
            type: Object,
            value: ['','']
        }
    },
    observers: {
        "searchsArr"(data) {
            this.data.searchsArr = data
            this.getData(this.data.searchsArr)
        }
    },
    data: {
        searchsArr: [], // 学费学制选择
        resultData: [] // 返回的数据
    },
    ready() {},
    onLoad() {},
    // 组件的方法列表
    methods: {

        // 获取数据
        getData:function(arr) {
            let reqData = wx.getStorageSync('reqData') || [];
            API('school/intellect/search', 'get', {
                openid: wx.getStorageSync('openid'),
                one: reqData[0],
                two: reqData[1],
                three: reqData[2],
                four: reqData[3],
                five: reqData[4],
                six: reqData[5],
                type: arr
            }).then((res) => {
                if (res.code === 200) {
                    this.setData({
                        resultData: res.data
                    })
                } else {
                    wx.showToast({
                        icon: 'none',
                        title: res.msg,
                        duration: 1500
                    })
                }
            })
        },
        
        // tab切换院系
        change: function (e) {
            let tabIndex = "resultData" + "[" + e.currentTarget.dataset.idx + "]" + ".tabIndex"
            this.setData({
                [tabIndex]: e.currentTarget.dataset.index
            })
        },

        //  学校介绍
        schoolDetails: function(e) {
            let id = e.currentTarget.dataset.item.school_id
            wx.navigateTo({
                url: '/pages/school/school?id=' + id
            })
        },

        // 专业介绍
        goDetails: function(e) {
            let id = e.currentTarget.dataset.item.id
            wx.navigateTo({
                url: '/pages/specialty/specialty?id=' + id
            })
        }
    }
})