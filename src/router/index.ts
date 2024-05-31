import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authRoutes } from '@/modules/auth/routes'
import { studentRoutes } from '@/modules/student/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import(/* webpackChunkName: "auth" */ "../modules/auth/AuthModule.vue"),
      children: [ ...authRoutes ]
    },
    {
      path: "/student",
      name: "Student",
      component: () => import(/* webpackChunkName: "student" */ "../modules/student/StudentModule.vue"),
      children: [ ...studentRoutes ]
    },
  ]
})

export default router
