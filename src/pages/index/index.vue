<template>
  <div>
    <!--轮播图-->
    <div class="slide">
      <swiper>
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <image :src="item" mode="scaleToFill" @click='previewImage(index)'></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!--即将上映的电影-->
    <div class="coming-movie">
      <div class="coming-movie-area">{{soonData.title}}</div>
      <div class="coming-movie-item">
        <div class="coming-movie-list" v-for="(Item, index) in soonData.subjects" :key="index" @click="moviesDetail(Item)">
          <div class="coming-movie-image">
            <img :src="Item.images.large" class="img-size"/>
          </div>
          <div class="coming-movie-name">{{Item.title}}</div>
        </div>
      </div>
    </div>
    <!--新片榜的电影-->
    <div class="new-movie">
      <div class="new-movie-area">{{newData.title}}</div>
      <div class="new-movie-item">
        <div class="new-movie-list" v-for="(Item, index) in newData.subjects" :key="index" @click="moviesDetail(Item)">
          <div class="new-movie-image">
            <img :src="Item.images.large" class="img-size"/>
          </div>
          <div class="new-movie-name">{{Item.title}}</div>
        </div>
      </div>
    </div>
    <!--top250-->
    <div class="top-movie">
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
  components: {},
  methods: {
    moviesDetail (Item) {
      wx.navigateTo({
        url: '/pages/detail/main?data=' + JSON.stringify(Item)
      })
    },
    previewImage (i) {
      wx.previewImage({
        current: this.imgUrls[i], // 当前显示图片的http链接
        urls: this.imgUrls // 需要预览的图片http链接列表
      })
    }
  },
  created () {},
  mounted () {
    this.soonData = this.data.default.soonData[0]
    this.newData = this.data.default.newData[0]
    this.topData = this.data.default.topData[0]
  }
}
</script>
<style scoped>
/* 去除首页x轴滚动条 */
::-webkit-scrollbar {
  display: none;
}
/* 轮播图 */
.slide swiper {
  height: 480rpx;
}
.slide swiper image {
  height: 100%;
  width: 100%;
}
/*即将上映的电影*/
.coming-movie {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f8f9fb;
  overflow-x: auto;
  overflow-y: auto;
  padding: 10px 0;
}
.coming-movie-item {
  width: 100%;
  display: flex;
  cursor: pointer;
  font-size: 20rpx;
  background-color: #fff;
}
.coming-movie-area {
  width: 100%;
  height: 15px;
  line-height: 15px;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
}
.coming-movie-list {
  height: 180px;
  margin-right: 5px;
  text-align: center;
}
.coming-movie-image {
  width: 90px;
  height: 160px;
}
.coming-movie-image .img-size {
  width: 100%;
  height: 160px;
}
.coming-movie-name {
  width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*新片榜的电影*/
.new-movie {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f8f9fb;
  overflow-x: auto;
  overflow-y: auto;
  padding: 10px 0;
}
.new-movie-item {
  width: 100%;
  display: flex;
  cursor: pointer;
  font-size: 20rpx;
  background-color: #fff;
}
.new-movie-area {
  width: 100%;
  height: 15px;
  line-height: 15px;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
}
.new-movie-list {
  height: 180px;
  margin-right: 5px;
  text-align: center;
}
.new-movie-image {
  width: 90px;
  height: 160px;
}
.new-movie-image .img-size {
  width: 100%;
  height: 160px;
}
.new-movie-name {
  width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*top250的电影*/
.top-movie {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f8f9fb;
  overflow-x: auto;
  overflow-y: auto;
  padding: 10px 0;
}
.top250-item {
  width: 100%;
  display: flex;
  cursor: pointer;
  font-size: 20rpx;
  background-color: #fff;
}
.top250-area {
  width: 100%;
  height: 15px;
  line-height: 15px;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
}
.top250-list {
  height: 180px;
  margin-right: 5px;
  text-align: center;
}
.top250-image {
  width: 90px;
  height: 160px;
}
.top250-image .img-size {
  width: 100%;
  height: 160px;
}
.top250-name {
  width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
