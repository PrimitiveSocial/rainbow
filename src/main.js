import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Vue router setup
import router from "./router";

// Vuex store setup
import store from "./store";

// tailwind setup
import "./assets/styles.css";

//register the v-highlight code directive
import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight);


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
