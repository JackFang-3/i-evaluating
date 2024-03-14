import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === "serve") {
    return {
      // dev 独有配置
      plugins: [vue()],
      server: {
        host: "127.0.0.1",
        port: "8080",
        open: true,
        https: false,
        strictPort: true,
      },
    };
  } else {
    // command === 'build'
    return {
      // build 独有配置
    };
  }
});
