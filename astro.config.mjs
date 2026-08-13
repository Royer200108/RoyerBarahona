// @ts-check
import { defineConfig, fontProviders, svgoOptimizer } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "DroidSansMNerdFontMono-Regular",
    cssVariable: "--droid-sans-m-nerd-font-mono",
    options: {
      variants: [{
        src: ['./src/assets/fonts/DroidSansMNerdFontMono-Regular.otf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }],
    experimental: {
    svgOptimizer: svgoOptimizer()
  }


});