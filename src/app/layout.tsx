import type { Metadata } from "next"
import localFont from "next/font/local"
import "@/src/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ConditionalLayout from "@/components/ConditionalLayout"
import CookieBanner from "@/components/CookieBanner"
import HubSpotTracking from "@/components/HubSpotTracking"

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
	title: "Global Elite | Coming Soon",
	description: "Global Elite is a luxury travel partner programme by Address Hotels + Resorts.",
	openGraph: {
		title: "Global Elite | Coming Soon",
		description: "Global Elite is a luxury travel partner programme by Address Hotels + Resorts.",
		url: "https://globaleliteassociates.com",
		siteName: "Global Elite",
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
			<head>{/* HubSpot Tracking will be loaded by the component */}</head>
			<body
				className={`${lagusans.variable} ${alta.variable} font-lagusans bg-background text-foreground`}
			>
				<ConditionalLayout>
					{children}
					<Analytics />
					<CookieBanner />
					{/* Replace YOUR_HUBSPOT_ID with your actual HubSpot ID */}
					<HubSpotTracking hubspotId="7971615" />
				</ConditionalLayout>
			</body>
		</html>
	)
}
