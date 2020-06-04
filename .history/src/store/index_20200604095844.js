import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  name: '1iSON',
  userInfo: {},
  loginMiniData: {} // 登录接口返回的数据
}
const mutations = {
}

const actions = {
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store
