import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.jpg",
      title: "TechSpace",
      logo: {
        src: "/src/assets/techspaceTrans.png",
        alt: "TechSpace Logo",
      },
      social: {
        github: "https://github.com/aleerabdallah/TechSpace_Python_Tutorials",
      },
      sidebar: [
        {
          label: "Introduction to Python",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Overview", slug: "intro-to-python/overview" },
            {
              label: "Introduction to Python",
              slug: "intro-to-python/introduction",
            },
            { label: "Installation", slug: "intro-to-python/installation" },
          ],
        },
        {
          label: "Basic Concepts",
          autogenerate: { directory: "basic-concepts" },
        },
        {
          label: "Intermediate Concepts",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Advanced Concepts",
          autogenerate: { directory: "reference" },
        },

        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
