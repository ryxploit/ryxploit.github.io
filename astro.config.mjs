// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ryxploit.github.io",
  base: "/",
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory"
  },
  integrations: [tailwind()]
});