import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: "Q3jH6AtV98UxC2agQQklaAtt",
      components: {
        page: "storyblok/Page",
        hero_section: "storyblok/HeroSection", // Add this line
      },
      apiOptions: {
        region: "ca",
      },
    }),
  ],
});