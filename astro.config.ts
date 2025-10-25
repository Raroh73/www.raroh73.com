import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.raroh73.com",
  integrations: [sitemap()],
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Inter",
        cssVariable: "--font",
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["src/fonts/Inter-Variable-Normal.woff2"],
          },
          {
            weight: "100 900",
            style: "italic",
            src: ["src/fonts/Inter-Variable-Italic.woff2"],
          },
        ],
      },
    ],
  },
});
