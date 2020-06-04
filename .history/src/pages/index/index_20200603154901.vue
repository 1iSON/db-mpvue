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
    <!-- <div class="upcomingMovie">
      <div class="upcomingMovie-area">{{upcomingData.title}}</div>
      <div class="upcomingMovie-item">
        <div class="upcomingMovie-list" v-for="(Item, index) in upcomingData.subjects" :key="index" @click="moviesDetail(Item)">
          <div class="upcomingMovie-image">
            <img :src="Item.images.large" class="img-size"/>
          </div>
          <div class="upcomingMovie-name">{{Item.title}}</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { filmsData } from '@/http/data'

export default {
  data () {
    return {
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d'
      ]
    }
  },

  components: {
  },

  methods: {
  },

  created () {
    // let app = getApp()
    console.log(this.filmsData, 'filmsData11')
  },
  mounted() {
    console.log(this.filmsData, 'filmsData22')
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
</style>
