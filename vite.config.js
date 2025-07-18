import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["d47vlt-5173.csb.app"],
  },
  plugins: [react()],
});
