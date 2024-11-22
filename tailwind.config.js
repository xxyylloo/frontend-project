import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#065a60'
				}
			},
			{
				dark: {
					primary: '#f8fafc',
					secondary: '#a78bfa',
					accent: '#7c3aed',
					neutral: '#242424',
					'base-100': '#9ca3af',
					'base-200': '#71717a'
				}
			}
		]
	}
};
