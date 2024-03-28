import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#2727b4",
      primary75: "#5d5dc7",
      primary50: "#9393d9",
      primary25: "#c9c9ec",
      "primary-75": "#171732",
      "primary-50": "#14145a",
      "primary-25": "#1e1e87",
      secondary: "#c92c2c",
      secondary75: "#d66161",
      secondary50: "#e49696",
      secondary25: "#f1caca",
      "secondary-75": "#320b0b",
      "secondary-50": "#641616",
      "secondary-25": "#972121",
      tertiary: "#dc4d18",
      gradient1: "linear-gradient(0deg, #dc4d18, #c92c2c)",
      gradient2: "linear-gradient(0deg, #c92c2c, #dc4d18)",
      black: "#101010",
      black75: "#4c4c4c",
      black50: "#878787",
      black25: "#c3c3c3",
      black10: "#e7e7e7",
      black5: "#f2f2f2",
      error: "#ff4747",
      warning: "#f5a300",
      info: "#00cc29",
      success: "#4778ff",
    },
  },
  plugins: [],
  important: true,
};
export default config;
