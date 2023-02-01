<template>
  <div @click="closeCart" class="flex flex-col md:flex-row md:justify-center container mx-auto p-6 ">
    <ShoeDisplay />
    <ShoeInfo />
  </div>
</template>

<script>
import ShoeDisplay from './ShoesDisplay.vue'
import ShoeInfo from './ShoeInfo.vue'

export default {
  components:{
    ShoeDisplay,
    ShoeInfo
  },
  methods:{
    closeCart() {
      this.$store.commit('closeCart')
    }
  }
}
</script>

<style>

</style>