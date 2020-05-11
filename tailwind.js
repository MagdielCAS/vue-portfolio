module.exports = {
  theme: {
    extend: {
      colors: {
        "blue-gray": "#70819e",
        manatee: "#9aa0a8",
        munsell: "#00A878",
        "cambridge-blue": "#a7c4b5",
        "turquoise-greebn": "#a9d8b8",
        "tea-green": "#beffc7",
        "gold-fusion": "#72705b"
      }
    }
  },
  variants: {
    // ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled']
    display: ["responsive", "group-hover"],
    width: ["responsive", "group-hover", "hover"],
    visibility: ["responsive", "group-hover", "hover"],
    opacity: ["responsive", "group-hover", "hover", "focus"]
  },
  plugins: []
};
