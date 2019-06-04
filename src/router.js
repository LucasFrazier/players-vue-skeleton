import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Roster from "./views/Roster.vue";
import NewPlayer from "./views/NewPlayer.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/roster",
      name: "roster",
      component: Roster
    },
    {
      path: "/player/new",
      name: "new-player",
      component: NewPlayer
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
