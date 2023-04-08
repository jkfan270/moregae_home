<template>
  <div className="flex flex-col h-screen">
    <Header/>
    <material-list />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MaterialList from "@/pages/Materials/components/MaterialList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Material_Page",
  components: {
    MaterialList,
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