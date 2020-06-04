<template>
  <div v-if="isData">
    <div class="detail-top">
      <img :src="detailData.images.small" class="coverLargeImg"/>
      <img :src="detailData.images.small" class="coverMiniImg"/>
      <div class="filmName">{{detailData.original_title}}(<span>{{detailData.year}}</span>)</div>
      <div class="filmInfo">
        <span class="l-text">评分：</span>
        <span class="r-text">{{detailData.rating.average}}</span>
      </div>
      <div class="filmInfo">
        <span class="l-text">导演：</span>
        <span class="r-text">{{detailData.directors[0].name}}</span>
      </div>
      <div class="filmInfo">
        <span class="l-text">主演：</span>
        <span class="r-text" v-for="(item,index) in detailData.casts" :key="index">{{item.name}}</span>
      </div>
      <div class="detail-bottom">
        <span class="summaryTitle">摘要:</span>
        <span class="summary">{{detailData.summary}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { detail } from '../../http/api'
export default {
  data () {
    return {
      id: '',
      isData: false,
      detailData: ''
    }
  },
  components: {
  },
  methods: {
  },
  onShow () {
    detail(this.id).then((res) => {
      if (res) {
        // console.log(res, 'res')
        if (res && res !== '') {
          this.isData = true
          this.detailData = res
        }
      }
    })
  },
  onUnload () {
    // console.log('这里是卸载页面了')
  },
  onLoad (options) {
    console.log(options)
    this.id = options.id
  },
  created () {
  }

}
</script>

<style>
/* detail-top */
.detail-top{
  padding:0 10%;
  margin:20px 0;
}
.detail-top .coverLargeImg{
  position:fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  height:100%;
  width:100%;
  z-index:-1000;
  opacity:.1;
}
.detail-top .coverMiniImg{
  width: 100%;
  height: 383px;
}
.detail-top .filmName{
  text-align: center;
  margin-top: 5px;
}
.detail-top .filmInfo{
  font-size: 14px;
  color: #888;
}
.detail-top  .filmInfo .l-text{
  width: 50px;
  display: inline-block;
  text-align: left;
}
.detail-top  .filmInfo .r-text{
  margin-right: 10px;
}
/* detail-bottom */
.detail-bottom{
  margin-top: 30px;
}
.detail-bottom .summaryTitle{
  font-size: 18px;
  color: #000;
  display: block;
}
.detail-bottom .summary{
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #666;
  text-indent: 2em!important;
}
</style>
