"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { ExternalLink, Search, Filter, MapPin } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import WorldMap from "@/components/WorldMap"
import HeroImage from "@/components/HeroImage"

interface Hotel {
	id: string
	slug: string
	hotel_name: string
	location: string
	description: string
	dach: boolean
	nordics: boolean
	cee: boolean
	uk: string
	brand: string
	image: string
	image_alt: string
	hotel_website: string
	content: string
}

export default function PortfolioPage() {
	const [hotels, setHotels] = useState<Hotel[]>([])
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState("")
	const [brandFilter, setBrandFilter] = useState("all")
	const [regionFilter, setRegionFilter] = useState("all")
	const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

	const supabase = createClientComponentClient()

	// Fetch hotels from Supabase
	const fetchHotels = async () => {
		try {
			setLoading(true)
			const { data, error } = await supabase
				.from("hotels")
				.select("*")
				.order("hotel_name", { ascending: true })

			if (error) throw error

			setHotels(data || [])
		} catch (error) {
			console.error("Error fetching hotels:", error)
			toast.error("Failed to fetch hotels")
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchHotels()
	}, [])

	// Filter hotels based on search and filters
	const filteredHotels = hotels.filter(hotel => {
		const matchesSearch =
			hotel.hotel_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
			hotel.brand.toLowerCase().includes(searchTerm.toLowerCase())

		const matchesBrand = brandFilter === "all" || hotel.brand === brandFilter

		const matchesRegion =
			regionFilter === "all" ||
			(regionFilter === "dach" && hotel.dach) ||
			(regionFilter === "nordics" && hotel.nordics) ||
			(regionFilter === "cee" && hotel.cee) ||
			(regionFilter === "uk" && !!hotel.uk)

		const matchesLocation = !selectedLocation || hotel.location === selectedLocation

		return matchesSearch && matchesBrand && matchesRegion && matchesLocation
	})

	// Handle location click from world map
	const handleLocationClick = (location: string) => {
		if (selectedLocation === location) {
			setSelectedLocation(null) // Deselect if clicking the same location
		} else {
			setSelectedLocation(location)
		}
	}

	// Group hotels by location
	const groupedHotels = filteredHotels.reduce((groups, hotel) => {
		const location = hotel.location
		if (!groups[location]) {
			groups[location] = []
		}
		groups[location].push(hotel)
		return groups
	}, {} as Record<string, Hotel[]>)

	// Sort locations alphabetically and sort hotels within each location
	const sortedLocations = Object.keys(groupedHotels).sort()
	sortedLocations.forEach(location => {
		groupedHotels[location].sort((a, b) => a.hotel_name.localeCompare(b.hotel_name))
	})

	// Get unique brands for filter
	const uniqueBrands = [...new Set(hotels.map(hotel => hotel.brand))].filter(Boolean)

	// Get regions for a hotel
	const getHotelRegions = (hotel: Hotel) => {
		const regions = []
		if (hotel.dach) regions.push("DACH")
		if (hotel.nordics) regions.push("Nordics")
		if (hotel.cee) regions.push("CEE")
		if (hotel.uk) regions.push("UK")
		return regions
	}

	return (
		<div className="relative bg-accent text-foreground">
			{/* Hero Section */}
			<section className="bg-background/95 backdrop-blur-sm border-b">
				<HeroImage
					backgroundImage="/images/villa-alula.webp"
					title="Hotel Portfolio"
					subtitle="Discover our curated collection of luxury hotels"
				/>
			</section>

			{/* Filters Section - Fixed positioning to stick below navigation */}
			<section className="  bg-white shadow-lg z-40 border-b">
				<div className=" mx-auto px-4 py-4">
					<div className="flex flex-col md:flex-row gap-4 items-center">
						<div className="flex flex-1 gap-4 w-full md:w-auto">
							<div className="relative flex-1 md:w-64">
								<Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
								<Input
									placeholder="Search hotels..."
									value={searchTerm}
									onChange={e => setSearchTerm(e.target.value)}
									className="pl-10"
								/>
							</div>

							<Select value={brandFilter} onValueChange={setBrandFilter}>
								<SelectTrigger size="default">
									<SelectValue placeholder="Brand" />
								</SelectTrigger>
								<SelectContent position="item-aligned" className="max-h-60 overflow-y-auto">
									<SelectItem value="all">All Brands</SelectItem>
									{uniqueBrands.map(brand => (
										<SelectItem key={brand} value={brand}>
											{brand}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							<Select value={regionFilter} onValueChange={setRegionFilter}>
								<SelectTrigger className="w-32">
									<SelectValue placeholder="Region" />
								</SelectTrigger>
								<SelectContent position="item-aligned" className="max-h-60 overflow-y-auto">
									<SelectItem value="all">All Regions</SelectItem>
									<SelectItem value="dach">DACH</SelectItem>
									<SelectItem value="nordics">Nordics</SelectItem>
									<SelectItem value="cee">CEE</SelectItem>
									<SelectItem value="uk">UK</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className=" text-muted-foreground">
							<h6>
								{filteredHotels.length} of {hotels.length} Hotels
							</h6>
						</div>
					</div>
				</div>
			</section>

			{/* World Map Section - With padding to account for fixed filters */}
			{!loading && hotels.length > 0 && (
				<section className="bg-background/50 backdrop-blur-sm border-b pt-20">
					<div className="container mx-auto px-4 py-8">
						<WorldMap
							hotels={hotels}
							onLocationClick={handleLocationClick}
							highlightedLocation={selectedLocation}
						/>
						{selectedLocation && (
							<div className="mt-6 text-center">
								<Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
									Showing hotels in {selectedLocation} • Click again to deselect
								</Badge>
							</div>
						)}
					</div>
				</section>
			)}

			{/* Hotels Grid - With padding to account for fixed filters when no map */}
			<section
				className={`container mx-auto px-4 py-12 ${!hotels.length || loading ? "pt-32" : ""}`}
			>
				{loading ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{[...Array(8)].map((_, i) => (
							<div key={i} className="animate-pulse">
								<div className="bg-muted rounded-lg h-80"></div>
							</div>
						))}
					</div>
				) : filteredHotels.length === 0 ? (
					<div className="text-center py-20">
						<div className="text-6xl mb-4">🏨</div>
						<h3 className="text-2xl font-semibold mb-2">No hotels found</h3>
						<p className="text-muted-foreground mb-6">
							Try adjusting your search or filter criteria
						</p>
						<Button
							onClick={() => {
								setSearchTerm("")
								setBrandFilter("all")
								setRegionFilter("all")
								setSelectedLocation(null)
							}}
						>
							Clear Filters
						</Button>
					</div>
				) : (
					<div className="space-y-12">
						{sortedLocations.map(location => (
							<div key={location} className="space-y-6">
								{/* Location Heading */}
								<div className="flex items-center gap-4">
									<div className="flex items-center gap-3">
										<MapPin className="w-6 h-6 text-primary" />
										<h2 className="text-2xl md:text-3xl font-bold text-white">{location}</h2>
									</div>
									<div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
									<Badge
										variant="secondary"
										className="bg-primary/20 text-primary border-primary/30"
									>
										{groupedHotels[location].length}{" "}
										{groupedHotels[location].length === 1 ? "Hotel" : "Hotels"}
									</Badge>
								</div>

								{/* Hotels Grid for this location */}
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
									{groupedHotels[location].map(hotel => {
										// More permissive image URL validation
										const isValidImageUrl =
											hotel.image &&
											hotel.image.trim() !== "" &&
											(hotel.image.includes(".jpg") ||
												hotel.image.includes(".jpeg") ||
												hotel.image.includes(".png") ||
												hotel.image.includes(".webp") ||
												hotel.image.includes(".avif") ||
												hotel.image.includes(".gif") ||
												hotel.image.startsWith("/images/") ||
												hotel.image.startsWith("/public/") ||
												hotel.image.startsWith("https://") ||
												hotel.image.startsWith("http://"))

										// Log for debugging (remove in production)
										if (!isValidImageUrl && hotel.image) {
											console.log(`Invalid image URL for ${hotel.hotel_name}:`, hotel.image)
										}

										const imageUrl = isValidImageUrl ? hotel.image : "/images/a1.webp"

										return (
											<Card
												key={hotel.id}
												className="group overflow-hidden border-0 p-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
											>
												<div className="relative h-90 w-auto">
													{/* Background Image with error handling */}
													<div
														className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
														style={{
															backgroundImage: `url(${imageUrl})`,
														}}
														onError={e => {
															// Fallback if the image fails to load
															e.currentTarget.style.backgroundImage = `url(/images/a1.webp)`
														}}
													>
														{/* Overlay */}
														<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
													</div>

													{/* Content */}
													<CardContent className="absolute inset-0 p-6 flex flex-col justify-between text-white">
														{/* Top Badges */}
														<div className="flex flex-wrap gap-2">
															<Badge
																variant="secondary"
																className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
															>
																{hotel.brand}
															</Badge>
															{getHotelRegions(hotel).map(region => (
																<Badge
																	key={region}
																	variant="outline"
																	className="border-white/50 text-white bg-white/10 backdrop-blur-sm"
																>
																	{region}
																</Badge>
															))}
														</div>

														{/* Bottom Content */}
														<div className="space-y-4">
															<div>
																<h3 className="text-xl font-bold mb-2 line-clamp-2">
																	{hotel.hotel_name}
																</h3>
															</div>

															{/* Explore Button */}
															<Button
																size="sm"
																className="w-full bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm text-white transition-all duration-300"
																asChild
															>
																<Link
																	href={hotel.hotel_website || "#"}
																	target="_blank"
																	className="flex items-center justify-center gap-2"
																>
																	<span>Explore More</span>
																	<ExternalLink className="w-4 h-4" />
																</Link>
															</Button>
														</div>
													</CardContent>
												</div>
											</Card>
										)
									})}
								</div>
							</div>
						))}
					</div>
				)}
			</section>
			<Separator className="bg-primary" />

			{/* Call to Action */}
			<section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
						Ready to Partner with Excellence?
					</h2>
					<p className="text-lg text-muted-white max-w-2xl mx-auto mb-8">
						Join our exclusive network of luxury hospitality brands and unlock new opportunities in
						the European market.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" asChild>
							<Link href="/join-ltp">Let's Talk</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
