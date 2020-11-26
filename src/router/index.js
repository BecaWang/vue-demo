import Vue from 'vue';
import VueRouter from 'vue-router'; //載入 vue-router
import HelloWorld from "@/components/HelloWorld";
import Page from '@/components/Page'
import Child1 from '@/components/Child1'
import Child2 from '@/components/Child2'
import Child3 from '@/components/Child3'
import Menu from '@/components/Menu'
import Login from '@/components/Login'
import Restricted from '@/components/Restricted'
import Home from '@/components/Home'



Vue.use(VueRouter) //使用 vue-router

export default new VueRouter({
  routes: [
    {
        name: 'Login',  //元件呈現的名稱
        path: '/login', //對應的路徑
        component: Login  //對應的元件
      },
      {
        name: 'HelloWorld',  //元件呈現的名稱
        path: '/helloWorld', //對應的路徑
        component: HelloWorld  //對應的元件
      },
    {
        path: '/restricted',
        component: Restricted,
        children: [
           { path: 'home', component: Home},
        ],
    },  
    {
        name: 'Page',
        path: '/page',
        components:{
            
            default: Page,
            Menu: Menu //name 為 Menu 的 router-view 會載入 Menu 這個元件       
         }, 
        children: [
            {
              path: 'child1',
              name: 'Child1',
              component: Child1
            },
            {
              path: 'child2',
              name: 'Child2',
              component: Child2
            },
            {
              path: 'child3',
              name: 'Child3',
              component: Child3
            },
          ]
    },
  ]
})