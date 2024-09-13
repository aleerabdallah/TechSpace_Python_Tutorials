import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/src/assets/techspace.jpg',
			title: 'Docs with Tailwind',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Introduction to Python',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'intro_to_python/example' },
					],
				},
				{
					label: 'Basic Concepts',
					autogenerate: { directory: 'basic-concepts' },
				},
				{
					label: 'Intermediate Concepts',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Advanced Concepts',
					autogenerate: { directory: 'reference' },
				},

				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
