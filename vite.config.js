import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      proxy: {
        "/api": {
          target: "https://tttgame-backend.onrender.com/", // Replace with your actual Render backend URL
          changeOrigin: true,
          secure: true, // Set to true if your backend server uses HTTPS
        },
        "/socket.io": {
          target: "https://tttgame-backend.onrender.com/", // Replace with your actual Render backend URL
          ws: true,
          changeOrigin: true,
          secure: true, // Set to true if your backend server uses HTTPS
        },
      },
    },
  },
  plugins: [react()],
});
