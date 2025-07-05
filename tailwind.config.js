/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class", // or "media" if you prefer system dark mode
	theme: {
		extend: {
			borderRadius: {
				DEFAULT: "var(--radius)",
			},
			colors: {
				background: "oklch(var(--color-background))",
				foreground: "oklch(var(--color-foreground))",
				primary: "oklch(var(--color-primary))",
				secondary: "oklch(var(--color-secondary))",
				muted: "oklch(var(--color-muted))",
			},
			fontFamily: {
				sans: ["var(--font-family-sans)", "sans-serif"],
				serif: ["var(--font-family-serif)", "serif"],
				alt: ["var(--font-family-alt)", "sans-serif"],
				heading: ["var(--font-family-heading)", "sans-serif"],
				logo: ["var(--font-family-logo)", "sans-serif"],
				lagusans: ["var(--font-family-lagusans)", "sans-serif"],
				montserrat: ["var(--font-family-montserrat)", "sans-serif"],
				alta: ["var(--font-family-alta)", "sans-serif"],
			},
			animation: {
				"fade-in-right": "fadeInRight 0.9s ease-out both",
			},
			keyframes: {
				fadeInRight: {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
		},
	},
	plugins: [],
}
