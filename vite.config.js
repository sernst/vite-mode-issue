import { defineConfig } from "vite";

export default defineConfig(({ mode}) => {
  const config = { base: "./", mode, build: {} };
  if (mode === "development") {
    config.build.minify = false;
  }
  return config;
});
