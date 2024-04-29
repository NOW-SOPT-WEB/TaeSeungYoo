import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@img", replacement: resolve(__dirname, "src/assets/img") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@styles", replacement: resolve(__dirname, "src/styles") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@util", replacement: resolve(__dirname, "src/util") },
    ],
  },
});
