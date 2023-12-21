module.exports = {
  // purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  content: [
    // add this lines
    "./pages/**/*.{js,ts,jsx,tsx}", // if you have other folder, add its path too, like this:
    "./app/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: { max: "576px" },
      sm: "640px",
      md: "768px",
      sd: "992px",
      lg: "1024px",
      pc: "1280px",
      xl: "1400px",
      "1xl": "1500px",
      "2xl": "1600px"
    },
    extend: {
      padding: {
        "8px": "8px"
      },
      colors: {
        primary: "#D31111",
        secondary: "#2D7A56",
        gray: "#2F2F2F",
        "main-color": "#0088cc",
        "main-bg-color": "#EFEFFF",
        "text-header": "#697077",
        "text-main": "#757575",
        "text-desc": "#616161",
        "text-orange": "#FF6100",
        "text-red": "#d31111",
        "button-red": "#f04848",
        "text-title": "#282828",
        "color-border": "#E0E0E0",
        "color-label": "#424242",
        "color-main": "#FFAB77",
        "text-banner-desc": "#9E9E9E"
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")]
}
