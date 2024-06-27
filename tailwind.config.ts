import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#7fbc8c",
        mainAccent: "#58a769", // not needed for shadcn components
        overlay: "rgba(0,0,0,0.8)",
        // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#daf5f0",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#0b2823",
        darkText: "#eeefe9",
        darkBorder: "#000",
      },
      borderRadius: {
        base: "0px",
      },
      boxShadow: {
        light: "3px 4px 0px 0px #000",
        dark: "3px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "3px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-3px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "900",
      },
    },
    animation: {
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
  },
  plugins: [],
};
export default config;
