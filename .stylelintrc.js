module.exports = {
	extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines", "stylelint-config-prettier"],
	plugins: ["stylelint-order", "stylelint-scss"],
	rules: {
		indentation: "tab",
		"number-leading-zero": "never",
		"string-quotes": "double",
		"declaration-block-trailing-semicolon": "always",
		"length-zero-no-unit": true,
		"max-empty-lines": 1,
		"no-eol-whitespace": true,
		"no-missing-end-of-source-newline": true,
	},
};
