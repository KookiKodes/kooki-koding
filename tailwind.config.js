module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		minHeight: {
			"px-800": "800px",
			screen: "100vh",
			full: "100%",
		},
		maxHeight: {
			auto: "auto",
		},
		justify: {
			stretch: "stretch",
		},
		flex: {
			"basis-96": "1 1 20rem",
		},
		extend: {},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
			cursor: ["disabled"],
			placeholderOpacity: ["hover"],
		},
	},
	plugins: [],
};
