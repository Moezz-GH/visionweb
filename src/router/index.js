import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearnToTrade from '../views/Learntotrade.vue'
import OurServices from '../views/OurServices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/learntotrade',
      name: 'learntotrade',
      component: LearnToTrade,
    },
    {
      path: '/ourservices',
      name: 'OurServices',
      component: OurServices,
    },

  ],
})

export default router
