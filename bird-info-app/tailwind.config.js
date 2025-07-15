/** @type {import('tailwindcss').Config} */
import { BREAKPOINTS } from "./src/constants/breakpoints";

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
				"deepRed": "#AA6666",
			},
			fontFamily: {
				sans: ["Noto Sans TC", "Arial", "Microsoft JhengHei", "sans-serif"],
			},
		},
		screens: {
			'tl': {'max': `${BREAKPOINTS.tabletMax}px`},
			'mb': {'max': `${BREAKPOINTS.mobileMax}px`},
		},
	},
	plugins: [],
}; 