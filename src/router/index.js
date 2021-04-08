import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import SP80037 from "@/views/SP80037/SP80037.vue";
import Step from "@/views/SP80037/Step.vue";
import Task from "@/views/SP80037/Task.vue";
import FIPS200 from "@/views/FIPS200/FIPS200.vue";
import MinimumRequirement from "@/views/FIPS200/MinimumRequirement.vue";
import Publication from "@/views/Publication/Publication.vue";
import BusinessRole from "@/views/BusinessRole/BusinessRole.vue";
import Glossary from "@/views/Glossary/Glossary.vue";
import Term from "@/views/Glossary/Term.vue";

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
    component: SP80037,
    props: true
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
  },
  {
    path: "/FIPS200",
    name: "FIPS200",
    component: FIPS200,
    props: true
  },
  {
    path: "/FIPS200/minimumrequirement",
    name: "minimumrequirement",
    component: MinimumRequirement,
    props: true
  },
  {
    path: "/publication",
    name: "publication",
    component: Publication,
    props: true
  },
  {
    path: "/businessrole",
    name: "businessrole",
    component: BusinessRole,
    props: true
  },
  {
    path: "/glossary",
    name: "glossary",
    component: Glossary,
    props: true
  },
  {
    path: "/glossary/term",
    name: "term",
    component: Term,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
