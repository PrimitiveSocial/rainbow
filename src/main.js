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
    open(name, params) {
        window.EventBus.$emit('open-modal', {name: name, params: params});
    },
    close(name) {
        window.EventBus.$emit('hide-modal', {name: name});
    }
};

//register the v-highlight code directive
import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight);

// register ps-validation package
import PsValidation from "@primitivesocial/ps-validation";
Vue.use(PsValidation);


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
