import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("colorer", {
  bind(el, binding, vnode) {
    if (binding.arg)
      switch (binding.arg) {
        case "background":
          el.style.backgroundColor = binding.value;
          break;
        case "color":
          el.style.color = binding.value;
          break;
        default:
      }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
