import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

 
export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}" // Added path from the existing config
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/bg-img.jpeg')"
      },
      colors: {
        bodycolor: "#fbfaf7",
        bglight: "#1010100d",
        darktext: "#242424",
        lightext: "#a5a5a5",
      }
    },
  },
  plugins: [],
})