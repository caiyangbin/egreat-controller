<template>
  <div class="home">
    <van-tabbar
      class="tab"
      v-model="active"
      @change="onChange"
      inactive-color="#FFFFFF"
      active-color="rgb(15,132,2)"
      :border="false">
      <van-tabbar-item icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item icon="music-o">音乐</van-tabbar-item>
      <van-tabbar-item icon="scan">遥控器</van-tabbar-item>
      <van-tabbar-item icon="description">文件</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
    <Video v-show="active === 0"/>
    <Music v-show="active === 1"/>
    <Controller v-show="active === 2"/>
    <File v-show="active === 3"/>
    <My v-show="active === 4"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onChange (index) {
      this.active = index
    }
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }

  .tab {
    background-color: rgb(42, 42, 42);
  }
</style>
