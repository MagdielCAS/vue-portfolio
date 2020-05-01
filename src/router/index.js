import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PlainHome from "../views/PlainHome.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mobile",
    name: "Mobile",
    component: PlainHome
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({
  routes
});

export default router;
