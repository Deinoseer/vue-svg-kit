import Vue from "vue";
import App from "./App.vue";
import VTooltip from "v-tooltip";
import "@/styles/common.scss";

Vue.config.productionTip = false;
Vue.use(VTooltip, {
  popover: {
    defaultPopperOptions: {
      modifiers: {
        preventOverflow: {
          padding: 16
        }
      }
    }
  }
});
new Vue({
  render: h => h(App)
}).$mount("#app");
