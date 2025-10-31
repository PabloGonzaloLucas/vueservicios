<template>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <CochesComponent/> -->
  <!-- <CustomersComponent/> -->
  <!-- <EmpleadosComponent/> -->
  <HomeComponent/>
  <router-view></router-view>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CochesComponent from './components/CochesComponent.vue'
//import CustomersComponent from './components/CustomersComponent.vue'
//import EmpleadosComponent from './components/EmpleadosComponent.vue'
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // CochesComponent
    //CustomersComponent
    //EmpleadosComponent
    HomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
