<template>

  <div class="flex flex-col h-screen">
    <Header />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AboutMe from "@/pages/About/components/AboutMe.vue";
export default {
  name: "About_Page",
  components: {
    AboutMe,
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