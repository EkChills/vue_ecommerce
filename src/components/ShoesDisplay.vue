<template>
  <div class="flex flex-col items-center md:w-1/2  justify-center">
    <div class="relative">
      <div  @click="nextImage" class="absolute cursor-pointer right-4 bottom-1/2 bg-white p-3 rounded-full flex justify-center items-center md:hidden" >
        <img src="images/icon-next.svg" class=""/>
      </div>

      <div  @click="previousImage"  class="cursor-pointer  bg-white p-3 rounded-full flex justify-center left-4 items-center absolute bottom-1/2 md:hidden">
      <img src="images/icon-previous.svg" class=""/>
      </div>

      <img :src="currentImage" class="md:w-[22rem] md:rounded-lg mb-3"/>
    </div>
    <ThumbnailItems />
  </div>
</template>

<script>
import ThumbnailItems from './ThumbnailItems.vue'

export default {
  components:{ThumbnailItems},
  methods:{
    nextImage() {
      this.$store.commit('nextImage')
    },
    previousImage() {
      this.$store.commit('previousImage')
    }
  },
  computed:{
    currentImage() {
      return this.$store.getters.singleImage
    }
  }
}
</script>

<style>

</style>