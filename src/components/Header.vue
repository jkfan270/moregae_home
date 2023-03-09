<template>
    <header class="navbar bg-base-100 p-4 drop-shadow-md shadow-black" style="z-index:100;position: relative">
      <div class="flex-none">
        <a class="btn btn-ghost normal-case text-xl">MOREGAE</a>
      </div>

      <div class="flex justify-start flex-1 px-2">
        <div class="flex items-stretch">

          <div class="dropdown dropdown-hover">
            <label tabindex="0" class="btn btn-ghost rounded-btn">作品</label>
            <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>

          <div class="dropdown dropdown-hover">
            <label tabindex="0" class="btn btn-ghost rounded-btn">素材</label>
            <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>

          <div class="dropdown dropdown-hover">
            <label tabindex="0" class="btn btn-ghost rounded-btn">社交媒体</label>
            <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>


        </div>
      </div>


      <div class="flex-none gap-2">
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>

        <button class="btn btn-ghost w-24 rounded-full">登录</button>
        <button class="btn btn-success w-24 rounded-full">注册</button>


      </div>
    </header>



</template>

<script>

export default {
  name: 'Header_Page',
  props: {
    msg: String
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
