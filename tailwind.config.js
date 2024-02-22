/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-1/10": "10vh",
        "screen-2/10": "20vh",
        "screen-3/10": "30vh",
        "screen-4/10": "40vh",
        "screen-5/10": "50vh",
        "screen-6/10": "60vh",
        "screen-7/10": "70vh",
        "screen-8/10": "80vh",
        "screen-9/10": "90vh",
        "screen-1/6": "16.666667vh",
        "screen-2/6": "33.333333vh",
        "screen-3/6": "50vh",
        "screen-4/6": "66.666667vh",
        "screen-5/6": "83.333333vh",
        "screen-1/3": "33.333333vh",
        "screen-2/3": "66.666667vh",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
      },
    },
  },
  plugins: [],
};
