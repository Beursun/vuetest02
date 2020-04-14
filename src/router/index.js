import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import PageThree from '../views/PageThree'
import PageFour from '../views/PageFour'
import Index from '../views/Index'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '用户管理',
    component: Index,
    redirect:'/pageOne',
    children:[
      {
        path: '/pageOne',
        name: '用户查看',
        component: PageOne
      },
      {
        path: '/pageTwo',
        name: '用户添加',
        component: PageTwo
      },
      {
        path: '/pageThree',
        name: '用户修改',
        component: PageThree
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
