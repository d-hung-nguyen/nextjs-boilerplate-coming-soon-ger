"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Edit, Plus, ExternalLink, Search, Filter, Section } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Toaster, toast } from "sonner"

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
	created_at: string
	updated_at: string
}

const SafeSelectItem = ({ value, children, ...props }: any) => {
	// Convert empty string to a safe value
	const safeValue = value === "" ? "___empty___" : value

	return (
		<SelectItem value={safeValue} {...props}>
			{children}
		</SelectItem>
	)
}

export default function AdminHotelsPage() {
	const [hotels, setHotels] = useState<Hotel[]>([])
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState("")
	const [brandFilter, setBrandFilter] = useState("all")
	const [regionFilter, setRegionFilter] = useState("all")
	const [featuredFilter, setFeaturedFilter] = useState("all")
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [editingHotel, setEditingHotel] = useState<Hotel | null>(null)
	const [formData, setFormData] = useState<Partial<Hotel>>({})

	const supabase = createClientComponentClient()

	// Fetch hotels from Supabase
	const fetchHotels = async () => {
		try {
			setLoading(true)
			let query = supabase.from("hotels").select("*").order("hotel_name", { ascending: true })

			const { data, error } = await query

			if (error) throw error

			setHotels(data || [])
		} catch (error) {
			console.error(
				"Error fetching hotels:",
				error instanceof Error ? error.message : JSON.stringify(error)
			)
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

		// No featured_in_main_page in new structure, so skip featuredFilter
		return matchesSearch && matchesBrand && matchesRegion
	})

	// Get unique brands for filter
	const uniqueBrands = [...new Set(hotels.map(hotel => hotel.brand))].filter(Boolean)

	// Handle form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			if (editingHotel) {
				// Update existing hotel
				const { error } = await supabase.from("hotels").update(formData).eq("id", editingHotel.id)

				if (error) throw error

				toast.success("Hotel updated successfully")
			} else {
				// Create new hotel
				const { error } = await supabase.from("hotels").insert([formData])

				if (error) throw error

				toast.success("Hotel created successfully")
			}

			setIsDialogOpen(false)
			setEditingHotel(null)
			fetchHotels()
		} catch (error) {
			console.error("Error saving hotel:", error)
			toast.error("Failed to save hotel")
		}
	}

	// Handle delete
	const handleDelete = async (id: string) => {
		if (!confirm("Are you sure you want to delete this hotel?")) return

		try {
			const { error } = await supabase.from("hotels").delete().eq("id", id)

			if (error) throw error

			toast.success("Hotel deleted successfully")
			fetchHotels()
		} catch (error) {
			console.error("Error deleting hotel:", error)
			toast.error("Failed to delete hotel")
		}
	}

	// Open edit dialog
	const openEditDialog = (hotel: Hotel) => {
		setEditingHotel(hotel)
		setFormData(hotel)
		setIsDialogOpen(true)
	}

	// Open create dialog
	const openCreateDialog = () => {
		setEditingHotel(null)
		setFormData({})
		setIsDialogOpen(true)
	}

	return (
		<>
			<div className="min-h-screen bg-accent text-foreground">
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-primary/20 to-accent/20 py-20">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
							Our Hotels Management
						</h1>
						<p className="text-lg md:text-xl text-muted-primary max-w-3xl mx-auto mb-8">
							Manage your hotel portfolio efficiently with our admin panel. Add, edit, and delete
							hotels easily.
						</p>
					</div>
				</section>

				{/* Filters */}
				<Card className="mb-6">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Filter className="w-4 h-4" />
							Filters
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
							<div className="space-y-2">
								<Label>Search</Label>
								<div className="relative">
									<Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
									<Input
										placeholder="Search hotels..."
										value={searchTerm}
										onChange={e => setSearchTerm(e.target.value)}
										className="pl-10"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label>Brand</Label>
								<Select value={brandFilter} onValueChange={setBrandFilter}>
									<SelectTrigger>
										<SelectValue placeholder="All brands" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All brands</SelectItem>
										{uniqueBrands.map(brand => (
											<SelectItem key={brand} value={brand}>
												{brand}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label>Region</Label>
								<Select value={regionFilter} onValueChange={setRegionFilter}>
									<SelectTrigger>
										<SelectValue placeholder="All regions" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All regions</SelectItem>
										<SelectItem value="dach">DACH</SelectItem>
										<SelectItem value="nordics">Nordics</SelectItem>
										<SelectItem value="cee">CEE</SelectItem>
										<SelectItem value="uk">UK</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label>Featured</Label>
								<Select value={featuredFilter} onValueChange={setFeaturedFilter}>
									<SelectTrigger>
										<SelectValue placeholder="All hotels" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All hotels</SelectItem>
										<SelectItem value="featured">Featured only</SelectItem>
										<SelectItem value="not-featured">Not featured</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Hotels Table */}
				<Card>
					<CardHeader>
						<CardTitle>Hotels ({filteredHotels.length})</CardTitle>
					</CardHeader>
					<Button className="mx-auto" onClick={openCreateDialog}>
						<Plus className="w-4 h-4 mr-2" />
						Add Hotel
					</Button>
					<CardContent>
						{loading ? (
							<div className="text-center py-8">Loading hotels...</div>
						) : (
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Image</TableHead>
											<TableHead>Hotel</TableHead>
											<TableHead>Brand</TableHead>
											<TableHead>Location</TableHead>
											<TableHead>Regions</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{filteredHotels.map(hotel => (
											<TableRow key={hotel.id}>
												<TableCell>
													<div className="relative w-16 h-16">
														<Image
															src={hotel.image || "/placeholder.jpg"}
															alt={hotel.image_alt || hotel.hotel_name}
															fill
															className="object-cover rounded"
														/>
													</div>
												</TableCell>
												<TableCell>
													<div>
														<div className="font-semibold">{hotel.hotel_name}</div>
														<div className="text-sm text-muted-foreground">{hotel.slug}</div>
													</div>
												</TableCell>
												<TableCell>
													<Badge variant="secondary">{hotel.brand}</Badge>
												</TableCell>
												<TableCell>{hotel.location}</TableCell>
												<TableCell>
													<div className="flex gap-1 flex-wrap">
														{hotel.dach && <Badge variant="outline">DACH</Badge>}
														{hotel.nordics && <Badge variant="outline">Nordics</Badge>}
														{hotel.cee && <Badge variant="outline">CEE</Badge>}
														{hotel.uk && <Badge variant="outline">UK</Badge>}
													</div>
												</TableCell>
												<TableCell>
													<div className="flex gap-2">
														<Button variant="ghost" size="sm" onClick={() => openEditDialog(hotel)}>
															<Edit className="w-4 h-4" />
														</Button>
														<Button variant="ghost" size="sm" asChild>
															<Link href={hotel.hotel_website || "#"} target="_blank">
																<ExternalLink className="w-4 h-4" />
															</Link>
														</Button>
														<Button
															variant="ghost"
															size="sm"
															onClick={() => handleDelete(hotel.id)}
															className="text-destructive hover:text-destructive"
														>
															<Trash2 className="w-4 h-4" />
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						)}
					</CardContent>
				</Card>

				{/* Add/Edit Dialog */}
				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
						<DialogHeader>
							<DialogTitle>{editingHotel ? "Edit Hotel" : "Add New Hotel"}</DialogTitle>
						</DialogHeader>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="hotel_name">Hotel Name</Label>
									<Input
										id="hotel_name"
										value={formData.hotel_name || ""}
										onChange={e => setFormData({ ...formData, hotel_name: e.target.value })}
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="slug">Slug</Label>
									<Input
										id="slug"
										value={formData.slug || ""}
										onChange={e => setFormData({ ...formData, slug: e.target.value })}
										required
									/>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="brand">Brand</Label>
									<Input
										id="brand"
										value={formData.brand || ""}
										onChange={e => setFormData({ ...formData, brand: e.target.value })}
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="location">Location</Label>
									<Input
										id="location"
										value={formData.location || ""}
										onChange={e => setFormData({ ...formData, location: e.target.value })}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									value={formData.description || ""}
									onChange={e => setFormData({ ...formData, description: e.target.value })}
									rows={3}
								/>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="image">Image URL</Label>
									<Input
										id="image"
										value={formData.image || ""}
										onChange={e => setFormData({ ...formData, image: e.target.value })}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="hotel_website">Website URL</Label>
									<Input
										id="hotel_website"
										value={formData.hotel_website || ""}
										onChange={e => setFormData({ ...formData, hotel_website: e.target.value })}
									/>
								</div>
							</div>

							<div className="space-y-3">
								<Label>Regions</Label>
								<div className="grid grid-cols-2 gap-4">
									<div className="flex items-center space-x-2">
										<Checkbox
											id="dach"
											checked={formData.dach || false}
											onCheckedChange={checked => setFormData({ ...formData, dach: !!checked })}
										/>
										<Label htmlFor="dach">DACH</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox
											id="nordics"
											checked={formData.nordics || false}
											onCheckedChange={checked => setFormData({ ...formData, nordics: !!checked })}
										/>
										<Label htmlFor="nordics">Nordics</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox
											id="cee"
											checked={formData.cee || false}
											onCheckedChange={checked => setFormData({ ...formData, cee: !!checked })}
										/>
										<Label htmlFor="cee">CEE</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox
											id="uk"
											checked={!!formData.uk}
											onCheckedChange={checked =>
												setFormData({ ...formData, uk: checked ? "UK" : "" })
											}
										/>
										<Label htmlFor="uk">UK</Label>
									</div>
								</div>
							</div>

							<div className="flex justify-end gap-4">
								<Button
									variant="outline"
									onClick={() => setIsDialogOpen(false)}
									className="w-full md:w-auto"
								>
									Cancel
								</Button>
								<Button type="submit" className="w-full md:w-auto">
									{editingHotel ? "Update Hotel" : "Create Hotel"}
								</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>

				<Toaster />
				<Toaster />
			</div>
		</>
	)
}
