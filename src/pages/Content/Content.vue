<template>
  <div className="flex flex-col h-screen">
    <Header/>
    <video-list />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import VideoList from "@/pages/Content/components/VideoList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Content_Page",
  components: {
    VideoList,
    Header,
    Footer,
  },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>