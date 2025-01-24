import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearnToTrade from '../views/Learntotrade.vue'
import OurServices from '../views/OurServices.vue'
import tadawelforfox from '../views/tadawelforfox.vue'
import MoneyTransfers from '../views/MoneyTransfers.vue'
import ForexMarketAnalysis from '../views/ForexMarketAnalysis.vue'
import EducationalCourses from '../views/EducationalCourses.vue'
import Blogs from '../components/Blogs/Blogs.vue'
import Services from '../views/Services.vue'

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
    {
      path: '/tadawelforfox',
      name: 'tadawelforfox',
      component: tadawelforfox,
    },
    {
      path: '/MoneyTransfers',
      name: 'MoneyTransfers',
      component: MoneyTransfers,
    },
    {
      path: '/ForexMarketAnalysis',
      name: 'ForexMarketAnalysis',
      component: ForexMarketAnalysis,
    },
    {
      path: '/EducationalCourses',
      name: 'EducationalCourses',
      component: EducationalCourses,
    },

    {
      path: '/Blogs',
      name: 'Blogs',
      component: Blogs,
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services,
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, // Scroll to the element with the ID matching the hash
        behavior: 'smooth', // Smooth scrolling
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router
