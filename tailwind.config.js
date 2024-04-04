import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: 'green',
			white: '#ffffff',
			gray: "#999D9E"
		},
		extend: {
			fontFamily: {
				raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
