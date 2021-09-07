import Vue from "vue";
import Router from "vue-router";
import Hej from "./views/Hej.vue";
import Galleri from "./views/Galleri.vue";
import Cv from "./views/Cv.vue";
import Aktuellt from "./views/Aktuellt.vue";
import Video from "./views/Video.vue";
import VueMeta from 'vue-meta'

Vue.use(Router);
Vue.use(VueMeta)

export default new Router({

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
      path: "/aktuellt",
      name: "aktuellt",
      component: Aktuellt
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

  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
});
