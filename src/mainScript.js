import Vue from 'vue/dist/vue'
import store from "./store"
import router from "./router"
import "./global.scss"
import App from './pageLayout'


Vue.config.productionTip = false;




new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    render: createElement => createElement('App'),
    beforeCreate() {
        this.$store.dispatch('initAuth');
    },
    mounted() {
        window.removeEventListener("error", window.errorHandler);
    }
});
