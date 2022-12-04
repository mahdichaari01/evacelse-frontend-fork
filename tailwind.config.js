/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: [
			{
				light: {
					primary: "#009D94",
					secondary: "#373737",
					accent: "#6CD276",
					neutral: "",
					"base-100": "#FFFFFF",
					"base-200": "#F5F5F7",
					"base-300": "#EBEBEB",
					error: "#DC4504",
					warning: "#D3A500",
					success: "009D94",
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
