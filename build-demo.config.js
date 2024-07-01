import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: "demo", //输出文件名称
  },
})
