import { createStore } from "vuex";
import imageData from "@/data/imageData";
import thumbnailData from "@/data/thumbnailData";
import links from "@/data/links";

const store = createStore({
  state:{
    images:[...imageData],
    thumbnails:[...thumbnailData],
    index:0,
    cartCount:1,
    isCartOpen:false,
    isSidebarOpen:false,
    totalCartAmount:0,
    links:[...links]
  },
  mutations:{
    nextImage:(state) => {
      let next = state.index + 1
      if(state.index >= 3 ) {
        return
      }
      state.index = next
    },
    previousImage:(state) => {
      let prevImage = state.index - 1
      if(state.index < 1) {
        return
      }
      state.index = prevImage
    }, 
    setImage:(state, payload) => {
      state.index = payload
    },
    increaseCartCount:(state) => {
      const increase = state.cartCount + 1
      state.cartCount = increase
    },
    reduceCartCount:(state) => {
      const reduce = state.cartCount - 1
      if(state.cartCount <= 1) {
        return
      }
      state.cartCount = reduce
    },
    addToCart:(state) => {
      state.totalCartAmount = state.cartCount + state.totalCartAmount
      state.cartCount = 1
    },
    clearCart:(state) => {
      state.totalCartAmount = 0
    },
    openCart:(state) => {
      state.isCartOpen = true
    },
    closeCart:(state, payload) => {
      if(payload === 'cart') {
        return
      } 
      state.isCartOpen = false
    },
    openSidebar:(state) => {
      state.isSidebarOpen = true
    },
    closeSidebar:(state, payload) => {
      if(payload === 'sidebar-close') {
        return
      }
      state.isSidebarOpen = false
    }
  },
  getters:{
    singleImage:(state) => {
      return state.images[state.index]
    },
    thumbnailList:(state) => {
      return state.thumbnails
    },
    cartCount:(state) => {
      return state.cartCount
    },
    totalCartAmount:(state) => {
      return state.totalCartAmount
    },
    isCartOpen:(state) => {
      return state.isCartOpen
    },
    currentImageIndex:(state) => {
      return state.index
    },
    getLinks:(state) => {
      return state.links
    },
    isSidebarOpen:(state) => {
      return state.isSidebarOpen
    }
  }
})

export default store