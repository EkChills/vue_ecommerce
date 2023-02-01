<template>
  <div
    class="flex flex-col mx-auto text-left md:w-1/2 space-y-6 p-5 lg:justify-end"
  >
    <h3 class="text-Orange font-bold ">Sneaker Company</h3>
    <h1 class="text-4xl font-bold max-w-md">
      Fall Limited Edition Sneakers
    </h1>
    <p class="max-w-md text-DarkGrayishBlue">
      These low profile sneakers are your perfect casual companion featuring a
      durable rubber outer sole. They'll withstand everything the weather can
      offer
    </p>
    <div class="flex  sm:space-x-5 md:block">
      <div class="flex space-x-3">
        <h1 class="text-3xl font-bold ">125.00$</h1>
        <div class="p-1 px-2 text-Orange bg-PaleOrange font-bold">50%</div>
      </div>
      <h2 class="text-GrayishBlue">250$</h2>
    </div>

    <div class="flex space-x-6 hover:cursor-pointer">
      <div
        class=" justify-center flex  px-5 py-1 items-center space-x-7 bg-LightGrayishBlue rounded-lg"
      >
        <div
        @click="reduceAmount"
          id="minus"
          class=" text-3xl select-none text-center font-bold text-Orange rm-btn"
        >
          -
        </div>
        <div id="number" class="text-2xl font-bold count-sel">
          {{ cartAmount }}
        </div>
        <div
        @click="increaseAmount"
          id="plus"
          class="text-3xl text-center select-none  font-bold text-Orange add-btn"
        >
          +
        </div>
      </div>
      <div
        @click="addToCart"
        class="w-[7rem] items-center text-sm justify-center rounded-lg  flex bg-Orange text-White cart-btn"
      >
        <img src="images/icon-cart.svg" />Add to cart
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    cartAmount(){
      return this.$store.getters.cartCount
    }
  },
  methods:{
    increaseAmount(){
      this.$store.commit('increaseCartCount')
    },
    reduceAmount(){
      this.$store.commit('reduceCartCount')
    },
    addToCart() {
      this.$store.commit('addToCart')
    }
  }
};
</script>

<style></style>
