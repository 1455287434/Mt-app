import Vue from 'vue'
import VueRouter from 'vue-router'

import shou from "../views/shouping/shouping.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shou',
    component: shou,
    redirect:"/nav",
    children:[
      {
        
        path :"nav",
        name : "nav",
        component : ()=>import("../components/shouZu/nav.vue")
      
    },
    {
      path:"s/:name",
      name:"nihao",
      
    },
    {
      path:"qiehuan",
      name :"qiehuan",
      component: () =>import ('../views/city/city.vue')
    },
    {
      path:'remen',
      name :"remen",
      component : () => import("../components/remen/remen.vue")
    }
    ]
  },
  {
    path:'/black',
    name:'black',
    component:()=>import("../views/black.vue"),
    children:[
      {
        path:'denglu',
        name:"denglu",
        component:()=>import("../views/denglu.vue")
      },
      {
        path:"zhuce",
        name:"zhuce",
        component :()=>import("../views/zhuce.vue")
      }
    ]
  }


]

const router = new VueRouter({
  
  base: process.env.BASE_URL,
  routes
})

export default router
