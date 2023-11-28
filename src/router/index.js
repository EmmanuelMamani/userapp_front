import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import LoginView from '../views/LoginView.vue'
import LogupView from '../views/LogupView.vue'
import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logup',
      name: 'logup',
      component: LogupView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    }
  ]
})

export default router
