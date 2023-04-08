<template>
  <footer class="footer footer-center p-10 sm:p-6 bg-base-200 text-base-content rounded mt-20">
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover">联系</a>
      <a class="link link-hover">商单</a>
      <a class="link link-hover">社交</a>
      <a class="link link-hover">关于我</a>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://space.bilibili.com/435243" class="scale-100 hover:scale-110 ease-out duration-700" target="_blank"><img :src=img_bilibili style="width:90px;height: 40px"></a>
      </div>
    </div>
    <div>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">互联网ICP备案：浙ICP备2023006868号-1</a>
      <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33078202002045" target="_blank" style="display:inline-block;height:20px;line-height:20px;"> <img :src=img_beiAn style="float:left;"> 浙公网安备 33078202002045号</a>

        <p>Copyright © 2023 - All right reserved by MOREGAE Studio</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer_Page",
  data() {
    return {
      img_beiAn: require('@/assets/img/备案图标.png'),
      img_bilibili: require('@/assets/img/bilibili.png'),
    }
  }
}
</script>

<style scoped>

</style>