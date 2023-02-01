<template>
   <nav class="container relative  items-center mx-auto p-6 border-b-2 ">
      <div class="justify-between flex items-center">
        <div class="flex space-x-4">
          <img  @click="openSidebar" src="images/icon-menu.svg"   :class="`md:hidden cursor-pointer visible  ${!isSidebarOpen ? 'hidden' : 'block'} `"/>
          <img src="images/logo.svg"/>
        </div>

        <div class="hidden md:flex items-center space-x-6">
          <a href="#" v-for="link in links" :key="link.id" class="links" >{{ link.pathName }}</a>
        </div>


        <div class="flex space-x-5 relative">
          <div class="relative">
          <img src="images/icon-cart.svg" @click="openCart"  class="w-10 cursor-pointer"/>
          <div class="absolute p-1 rounded-full text-white bg-Orange -top-2 text-[0.6rem] right-0 font-bold ">{{ cartAmount }}</div>
          </div>
          <img src="images/image-avatar.png" class="w-10" />
        </div>


      </div>
      <CartMenu  v-if="isCartOpen" :closeCart="closeCart"  />
      <SidebarMenu />
    </nav>
</template>

<script>
import CartMenu from './CartMenu.vue'
import SidebarMenu from './SidebarMenu.vue'

export default {
  components:{
    CartMenu,
    SidebarMenu
  },
  computed:{
    cartAmount() {
      return this.$store.getters.totalCartAmount
    },
    isCartOpen() {
      return this.$store.getters.isCartOpen
    },
    links() {
      return this.$store.getters.getLinks
    }
  },
  methods:{
    openCart() {
      this.$store.commit('openCart')
    },
    closeCart() {
      this.$store.commit('closeCart')
    },
    openSidebar() {
      this.$store.commit('openSidebar')
    },
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen
    }
  }
}
</script>

<style scoped>
  .links {
    font-size: 15px;
    color: hsla(220, 9%, 45%, 1);
    position: relative;
    transition: all 1s ease-in-out;
  }
  .links:hover {
    color: black;
  }
  .links:hover::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    top: 3rem;
    left: 0;
    right: 0;
    background-color:  #FF7E1B;;
  }
</style>