import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import { presetIcons } from "unocss";
import { presetTypography } from "unocss";
import { presetAttributify } from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography({
      selectorName: "prose",
      cssExtend: {
        a: {
          color: "#00aaff",
          "text-decoration": "none",
        },
        "a:hover": {
          color: "#0077b3",
          "text-decoration": "underline",
        },
        ".dark a": {
          color: "#66ccff",
        },
        ".dark a:hover": {
          color: "#b3e6ff",
        },
        blockquote: {
          "border-left": "4px solid #66ccff",
          "padding-left": "1rem",
          "padding-top": "1rem",
          "padding-bottom": "1rem",
          "margin-left": "0",
          "background-color": "#e5f7ff",
        },
        ".dark blockquote": {
          "background-color": "#00334d",
        }
      },
    }),
  ],
  shortcuts: [
    {
      "theme-base": "bg-white text-black dark:bg-gray-800 dark:text-white",
      "pcl-button":
        "font-[Noto_Sans_SC] border-solid py-2 px-5 transition hover:duration-150 duration-450 rounded-1 active:scale-95 text-black dark:text-gray-300",
      "pcl-button-primary":
        "border-[#66ccff] bg-transparent hover:bg-[#cceeff] hover:dark:bg-[#005580] !text-[#66ccff]",
      "pcl-menu-item":
        "hover:bg-gray-500/20 px-2 py-1 rounded-md transition-colors cursor-pointer",
    },
  ],
});
