// app/layout.tsx

import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "@/src/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import ConditionalLayout from "@/components/ConditionalLayout"
import ChromeRuntimeListener from "@/components/ChromeRuntimeListener"
import ErrorBoundary from "@/components/ErrorBoundary"
import Script from "next/script"

// Font definitions with better optimization
const lagusans = localFont({
	src: [
		{
			path: "./fonts/lagusans-regular.otf",
			weight: "400",
			style: "normal",
		},
	],
	fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
	variable: "--font-lagusans",
	display: "swap",
	preload: true,
})

const alta = localFont({
	src: "./fonts/Alta.otf",
	weight: "400",
	style: "normal",
	fallback: ["Georgia", "Times New Roman", "serif"],
	variable: "--font-alta",
	display: "swap",
	preload: true,
})

// Viewport configuration
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#111827" },
	],
}

// Enhanced metadata
export const metadata: Metadata = {
	metadataBase: new URL("https://globaleliteassociates.com"),
	title: {
		default: "Global Elite & Associates",
		template: "%s | Global Elite & Associates",
	},
	description:
		"Global Elite is a luxury travel partner programme by Address Hotels + Resorts. Bespoke luxury hospitality sales in DACH, Nordics, CEE and UK.",
	keywords: [
		"luxury travel",
		"hospitality",
		"Address Hotels",
		"premium service",
		"DACH",
		"Nordics",
		"CEE",
		"UK",
	],
	authors: [{ name: "Hung Nguyen", url: "https://globaleliteassociates.com" }],
	creator: "Hung Nguyen - Web Developer",
	publisher: "Global Elite & Associates",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://globaleliteassociates.com",
		siteName: "Global Elite & Associates",
		title: "Global Elite & Associates",
		description: "Bespoke luxury hospitality sales in DACH, Nordics, CEE and UK.",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Global Elite & Associates - Luxury Travel Partners",
				type: "image/jpeg",
			},
			{
				url: "/images/og-image-square.jpg",
				width: 1200,
				height: 1200,
				alt: "Global Elite & Associates Logo",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Global Elite & Associates",
		description: "Bespoke luxury hospitality sales in DACH, Nordics, CEE and UK.",
		images: ["/images/twitter-image.jpg"],
		creator: "@globaleliteassoc",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-site-verification-code",
		// yandex: "your-yandex-verification-code",
		// yahoo: "your-yahoo-verification-code",
	},
}

// TypeScript declarations for global objects - moved to CookieConsent component

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Security Headers - X-Frame-Options moved to next.config.ts */}
				<meta httpEquiv="X-Content-Type-Options" content="nosniff" />
				<meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
				<meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

				{/* Preconnect to external domains for performance */}

				<link rel="preconnect" href="https://vitals.vercel-analytics.com" />

				{/* DNS prefetch for better performance */}
				<link rel="dns-prefetch" href="//consent.cookiebot.com" />

				{/* Favicon and app icons */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />

				{/* Font preloading with proper MIME types */}
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
				className={`${lagusans.variable} ${alta.variable} font-lagusans bg-background text-foreground antialiased`}
				suppressHydrationWarning
			>
				{/* Skip to main content for accessibility */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md"
				>
					Skip to main content
				</a>

				{/* Chrome extension listener */}
				<ChromeRuntimeListener />

				{/* Main application wrapper */}
				<ErrorBoundary>
					<ConditionalLayout>
						<main id="main-content" role="main">
							{children}
						</main>

						{/* Analytics */}
						<Analytics />
					</ConditionalLayout>
				</ErrorBoundary>

				{/* Structured Data for Organization */}
				<Script
					id="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Global Elite & Associates",
							url: "https://globaleliteassociates.com",
							logo: "https://globaleliteassociates.com/images/logo.png",
							description:
								"Global Elite is a luxury travel partner programme by Address Hotels + Resorts.",
							contactPoint: {
								"@type": "ContactPoint",
								contactType: "customer service",
								areaServed: ["DE", "AT", "CH", "DK", "NO", "SE", "FI", "CZ", "PL", "HU", "GB"],
							},
							sameAs: [
								"https://linkedin.com/company/global-elite-associates",
								// Add other social media URLs
							],
						}),
					}}
				/>

				{/* Performance and error monitoring */}
				{process.env.NODE_ENV === "production" && (
					<>
						{/* Web Vitals reporting */}
						<Script
							id="web-vitals"
							strategy="afterInteractive"
							dangerouslySetInnerHTML={{
								__html: `
									import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
										function sendToAnalytics(metric) {
											if (window.gtag) {
												window.gtag('event', metric.name, {
													event_category: 'Web Vitals',
													event_label: metric.id,
													value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
													non_interaction: true,
												});
											}
										}
										getCLS(sendToAnalytics);
										getFID(sendToAnalytics);
										getFCP(sendToAnalytics);
										getLCP(sendToAnalytics);
										getTTFB(sendToAnalytics);
									});
								`,
							}}
						/>
					</>
				)}
			</body>
		</html>
	)
}
