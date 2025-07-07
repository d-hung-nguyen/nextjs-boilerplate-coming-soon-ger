import type { Metadata } from "next"
import localFont from "next/font/local"
import "@/src/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"

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
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Global Elite Logo",
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${lagusans.variable} ${alta.variable} font-sans bg-gray-50 text-gray-900`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
