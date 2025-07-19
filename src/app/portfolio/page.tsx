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

	const supabase = createClientComponentClient()

	// Add page title
	useEffect(() => {
		document.title = "Hotel Portfolio | Global Elite & Associates"
	}, [])

	// Improved fetch function with detailed logging
	const fetchHotels = useCallback(async () => {
		setError(null)
		setLoading(true)

		console.log("🔄 Starting hotel fetch...")

		try {
			console.log("📡 Supabase client:", supabase)

			const { data, error } = await supabase
				.from("hotels")
				.select("*")
				.order("hotel_name", { ascending: true })

			console.log("📊 Supabase response:", {
				dataLength: data?.length,
				error: error?.message,
				data: data?.slice(0, 2), // Log first 2 records
			})

			if (error) {
				console.error("❌ Supabase error details:", error)
				throw error
			}

			if (!data || data.length === 0) {
				console.warn("⚠️ No hotels found in database")
				setError("No hotels found in database")
				return
			}

			console.log("✅ Hotels loaded successfully:", data.length)
			setHotels(data)
		} catch (err: any) {
			console.error("💥 Fetch error details:", {
				message: err.message,
				code: err.code,
				details: err.details,
				hint: err.hint,
			})

			setError(`Failed to load hotels: ${err.message}`)
			toast.error("Failed to fetch hotels")
		} finally {
			setLoading(false)
		}
	}, [supabase])

	// Check Supabase connection
	useEffect(() => {
		const checkConnection = async () => {
			try {
				console.log("🔌 Testing Supabase connection...")
				const { data, error } = await supabase
					.from("hotels")
					.select("count", { count: "exact" })
					.limit(1)

				if (error) {
					console.error("❌ Connection test failed:", error)
					setError(`Database connection failed: ${error.message}`)
				} else {
					console.log("✅ Supabase connection successful")
				}
			} catch (err) {
				console.error("💥 Connection test error:", err)
			}
		}

		checkConnection()
		fetchHotels()
	}, [fetchHotels, supabase])

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
	const anyFilterActive = searchTerm.length > 0 || brandFilter !== "all" || regionFilter !== "all"

	console.log("🎯 Render state:", {
		loading,
		error,
		hotelsCount: hotels.length,
		filteredCount: filteredHotels.length,
		anyFilterActive,
	})

	return (
		<div className="min-h-screen flex flex-col">
			{/* Debug Panel (Development Only) */}
			{process.env.NODE_ENV === "development" && (
				<div className="fixed bottom-4 right-4 z-50 p-4 bg-black text-white text-xs font-mono max-w-xs rounded">
					<div className="font-bold mb-2">Debug Info</div>
					<div>Total: {hotels.length}</div>
					<div>Filtered: {filteredHotels.length}</div>
					<div>Loading: {loading ? "Yes" : "No"}</div>
					<div>Error: {error || "None"}</div>
					<div>Search: "{searchTerm}"</div>
					<button
						onClick={fetchHotels}
						className="mt-2 px-2 py-1 bg-yellow-600 text-white rounded text-xs"
					>
						Retry Fetch
					</button>
				</div>
			)}

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className="bg-gradient-to-r from-white to-gray-100 border-b border-gray-200 sticky top-0 z-40"
			>
				{/* Hero */}
				<HeroImage
					backgroundImage={"/images/langco.png"}
					title={"Our Hotel Portfolio"}
					subtitle={"Discover our curated collection of luxury hotels and resorts."}
				/>

				{/* Filters Section */}

				<div className="container mx-auto px-4 py-6">
					{/* Stats */}
					<div className="flex items-center justify-center mb-4">
						<div className="flex items-center gap-6">
							<span className="text-sm font-medium text-gray-600">{hotels.length} Hotels</span>
							<span className="text-sm font-medium text-gray-600">
								{uniqueBrands.length} Brands
							</span>
							{anyFilterActive && (
								<span className="text-sm font-medium text-primary">
									{filteredHotels.length} Results
								</span>
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

			{/* Hotels Grid - Improved */}
			<section className="container mx-auto px-4 py-12">
				{loading ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{[...Array(12)].map((_, i) => (
							<Card key={i} className="animate-pulse h-80 overflow-hidden">
								<div className="h-64 bg-gray-300 rounded-t-lg" />
								<div className="p-4 space-y-3">
									<div className="flex gap-2">
										<div className="h-6 bg-gray-300 rounded w-16" />
										<div className="h-6 bg-gray-300 rounded w-12" />
									</div>
									<div className="h-6 bg-gray-300 rounded w-3/4" />
									<div className="h-4 bg-gray-300 rounded w-1/2" />
									<div className="h-10 bg-gray-300 rounded w-24" />
								</div>
							</Card>
						))}
					</div>
				) : error ? (
					<div className="text-center py-20">
						<div className="text-6xl mb-4">⚠️</div>
						<h3 className="text-2xl font-semibold mb-2 text-destructive">Something went wrong</h3>
						<p className="text-muted-foreground mb-4">{error}</p>
						<div className="flex gap-4 justify-center">
							<Button onClick={fetchHotels} variant="default">
								Try Again
							</Button>
							<Button onClick={() => window.location.reload()} variant="outline">
								Refresh Page
							</Button>
						</div>
					</div>
				) : filteredHotels.length === 0 ? (
					<div className="text-center py-20">
						<div className="text-6xl mb-4">🏨</div>
						<h3 className="text-2xl font-semibold mb-2">No hotels found</h3>
						<p className="text-muted-foreground mb-6">
							{anyFilterActive
								? "Try adjusting your search or filter criteria"
								: "No hotels available at the moment"}
						</p>
						{anyFilterActive && (
							<Button
								onClick={() => {
									setSearchTerm("")
									setBrandFilter("all")
									setRegionFilter("all")
								}}
							>
								Clear Filters
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
											src={hotel.image || "/images/ge1.png"}
											alt={hotel.image_alt || `${hotel.hotel_name} hotel`}
											width={400}
											height={300}
											className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
											priority={index < 4}
											quality={85}
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
											onError={e => {
												console.error(`❌ Image failed: ${hotel.image}`)
												e.currentTarget.src = "/images/ge1.png"
											}}
										/>
									</div>

									<div className="flex flex-col justify-between flex-grow p-4 text-gray-800 space-y-4">
										<div className="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												className="bg-primary/10 text-xs text-luxury border-primary/20 rounded-none"
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
											<h3 className="text-xl text-luxury bg-primary font-bold mb-2">
												{hotel.hotel_name}
											</h3>
											<div className="flex items-center gap-2 text-gray-600">
												<MapPin
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													strokeWidth={1.5}
												/>
												<span className="text-sm">{hotel.location}</span>
											</div>
										</div>

										<Link
											href={hotel.hotel_website || "#"}
											target="_blank"
											aria-label={`Explore more about ${hotel.hotel_name}`}
										>
											<Button variant="secondary" size="sm" className="w-full justify-center">
												Explore More
											</Button>
										</Link>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				)}
			</section>

			{/* CTA */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className="gradient-navy text-white py-20"
				aria-labelledby="cta-title"
				role="region"
			>
				<div className="container mx-auto px-4 text-center">
					<div className="w-32 h-1 gradient-luxury mx-auto mb-8 rounded-full shimmer" />
					<h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
						<span className="block text-luxury-display mt-2">Excellence?</span>
						<span className="font-alta">Ready to Partner with</span>
					</h2>
					<p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
						Join our exclusive network of luxury hospitality brands and unlock new opportunities in
						the European market.
					</p>
					<Button className="btn-secondary" size="lg" aria-label="Let's Talk">
						<Link href="/join-ltp">Let's Talk</Link>
					</Button>
				</div>
			</motion.section>
		</div>
	)
}
