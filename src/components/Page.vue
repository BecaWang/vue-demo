<template>
  <div class="hello">
    {{msg}}
 <!--   <router-link to="/page/child1">Child1</router-link> <n/>
    <router-link to="/page/child2">Child2</router-link> <n/>
    <router-link to="/page/child3">Child3</router-link> <n/>
    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      msg: 'Hello Page'
    }
  }
}
</script>