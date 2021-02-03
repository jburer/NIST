import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import SP80037 from "@/views/SP80037/SP80037.vue";
import Step from "@/views/SP80037/Step.vue";
import Task from "@/views/SP80037/Task.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/SP80037",
    name: "SP80037",
    component: SP80037
  },
  {
    path: "/SP80037/step",
    name: "step",
    component: Step,
    props: true
  },
  {
    path: "/SP80037/task",
    name: "task",
    component: Task,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
