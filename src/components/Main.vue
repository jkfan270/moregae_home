<template>
  <main>
    <div class="relative">
      <h1 class="absolute text-6xl font-bold text-white antialiased italic drop-shadow-md shadow-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">MOREGAE SHOWROOM</h1>

<div class="video-container">
      <video playsinline autoplay muted loop class="w-full">
        <source :src="video" :type="videoType">
      </video>
</div>

    </div>

    <div>
      <h1>作品展</h1>
    </div>

    <div class="flex items-center justify-center h-screen">

      <div class="card lg:card-side bg-base-100 shadow-xl w-1/2">
        <figure><img :src="image2" alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">点击进入</button>
          </div>
        </div>
      </div>


    </div>

  </main>

</template>

<script>

export default {
  name: "Main_Page",
  data() {
    return {
      image: require('@/assets/img/blue.png'),
      image2: require('@/assets/img/panel.jpg'),
      video: require('@/assets/vid/nature.mp4'),
      videoType: 'video/mp4',
    }
  }
}

</script>

<style scoped>
.video-container video{
    width: 100%;
  height:32rem;
    object-fit: cover;
}
</style>