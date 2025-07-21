"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface Hotel {
	id: string
	hotel_name: string
	location: string
	brand: string
	dach: boolean
	nordics: boolean
	cee: boolean
	uk: string
}

interface LocationCoordinates {
	[key: string]: {
		x: number
		y: number
		country?: string
		region?: string
	}
}

// Approximate coordinates for major cities on a 1000x500 SVG world map
const locationCoordinates: LocationCoordinates = {
	// Europe
	London: { x: 470, y: 150, country: "UK", region: "UK" },
	"London, UK": { x: 470, y: 150, country: "UK", region: "UK" },
	Paris: { x: 480, y: 170, country: "France", region: "Western Europe" },
	"Paris, France": { x: 480, y: 170, country: "France", region: "Western Europe" },
	Berlin: { x: 520, y: 160, country: "Germany", region: "DACH" },
	"Berlin, Germany": { x: 520, y: 160, country: "Germany", region: "DACH" },
	Munich: { x: 510, y: 175, country: "Germany", region: "DACH" },
	"Munich, Germany": { x: 510, y: 175, country: "Germany", region: "DACH" },
	Vienna: { x: 530, y: 175, country: "Austria", region: "DACH" },
	"Vienna, Austria": { x: 530, y: 175, country: "Austria", region: "DACH" },
	Zurich: { x: 495, y: 175, country: "Switzerland", region: "DACH" },
	"Zurich, Switzerland": { x: 495, y: 175, country: "Switzerland", region: "DACH" },
	Amsterdam: { x: 485, y: 150, country: "Netherlands", region: "Western Europe" },
	"Amsterdam, Netherlands": { x: 485, y: 150, country: "Netherlands", region: "Western Europe" },
	Stockholm: { x: 535, y: 120, country: "Sweden", region: "Nordics" },
	"Stockholm, Sweden": { x: 535, y: 120, country: "Sweden", region: "Nordics" },
	Copenhagen: { x: 515, y: 140, country: "Denmark", region: "Nordics" },
	"Copenhagen, Denmark": { x: 515, y: 140, country: "Denmark", region: "Nordics" },
	Oslo: { x: 510, y: 115, country: "Norway", region: "Nordics" },
	"Oslo, Norway": { x: 510, y: 115, country: "Norway", region: "Nordics" },
	Helsinki: { x: 560, y: 115, country: "Finland", region: "Nordics" },
	"Helsinki, Finland": { x: 560, y: 115, country: "Finland", region: "Nordics" },
	Prague: { x: 530, y: 170, country: "Czech Republic", region: "CEE" },
	"Prague, Czech Republic": { x: 530, y: 170, country: "Czech Republic", region: "CEE" },
	Budapest: { x: 545, y: 185, country: "Hungary", region: "CEE" },
	"Budapest, Hungary": { x: 545, y: 185, country: "Hungary", region: "CEE" },
	Warsaw: { x: 555, y: 155, country: "Poland", region: "CEE" },
	"Warsaw, Poland": { x: 555, y: 155, country: "Poland", region: "CEE" },
	Rome: { x: 515, y: 210, country: "Italy", region: "Southern Europe" },
	"Rome, Italy": { x: 515, y: 210, country: "Italy", region: "Southern Europe" },
	Madrid: { x: 450, y: 205, country: "Spain", region: "Southern Europe" },
	"Madrid, Spain": { x: 450, y: 205, country: "Spain", region: "Southern Europe" },
	Barcelona: { x: 470, y: 200, country: "Spain", region: "Southern Europe" },
	"Barcelona, Spain": { x: 470, y: 200, country: "Spain", region: "Southern Europe" },
	Lisbon: { x: 430, y: 210, country: "Portugal", region: "Southern Europe" },
	"Lisbon, Portugal": { x: 430, y: 210, country: "Portugal", region: "Southern Europe" },

	// Middle East
	Dubai: { x: 620, y: 250, country: "UAE", region: "Middle East" },
	"Dubai, UAE": { x: 620, y: 250, country: "UAE", region: "Middle East" },
	"Abu Dhabi": { x: 615, y: 255, country: "UAE", region: "Middle East" },
	"Abu Dhabi, UAE": { x: 615, y: 255, country: "UAE", region: "Middle East" },
	"Fujairah, UAE": { x: 630, y: 255, country: "UAE", region: "Middle East" },
	Fujairah: { x: 630, y: 255, country: "UAE", region: "Middle East" },
	"Ras Al Khaimah, UAE": { x: 625, y: 245, country: "UAE", region: "Middle East" },
	"Ras Al Khaimah": { x: 625, y: 245, country: "UAE", region: "Middle East" },
	"Umm Al Quwain, UAE": { x: 622, y: 248, country: "UAE", region: "Middle East" },
	"Umm Al Quwain": { x: 622, y: 248, country: "UAE", region: "Middle East" },
	Doha: { x: 605, y: 250, country: "Qatar", region: "Middle East" },
	"Doha, Qatar": { x: 605, y: 250, country: "Qatar", region: "Middle East" },
	Qatar: { x: 605, y: 250, country: "Qatar", region: "Middle East" },
	Riyadh: { x: 590, y: 260, country: "Saudi Arabia", region: "Middle East" },
	"Riyadh, Saudi Arabia": { x: 590, y: 260, country: "Saudi Arabia", region: "Middle East" },
	"Makkah , K.S.A": { x: 580, y: 270, country: "Saudi Arabia", region: "Middle East" },
	Makkah: { x: 580, y: 270, country: "Saudi Arabia", region: "Middle East" },
	"saudi-arabia": { x: 590, y: 260, country: "Saudi Arabia", region: "Middle East" },
	"Saudi Arabia": { x: 590, y: 260, country: "Saudi Arabia", region: "Middle East" },
	"Kuwait City": { x: 590, y: 245, country: "Kuwait", region: "Middle East" },
	"Kuwait City, Kuwait": { x: 590, y: 245, country: "Kuwait", region: "Middle East" },
	Manama: { x: 600, y: 250, country: "Bahrain", region: "Middle East" },
	"Manama, Bahrain": { x: 600, y: 250, country: "Bahrain", region: "Middle East" },
	Bahrain: { x: 600, y: 250, country: "Bahrain", region: "Middle East" },

	// Asia
	Singapore: { x: 760, y: 320, country: "Singapore", region: "Southeast Asia" },
	"Singapore, Singapore": { x: 760, y: 320, country: "Singapore", region: "Southeast Asia" },
	"Hong Kong": { x: 780, y: 250, country: "Hong Kong", region: "East Asia" },
	"Hong Kong, China": { x: 780, y: 250, country: "Hong Kong", region: "East Asia" },
	Tokyo: { x: 830, y: 220, country: "Japan", region: "East Asia" },
	"Tokyo, Japan": { x: 830, y: 220, country: "Japan", region: "East Asia" },
	Seoul: { x: 810, y: 210, country: "South Korea", region: "East Asia" },
	"Seoul, South Korea": { x: 810, y: 210, country: "South Korea", region: "East Asia" },
	Bangkok: { x: 750, y: 280, country: "Thailand", region: "Southeast Asia" },
	"Bangkok, Thailand": { x: 750, y: 280, country: "Thailand", region: "Southeast Asia" },
	"Kuala Lumpur": { x: 760, y: 315, country: "Malaysia", region: "Southeast Asia" },
	"Kuala Lumpur, Malaysia": { x: 760, y: 315, country: "Malaysia", region: "Southeast Asia" },
	Jakarta: { x: 770, y: 340, country: "Indonesia", region: "Southeast Asia" },
	"Jakarta, Indonesia": { x: 770, y: 340, country: "Indonesia", region: "Southeast Asia" },
	Manila: { x: 810, y: 280, country: "Philippines", region: "Southeast Asia" },
	"Manila, Philippines": { x: 810, y: 280, country: "Philippines", region: "Southeast Asia" },
	Mumbai: { x: 680, y: 270, country: "India", region: "South Asia" },
	"Mumbai, India": { x: 680, y: 270, country: "India", region: "South Asia" },
	Delhi: { x: 685, y: 250, country: "India", region: "South Asia" },
	"Delhi, India": { x: 685, y: 250, country: "India", region: "South Asia" },
	Bangalore: { x: 685, y: 285, country: "India", region: "South Asia" },
	"Bangalore, India": { x: 685, y: 285, country: "India", region: "South Asia" },
	China: { x: 800, y: 200, country: "China", region: "East Asia" },
	Thailand: { x: 750, y: 280, country: "Thailand", region: "Southeast Asia" },
	thailand: { x: 750, y: 280, country: "Thailand", region: "Southeast Asia" },
	Indonesia: { x: 770, y: 340, country: "Indonesia", region: "Southeast Asia" },
	Malaysia: { x: 760, y: 315, country: "Malaysia", region: "Southeast Asia" },
	"South Korea": { x: 810, y: 210, country: "South Korea", region: "East Asia" },
	"south-korea": { x: 810, y: 210, country: "South Korea", region: "East Asia" },
	Maldives: { x: 680, y: 320, country: "Maldives", region: "South Asia" },
	"Maldives, Maldives": { x: 680, y: 320, country: "Maldives", region: "South Asia" },
	Laos: { x: 740, y: 300, country: "Laos", region: "Southeast Asia" },
	"Laos, Laos": { x: 740, y: 300, country: "Laos", region: "Southeast Asia" },
	Vietnam: { x: 750, y: 290, country: "Vietnam", region: "Southeast Asia" },
	"Vietnam, Vietnam": { x: 750, y: 290, country: "Vietnam", region: "Southeast Asia" },

	"Ho Chi Minh City": { x: 755, y: 300, country: "Vietnam", region: "Southeast Asia" },

	Hanoi: { x: 745, y: 285, country: "Vietnam", region: "Southeast Asia" },
	"Hanoi, Vietnam": { x: 745, y: 285, country: "Vietnam", region: "Southeast Asia" },
	Morocco: { x: 440, y: 260, country: "Morocco", region: "North Africa" },

	Japan: { x: 830, y: 220, country: "Japan", region: "East Asia" },
	Kyoto: { x: 825, y: 225, country: "Japan", region: "East Asia" },

	Osaka: { x: 820, y: 230, country: "Japan", region: "East Asia" },

	// Additional Asian destinations
	Bali: { x: 780, y: 350, country: "Indonesia", region: "Southeast Asia" },
	"Bali, Indonesia": { x: 780, y: 350, country: "Indonesia", region: "Southeast Asia" },
	Ubud: { x: 780, y: 350, country: "Indonesia", region: "Southeast Asia" },
	"Ubud, Indonesia": { x: 780, y: 350, country: "Indonesia", region: "Southeast Asia" },
	Phuket: { x: 745, y: 295, country: "Thailand", region: "Southeast Asia" },
	"Phuket, Thailand": { x: 745, y: 295, country: "Thailand", region: "Southeast Asia" },
	"Koh Samui": { x: 750, y: 290, country: "Thailand", region: "Southeast Asia" },
	"Koh Samui, Thailand": { x: 750, y: 290, country: "Thailand", region: "Southeast Asia" },
	Langkawi: { x: 755, y: 310, country: "Malaysia", region: "Southeast Asia" },
	"Langkawi, Malaysia": { x: 755, y: 310, country: "Malaysia", region: "Southeast Asia" },

	// Middle East additions
	Istanbul: { x: 560, y: 200, country: "Turkey", region: "Middle East" },
	"Istanbul, Turkey": { x: 560, y: 200, country: "Turkey", region: "Middle East" },
	"Istanbui, Turkey": { x: 560, y: 200, country: "Turkey", region: "Middle East" },
	Turkey: { x: 560, y: 200, country: "Turkey", region: "Middle East" },
	Ankara: { x: 570, y: 205, country: "Turkey", region: "Middle East" },
	"Ankara, Turkey": { x: 570, y: 205, country: "Turkey", region: "Middle East" },
	Lebanon: { x: 575, y: 230, country: "Lebanon", region: "Middle East" },
	"Beirut, Lebanon": { x: 575, y: 230, country: "Lebanon", region: "Middle East" },
	Jordan: { x: 570, y: 245, country: "Jordan", region: "Middle East" },
	"Amman, Jordan": { x: 570, y: 245, country: "Jordan", region: "Middle East" },

	// African additions
	Tanzania: { x: 570, y: 340, country: "Tanzania", region: "East Africa" },
	"Dar es Salaam, Tanzania": { x: 575, y: 345, country: "Tanzania", region: "East Africa" },
	Kenya: { x: 575, y: 320, country: "Kenya", region: "East Africa" },
	"Nairobi, Kenya": { x: 575, y: 320, country: "Kenya", region: "East Africa" },
	Rwanda: { x: 555, y: 335, country: "Rwanda", region: "East Africa" },
	"Kigali, Rwanda": { x: 555, y: 335, country: "Rwanda", region: "East Africa" },
	Botswana: { x: 545, y: 380, country: "Botswana", region: "Southern Africa" },
	"Gaborone, Botswana": { x: 545, y: 380, country: "Botswana", region: "Southern Africa" },
	Mauritius: { x: 610, y: 380, country: "Mauritius", region: "Indian Ocean" },
	"Port Louis, Mauritius": { x: 610, y: 380, country: "Mauritius", region: "Indian Ocean" },
	Seychelles: { x: 600, y: 340, country: "Seychelles", region: "Indian Ocean" },
	"Victoria, Seychelles": { x: 600, y: 340, country: "Seychelles", region: "Indian Ocean" },

	// Americas
	"New York": { x: 250, y: 200, country: "USA", region: "North America" },
	"Los Angeles": { x: 180, y: 220, country: "USA", region: "North America" },
	Miami: { x: 230, y: 250, country: "USA", region: "North America" },
	Chicago: { x: 220, y: 210, country: "USA", region: "North America" },
	Toronto: { x: 240, y: 190, country: "Canada", region: "North America" },
	Vancouver: { x: 180, y: 170, country: "Canada", region: "North America" },
	"Mexico City": { x: 190, y: 270, country: "Mexico", region: "North America" },
	"São Paulo": { x: 290, y: 360, country: "Brazil", region: "South America" },
	"Rio de Janeiro": { x: 300, y: 350, country: "Brazil", region: "South America" },
	"Buenos Aires": { x: 280, y: 400, country: "Argentina", region: "South America" },
	Mexico: { x: 190, y: 270, country: "Mexico", region: "North America" },
	mexico: { x: 190, y: 270, country: "Mexico", region: "North America" },

	// Africa
	Cairo: { x: 550, y: 260, country: "Egypt", region: "Africa" },
	Egypt: { x: 550, y: 260, country: "Egypt", region: "Africa" },
	"Cape Town": { x: 535, y: 400, country: "South Africa", region: "Africa" },
	Johannesburg: { x: 545, y: 390, country: "South Africa", region: "Africa" },
	Lagos: { x: 495, y: 320, country: "Nigeria", region: "Africa" },
	Nairobi: { x: 575, y: 320, country: "Kenya", region: "Africa" },
	Marrakech: { x: 440, y: 260, country: "Morocco", region: "Africa" },
	Casablanca: { x: 435, y: 250, country: "Morocco", region: "Africa" },

	// Oceania
	Sydney: { x: 850, y: 400, country: "Australia", region: "Oceania" },
	Melbourne: { x: 840, y: 410, country: "Australia", region: "Oceania" },
	Auckland: { x: 900, y: 420, country: "New Zealand", region: "Oceania" },

	// Additional European locations
	Montenegro: { x: 540, y: 195, country: "Montenegro", region: "Southern Europe" },
	"Montenegro, Montenegro": { x: 540, y: 195, country: "Montenegro", region: "Southern Europe" },

	// Additional Asian variations
	singapore: { x: 760, y: 320, country: "Singapore", region: "Southeast Asia" },
}

interface WorldMapProps {
	hotels: Hotel[]
	onLocationClick?: (location: string) => void
	highlightedLocation?: string
}

export default function WorldMap({ hotels, onLocationClick, highlightedLocation }: WorldMapProps) {
	const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

	// Group hotels by location and get coordinates
	const hotelLocations = hotels.reduce((acc, hotel) => {
		const location = hotel.location
		if (!acc[location]) {
			acc[location] = []
		}
		acc[location].push(hotel)
		return acc
	}, {} as Record<string, Hotel[]>)

	// Filter locations that have coordinates
	const mappedLocations = Object.keys(hotelLocations).filter(
		location => locationCoordinates[location]
	)

	// If no locations are mapped, return null (no debug panel)
	if (mappedLocations.length === 0) {
		return null
	}

	return (
		<div className="w-full max-w-7xl mx-auto">
			{/* Enhanced Legend */}
			<div className="mt-6 flex flex-col justify-center items-center ">
				<div className="text-secondary-foreground  text-center mb-2 ">
					<p>Click locations to filter • Hover for details</p>
				</div>
				<Badge variant="outline">{mappedLocations.length} Active Destinations</Badge>
			</div>
			<div className="relative w-full  overflow-hidden aspect-[2/1]">
				<svg
					viewBox="0 0 1000 450"
					className="absolute inset-0 w-full h-full"
					style={{ background: "hsl(var(--card))" }}
				>
					{/* Enhanced visual effects */}
					<defs>
						<filter id="mapGlow">
							<feGaussianBlur stdDeviation="2" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* World map continents with better styling */}
					<g fill="transparent" stroke="#64748b" strokeWidth="0.5" opacity="0.6">
						{/* North America */}
						<path d="M 50 90 L 350 90 L 350 270 L 200 290 L 150 250 L 50 220 Z" />
						{/* South America */}
						<path d="M 200 290 L 350 290 L 320 400 L 250 410 L 220 360 Z" />
						{/* Europe */}
						<path d="M 400 70 L 600 70 L 600 200 L 400 200 Z" />
						{/* Africa */}
						<path d="M 400 200 L 600 200 L 580 400 L 450 400 L 420 320 Z" />
						{/* Asia */}
						<path d="M 600 45 L 900 45 L 900 320 L 700 340 L 600 200 Z" />
						{/* Australia */}
						<path d="M 800 350 L 920 350 L 920 400 L 800 400 Z" />
					</g>

					{/* Location dots */}
					{mappedLocations.map(location => {
						const coords = locationCoordinates[location]
						const hotelsAtLocation = hotelLocations[location]
						const isHighlighted = highlightedLocation === location
						const isHovered = hoveredLocation === location

						// Helper function to capitalize first letter
						const capitalizeFirstLetter = (str: string) => {
							return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
						}

						return (
							<motion.g
								key={location}
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.4, delay: Math.random() * 0.3 }}
							>
								{/* Pulse effect for highlighted location */}

								{/* Hotel count badge - only show if more than 1 hotel */}
								<motion.g
									onMouseEnter={() => setHoveredLocation(location)}
									onMouseLeave={() => setHoveredLocation(null)}
									onClick={() => onLocationClick && onLocationClick(location)}
									style={{ cursor: "pointer" }}
									className={`${
										isHighlighted ? " stroke-slate-400" : " stroke-slate-300"
									} transition-colors duration-200`}
								>
									<circle
										cx={coords.x + 12}
										cy={coords.y - 12}
										r="8"
										stroke="hsl(var(--primary))"
										strokeWidth="2"
										fill={isHighlighted ? "#e5e7eb" : "#ffffff"}
										className="drop-shadow-md"
									/>

									<text
										x={coords.x + 12}
										y={coords.y - 9}
										textAnchor="middle"
										fill={isHighlighted ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
										fontSize="8"
										fontWeight="600"
									></text>
									{hotelsAtLocation.length}
								</motion.g>

								{/* Main location dot */}

								{/* Location tooltip on hover */}
								{(isHovered || isHighlighted) && (
									<motion.g
										initial={{ opacity: 0, y: -15, scale: 0.8 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: -15, scale: 0.8 }}
										transition={{ duration: 0.2, ease: "easeOut" }}
									>
										{/* Tooltip background */}
										<rect
											x={coords.x - 55}
											y={coords.y - 75}
											width="110"
											height="32"
											rx="8"
											strokeWidth="1"
											filter="url(#mapGlow)"
											opacity="0.95"
											fill="#e5e7eb" // Tailwind gray-200
										/>
										{/* Tooltip arrow pointing down */}
										<polygon
											points={`${coords.x - 6},${coords.y - 43} ${coords.x},${coords.y - 37} ${
												coords.x + 6
											},${coords.y - 43}`}
											strokeWidth="1"
											fill="#000000"
										/>
										{/* Location name */}
										<text
											x={coords.x}
											y={coords.y - 60}
											textAnchor="middle"
											fill="#000000"
											fontSize="10"
											fontWeight="600"
										>
											{capitalizeFirstLetter(location)}
										</text>
										{/* Hotel count */}
										<text x={coords.x} y={coords.y - 49} textAnchor="middle" fontSize="9">
											{hotelsAtLocation.length} hotel{hotelsAtLocation.length > 1 ? "s" : ""}
										</text>
									</motion.g>
								)}
							</motion.g>
						)
					})}
				</svg>
			</div>
		</div>
	)
}
