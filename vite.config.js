import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { APP_NAME } from "./src/utilities/constants";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: APP_NAME,
        short_name: APP_NAME.trim(),
        description: "A music app powered by spotify api!",
        theme_color: "#2563eb",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        dir: "ltr",

        icons: [
          {
            src: "/images/icons/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        display_override: ["fullscreen", "standalone"],
      },
      registerType: "autoUpdate", //automatically update the service worker
      devOptions: {
        enabled: true, //enable PWA in development mode for testing
        type: "module", //ensure the service worker is registered as a module
        disableTypeChecking: true,
      },
    }),
  ],
});
