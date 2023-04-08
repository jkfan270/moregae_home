<template>
  <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-1">
      <h1 class="text-5xl font-semi-bold text-black m-auto mt-16 mb-12">关于我</h1>
      <div class="artboard phone-5 shadow-[0px_12px_40px_4px_rgba(0,0,0,0.2)] rounded-2xl">
        <div class="mt-16 ml-2 mr-2">

      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img :src=avatar_2 />
          </div>
        </div>

        <div class="chat-bubble chat-bubble-primary">哈喽！</div>
        <div class="chat-footer opacity-50">
          送达
        </div>
      </div>

      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img :src=avatar_1 />
          </div>
        </div>

        <div class="chat-bubble chat-bubble-success">hihihi</div>
        <div class="chat-footer opacity-50">
          已读
        </div>
      </div>


          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_2 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-primary">你是摄影师吗？</div>
            <div class="chat-footer opacity-50">
              送达
            </div>
          </div>

          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_1 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-success">只是个摄影爱好者，职业程序猿</div>
            <div class="chat-footer opacity-50">
              已读
            </div>
          </div>

          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_2 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-primary">你的视频都是用什么拍的鸭 :-）</div>
            <div class="chat-footer opacity-50">
              送达
            </div>
          </div>

          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_1 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-success">松下S5 + 35mmf1.8 达芬奇剪辑+调色</div>
            <div class="chat-footer opacity-50">
              已读
            </div>
          </div>

          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_1 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-success">只要你用松下 我们就是好朋友</div>
            <div class="chat-footer opacity-50">
              已读
            </div>
          </div>

          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_2 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-primary">？</div>
            <div class="chat-footer opacity-50">
              送达
            </div>
          </div>

          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_2 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-primary">好的 马上去买索尼FX3</div>
            <div class="chat-footer opacity-50">
              送达
            </div>
          </div>

          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :src=avatar_1 />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-success">晚安</div>
            <div class="chat-footer opacity-50">
              已读
            </div>
          </div>

  </div>
  </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "AboutMe",
  data(){
    return{
      avatar_1: require('@/assets/img/avatar.jpg'),
      avatar_2: require('@/assets/img/avatar2.jpg'),
    }
  }
}
</script>

<style scoped>

</style>