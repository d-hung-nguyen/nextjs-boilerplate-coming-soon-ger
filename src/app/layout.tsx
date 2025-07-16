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

				{/* Simplified Cookiebot Styles - Black/White/Gray Theme */}
				<style>{`
                    /* Main dialog container */
                    #CybotCookiebotDialog {
                        max-width: 420px !important;
                        width: 90% !important;
                        padding: 24px !important;
                        border-radius: 8px !important;
                        background: white !important;
                        border: 1px solid #e5e7eb !important;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
                        font-family: var(--font-lagusans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
                    }

                    /* Remove all icons and branding */
                    #CybotCookiebotDialogBodyLogo,
                    #CybotCookiebotDialogPoweredbyText,
                    #CybotCookiebotDialogBodyContentLogoWrapper,
                    .CybotCookiebotDialogBodyLevelButtonIcon,
                    #CybotCookiebotDialogBodyContentIcon {
                        display: none !important;
                    }

                    /* Content area */
                    #CybotCookiebotDialogBodyContent {
                        padding: 0 !important;
                        margin: 0 !important;
                    }

                    /* Title styling */
                    #CybotCookiebotDialogBodyContentTitle {
                        font-size: 20px !important;
                        font-weight: 600 !important;
                        color: #111827 !important;
                        margin-bottom: 12px !important;
                        font-family: var(--font-lagusans), sans-serif !important;
                        line-height: 1.2 !important;
                    }

                    /* Description text */
                    #CybotCookiebotDialogBodyContentText {
                        font-size: 14px !important;
                        line-height: 1.5 !important;
                        color: #6b7280 !important;
                        margin-bottom: 20px !important;
                        font-family: var(--font-lagusans), sans-serif !important;
                    }

                    /* Button container */
                    #CybotCookiebotDialogBodyButtons {
                        display: flex !important;
                        gap: 12px !important;
                        flex-wrap: wrap !important;
                        justify-content: flex-end !important;
                        margin-top: 20px !important;
                    }

                    /* Base button styles */
                    #CybotCookiebotDialogBodyButtonAccept,
                    #CybotCookiebotDialogBodyButtonDecline,
                    #CybotCookiebotDialogBodyButtonSettings {
                        padding: 10px 20px !important;
                        font-size: 14px !important;
                        font-weight: 500 !important;
                        border-radius: 6px !important;
                        border: none !important;
                        cursor: pointer !important;
                        transition: all 0.2s ease !important;
                        font-family: var(--font-lagusans), sans-serif !important;
                        text-decoration: none !important;
                    }

                    /* Accept button - black */
                    #CybotCookiebotDialogBodyButtonAccept {
                        background-color: #111827 !important;
                        color: white !important;
                        border: 1px solid #111827 !important;
                    }

                    #CybotCookiebotDialogBodyButtonAccept:hover {
                        background-color: #374151 !important;
                        border-color: #374151 !important;
                    }

                    /* Decline button - white with gray border */
                    #CybotCookiebotDialogBodyButtonDecline {
                        background-color: white !important;
                        color: #6b7280 !important;
                        border: 1px solid #d1d5db !important;
                    }

                    #CybotCookiebotDialogBodyButtonDecline:hover {
                        background-color: #f9fafb !important;
                        color: #374151 !important;
                        border-color: #9ca3af !important;
                    }

                    /* Settings button - minimal gray */
                    #CybotCookiebotDialogBodyButtonSettings {
                        background-color: transparent !important;
                        color: #9ca3af !important;
                        border: none !important;
                        text-decoration: underline !important;
                        padding: 8px 12px !important;
                        font-size: 13px !important;
                    }

                    #CybotCookiebotDialogBodyButtonSettings:hover {
                        color: #6b7280 !important;
                    }

                    /* Hide cookie level buttons icons */
                    .CybotCookiebotDialogBodyLevelButton::before,
                    .CybotCookiebotDialogBodyLevelButton::after {
                        display: none !important;
                    }

                    /* Settings dialog styling */
                    #CybotCookiebotDialogDetailBody {
                        font-family: var(--font-lagusans), sans-serif !important;
                        background: white !important;
                        color: #374151 !important;
                    }

                    #CybotCookiebotDialogDetailBodyContent {
                        font-family: var(--font-lagusans), sans-serif !important;
                    }

                    /* Tab styling */
                    .CybotCookiebotDialogDetailBodyContentTab {
                        background-color: #f9fafb !important;
                        color: #374151 !important;
                        border: 1px solid #e5e7eb !important;
                        font-family: var(--font-lagusans), sans-serif !important;
                    }

                    .CybotCookiebotDialogDetailBodyContentTab.CybotCookiebotDialogDetailBodyContentTabActive {
                        background-color: #111827 !important;
                        color: white !important;
                        border-color: #111827 !important;
                    }

                    /* Mobile responsiveness */
                    @media (max-width: 768px) {
                        #CybotCookiebotDialog {
                            max-width: 340px !important;
                            padding: 20px !important;
                            margin: 0 16px !important;
                        }

                        #CybotCookiebotDialogBodyContentTitle {
                            font-size: 18px !important;
                        }

                        #CybotCookiebotDialogBodyContentText {
                            font-size: 13px !important;
                        }

                        #CybotCookiebotDialogBodyButtons {
                            flex-direction: column !important;
                            gap: 8px !important;
                        }

                        #CybotCookiebotDialogBodyButtonAccept,
                        #CybotCookiebotDialogBodyButtonDecline {
                            width: 100% !important;
                            text-align: center !important;
                        }
                    }

                    /* Position adjustments */
                    #CybotCookiebotDialog.bottom-right {
                        bottom: 20px !important;
                        right: 20px !important;
                    }

                    #CybotCookiebotDialog.bottom-left {
                        bottom: 20px !important;
                        left: 20px !important;
                    }
                `}</style>
			</head>
			<body
				className={`${lagusans.variable} ${alta.variable} font-lagusans bg-background text-foreground`}
			>
				<ChromeRuntimeListener />
				<ConditionalLayout>
					{children}
					<Analytics />
				</ConditionalLayout>

				{/* Simplified Cookiebot Script */}
				<Script
					id="cookiebot"
					src="https://consent.cookiebot.com/uc.js"
					data-cbid="0eff1881-d3a9-49af-b46c-7db22a44adaf"
					data-blockingmode="auto"
					data-culture="en"
					strategy="afterInteractive"
				/>

				{/* Cookiebot Configuration for Simple Website */}
				<Script id="cookiebot-config" strategy="afterInteractive">
					{`
                        window.addEventListener('CookiebotOnLoad', function () {
                            // Override default texts for simple company website
                            if (window.Cookiebot) {
                                // Customize the dialog text if needed
                                console.log('Simple company website cookie consent loaded');
                            }
                        });
                    `}
				</Script>
			</body>
		</html>
	)
}
