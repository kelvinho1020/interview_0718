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
			spacing: {
				'sidebar': '365px',
			},
			width: {
				'sidebar': '365px',
			},
			gridTemplateColumns: {
				'layout': '365px 1fr',
				'layout-sm': '280px 1fr',
			}
		},
		screens: {
			'tl': {'max': `${BREAKPOINTS.tabletMax}px`},
			'mb': {'max': `${BREAKPOINTS.mobileMax}px`},
		},
	},
	plugins: [],
}; 