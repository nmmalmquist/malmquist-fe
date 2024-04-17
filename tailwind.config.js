import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#102C57',
			secondary: '#DAC0A3',
			tertiary: '#EADBC8',
			quaternary: '#FEFAF6',
			white: '#ffffff',
			dark: '#1C1D20',
			gray: '#999D9E'
		},
		extend: {
			fontFamily: {
				raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
