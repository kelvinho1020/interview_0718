/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2c3e50",
				secondary: "#3498db",
				accent: "#e8f4f8",
				"nav-active": "#AA6666",
			},
			fontFamily: {
				sans: ["Noto Sans TC", "Arial", "Microsoft JhengHei", "sans-serif"],
			},
		},
		screens: {
			'mb': {'max': '767px'},
		},
	},
	plugins: [],
}; 