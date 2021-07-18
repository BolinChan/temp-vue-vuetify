module.exports = {
	extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines", "stylelint-config-prettier"],
	plugins: ["stylelint-order", "stylelint-scss", "stylelint-declaration-block-no-ignored-properties"],
	rules: {
		"no-descending-specificity": null,
		"function-calc-no-invalid": null,
		"function-url-quotes": "always",
		"font-family-no-missing-generic-family-keyword": null,
		"plugin/declaration-block-no-ignored-properties": true,
		"unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
		// "order/properties-order": ["width", "height"],
	},
};
