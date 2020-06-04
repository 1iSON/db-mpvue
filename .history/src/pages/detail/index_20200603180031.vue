<template>
  <div>
    <div class="item">
      <img :src="detailArr.images.small" class="posterBg"/>
      <img :src="detailArr.images.small" class="poster"/>
      <div class="filmName">{{detailArr.original_title}}(<span>{{detailArr.year}}</span>)</div>
      <div class="score">评分:<span>{{detailArr.rating.average}}</span></div>
      <div class="director">导演:<span>&nbsp;{{detailArr.directors[0].name}}</span></div>
      <div class="act">
        <div class="acter" style="width: 40px;">主演:</div>
        <div class="acter-list">
        <span v-for="(item,index) in detailArr.casts" :key="index" style="width: 60%;">{{item.name}}&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
      <p class="tabloid">
        <span class="summaryTitle">摘要:</span>
        <span class="summary">{{detailArr.summary}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import {detail} from '../../http/api'
export default {
  data() {
    return {
      id:'',
      detailArr:''
    };
  },

  components: {

  },

  methods: {

  },
  onShow(){
    detail (this.id).then( (res) => {
      if (res){
        console.log(res, 'res')
        this.detailArr = res
        console.log(this.detailArr)
      }
    });
  },
  onUnload(){
    // console.log('这里是卸载页面了')
  },
  onLoad(options){
    console.log(options)
    this.id = options.id
  },
 created() {

  },

}
</script>

<style lang="less">
.posterBg{
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
.item{
  padding:0 10%;
  margin:20px 0;
}
.poster{
  width: 100%;
  height: 383px;
}
.item .filmName{
  text-align: center;
  margin-top: 5px;
}
.item .act{
  display: flex;
  /*justify-content: space-around;*/
  overflow: hidden;
}
.score , .director, .act{
  font-size: 14px;
  color: #888;
}
.tabloid{
  margin-top: 30px;
}
.tabloid .summaryTitle{
  font-size: 18px;
  color: #000;
  display: block;
}
.tabloid .summary{
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #666;
  text-indent: 2em!important;
}

</style>
