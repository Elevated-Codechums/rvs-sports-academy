/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["var(--font-outfit)"],
				roboto: ["var(--font-roboto)"],
				montserrat: ["var(--font-montserrat)"],
			},
			colors: {
				// Primary colors for basketball theme
				basketballOrange: "#E75719",
				deepBlue: "#17408B",

				// Secondary colors for football and cricket
				grassGreen: "#88B04B",
				cricketWhite: "#FFFFFF",

				// Accent colors
				vibrantRed: "#C9082A",
				neutralGray: "#C4CED4",

				// Common colors
				black: "#000000",
				white: "#FFFFFF",
				red: "#FF0000",
				green: "#00FF00",
				blue: "#0000FF",
				yellow: "#FFFF00",

				// Additional colors for UI needs
				error: "#E63946", // A strong red for error handling
				success: "#2A9D8F", // A calm green for success messages
				warning: "#FFC107", // A bright yellow for warnings
				info: "#00BFFF", // A light blue for information
				background: "#F5F5F5", // A soft gray for background
				textPrimary: "#212121", // Dark gray for primary text
				textSecondary: "#757575", // Medium gray for secondary text
			},
		},
	},
	plugins: [],
};
