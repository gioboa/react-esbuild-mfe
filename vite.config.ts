import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { moduleFederationPlugin } from './src/module-federation-vite';

// https://vitejs.dev/config/
export default defineConfig(async () => {
	return {
		plugins: [
			react(),
			await moduleFederationPlugin({
				entry: { remote: '...' },
				shared: {
					react: { eager: true },
				},
			}),
		],
	};
});
