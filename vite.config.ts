import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { configDefaults, type ViteUserConfig } from 'vitest/config';

const config: ViteUserConfig = {
	plugins: [sveltekit(), tailwindcss()],
	test: {
		exclude: [...configDefaults.exclude, 'tests/**']
	}
};

export default config;
