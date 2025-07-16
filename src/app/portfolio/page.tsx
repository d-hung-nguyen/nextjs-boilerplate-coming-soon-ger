"use client"

import React, { useState, useEffect, useMemo } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BookingBar from "@/components/BookingBar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, MapPin } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"

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
	const [error, setError] = useState<string | null>(null)
	const [searchTerm, setSearchTerm] = useState("")
	const [brandFilter, setBrandFilter] = useState("all")
	const [regionFilter, setRegionFilter] = useState("all")

	const supabase = createClientComponentClient()

	// Fetch hotels
	const fetchHotels = async () => {
		setError(null)
		setLoading(true)
		try {
			const { data, error } = await supabase
				.from("hotels")
				.select("*")
				.order("hotel_name", { ascending: true })

			if (error) throw error
			setHotels(data || [])
		} catch (err: any) {
			console.error(err)
			setError("Unable to load hotels.")
			toast.error("Failed to fetch hotels")
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchHotels()
	}, [])

	// Helpers
	const getHotelRegions = (hotel: Hotel) => {
		const regs: string[] = []
		if (hotel.dach) regs.push("DACH")
		if (hotel.nordics) regs.push("Nordics")
		if (hotel.cee) regs.push("CEE")
		if (hotel.uk) regs.push("UK")
		return regs
	}

	// Memoized filters
	const filteredHotels = useMemo(
		() =>
			hotels.filter(h => {
				const term = searchTerm.toLowerCase()
				const matchesSearch =
					h.hotel_name.toLowerCase().includes(term) ||
					h.location.toLowerCase().includes(term) ||
					h.brand.toLowerCase().includes(term)
				const matchesBrand = brandFilter === "all" || h.brand === brandFilter
				const matchesRegion =
					regionFilter === "all" ||
					(regionFilter === "dach" && h.dach) ||
					(regionFilter === "nordics" && h.nordics) ||
					(regionFilter === "cee" && h.cee) ||
					(regionFilter === "uk" && !!h.uk)
				return matchesSearch && matchesBrand && matchesRegion
			}),
		[hotels, searchTerm, brandFilter, regionFilter]
	)

	const uniqueBrands = useMemo(() => [...new Set(hotels.map(h => h.brand))], [hotels])
	const uniqueRegions = useMemo(
		() => [...new Set(filteredHotels.flatMap(getHotelRegions))],
		[filteredHotels]
	)

	// Derived counts
	const anyFilterActive = searchTerm.length > 0 || brandFilter !== "all" || regionFilter !== "all"

	return (
		<>
			<Head>
				<title>Our Hotel Portfolio | Global Elite</title>
				<meta
					name="description"
					content="Discover our curated collection of luxury hotels across Europe and beyond."
				/>
			</Head>

			<main className="min-h-screen bg-accent text-foreground">
				{/* Hero */}
				<header
					className="relative bg-gradient-to-r from-primary/20 to-accent/20 py-20"
					aria-labelledby="hero-title"
				>
					<div className="container mx-auto px-4 mt-20 text-center">
						<h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6 text-white">
							Our Hotel Portfolio
						</h1>
						<p className="text-lg md:text-xl text-muted-primary max-w-3xl mx-auto mb-8">
							Discover our curated collection of luxury hotels across Europe and beyond. Each
							property represents excellence in hospitality and unique experiences.
						</p>
						<div className="flex items-center justify-center gap-4 text-sm">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-accent rounded-full"></div>
								<span>{hotels.length} Hotels</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-accent rounded-full"></div>
								<span>{uniqueBrands.length} Brands</span>
							</div>
						</div>
					</div>
				</header>

				{/* Filters */}
				<section
					id="filters"
					aria-labelledby="filters-label"
					className="sticky top-0 bg-white z-10"
				>
					<h2 id="filters-label" className="sr-only">
						Filter hotels
					</h2>
					<BookingBar
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						brandFilter={brandFilter}
						setBrandFilter={setBrandFilter}
						regionFilter={regionFilter}
						setRegionFilter={setRegionFilter}
						uniqueBrands={uniqueBrands}
						total={hotels.length}
						filtered={filteredHotels.length}
					/>
					{anyFilterActive && (
						<div className="text-right p-4">
							<Button
								variant="outline"
								size="sm"
								onClick={() => {
									setSearchTerm("")
									setBrandFilter("all")
									setRegionFilter("all")
								}}
								className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
							>
								Clear Filters
							</Button>
						</div>
					)}
				</section>

				{/* Grid */}
				<section className="container mx-auto px-4 py-12" aria-live="polite">
					{loading ? (
						<div
							role="status"
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
						>
							{[...Array(8)].map((_, i) => (
								<div key={i} className="animate-pulse bg-muted rounded-lg h-80" />
							))}
						</div>
					) : error ? (
						<div className="text-center py-20">
							<p className="text-destructive mb-4">{error}</p>
							<Button
								onClick={fetchHotels}
								className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
							>
								Retry
							</Button>
						</div>
					) : filteredHotels.length === 0 ? (
						<div role="status" className="text-center py-20">
							<div className="text-6xl mb-4">🏨</div>
							<h3 className="text-2xl font-semibold mb-2">No hotels found</h3>
							<p className="text-muted-foreground mb-6">
								Try adjusting your search or filter criteria
							</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{filteredHotels.map(hotel => (
								<Card
									key={hotel.id}
									className="flex flex-col h-full overflow-hidden border-0 p-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
								>
									<Image
										src={hotel.image || "/placeholder.jpg"}
										alt={hotel.image_alt || "Hotel image"}
										width={400}
										height={256}
										className="h-64 w-full object-cover filter sepia-[0.35] brightness-110 contrast-105 saturate-130 hue-rotate-[-10deg]"
										loading="lazy"
									/>

									<div className="flex flex-col justify-between flex-grow p-4 text-gray-800 space-y-4">
										<div className="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												className="bg-primary/10 text-xs text-primary border-primary/20 rounded-none"
											>
												{hotel.brand}
											</Badge>
											{getHotelRegions(hotel).map(r => (
												<Badge
													key={r}
													variant="outline"
													className="border-gray-300 text-xs text-gray-600 bg-gray-100 rounded-none"
												>
													{r}
												</Badge>
											))}
										</div>

										<div>
											<h3 className="text-xl font-bold mb-2">{hotel.hotel_name}</h3>
											<div className="flex items-center gap-2 text-gray-600">
												<MapPin className="w-4 h-4" />
												<span className="text-sm">{hotel.location}</span>
											</div>
										</div>

										<Link
											href={hotel.hotel_website || "#"}
											target="_blank"
											aria-label={`Explore more about ${hotel.hotel_name}`}
											className="w-full"
										>
											<Button
												variant="ghost"
												size="sm"
												className="w-full bg-muted border border-black rounded-none hover:bg-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
											>
												Explore More <ExternalLink className="w-4 h-4 ml-1" />
											</Button>
										</Link>
									</div>
								</Card>
							))}
						</div>
					)}
				</section>

				<Separator className="bg-primary" />

				{/* CTA */}
				<section
					className="bg-gradient-to-r from-primary/10 to-accent/10 py-20"
					aria-labelledby="cta-title"
				>
					<div className="container mx-auto px-4 text-center">
						<h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6 text-white">
							Ready to Partner with Excellence?
						</h2>
						<p className="text-lg text-muted-white max-w-2xl mx-auto mb-8">
							Join our exclusive network of luxury hospitality brands and unlock new opportunities
							in the European market.
						</p>
						<Button
							size="lg"
							asChild
							className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
						>
							<Link href="/join-ltp">Let's Talk</Link>
						</Button>
					</div>
				</section>
			</main>
		</>
	)
}
