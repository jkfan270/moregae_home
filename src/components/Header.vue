<template>

  <div class="navbar bg-base-100 drop-shadow-md shadow-black flex justify-between" style="z-index:100;min-height: 5rem;">

    <div class=" px-2 mx-2">


      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 drop-shadow-md shadow-black bg-base-100 rounded-box w-52">
          <li><router-link to="/content">作品</router-link></li>
          <li>
            <router-link to="/materials">素材</router-link>
          </li>
          <li tabindex="0">
            <a class="justify-between">
              媒体
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>            </a>
            <ul class="p-2 bg-base-100">
              <li><a target="_blank" href="https://space.bilibili.com/435243">哔哩哔哩</a></li>
              <li><a target="_blank" href="https://www.youtube.com/@moregae">YouTube</a></li>
              <li><a>优酷</a></li>
            </ul>
          </li>

            <li>
              <router-link to="/about">
              关于我
            </router-link>
            </li>

          <li>
            <router-link to="/comment">
              留言板
            </router-link>
          </li>

        </ul>
      </div>
    </div>

    <div class="lg:hidden items-center">
      <router-link to="/" class="btn btn-ghost normal-case text-2xl">MOREGAE</router-link>
    </div>

    <div class="hidden lg:flex">
      <router-link to="/" class="btn btn-ghost normal-case text-2xl">MOREGAE</router-link>
    </div>


    <div class="flex-1 px-2 mx-2 hidden lg:flex">
      <div class="items-stretch">

        <div class="dropdown dropdown-hover">

          <ul class="menu menu-horizontal px-1">

            <li><router-link to="/content">作品</router-link></li>

            <li>
              <router-link to="/materials">素材</router-link>
            </li>

            <li>
              <a>媒体</a>
              <ul class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
              <li><a target="_blank" href="https://space.bilibili.com/435243">哔哩哔哩</a></li>
                <li><a>优酷</a></li>
              <li><a target="_blank" href="https://www.youtube.com/@moregae">YouTube</a></li>
            </ul>
            </li>

            <li>
              <router-link to="/about">
                关于我
              </router-link>
            </li>

            <li>
              <router-link to="/comment">
                留言板
              </router-link>
            </li>


          </ul>
        </div>


    </div>
    </div>

    <div class="flex-none">

      <form action="" class="hidden lg:block">
        <input type="search"
               class="peer relative focus:outline-0 focus:w-full duration-500 w-12 z-10 h-12 rounded-full border border-black bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 stroke-current px-3.5 peer-focus:border-black peer-focus:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>

      <button class="btn btn-ghost w-24 rounded-full">登录</button>

      <button class="btn btn-success w-24 rounded-full hidden lg:block">注册</button>

    </div>
  </div>

</template>

<script>

export default {
  name: 'Header_Page',
  props: {
    msg: String
  },
  data(){
    return{
      myNav: [{
        item: '作品',
      },
        {
          item: '素材',
        },
        {
          item: '社交媒体',
          subItem_1: '哔哩哔哩',
          subItem_2:'YouTube',
          subItem_3:'优酷',
        },
        {
          item: '关于我',
        },
        {
          item: '留言板',
        },

      ],
    }
  },
  methods:{
    // toBilibili(e){
    //   return 'https://www.bilibili.com'+e;
    // }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
