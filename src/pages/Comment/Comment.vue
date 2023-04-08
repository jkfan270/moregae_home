<template>

  <div class="flex flex-col h-screen">
    <Header />
    <Comment />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Comment from "@/pages/Comment/components/CommentList.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Comment_Page",
  components: {
    Header,
    Comment,
    Footer,
  },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>