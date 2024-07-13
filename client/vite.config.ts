import { defineConfig } from 'vite'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react-swc'

const clientDir = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
	root: join(clientDir, './src'),
	plugins: [react()],
	build: {
		assetsInlineLimit: 0,
		emptyOutDir: true,
		outDir: join(clientDir, './build/____')
	},
	resolve: {
		alias: [{ find: '@', replacement: join(clientDir, './src') }]
	},
	envDir: join(clientDir, '../')
})
