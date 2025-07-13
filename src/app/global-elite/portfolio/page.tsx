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
import { Separator } from "@/components/ui/separator"

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

		return matchesSearch && matchesBrand && matchesRegion
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
		<div className="min-h-screen bg-accent text-foreground">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-primary/20 to-accent/20 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Hotel Portfolio</h1>
					<p className="text-lg md:text-xl text-muted-primary max-w-3xl mx-auto mb-8">
						Discover our curated collection of luxury hotels across Europe and beyond. Each property
						represents excellence in hospitality and unique experiences.
					</p>
					<div className="flex items-center justify-center gap-4 text-sm">
						<div className="flex items-center gap-2">
							<div className="w-3 h-3  bg-accent rounded-full"></div>
							<span className="">{hotels.length} Hotels</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 bg-accent rounded-full"></div>
							<span>{uniqueBrands.length} Brands</span>
						</div>
					</div>
				</div>
			</section>

			{/* Filters Section */}
			<section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b">
				<div className="container mx-auto px-4 py-4">
					<div className="flex flex-col md:flex-row gap-4 items-center">
						<div className="flex items-center gap-2 text-sm font-medium">
							<Filter className="w-4 h-4" />
							Filters:
						</div>

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
								<SelectTrigger className="w-32">
									<SelectValue placeholder="Brand" />
								</SelectTrigger>
								<SelectContent>
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
								<SelectContent>
									<SelectItem value="all">All Regions</SelectItem>
									<SelectItem value="dach">DACH</SelectItem>
									<SelectItem value="nordics">Nordics</SelectItem>
									<SelectItem value="cee">CEE</SelectItem>
									<SelectItem value="uk">UK</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="text-sm text-muted-foreground">
							{filteredHotels.length} of {hotels.length} hotels
						</div>
					</div>
				</div>
			</section>

			{/* Hotels Grid */}
			<section className="container mx-auto px-4 py-12">
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
							}}
						>
							Clear Filters
						</Button>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredHotels.map(hotel => (
							<Card
								key={hotel.id}
								className="group overflow-hidden border-0 p-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
							>
								<div className="relative h-90 w-auto">
									{/* Background Image */}
									<div
										className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
										style={{
											backgroundImage: `url(${hotel.image || "/placeholder.jpg"})`,
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
												<h3 className="text-xl font-bold mb-2 line-clamp-2">{hotel.hotel_name}</h3>
												<div className="flex items-center gap-2 text-white/90">
													<MapPin className="w-4 h-4" />
													<span className="text-sm">{hotel.location}</span>
												</div>
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
