import Vue from 'vue'
import store from "./store"
import Fragment from 'vue-fragment'
import router from "./router"
import "normalize.css"
import "./global.less"
import App from './pageLayout'


Vue.use(Fragment.Plugin)

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
