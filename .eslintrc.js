module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'error',
	},
};
