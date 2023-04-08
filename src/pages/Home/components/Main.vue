<template>
  <main>
    <div class="relative">
      <h1 class="absolute text-6xl font-bold text-white antialiased italic drop-shadow-md shadow-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        MOREGAE SHOWROOM
      </h1>

<div class="video-container">
      <video playsinline autoplay muted loop class="w-full">
        <source :src="video" :type="videoType">
      </video>
</div>

    </div>

    <div class="flex items-center justify-center">
      <h1 class="text-5xl font-semi-bold text-black mt-20 mb-12">最新作品</h1>
    </div>

      <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-4">

      <!--作品栏-->
      <div v-for = "item in myWork" v-bind:key="item.title" class="flex justify-center p-2 scale-95 hover:scale-100 ease-out duration-700">
        <div
            class="block max-w-xs rounded-md bg-white shadow-md" style="width:302px">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
                class="rounded object-cover h-44 w-88"
                :src="item.url"
                alt="" />
          </a>

          <div class="p-6">
            <h5
                class="mb-2 text-xl font-medium leading-tight">
              {{ item.title }}
              <div class="badge badge-secondary">NEW</div>
            </h5>
          </div>

            <div class="card-actions flex flex-wrap mb-4 ml-4">
              <div class="badge badge-ghost">{{item.date }}</div>
              <div class="badge badge-ghost">{{ item.author }}</div>
            </div>

          </div>
        </div>
      </div>

    </div>


    <div class="flex items-center justify-center">
      <h1 class="text-5xl font-semi-bold text-black m-12">素材</h1>
    </div>

    <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-4">

      <!--素材栏-->
      <div v-for = "item in myFodder" v-bind:key="item.title" class="flex justify-center p-2 scale-95 hover:scale-100 ease-out duration-700">
        <div
            class="block max-w-xs rounded-md bg-white shadow-md" style="width:302px">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
                class="rounded-t-lg object-cover h-44 w-88"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt="" />
          </a>
          <div class="p-6">
            <h5
                class="mb-2 text-xl font-medium leading-tight">
              {{ item.title }}
            </h5>
            <p class="mb-2 text-base">
              {{item.content}}
            </p>
          </div>
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
      video: require('@/assets/vid/nature.mp4'),
      videoType: 'video/mp4',

      myWork: [{
        title: 'Feel the Night | 4K | 电影感短片 #2',
        author: 'Moregae',
        url:require('@/assets/img/FeeltheNight.png'),
        date: '2023年3月1日'
      },
        {
          title: '疫情封锁下的日常 | 4K | Vlog | 电影感短片 #1',
          author: 'Moregae',
          url:require('@/assets/img/COVID.png'),
          date: '2022年2月23日'
        },
        {
          title: '《回忆复刻》Official MV',
          author: 'Moregae',
          url:require('@/assets/img/回忆复刻.png'),
          date: '2022年7月26日'
        },
        {
          title: '鬼怪 | 故地重游 | Extended Ver.',
          author: 'Moregae',
          url:require('@/assets/img/鬼怪.jpg'),
          date: '2021年9月20日'
        }],

      myFodder: [{
        title: 'Fodder_1',
        content: 'Working stuff',
        date: '2023年3月1日'
      },
        {
          title: 'Fodder_2',
          content: 'Working stuff',
          date: '2022年2月23日'
        },
        {
          title: 'Fodder_3',
          content: 'Working stuff',
          date: '2022年7月26日'
        },
        {
          title: 'Fodder_4',
          content: 'Working stuff',
          date: '2021年9月20日'
        }]
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