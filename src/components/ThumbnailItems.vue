<template>
  <div class="flex space-x-3">
    <img v-for="(thumbnail, index) in thumbnails" :key="thumbnail.id" @click="changeImage(index)" :class=" `hidden w-[5rem] rounded-md md:flex hover:opacity-30 hover:border-4 ${index === currentIndex ? ' border-Orange border-4 opacity-30' : ''}   transition-all ease-in-out cursor-pointer`"  :src="thumbnail.img  " />
  </div>
</template>

<script>
export default {

  computed:{
    thumbnails() {
      return this.$store.getters.thumbnailList
    },
    currentIndex() {
      console.log(this.$store.getters.currentImageIndex, this.$store.state.index );
      return this.$store.getters.currentImageIndex 
    }
  },
  methods:{
    changeImage(index) {
      this.$store.commit('setImage', index)
    }
  }
}
</script>

<style>

</style>