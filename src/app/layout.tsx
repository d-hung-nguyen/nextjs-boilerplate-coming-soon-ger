import type { Metadata } from "next"
import Alta from "next/font/local"
import Lagusans from "next/font/local"
import "@/./src/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import React from "react"

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
export const metadata: Metadata = {
	title: "Global Elite | Coming Soon",
	description: "Global Elite is a luxury travel partner programme by Address Hotels + Resorts.",
	openGraph: {
		title: "Global Elite | Coming Soon",
		description: "Global Elite is a luxury travel partner programme by Address Hotels + Resorts.",
		url: "https://global-elite.com",
		siteName: "Global Elite",
		type: "website",
		images: [
			{
				url: "/images/",
				width: 1200,
				height: 630,
				alt: "Global Elite Logo",
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${lagusans.variable} ${alta.variable} font-sans bg-gray-50 text-gray-900`}>
				{children} <Analytics />
			</body>
		</html>
	)
}
