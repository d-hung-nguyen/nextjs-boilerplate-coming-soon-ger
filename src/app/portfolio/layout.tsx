import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Hotel Portfolio | Global Elite & Associates",
	description:
		"Discover our curated collection of luxury hotels and resorts across DACH, Nordics, CEE, and UK markets.",
	keywords: ["luxury hotels", "hospitality", "portfolio", "DACH", "Nordics", "CEE", "UK"],
	openGraph: {
		title: "Hotel Portfolio | Global Elite & Associates",
		description:
			"Discover our curated collection of luxury hotels and resorts across DACH, Nordics, CEE, and UK markets.",
		type: "website",
		images: [
			{
				url: "/images/langco.png",
				width: 1200,
				height: 630,
				alt: "Hotel Portfolio",
			},
		],
	},
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
