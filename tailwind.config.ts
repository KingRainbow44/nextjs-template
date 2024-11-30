import { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{tsx,ts}"],
    mode: "jit",
    theme: {
        extend: {}
    },
    darkMode: ["class", '[data-mode="dark"]'],
    plugins: [require("tailwindcss-animate")]
} satisfies Config;
