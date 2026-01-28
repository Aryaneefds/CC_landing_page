/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                chai: {
                    gold: "#D4AF37",
                    "gold-light": "#F4C430",
                    "gold-dark": "#AA8C2C",
                    dark: "#1A1614", // Very dark brown/black
                    bg: "#0F0C0A",   // Almost black
                    warm: "#E8DEC9", // Warm beige/parchment
                    accent: "#C2A878",
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            backgroundImage: {
                'royal-gradient': 'linear-gradient(to bottom, #1A1614, #0F0C0A)',
            }
        },
    },
    plugins: [],
}
