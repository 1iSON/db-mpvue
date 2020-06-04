<template>
  <div>
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
  </div>
</template>

<script>

export default {
  data () {
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
      duration: 1000
    }
  },

  components: {
  },

  methods: {
  },

  created () {
    // let app = getApp()
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
