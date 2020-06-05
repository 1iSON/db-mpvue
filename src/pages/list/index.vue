<template>
  <div class="list-page">
    <!-- 电影本周口碑榜 -->
    <div v-if="weeksData.length > 0" class="public-style">
      <span class="sp1">{{ weeksTitle }}</span>
      <div class="list" v-for="(item,index) in weeksData" :key="index" @click="moviesDetail(item)">
        <div class="list-l">
          <img :src="item.subject.images.medium" class="imgCss"/>
        </div>
        <div class="list-r">
          <p>片名：<b>{{item.subject.title}}</b></p>
          <p>排名：{{item.rank}}</p>
          <p>评分：{{item.subject.rating.average}}</p>
          <p>导演：{{item.subject.directors[0].name}}</p>
          <p>类型：{{item.subject.genres}}</p>
          <p>时长：{{item.subject.durations[0]}}</p>
          <p>年份：{{item.subject.year}}</p>
          <p></p>
        </div>
      </div>
    </div>
    <!-- 北美票房榜 -->
    <div v-if="northsData.length > 0" class="public-style">
      <span class="sp2">{{ northsTitle }}</span>
      <div class="list" v-for="(item,index) in northsData" :key="index" @click="moviesDetail(item)">
        <div class="list-l">
          <img :src="item.subject.images.medium" class="imgCss"/>
        </div>
        <div class="list-r">
          <p>片名：<b>{{item.subject.title}}</b></p>
          <p>排名：{{item.rank}}</p>
          <p>评分：{{item.subject.rating.average}}</p>
          <p>导演：{{item.subject.directors[0].name}}</p>
          <p>类型：{{item.subject.genres}}</p>
          <p>时长：{{item.subject.durations[0]}}</p>
          <p>年份：{{item.subject.year}}</p>
          <p></p>
        </div>
      </div>
    </div>
    <!-- 新片榜 -->
    <div v-if="newsData.length > 0" class="public-style">
      <span class="sp3">{{ newsTitle }}</span>
      <div class="list" v-for="(item,index) in newsData" :key="index" @click="moviesDetail(item)">
        <div class="list-l">
          <img :src="item.images.medium" class="imgCss"/>
        </div>
        <div class="list-r">
          <p>片名：<b>{{item.title}}</b></p>
          <p>排名：暂无</p>
          <p>评分：{{item.rating.average}}</p>
          <p>导演：{{item.directors[0].name}}</p>
          <p>类型：{{item.genres}}</p>
          <p>时长：{{item.durations[0]}}</p>
          <p>年份：{{item.year}}</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { weeks, norths, news } from '../../http/api'
export default {
  components: {
  },
  data () {
    return {
      weeksData: '',
      weeksTitle: '',
      northsData: '',
      northsTitle: '',
      newsData: '',
      newsTitle: ''
    }
  },
  onShow () {
    var apikey = '0df993c66c0c636e29ecbb5344252a4a' || ''
    // 电影本周口碑榜
    weeks(apikey).then((res) => {
      if (res && res.subjects.length > 0) {
        this.weeksData = res.subjects.slice(0, 3)
        this.weeksTitle = res.title
      }
    })
    // 北美票房榜
    norths(apikey).then((res) => {
      if (res && res.subjects.length > 0) {
        this.northsData = res.subjects.slice(0, 3)
        this.northsTitle = res.title
      }
    })
    // 新片榜
    news(apikey).then((res) => {
      if (res && res.subjects.length > 0) {
        this.newsData = res.subjects.slice(0, 3)
        this.newsTitle = res.title
      }
    })
  },
  mounted () {
  },
  created () {
  },
  methods: {
    moviesDetail (item) {
      // console.log(item, 'item')
      if (item && item.id) {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + item.id
        })
      } else {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + item.subject.id
        })
      }
    }
  }
}
</script>
<style scope>
.list-page {
  background: #ffffff;
  min-height: 100vh;
  padding: 10px 0;
}
.public-style{
  padding: 0 10px;
  margin-bottom: 10px;
}
.public-style span{
  padding: 2px 5px;
  color: #ffffff;
  border-radius: 6px;
  font-size: 14px;
}
.sp1{
  background: #f76978;
}
.sp2{
  background: #e88f63;
}
.sp3{
  background: #f2c474;
}
.list{
  display: flex;
  margin-top: 10px;
  background: #ffffff;
  align-items: center;
  /* box-shadow: 1px 3px 5px #999; */
  /* box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1); */
  box-shadow:0px 0px 20px rgba(0,0,0,0.06);
}
.list-l{
  width: 108px;
  height: 160px;
  background: #ddd;
}
.imgCss{
  width: 108px;
  height: 160px;
}
.list-r{
  flex: 1;
  height: 160px;
  margin-left: 10px;
}
.list-r p{
  font-size: 14px;
  color: #232323;
  height: 22px;
  line-height: 22px;
}
.list-r p b{
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
}
.isNoData{
  text-align: center;
  color: red;
  font-size: 14px;
}
</style>
