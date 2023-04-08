<template>
  <div class="flex flex-col h-screen">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/pages/Home/components/Main.vue"
import Footer from "@/components/Footer.vue";



export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  data(){
    return{

    }
  }


}


</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
