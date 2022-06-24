module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		'jest/globals': true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', 'jest', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:jest/recommended',
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
