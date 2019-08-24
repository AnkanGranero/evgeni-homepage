import Vue from "vue";
import Router from "vue-router";
import Hej from "./views/Hej.vue";
import Galleri from "./views/Galleri.vue";
import Cv from "./views/Cv.vue";
import Pagang from "./views/Pagang.vue";
import Video from "./views/Video.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "hej",
      component: Hej
    },

    {
      path: "/cv",
      name: "cv",
      component: Cv
    },
    {
      path: "/pagang",
      name: "pagang",
      component: Pagang
    },
    {
      path: "/galleri",
      name: "galleri",
      component: Galleri
    },
    {
      path: "/video/:videoType",
      name: "video",
      component: Video
    },

  ]
});
