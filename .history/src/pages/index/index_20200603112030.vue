<template>
  <div>
    <div class="container">

      <!--輪播圖-->
      <div class="slide">
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" circular>
          <block v-for="(item, index) in imgUrls"  :key="index">
            <swiper-item>
              <image :src="item.url" class="slide-image" mode="widthFix" @click='previewImage'/>
            </swiper-item>
          </block>
        </swiper>
      </div>

      <!--北京地區電影-->
      <!-- <div class="movies">
        <div class="movies-area">{{nowMovieData.title}}</div>
          <div class="movies-item">
              <div class="movies-list" v-for="(Item, index) in nowMovieData.subjects" :key="index" @click="moviesDetail(Item)">
                  <div class="movies-image">
                    <img :src="Item.images.large" class="img-size"/>
                  </div>
                  <div class="movies-name">{{Item.title}}</div>
              </div>
          </div>

      </div> -->

      <!--即将上映的电影-->
      <div class="upcomingMovie">
        <div class="upcomingMovie-area">{{upcomingData.title}}</div>
        <div class="upcomingMovie-item">
          <div class="upcomingMovie-list" v-for="(Item, index) in upcomingData.subjects" :key="index" @click="moviesDetail(Item)">
            <div class="upcomingMovie-image">
              <img :src="Item.images.large" class="img-size"/>
            </div>
            <div class="upcomingMovie-name">{{Item.title}}</div>
          </div>
        </div>
      </div>

      <!--新片榜的电影-->
      <div class="newMovie">
        <div class="newMovie-area">{{newMovieData.title}}</div>
        <div class="newMovie-item">
          <div class="newMovie-list" v-for="(Item, index) in newMovieData.subjects" :key="index" @click="moviesDetail(Item)">
            <div class="newMovie-image">
              <img :src="Item.images.large" class="img-size"/>
            </div>
            <div class="newMovie-name">{{Item.title}}</div>
          </div>
        </div>
      </div>

      <!--top250-->
      <div class="top250Movie">
        <div class="top250-area">{{top250Data.title}}</div>
        <div class="top250-item">
          <div class="top250-list" v-for="(Item, index) in top250Data.subjects" :key="index" @click="moviesDetail(Item)">
            <div class="top250-image">
              <img :src="Item.images.large" class="img-size"/>
            </div>
            <div class="top250-name">{{Item.title}}</div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
  import nowMovieData from '../../assets/nowMovie.js' // 正在上映
  import upcomingData from '../../assets/upcomingMovie.js' // 即将上映
  import newMovieData from '../../assets/newMovie.js' // 新片榜的电影
  import top250Data from '../../assets/top250Movie.js' // top250

export default {
  data() {
    return {
      imgUrls: [
        {
          url: require('../../../static/image/cathy/cathy00.jpg')
        },
        {
          url: require('../../../static/image/cathy/cathy01.jpg')
        },
        {
          url: require('../../../static/image/cathy/cathy02.jpg')
        }
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      nowMovieData: null, // 正在上映
      upcomingData: null, // 即将上映
      newMovieData: null, // 新片榜的电影
      top250Data: null // top250
    };
  },
  components: {

  },
  methods: {
    moviesDetail(Item){
      var id = Item.id;
      // console.log(id);
      wx.navigateTo({
        url: '/pages/item/main'
      })
      wx.setStorage({
        key: "itemData",
        data: Item
      })
    },
    previewImage(e){
      // console.log(e);
      console.log(this.imgUrls);
      wx.previewImage({
        current: this.imgUrls,    // 当前显示图片的http链接
        urls: this.imgUrls     // 需要预览的图片http链接列表
      })
    }
  },
  mounted(){
  },
  onLoad(){

  },
  created() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1500)
    this.nowMovieData = nowMovieData.data[0]
    this.upcomingData = upcomingData.data[0]
    this.newMovieData = newMovieData.data[0]
    this.top250Data = top250Data.data[0]
  },
  onShow(){

  },
};
</script>

<style lang="less">
  .slide swiper {
    height: 480rpx;
  }

  .slide swiper image {
    height: 100%;
    width: 100%;
  }

  /*北京地區電影*/
  .movies {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f8f9fb;
    overflow-x: auto;
    overflow-y: auto;
    padding:10px 0;
  }
  .movies-item {
    width: 100%;
    display: flex;
    cursor: pointer;
    font-size: 20rpx;
    background-color: #fff;
  }
  .movies-area{
    width: 100%;
    height: 15px;
    line-height: 15px;
    padding: 10px;
    font-size: 12px;
  }
  .movies-list{
    height: 180px;
    margin-right:5px;
    text-align: center;
  }
  .movies-image{
    width: 90px;
    height: 160px;
  }
  .movies-image .img-size{
    width: 100%;
    height: 160px;
  }
  .movies-name{
    width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
