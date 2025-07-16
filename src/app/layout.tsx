// app/layout.tsx

import type { Metadata } from "next"
import localFont from "next/font/local"
import "@/src/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import ConditionalLayout from "@/components/ConditionalLayout"
import ChromeRuntimeListener from "@/components/ChromeRuntimeListener"
import Script from "next/script"

const lagusans = localFont({
	src: "./fonts/lagusans-light.otf",
	weight: "400",
	style: "normal",
	fallback: ["sans-serif"],
	variable: "--font-lagusans",
	display: "swap",
})

const alta = localFont({
	src: "./fonts/Alta.otf",
	weight: "400",
	style: "normal",
	fallback: ["sans-serif"],
	variable: "--font-alta",
	display: "swap",
})

export const metadata: Metadata = {
	metadataBase: new URL("https://globaleliteassociates.com"),
	title: "Global Elite & Associates",
	description: "Global Elite is a luxury travel partner programme by Address Hotels + Resorts.",
	openGraph: {
		title: "Global Elite & Associates",
		description: "Bespoke luxury hospitality sales in DACH, Nordics, CEE and UK.",
		url: "https://globaleliteassociates.com",
		siteName: "Global Elite & Associates",
		type: "website",
		images: [
			{
				url: "/images/ge-mono.png",
				width: 1200,
				height: 630,
				alt: "Global Elite Logo",
			},
		],
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="developer" content="Hung Nguyen - Web Developer" />
				<meta name="author" content="Hung Nguyen" />

				<link
					rel="preload"
					href="/fonts/lagusans-light.otf"
					as="font"
					type="font/otf"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Alta.otf"
					as="font"
					type="font/otf"
					crossOrigin="anonymous"
				/>
			</head>
			<body
				className={`${lagusans.variable} ${alta.variable} font-lagusans bg-background text-foreground`}
			>
				<ChromeRuntimeListener />
				<ConditionalLayout>
					{children}
					<Analytics />
				</ConditionalLayout>

				{/* Cookiebot Script */}
				<Script
					id="cookiebot"
					src="https://consent.cookiebot.com/uc.js"
					data-cbid="0eff1881-d3a9-49af-b46c-7db22a44adaf"
					data-blockingmode="auto"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	)
}
