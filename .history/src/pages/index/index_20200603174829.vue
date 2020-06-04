<template>
  <div>
    <!--轮播图-->
    <div class="slide">
      <swiper>
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <image :src="item" mode="scaleToFill"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!--即将上映的电影-->
    <div class="upcomingMovie">
      <div class="upcomingMovie-area">{{soonData.title}}</div>
      <div class="upcomingMovie-item">
        <div class="upcomingMovie-list" v-for="(Item, index) in soonData.subjects" :key="index" @click="moviesDetail(Item)">
          <div class="upcomingMovie-image">
            <img :src="Item.images.large" class="img-size"/>
          </div>
          <div class="upcomingMovie-name">{{Item.title}}</div>
        </div>
      </div>
    </div>
    <!--新片榜的电影-->
    <div class="newMovie">
      <div class="newMovie-area">{{newData.title}}</div>
      <div class="newMovie-item">
        <div class="newMovie-list" v-for="(Item, index) in newData.subjects" :key="index" @click="moviesDetail(Item)">
          <div class="newMovie-image">
            <img :src="Item.images.large" class="img-size"/>
          </div>
          <div class="newMovie-name">{{Item.title}}</div>
        </div>
      </div>
    </div>
    <!--top250-->
    <div class="top250Movie">
      <div class="top250-area">{{topData.title}}</div>
      <div class="top250-item">
        <div class="top250-list" v-for="(Item, index) in topData.subjects" :key="index" @click="moviesDetail(Item)">
          <div class="top250-image">
            <img :src="Item.images.large" class="img-size"/>
          </div>
          <div class="top250-name">{{Item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d'
      ],
      data: require('../../http/data.js'),
      soonData: [],
      newData: [],
      topData: []
    }
  },

  components: {
  },

  methods: {
    moviesDetail (Item) {
      console.log(Item.id, '11')
      wx.navigateTo({
        url: '/pages/detail/main?id='+ id
      })
    }
  },

  created () {
    // let app = getApp()
  },
  mounted () {
    this.soonData = this.data.default.soonData[0]
    this.newData = this.data.default.newData[0]
    this.topData = this.data.default.topData[0]
    console.log(this.soonData, '111')
  }
}
</script>

<style scoped>
  /* 轮播图 */
  .slide swiper {
    height: 480rpx;
  }

  .slide swiper image {
    height: 100%;
    width: 100%;
  }
  /*即将上映的电影*/
  .upcomingMovie {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f8f9fb;
    overflow-x: auto;
    overflow-y: auto;
    padding:10px 0;

  }
  .upcomingMovie-item {
    width: 100%;
    display: flex;
    cursor: pointer;
    font-size: 20rpx;
    background-color: #fff;
  }
  .upcomingMovie-area{
    width: 100%;
    height: 15px;
    line-height: 15px;
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
  }
  .upcomingMovie-list{
    height: 180px;
    margin-right:5px;
    text-align: center;
  }
  .upcomingMovie-image{
    width: 90px;
    height: 160px;
  }
  .upcomingMovie-image .img-size{
    width: 100%;
    height: 160px;
  }
  .upcomingMovie-name{
    width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  /*新片榜的电影*/
  .newMovie {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f8f9fb;
    overflow-x: auto;
    overflow-y: auto;
    padding:10px 0;
  }
  .newMovie-item {
    width: 100%;
    display: flex;
    cursor: pointer;
    font-size: 20rpx;
    background-color: #fff;
  }
  .newMovie-area{
    width: 100%;
    height: 15px;
    line-height: 15px;
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
  }
  .newMovie-list{
    height: 180px;
    margin-right:5px;
    text-align: center;
  }
  .newMovie-image{
    width: 90px;
    height: 160px;
  }
  .newMovie-image .img-size{
    width: 100%;
    height: 160px;
  }
  .newMovie-name{
    width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /*yop250的电影*/
  .top250Movie {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f8f9fb;
    overflow-x: auto;
    overflow-y: auto;
    padding:10px 0;
  }
  .top250-item {
    width: 100%;
    display: flex;
    cursor: pointer;
    font-size: 20rpx;
    background-color: #fff;
  }
  .top250-area{
    width: 100%;
    height: 15px;
    line-height: 15px;
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
  }
  .top250-list{
    height: 180px;
    margin-right:5px;
    text-align: center;
  }
  .top250-image{
    width: 90px;
    height: 160px;
  }
  .top250-image .img-size{
    width: 100%;
    height: 160px;
  }
  .top250-name{
    width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
