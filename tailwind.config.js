import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#00FFFF',
			secondary: '#EEEEEE',
			'dark-primary': '#008B8B',
			white: '#ffffff',
			dark: '#222831',
			gray: '#999D9E',
			lightgray: '#d3d3d3'
		},
		extend: {
			fontFamily: {
				raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
