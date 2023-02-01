<template>
  <NavBar />
  <MainLayout />
</template>

<script>
import NavBar from './components/NavBar.vue'
import MainLayout from './components/MainLayout.vue'
import './index.css'


export default {
  name: 'App',
  components: {
    NavBar,
    MainLayout
  }
}
</script>

<style>

</style>
