import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Profile from "../views/Profile";
import Events from "../views/Events";
import Gallery from "../views/Gallery";
import Menus from "../views/Menus";
import Testimonials from "../views/Testimonials";
import Users from "../views/Users";
import Vacancies from "../views/Vacancies";
import Venues from "../views/Venues";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path:"/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/menus",
    name: "Menus",
    component: Menus,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/vacancies",
    name: "Vacancies",
    component: Vacancies,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/venues",
    name: "Venues",
    component: Venues,
    meta: {
      requiresAuth: true
    }
  }

];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      console.log("Hello 1")
      //Go to login
      next("/login");
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      console.log("Hello 2")
      next("/profile");
    } else {
      next();
    }
  } else {
    console.log("Hello 3")
    next()
  }
});

export default router;
