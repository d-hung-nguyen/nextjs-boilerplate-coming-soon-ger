"use client"

import { Input } from "@/components/ui/input"
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select"
import { Filter, Search } from "lucide-react"

type BookingBarProps = {
	searchTerm: string
	setSearchTerm: (val: string) => void
	brandFilter: string
	setBrandFilter: (val: string) => void
	regionFilter: string
	setRegionFilter: (val: string) => void
	uniqueBrands: string[]
	total: number
	filtered: number
}

export default function FilterBar({
	searchTerm,
	setSearchTerm,
	brandFilter,
	setBrandFilter,
	regionFilter,
	setRegionFilter,
	uniqueBrands,
	total,
	filtered,
}: BookingBarProps) {
	return (
		<section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
			<div className="container mx-auto px-4 py-4">
				<div className="flex flex-col md:flex-row gap-4 items-center">
					<div className="flex items-center gap-2 text-sm font-medium">
						<Filter className="w-4 h-4" />
						Filters:
					</div>

					<div className="flex flex-1 gap-4 w-full md:w-auto">
						{/* Search input */}
						<div className="relative flex-1 md:w-64">
							<Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
							<Input
								placeholder="Search hotels..."
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
								className="pl-10"
							/>
						</div>

						{/* Brand filter */}
						<Select value={brandFilter} onValueChange={setBrandFilter}>
							<SelectTrigger className="w-32">
								<SelectValue placeholder="Brand" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Brands</SelectItem>
								{Array.isArray(uniqueBrands) &&
									uniqueBrands.map(brand => (
										<SelectItem key={brand} value={brand}>
											{brand}
										</SelectItem>
									))}
							</SelectContent>
						</Select>

						{/* Region filter */}
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
						{filtered} of {total} hotels
					</div>
				</div>
			</div>
		</section>
	)
}
