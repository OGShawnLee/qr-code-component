import { defineConfig } from "unocss/vite";
import { presetWind3, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: "google",
      fonts: {
        "outfit": "Outfit"
      }
    })
  ],
  theme: {
    colors: {
      "slate-light": 'hsl(212, 45%, 89%)',
      "slate-mid": 'hsl(220, 15%, 55%)',
      "slate-dark": 'hsl(218, 44%, 22%)',
    }
  }
});