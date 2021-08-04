import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/home.vue';
import Login from '../view/login.vue';
import SingUp from '../view/singUp.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/registrar",
    name: "SingUp",
    component: SingUp
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
        requestAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
