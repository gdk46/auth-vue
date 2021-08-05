import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase";


import Home from '../views/home.vue';
import Login from '../views/login.vue';
import SingUp from '../views/singUp.vue';
import About from '../views/about.vue'; 

Vue.use(VueRouter)

const routes = [{
    path: "",
    redirect: "/login"
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/registrar",
    name: "SingUp",
    component: SingUp
  },
  {
    path: "/sobre",
    name: "About",
    component: About
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

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAMnzYY-VOVQkw5jAwdFbu9Y1F6zRDZa5s",
  authDomain: "auth-db011.firebaseapp.com",
  projectId: "auth-db011",
  storageBucket: "auth-db011.appspot.com",
  messagingSenderId: "350958060837",
  appId: "1:350958060837:web:8874b26f930b1d8d8406cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// settings route 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router