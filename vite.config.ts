import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePages from "vite-plugin-pages";
import ViteMarkdown from "vite-plugin-md";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";
import compression from "vite-plugin-compression2";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import Layouts from 'vite-plugin-vue-layouts';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    VitePages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
    }),
    Layouts(),
    ViteMarkdown(),
    AutoImport({
      imports: ["vue"],
    }),
    Components({
      extensions: ["vue", "md"],
    }),
    UnoCSS(),
    compression(),
    ViteMinifyPlugin({
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
    }),
  ],
});
