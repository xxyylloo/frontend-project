import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
/* In your Tailwind configuration */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bg-highlight': '#155e75'
			}
		}
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
					secondary: '#0e7490',
					accent: '#0e7490',
					neutral: '#242424',
					'base-100': '#9ca3af',
					'base-200': '#71717a'
				}
			}
		]
	}
};
