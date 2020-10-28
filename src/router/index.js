import Vue from "vue";
import Router from "vue-router";

import { HelloWorld } from "../components";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "helloWorld",
      path: "/",
      component: HelloWorld,
    },
  ],
});
