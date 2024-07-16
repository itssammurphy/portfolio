import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            animation: {
                "pulse-bg": "pulse-bg-once 2s ease-in infinite",
            },
            keyframes: {
                "pulse-bg": {
                    "0%": { backgroundColor: "var(--tw-gradient-from)" },
                    "50%": { backgroundColor: "var(--tw-gradient-to)" },
                    "100%": { backgroundColor: "var(--tw-gradient-from)" },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
