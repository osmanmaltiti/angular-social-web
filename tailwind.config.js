module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        "primary-black": "#222121",
        "primary-cream": "#f6f0f0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
