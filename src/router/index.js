import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);





export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: () => import (/* webpackChunkName: "NotFound" */ '../pages/NotFound/index.vue')
        },
        {
            path: '/',
            component: () =>
                import (/* webpackChunkName: "index" */ '../pages/index.vue')
        }
    ]
});
