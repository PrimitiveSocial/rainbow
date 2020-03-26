import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Vue router setup
import router from "./router";

// Vuex store setup
import store from "./store";

// tailwind setup
import "./assets/styles.css";

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
