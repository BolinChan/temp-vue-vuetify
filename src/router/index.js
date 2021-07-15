import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// let routes = [];

// const routerContext = require.context("./", true, /index\.js$/);
// routerContext.keys().forEach(route => {
// 	if (route.startsWith("./index")) return;
// 	const routerModule = routerContext(route);
// 	routes = [...routes, ...(routerModule.default || routerModule)];
// });

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
