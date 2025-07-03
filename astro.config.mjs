import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";

export default defineConfig({
  response: {
    headers: {
      // This allows Storyblok's visual editor to embed your site
      "Content-Security-Policy": "frame-ancestors https://app.storyblok.com",
    },
  },
  integrations: [
    storyblok({
      accessToken: "Q3jH6AtV98UxC2agQQklaAtt",
      components: {
        page: "storyblok/Page",
        hero_section: "storyblok/HeroSection",
      },
      apiOptions: {
        region: "ca",
      },
    }),
  ],
});