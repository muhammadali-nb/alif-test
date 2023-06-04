/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        fontFamily: {
            'roboto': ['Saira Semi Condensed', 'sans-serif'],
            'rubik': ['Rubik', 'sans-serif']
        }
    },
    plugins: [],
}

