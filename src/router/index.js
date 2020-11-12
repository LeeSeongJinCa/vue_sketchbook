import Vue from "vue";
import Router from "vue-router";

import { HelloWorld, JavaProject } from "@/components";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "HelloWorld",
      path: "/",
      component: HelloWorld,
    },
    {
      name: "JavaProject",
      path: "/java",
      component: JavaProject,
    },
  ],
});
