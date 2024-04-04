import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: 'green',
			dirtywhite: '#fbf7f5',
			white: '#ffffff',
			lightgray: '#dadada'
		},
		extend: {
			fontFamily: {
				special: ['"Rajdhani"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
