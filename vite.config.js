import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Relative base: works on Vercel, GitHub Pages user sites and project sites.
export default defineConfig({ base: "./", plugins: [react()] });
