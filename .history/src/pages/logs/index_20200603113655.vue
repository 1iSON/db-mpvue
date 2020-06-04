<template>
  <div>
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>

    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
    
    <div class="myInfo">
      <div class="userinfo" @click="bindViewTap">
        <open-data class="infoImg" type="userAvatarUrl"></open-data>
        <div class="userinfo-nickname">
          <open-data class="userinfo-nickname" type="userNickName"></open-data>
        </div>
        <div class="userGender">
          <open-data type="userGender" lang="zh_CN"></open-data>
        </div>

        <div class="address">
          <open-data type="userCountry" lang="zh_CN"></open-data>-
          <open-data type="userProvince" lang="zh_CN"></open-data>-
          <open-data type="userCity" lang="zh_CN"></open-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
image{
  width: 100%;
}
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
  .myInfo{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: 40%;
    background-image: linear-gradient(-180deg, rgba(250,250,250,0.00) 0%, #FCFCFC 100%);
  }
  .userinfo {
    display: flex;
    padding: 10px 0 31px;
    flex-direction: column;
    align-items: center;
    /*background-image: linear-gradient(-180deg, rgba(250,250,250,0.00) 0%, #FCFCFC 100%);*/
    /*border-bottom: 1px solid #f2f2f2;*/
    .userinfo-avatar, .infoImg {
      width: 64px;
      height: 64px;
      margin: 10px;
      border-radius: 50%;
    }
    open-data[type="userAvatarUrl"] {
      /* open-data 的 display 默认值是 inline ，需要改为 inline-block 或 block 才能控制宽高 */
      display: block;
      /* 设置 overflow 为 hidden 才能设置圆角 */
      overflow: hidden;
      border-radius: 50%;

    }
    .userinfo-nickname {
      color: #aaa;
    }
    .points{
      font-size: 16px;
      color: #797979;
      margin-top: 10px;
      .aRouter{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .flowerSize{
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      span{
        font-weight: 600;
        color: #d2ae78;
      }
    }
  }
</style>
