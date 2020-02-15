import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      component: () => import('../view/home/index.vue')
    },
    // {
    //   path: '/qixi',
    //   component: import('../view/qixi/index.vue')
    // }
  ]
})