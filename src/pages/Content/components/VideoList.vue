<template>
  <main>

  <div class="flex justify-center items-center align-middle">

<div class="grid grid-cols-1 md:grid-cols-4">

  <div class="md:col-span-4 sm:col-span-1 flex items-center justify-between m-6 mt-16 mb-6">
    <span class="text-4xl font-semi-bold text-black">16个作品</span>

    <div class="dropdown dropdown-end">
      <div class="tooltip tooltip-success " data-tip="这里是视频分类哦">
      <label tabindex="0" class="btn btn-outline btn-sm sm:btn-sm md:btn-md m-1">全部视频 ↓</label>
      </div>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>音乐MV</a></li>
        <li><a>电影感短片</a></li>
        <li><a>日常VLOG</a></li>
      </ul>
    </div>

  </div>

    <!--作品栏-->
    <div v-for = "item in myWork" v-bind:key="item.title" class="flex justify-center p-2 scale-95 hover:scale-100 ease-out duration-700">
      <div
          class="block max-w-xs rounded-md bg-white shadow-md" style="width:302px">
        <a href="#!" data-te-ripple-init data-te-ripple-color="light">
          <img
              class="rounded object-cover h-44 w-88"
              :src="item.url"
              alt=""/>
        </a>
        <div class="p-6">
          <h5
              class="mb-2 text-xl font-medium leading-tight">
            {{ item.title }}
<!--            <div class="badge badge-secondary">NEW</div>-->
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

  </main>
</template>

<script>
export default {
  name: "VideoList",
  data(){
    return{
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
          title: '《回忆复刻》feat.李承阳 Official MV',
          author: 'Moregae',
          url:require('@/assets/img/回忆复刻.png'),
          date: '2022年7月26日'
        },
        {
          title: '鬼怪 | 故地重游 | Extended Ver.',
          url:require('@/assets/img/鬼怪.jpg'),
          author: 'Moregae',
          date: '2021年9月20日'
        },
        {
          title: '鬼怪 | 故地重游 | Extended Ver.',
          url:require('@/assets/img/鬼怪.jpg'),
          author: 'Moregae',
          date: '2021年9月20日'
        },
        {
          title: '鬼怪 | 故地重游 | Extended Ver.',
          url:require('@/assets/img/鬼怪.jpg'),
          author: 'Moregae',
          date: '2021年9月20日'
        },
        {
          title: '鬼怪 | 故地重游 | Extended Ver.',
          url:require('@/assets/img/鬼怪.jpg'),
          author: 'Moregae',
          date: '2021年9月20日'
        },
        {
          title: '鬼怪 | 故地重游 | Extended Ver.',
          url:require('@/assets/img/鬼怪.jpg'),
          author: 'Moregae',
          date: '2021年9月20日'
        },

        ],
    }
  }
}
</script>

<style scoped>

</style>