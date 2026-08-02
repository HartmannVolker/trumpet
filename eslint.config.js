// eslint.config.js
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

export default ts.config(
	{ ignores: ['.svelte-kit/', 'build/', 'package/'] },

	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'], // Ensure you use the 'flat' export for the Svelte plugin

	// 3. Global Variables
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},

	// 4. Svelte-specific Parsing
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true, // Requires typescript-eslint v8+
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},

	// 5. Custom Rule Overrides
	{
		rules: {
			// Override or add rule settings here, such as:
			// 'svelte/valid-compile': 'error'
		}
	}
);
