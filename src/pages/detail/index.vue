<template>
  <div>
    <div class="detail-page">
      <img :src="detailData.images.small" class="large-img"/>
      <img :src="detailData.images.small" class="mini-img"/>
      <div class="film-name">{{detailData.title}}</div>
      <div class="film-info">
        <span class="l-text">评分：</span>
        <div class="r-text">
          <span class="mar-10">{{detailData.average}}</span>
        </div>
      </div>
      <div class="film-info">
        <span class="l-text">导演：</span>
        <div class="r-text">
          <span class="mar-10">{{detailData.director}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { detail } from '../../http/api'
export default {
  data () {
    return {
      detailData: ''
    }
  },
  components: {},
  methods: {},
  onShow () {
    // detail(this.id).then((res) => {
    //   if (res) {
    //     // console.log(res, 'res')
    //     if (res && res !== '') {
    //       this.isData = true
    //       this.detailData = res
    //     }
    //   }
    // })
  },
  onUnload () {
    // console.log('这里是卸载页面了')
  },
  onLoad (options) {
    this.detailData = JSON.parse(options.data)
  },
  created () {}
}
</script>
<style scoped>
.detail-page {
  padding: 0 10%;
  margin: 20px 0;
}
.large-img {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1000;
  opacity: 0.1;
}
.mini-img {
  width: 100%;
  height: 383px;
}
.film-name {
  text-align: center;
  margin: 20px 0;
  color: #232323;
  font-weight: 600;
}
.film-info {
  font-size: 14px;
  color: #888;
  display: flex;
}
.film-info .l-text {
  width: 45px;
  display: inline-block;
  text-align: left;
}
.film-info .r-text {
  flex: 1;
}
.film-info .mar-10 {
  margin-right: 10px;
}
</style>
