/**
 * @description 网络请求封装
 * @author  blues
 */
const apiUrl = [
    "https://zyuanyuan.com//" // 1正式
]
const request = (path, method, data) => {
    let url = apiUrl[0] + path
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            wx.showLoading({
                title: "loading…",
                duration: 5000
            });
        }, 200)
        wx.request({
            url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(request) {
                if (request.statusCode === 200) {
                    wx.hideLoading();
                    resolve(request.data)
                } else {
                    wx.hideLoading();
                    wx.showToast({
                        title: '服务器内部错误',
                        icon: "none",
                        duration: 2000,
                        mask: true,
                    })
                    reject(error.data)
                }
            },
            fail(error) {
                wx.hideLoading();
                wx.showToast({
                    title: '服务器内部错误',
                    icon: "none",
                    duration: 2000,
                    mask: true,
                })
                reject(error.data)
            },
            complete(v) {
                clearTimeout(timer);
            }
        })
    })
}

module.exports = request