module.exports = {
	// 兼容IE11
	transpileDependencies: ["vuetify"],
	productionSourceMap: false,
	chainWebpack: config => {
		config.plugin("html").tap(args => {
			args[0].title = process.env.VUE_APP_TITLE;
			return args;
		});
		config.plugin("define").tap(args => {
			args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL);
			return args;
		});
	},
};
