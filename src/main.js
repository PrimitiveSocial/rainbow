import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Vue router setup
import router from "./router";

// Vuex store setup
import store from "./store";

// tailwind setup
import "./assets/styles.css";

// Event Bus
window.EventBus = new Vue();

// Modal prototype
Vue.prototype.$modal = {
    open(name) {
        window.EventBus.$emit('open-modal', {name: name});
    },
    close(name) {
        window.EventBus.$emit('hide-modal', {name: name});
    }
};

//register the v-highlight code directive
import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight);


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
