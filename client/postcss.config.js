/** @type {import('postcss-load-config').Config} */
export default {
	plugins: {
		tailwindcss: (await import('./tailwind.config.js')).default,
		autoprefixer: {}
	}
}
