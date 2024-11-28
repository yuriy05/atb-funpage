import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgmain:
          "linear-gradient(to bottom, rgba(0, 0, 139, 0.8) 10%, rgba(0, 0, 0, 0.9) 90%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
