/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                opensans: ["Open sans", "sans-serif"],
                oswald: ["Oswald", "sans-serif"],
            },
        },
        colors: {
            blue: "#056CF2",
            yellow: "#F2A005",
            black: "#000000",
            white: "#FFFFFF"
        },
    },
    plugins: [],
};
