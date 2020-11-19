import Vue from 'vue';
import VueRouter from 'vue-router'; //載入 vue-router
import Home from "@/components/HelloWorld";
import Page from '@/components/Page'


Vue.use(VueRouter) //使用 vue-router

export default new VueRouter({
  routes: [
    {
      name: 'Home',  //元件呈現的名稱
      path: '/', //對應的路徑
    // path: '/index', //對應的路徑
    component: Home  //對應的元件
    },
    {
        name: 'Page',
        path: '/page',
        component: Page
      },
  ]
})