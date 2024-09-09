import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Basic Concepts', slug: 'Basic-Concepts/intro-to-python-syntax' },
					]
				},
				{
					label: 'Intermediate Concepts',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intermediate Concepts', slug: 'Intermediate-Concepts/introduction' },
					],
				},
				{
					label: 'Advanced Concepts',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Advanced Concepts', slug: 'Advanced-Concepts/introduction' },
					],
				},

				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
