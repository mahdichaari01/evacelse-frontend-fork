const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,stories.tsx}"],
	theme: {
		borderRadius: {
			...defaultTheme.borderRadius,
			DEFAULT: "0.625rem",
			sm: "0.3125rem",
			// ...defaultTheme.borderRadius,
		},
		fontFamily: {
			sans: ["Rubik", "sans-serif"],
		},
		fontSize: {
			...defaultTheme.fontSize,
		},
		fontWeight: {
			...defaultTheme.fontWeight,
		},
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"islamic-green": "#009d94",
				"chinese-gold": "#D3A500",
				sinopia: "#DC4504",
				darks: {
					DEFAULT: "#373737",
					highest: "#373737",
					mid: "#686868",
					low: "#A0A0A0",
				},
				clears: {
					DEFAULT: "#FFFFFF",
					primary: "#FFFFFF",
					secondary: "#F5F5F7",
					tertiary: "#E0E0E0",
				},
			},
		},
	},
	plugins: [
		require("daisyui"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/forms"),
		require("@headlessui/tailwindcss")({ prefix: "ui" }),
	],
	daisyui: {
		styled: true,
		themes: [
			{
				light: {
					primary: "#009D94",
					secondary: "#373737",
					accent: "#6CD276",
					neutral: "#F5F5F7",
					"base-100": "#FFFFFF",
					"base-200": "#F5F5F7",
					"base-300": "#EBEBEB",
					error: "#DC4504",
					warning: "#D3A500",
					success: "#009D94",
				},
			},
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
	},
};
