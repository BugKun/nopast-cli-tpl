import Vue from 'vue'
import store from "./store"
import router from "./router"
import "./global.less"
import App from './pageLayout'


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
