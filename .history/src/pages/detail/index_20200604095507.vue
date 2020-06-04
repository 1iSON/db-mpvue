<template>
  <div v-if="isData">
    <div class="detailPage">
      <img :src="detailData.images.small" class="coverLargeImg"/>
      <img :src="detailData.images.small" class="coverMiniImg"/>
      <div class="filmName">{{detailData.original_title}}(<span>{{detailData.year}}</span>)</div>
      <div class="filmInfo">
        <span class="l-text">评分：</span>
        <div class="r-text">
          <span class="mar-10">{{detailData.rating.average}}</span>
        </div>
      </div>
      <div class="filmInfo">
        <span class="l-text">导演：</span>
        <div class="r-text">
          <span class="mar-10">{{detailData.directors[0].name}}</span>
        </div>
      </div>
      <div class="filmInfo">
        <span class="l-text">主演：</span>
        <div class="r-text">
          <span class="mar-10" v-for="(item,index) in detailData.casts" :key="index">{{item.name}}</span>
        </div>
      </div>
      <div class="summaryInfos">
        <span class="summaryTitle">摘要:</span>
        <span class="summaryText">{{detailData.summary}}</span>
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
/* detailPage */
.detailPage{
  padding:0 10%;
  margin:20px 0;
}
.detailPage .coverLargeImg{
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
.detailPage .coverMiniImg{
  width: 100%;
  height: 383px;
}
.detailPage .filmName{
  text-align: center;
  margin-top: 5px;
  color: #232323;
  font-weight: 600;
}
.detailPage .filmInfo{
  font-size: 14px;
  color: #888;
  display: flex;
}
.detailPage  .filmInfo .l-text{
  width: 50px;
  display: inline-block;
  text-align: left;
}
.detailPage  .filmInfo .r-text{
  flex: 1
}
.detailPage  .filmInfo .mar-10{
  margin-right: 10px;
}
/* summaryInfos */
.summaryInfos{
  margin-top: 30px;
}
.summaryInfos .summaryTitle{
  font-size: 18px;
  color: #232323;
  display: block;
  font-weight: bold;
}
.summaryInfos .summaryText{
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #666;
  text-indent: 2em!important;
}
</style>
