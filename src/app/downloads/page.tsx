"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DownloadHero from "@/src/components/DownloadHero"
import { ExternalLink, Download, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DownloadCenter() {
	return (
		<div className="min-h-screen ">
			{/* Header */}
			<DownloadHero />
			<div className="flex px-4 py-8">
				<Calendar className="w-4 h-4 mr-2" />
				<span className="text-sm">Updated: 20.06.2025</span>
			</div>

			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Hotel Brand Tabs */}
				<Tabs defaultValue="armani" className="w-full">
					<TabsList className="grid w-full grid-cols-4 ">
						<TabsTrigger value="armani" className="flex items-center gap-2">
							Armani Hotels
						</TabsTrigger>
						<TabsTrigger value="address" className="flex items-center gap-2">
							Address Hotels
						</TabsTrigger>
						<TabsTrigger value="vida" className="flex items-center gap-2">
							Vida Hotels
						</TabsTrigger>
						<TabsTrigger value="rove" className="flex items-center gap-2">
							Rove Hotels
						</TabsTrigger>
					</TabsList>
					<Separator className="mb-8" />

					<TabsContent value="armani" className="space-y-6">
						<HotelBrandSection
							brandName="ARMANI HOTELS & RESORTS"
							brandLogo="/images/am-l.svg"
							hotels={armaniHotels}
						/>
					</TabsContent>

					<TabsContent value="address" className="space-y-6">
						<HotelBrandSection
							brandName="ADDRESS HOTELS + RESORTS"
							brandLogo="/images/a-l.svg"
							hotels={addressHotels}
						/>
					</TabsContent>

					<TabsContent value="vida" className="space-y-6">
						<HotelBrandSection
							brandName="VIDA HOTELS & RESORTS"
							brandLogo="/images/v-l.svg"
							hotels={vidaHotels}
						/>
					</TabsContent>

					<TabsContent value="rove" className="space-y-6">
						<HotelBrandSection
							brandName="ROVE HOTELS"
							brandLogo="/images/r-l.png"
							hotels={roveHotels}
						/>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}

// Hotel Brand Section Component
function HotelBrandSection({
	brandName,
	brandLogo,
	hotels,
}: {
	brandName: string
	brandLogo: string
	hotels: Hotel[]
}) {
	return (
		<section>
			{/* <div className="flex items-center gap-4 mb-6">
				<div className="w-16 h-16 relative flex-shrink-0">
					<Image
						src={brandLogo}
						alt={`${brandName} Logo`}
						fill
						className="object-contain"
						sizes="64px"
					/>
				</div>
				<h3 className="text-2xl font-bold text-foreground font-alta">{brandName}</h3>
			</div> */}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{hotels.map((hotel, index) => (
					<HotelCard key={index} hotel={hotel} />
				))}
			</div>
		</section>
	)
}

// Hotel Card Component - Simple & Elegant
function HotelCard({ hotel }: { hotel: Hotel }) {
	return (
		<Card className="group relative overflow-hidden shadow-md bg-background transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
			<CardHeader className="pb-3">
				<CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
					{hotel.name}
				</CardTitle>

				{hotel.description && (
					<CardDescription className="text-sm text-muted-foreground">
						{hotel.description}
					</CardDescription>
				)}
			</CardHeader>

			<CardContent className="pt-0">
				<a href={hotel.dropboxLink} target="_blank" rel="noopener noreferrer" className="block">
					<Button
						className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group-hover:scale-105"
						variant="default"
					>
						<Download className="w-4 h-4 mr-2" />
						Download Photos
					</Button>
				</a>

				<div className="mt-3 flex items-center text-xs text-muted-foreground">
					<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
					High-resolution images available
				</div>
			</CardContent>
		</Card>
	)
}

// Types
interface Hotel {
	name: string
	dropboxLink: string
	description?: string
}

// Hotel Data
const armaniHotels: Hotel[] = [
	{
		name: "ARMANI HOTELS & RESORTS",
		dropboxLink: "https://www.dropbox.com/sh/4dllgewxqv94u6t/AAAHZ2V6i_SMrXUF_CwF7pt4a?dl=0",
		description: "Complete collection of Armani luxury properties",
	},
]

const addressHotels: Hotel[] = [
	{
		name: "ADDRESS BEACH RESORT",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/o04gohkbkq2882ubymvqc/ANnhwTbgopHOJPjOgEDrHF0?rlkey=vkkqim4z8qqfawamqzd3syrb8&st=agrqim5n&dl=0",
		description: "Luxury beachfront resort in Dubai",
	},
	{
		name: "ADDRESS BEACH RESORT BAHRAIN",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/lh3whl14n7doezzp4lnqt/h?rlkey=146zknrw6xgwo23n0qdvcfksb&dl=0",
		description: "Premium beachfront destination in Bahrain",
	},
	{
		name: "ADDRESS BEACH RESORT FUJAIRAH",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/z7a41ag8zsvj6vg7oj5px/h?rlkey=70w4nnai1ksvsbdaif2o7o5l8&dl=0",
		description: "Scenic beach resort in Fujairah",
	},
	{
		name: "ADDRESS DOWNTOWN",
		dropboxLink: "https://www.dropbox.com/sh/09bufq8fx8vkeim/AACewVbhKLLuGvYZO6bTbkCPa?dl=0",
		description: "Iconic downtown Dubai location",
	},
	{
		name: "ADDRESS DUBAI MALL",
		dropboxLink: "https://www.dropbox.com/sh/c87is601dbaz1sw/AABNZjCGfnKh_wzRzhbaTp4ea?dl=0",
		description: "Formerly Address Fountain Views",
	},
	{
		name: "ADDRESS CREEK HARBOUR",
		dropboxLink: "https://www.dropbox.com/sh/nlhuahpeckm2vbe/AADJzcyfInQo1pJGxuAsgRtVa?dl=0",
		description: "Modern waterfront destination",
	},
	{
		name: "ADDRESS ISTANBUL",
		dropboxLink: "https://www.dropbox.com/sh/kzi7r919zijvy8x/AABoEsL4aWJ4habbtzPHim-Ta?dl=0",
		description: "Luxury accommodation in Istanbul",
	},
	{
		name: "ADDRESS JABAL OMAR MAKKAH",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/8mz8pruixll7nkomqf22c/h?rlkey=dbj8jl3nulrn64ad2v9i993qk&dl=0",
		description: "Premium pilgrimage accommodation",
	},
	{
		name: "ADDRESS MARASSI GOLF RESORT",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/ejcw7aao8yh60a0ipxeq1/h?rlkey=hmgz9bf5f2f230tizyz16x7pd&dl=0",
		description: "Golf resort in Egypt",
	},
	{
		name: "ADDRESS SKY VIEW",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/07n89pba1ky8ede0up1sb/h?rlkey=bzdrmjjvayb3d7axhul9gkyjr&dl=0",
		description: "High-rise luxury accommodation",
	},
	{
		name: "ADDRESS MONTGOMERIE",
		dropboxLink:
			"https://www.dropbox.com/sh/wy5okq1ekhdlfv3/AAAZ2Uu2xFOkNrxaAO6dlHPea/ADDRESS%20MONTGOMERIE?dl=0&subfolder_nav_tracking=1",
		description: "Golf resort destination",
	},
	{
		name: "PALACE DOWNTOWN",
		dropboxLink: "https://www.dropbox.com/sh/kh6zqidirk3ztv4/AAAeiYfzl3gept9BlKJmp2tPa?dl=0",
		description: "Iconic palace-style luxury hotel",
	},
	{
		name: "PALACE BEACH RESORT FUJAIRAH",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/w275fqdb41atxq28wb4im/h?dl=0&rlkey=nz5byh0r2k6nbz7a6tbnfo8jb",
		description: "Beachfront palace experience",
	},
	{
		name: "PALACE DUBAI CREEK HARBOUR",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/li2fc787l935kkzvout17/ADzpTqpOsWqyOkR9f4msg2Y?rlkey=3yi7xx4jnj9zmu5lu0uopm4e9&e=1&st=w5jyw1ga&dl=0",
		description: "Waterfront palace accommodation",
	},
]

const vidaHotels: Hotel[] = [
	{
		name: "VIDA AL ALAMEIN HOTEL",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/2bns61gnvapsfy5a5sjzh/h?rlkey=nzf0s95wnzl84tgw63j3z398o&dl=0",
		description: "Beach resort in Egypt",
	},
	{
		name: "VIDA BEACH RESORT MARASSI BAHRAIN",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/qsge2c58rmge9dgjaew20/h?rlkey=lmy52wt8ht90xdq1ha4ub3l7l&dl=0",
		description: "Beachfront resort in Bahrain",
	},
	{
		name: "VIDA BEACH RESORT UMM AL QUWAIN",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/q2kku2aifj8z9iwx2chzp/h?rlkey=bocivk801sivjml5isynwyvhs&dl=0",
		description: "Coastal retreat in UAE",
	},
	{
		name: "VIDA CREEK HARBOUR",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/dpj6weq9jpd8yyw3x5wig/h?rlkey=3an20uq4alluyp6ou7sn0xnf6&dl=0",
		description: "Modern waterfront hotel",
	},
	{
		name: "VIDA DUBAI MARINA & YACHT CLUB",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/ukgj2ekuwf78uugmkeuct/h?rlkey=safyszynz1p2j3mud8lxi6esd&dl=0",
		description: "Marina lifestyle destination",
	},
	{
		name: "VIDA EMIRATES HILLS",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/ft5wi8l0h2fgi9vkyiudu/h?rlkey=0abaj04lb8u9nqk12oqko4my9&dl=0",
		description: "Luxury residential area hotel",
	},
	{
		name: "VIDA CREEK BEACH",
		dropboxLink: "https://www.dropbox.com/sh/1x0jsx6jkbgtyww/AABo5ueTTk-3LUucYPRFuw0ca?dl=0",
		description: "Beachfront city escape",
	},
	{
		name: "VIDA DUBAI MALL",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/ojyj0dzadmzosies7mnv2/ABQW-aKI7VJrbuj2AnUrdBI?rlkey=xqjkie0jorcyvh4fggoycdgox&st=644ev0wc&dl=0",
		description: "Now Open - Shopping district hotel",
	},
	{
		name: "NORTHERN EMIRATES CLUSTER",
		dropboxLink: "https://drive.google.com/drive/folders/1hHGj0w_PlvDNxkTv7lj70hIF3WntTJzv",
		description: "Multiple properties in Northern UAE",
	},
]

const roveHotels: Hotel[] = [
	{
		name: "ROVE HOTELS COLLECTION",
		dropboxLink: "https://www.dropbox.com/sh/b88vdu9bxniswve/AADnPbu50ejW0eVP2NyPy7_Ja?dl=0",
		description: "Complete Rove Hotels portfolio",
	},
	{
		name: "ROVE AL MARJAN ISLAND",
		dropboxLink:
			"https://www.dropbox.com/scl/fo/guufvmk3bj4dcsef2aao8/AOo5oeK2rMT4DFgTR0anaHI?rlkey=xxgj92jncw8q978y5kzdbw9kc&dl=0",
		description: "Island resort in Ras Al Khaimah",
	},
]
