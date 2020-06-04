<template>
  <div>
    <!--輪播圖-->
      <div class="slide">
        <swiper>
          <block v-for="(item, index) in imgUrls" :key="index" >
            <swiper-item>
              <image :src="item" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
  </div>
</template>

<script>
// import filmsData from '../../api/data.js' //电影数据
export default {
  data () {
    return {
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },

  components: {
  },

  methods: {
  },

  created () {
    // let app = getApp()
    // console.log(this.filmsData, 'filmsData')
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
</style>
