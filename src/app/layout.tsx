import type { Metadata } from "next"
import Alta from "next/font/local"
import Lagusans from "next/font/local"
import "@/./src/styles/globals.css"

const lagusans = Lagusans({
	src: "@/../lagusans-light.otf",
	weight: "400",
	style: "normal",
	fallback: ["sans-serif"],
	variable: "--font-lagusans",
	display: "swap",
})

const alta = Alta({
	src: "@/../Alta.otf",
	weight: "400",
	style: "normal",
	fallback: ["sans-serif"],
	variable: "--font-alta",
	display: "swap",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${lagusans.variable} ${alta.variable} font-sans bg-gray-50 text-gray-900`}>{children}</body>
		</html>
	)
}
