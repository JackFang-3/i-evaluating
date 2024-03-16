import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  // process.cwd()项目的根路径
  // mode 可以区分三个环境 development test production
  const env = loadEnv(mode, process.cwd() + "\\env", "IEVALUATING_");
  console.log("env", env.IEVALUATING_HI);

  // envDir 可以让项目在应用时访问到环境变量
  // envPrefix 可以指定应用时能访问到的环境变量前缀
  return {
    plugins: [vue()],
    envDir: "env",
    envPrefix: "IEVALUATING_",
    server: {
      host: "127.0.0.1",
      port: "8080",
      open: true,
      https: false,
      strictPort: true,
    },
  };
});
