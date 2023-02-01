<template>
  <Teleport to="#app">
    <div :class="`fixed -inset-3 bg-black  ${isSideBarOpen ? 'visible bg-opacity-25' : 'invisible transition-all ease-in-out duration-1000 bg-opacity-0'}`">
      <div :class="`h-full transition-all duration-1000 opacity-[1] w-[70%] bg-white p-[2rem] ${isSideBarOpen ? 'translate-x-[0rem]' : 'translate-x-[-50rem]'}`">
        <ul class="flex flex-col space-y-[20px]">
          <img @click="closeSidebar" class="w-[1rem] mb-[1rem] cursor-pointer" src="images/icon-close.svg" alt="">
          <li v-for="link in linkList" :key="link.id" class="text-[18px] font-bold cursor-pointer">{{ link.pathName }}</li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script>


export default {
  computed:{
    linkList() {
      return this.$store.getters.getLinks
    },
    isSideBarOpen() {
      console.log(this.$store.getters.isSidebarOpen);
      return this.$store.getters.isSidebarOpen
    }
  },
  methods:{
    closeSidebar(){
      this.$store.commit('closeSidebar')
    }
  }
}
</script>

<style>

</style>