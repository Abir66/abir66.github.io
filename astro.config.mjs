import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://abir66.github.io',
  integrations: [tailwind(), mdx(), icon(), svelte()]
});