<!--<template>
  <div id="app" v-if="this.$route.path !== '/'">
    <img alt="Vue logo" src="./assets/logo.png">
   <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/page">Page</router-link>
      </li>
    </ul>
    <router-view name="Menu"/>
    <router-view></router-view>


  </div>
</template> -->

<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
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
