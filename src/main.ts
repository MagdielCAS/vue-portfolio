import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import plugins from "./plugins";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n: plugins.i18n,
  render: h => h(App)
}).$mount("#app");
