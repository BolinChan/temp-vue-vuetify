import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

Vuetify.config.silent = false;

export default new Vuetify({
	theme: { dark: false },
	icons: {
		iconfont: "mdi",
	},
});
