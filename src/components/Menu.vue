<template>
  <div>
      <h2>This is menu !!!!</h2>
    <router-link to="/page/child1">Child1</router-link>
    <router-link to="/page/child2">Child2</router-link>
    <router-link to="/page/child3">Child3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      
    }
  }
}
</script>