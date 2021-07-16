import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
// import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

// Vue.use(VueLazyload, {
// 	preLoad: 1.3,
// 	error: require("@/assets/error.png"),
// 	loading: require("@/assets/loading.gif"),
// 	attempt: 1,
// });

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount("#app");
