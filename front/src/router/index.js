import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/landing-page/Home.vue'
import AboutUs from '../views/landing-page/AboutUs.vue'
import Depoimentos from '../views/landing-page/Depoimentos.vue'
import Cadastro from '../views/cadastro/Cadastro.vue'
import Inscritos from '../views/inscritos/Inscritos.vue'
import Pokedex from '../views/pokedex/Pokedex.vue'
import Finalizado from '../views/cadastro/Finalizado.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'about-us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutUs
  },
  {
    path: '/depoimentos',
    name: 'depoimentos',
    component: Depoimentos
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/inscritos',
    name: 'inscritos',
    component: Inscritos
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: Pokedex
  },
  {
    path: '/finalizado',
    name: 'finalizado',
    component: Finalizado
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
