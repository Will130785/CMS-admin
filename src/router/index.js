import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../views/Profile";
import Events from "../views/Events";
import Gallery from "../views/Gallery";
import Menus from "../views/Menus";
import Testimonials from "../views/Testimonials";
import Users from "../views/Users";
import Vacancies from "../views/Vacancies";
import Venues from "../views/Venues";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile
  },
  {
    path:"/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/events",
    name: "Events",
    component: Events
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/menus",
    name: "Menus",
    component: Menus
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/vacancies",
    name: "Vacancies",
    component: Vacancies
  },
  {
    path: "/venues",
    name: "Venues",
    component: Venues
  }

];

const router = new VueRouter({
  routes
});

export default router;
