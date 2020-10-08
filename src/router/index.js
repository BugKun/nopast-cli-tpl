import Vue from 'vue'
import VueRouter from 'vue-router'
import {baseURL} from 'Constant'

Vue.use(VueRouter);





export default new VueRouter({
    mode: 'history',
    base: baseURL,
    routes: [
        {
            path: '*',
            component: () => import (/* webpackChunkName: "NotFound" */ '../pages/NotFound/index')
        },
        {
            path: '/',
            meta: {
                keepAlive: true
            },
            component: () =>
                import (/* webpackChunkName: "index" */ '../pages/index')
        },
        {
            path: '/server',
            component: () =>
                import (/* webpackChunkName: "server" */ '../pages/server/index')
        }
    ]
});
