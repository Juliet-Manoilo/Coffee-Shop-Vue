import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/beans',
    name: 'Beans',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Beans.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
