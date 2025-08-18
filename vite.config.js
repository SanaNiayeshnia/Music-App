import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default ({ mode }) => {
  // Load env variables for the current mode
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        manifest: {
          name: env.VITE_APP_NAME,
          short_name: env.VITE_APP_NAME?.trim() || "App",
          description: "A music app powered by Spotify API!",
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
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
          type: "module",
          disableTypeChecking: true,
        },
      }),
    ],
  });
};
