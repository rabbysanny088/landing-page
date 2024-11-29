/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ringColor: {
        "ring-back": "#F8F1FE",
      },
      backgroundColor: {
        "hsl-color": "#F8F1FE",
        "accent-color": "#f4f4f5",
        "icon-color": "rgba(147,51,234,.2)",
        // "muted-foreground": "#F00A76",
      },

      colors: {
        "muted-foreground": "rgb(154 154 154)",
        "custom-border": "hsl(var(--hue, 240) 5.9% 10% / 0.1)",
        "custom-hover-border": "hsl(var(--primary) / 0.3)",
      },
      borderColor: {
        "muted-foreground": "rgb(154 154 154)",
      },

      boxShadow: {
        shadow: "0 25px 50px -12px rgba(0, 0, 0, .25",
      },
    },
  },
  plugins: [],
};
