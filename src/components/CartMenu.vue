<template>
  <div v-if="totalAmount === 0" ref={ref} class="absolute w-[80%] md:w-[25rem]  bg-white shadow-xl md:right-9 top-20  z-50" @click="closeCart">
          <div class="font-bold  border-b-2 py-3 px-5">Cart</div>
          <div class="flex w-full justify-center items-center py-32">
            <span>
              Your cart is empty
            </span>
          </div>
        </div>

        <div v-else  class="absolute right-3 flex flex-col space-y-4 max-w-[20rem] pb-5 px-4 bg-white shadow-xl md:right-9 top-20 w-96 z-50">
          <div class="font-bold  border-b-2 py-3 px-5">
            Cart
          </div>

          <div class="flex space-x-3 items-center">
            <img :src="cartImage"  class='w-10 rounded-md'/>
            <p>{{`Fall Limited Edition Sneakers $125.00 x ${totalAmount} $${125*totalAmount}`}}</p>
            <img @click="clearCart" src="images/icon-delete.svg" class="cursor-pointer" />
          </div>

          <a href="#" class="bg-Orange text-center w-[100%] py-2 rounded-md  text-white font-bold text-sm md:text-base" >Checkout</a>
        </div>
</template>

<script>
export default {
  props:['closeCart'],
  computed:{
    totalAmount() {
      return this.$store.getters.totalCartAmount
    },
    cartImage() {
      return this.$store.getters.singleImage
    }
  },
  methods:{
    clearCart() {
      this.$store.commit('clearCart')
    }
  }
}
</script>

<style>

</style>