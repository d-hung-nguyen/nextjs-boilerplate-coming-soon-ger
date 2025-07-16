"use client"
import React, { useState, useEffect, useCallback, useMemo } from "react"
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
import FilterBar from "@/components/FilterBar"
import HeroImage from "@/components/HeroImage"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { motion } from "framer-motion"

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
	const [isScrolled, setIsScrolled] = useState(false)

	const supabase = createClientComponentClient()

	// Memoized fetch function to prevent unnecessary re-renders
	const fetchHotels = useCallback(async () => {
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
	}, [supabase])

	// Initial fetch
	useEffect(() => {
		fetchHotels()
	}, [fetchHotels])

	// Scroll handler
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 0)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	// Helpers
	const getHotelRegions = useCallback((hotel: Hotel) => {
		const regs: string[] = []
		if (hotel.dach) regs.push("DACH")
		if (hotel.nordics) regs.push("Nordics")
		if (hotel.cee) regs.push("CEE")
		if (hotel.uk) regs.push("UK")
		return regs
	}, [])

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
		[filteredHotels, getHotelRegions]
	)

	// Derived counts
	const anyFilterActive = searchTerm.length > 0 || brandFilter !== "all" || regionFilter !== "all"

	// Clear filters handler
	const handleClearFilters = useCallback(() => {
		setSearchTerm("")
		setBrandFilter("all")
		setRegionFilter("all")
	}, [])

	return (
		<div className={`portfolio-page ${isScrolled ? "scrolled" : ""}`}>
			{/* Hero */}
			<HeroImage
				backgroundImage={"/images/langco.png"}
				title={"Our Hotel Portfolio"}
				subtitle={"Discover our curated collection of luxury hotels and resorts."}
			/>

			{/* Filters Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className="bg-gradient-to-r from-white to-gray-100 border-b border-gray-200 sticky top-0 z-40"
			>
				<div className="container mx-auto px-4 py-6">
					{/* Stats */}
					<div className="flex items-center justify-center mb-4">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<Button className="text-xs hover:bg-transparent uppercase border-1 hover:text-inherit hover:shadow-none">
									{hotels.length} Hotels
								</Button>
							</div>
							<div className="flex items-center gap-2">
								<Button className="text-xs hover:bg-transparent uppercase border-1 hover:text-inherit hover:shadow-none">
									{uniqueBrands.length} Brands
								</Button>
							</div>
							{anyFilterActive && (
								<div className="flex items-center gap-2">
									<Button className="hover:bg-transparent uppercase text-xs border-1 hover:text-inherit hover:shadow-none">
										{filteredHotels.length} Filtered Results
									</Button>
								</div>
							)}
							{anyFilterActive && (
								<Button className="btn-secondary" onClick={handleClearFilters}>
									Clear Filters
								</Button>
							)}
						</div>
					</div>

					{/* Filter Bar */}
					<FilterBar
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
				</div>
			</motion.section>

			{/* Grid */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className="container mx-auto px-4 py-12"
				aria-live="polite"
			>
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
						{anyFilterActive && (
							<Button variant="outline" onClick={handleClearFilters} className="mt-4">
								Clear All Filters
							</Button>
						)}
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredHotels.map((hotel, index) => (
							<motion.div
								key={hotel.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								whileHover={{ scale: 1.02 }}
								className="group"
							>
								<Card className="flex flex-col h-full overflow-hidden border-0 p-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
									<div className="relative overflow-hidden">
										<Image
											src={hotel.image || "/placeholder.jpg"}
											alt={hotel.image_alt || "Hotel image"}
											width={400}
											height={300}
											className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
											loading="lazy"
										/>
									</div>

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
											<Button className="btn-secondary w-full">
												Explore More <ExternalLink className="w-4 h-4 ml-2" />
											</Button>
										</Link>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				)}
			</motion.section>

			<Separator className="bg-primary" />

			{/* CTA */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className="bg-gradient-to-r from-primary/10 to-accent/10 py-20"
				aria-labelledby="cta-title"
			>
				<div className="container mx-auto px-4 text-center">
					<h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6 text-white">
						Ready to Partner with Excellence?
					</h2>
					<p className="text-lg text-muted-white max-w-2xl mx-auto mb-8">
						Join our exclusive network of luxury hospitality brands and unlock new opportunities in
						the European market.
					</p>
					<Button
						size="lg"
						asChild
						className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
					>
						<Link href="/join-ltp">Let's Talk</Link>
					</Button>
				</div>
			</motion.section>
		</div>
	)
}
