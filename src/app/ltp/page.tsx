"use client"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import Form from "@/components/Form"
import { Download, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

export default function LTPPortal() {
	return (
		<>
			<Hero />
			<Form />
			<Separator className="my-10" />

			{/* Hero Section */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 bg-[var(--background)] py-10">
				<Card>
					<CardHeader className="text-center mb-6">
						<CardTitle>
							<h2 className="text-4xl font-bold">Luxury Travel Partner Programme</h2>
						</CardTitle>
					</CardHeader>

					<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{features.map((feature, index) => (
							<motion.div
								key={`feature-${index}`}
								className="relative overflow-hidden rounded-lg shadow-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div className="p-0">
									<AspectRatio ratio={4 / 3}>
										<Image src={feature.img} alt={feature.title} fill className="object-cover" />
									</AspectRatio>
									<div className="p-4 bg-white/80 backdrop-blur-sm">
										<h3 className="text-xl font-semibold">{feature.title}</h3>
										<p className="text-gray-600">{feature.desc}</p>
									</div>
								</div>
							</motion.div>
						))}
					</CardContent>
				</Card>
			</section>

			<Separator className="my-10" />
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 py-10 bg-[var(--background)]">
				<Card className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<CardHeader className="text-center">
						<AspectRatio ratio={4 / 3} className="relative object-fill w-full h-full">
							<Image
								src="/images/a7.webp"
								alt="Client Benefit 1"
								width={100}
								height={100}
								className="w-full h-full object-cover"
							/>

							<CardTitle className="text-2xl font-semibold text-center absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
								<h2 className="text-4xl font-bold">Our value added benefits</h2>
							</CardTitle>
						</AspectRatio>
					</CardHeader>

					<Card>
						<CardHeader className="text-center">{/* First card content */}</CardHeader>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>
								<h2 className="text-2xl font-semibold">Rooms</h2>
							</CardTitle>
						</CardHeader>
						<CardContent className="text-left">
							<ul className="list-disc list-inside mt-4 space-y-2">
								<li>
									US$100 F&B credit per stay, per room (US$50 at Address Istanbul/Jabal Omar Makkah)
								</li>
								<li>Early check-in / Late check-out, subject to availability</li>
								<li>One category room upgrade, subject to availability at check-in</li>
								<li>Complimentary daily breakfast in The Restaurant</li>
								<li>VIP recognition by management and staff</li>
							</ul>
						</CardContent>
					</Card>
				</Card>
			</section>

			<Separator className="my-10" />
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6">
				<Card className="rounded-lg p-6">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl font-semibold">
							<h2 className="text-4xl font-bold">Meet Your Local Team</h2>
						</CardTitle>
					</CardHeader>
					<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Patricia de Mayer */}
						<Card className="overflow-hidden">
							<div className="flex flex-col h-full">
								<div className="relative flex-grow">
									<Image
										src="/images/pde.png"
										alt="Patricia de Mayer"
										width={1200}
										height={1600}
										className="w-full h-96 object-cover object-top"
									/>
								</div>
								<div className="p-4 bg-background">
									<h3 className="text-lg font-semibold">Patricia de Mayer</h3>
									<p className="text-sm mt-1 text-muted-foreground">Founder & MD</p>
									<p className="text-sm text-muted-foreground">+49 173 306 4859</p>
									<p className="text-sm text-muted-foreground">
										pdemayer@globaleliteassociates.com
									</p>
								</div>
							</div>
						</Card>

						{/* Hung Nguyen */}
						<Card className="overflow-hidden">
							<div className="flex flex-col h-full">
								<div className="relative flex-grow">
									<Image
										src="/images/hung.png"
										alt="Hung Nguyen"
										width={1200}
										height={1600}
										className="w-full h-96 object-cover object-top"
									/>
								</div>
								<div className="p-4 bg-background">
									<h3 className="text-lg font-semibold ">Hung Nguyen</h3>
									<p className=" mt-1 text-muted-foreground">Director of Sales</p>
									<p className=" text-muted-foreground">+49 162 265 5243</p>
									<p className=" text-muted-foreground">hung@globaleliteassociates.com</p>
								</div>
							</div>
						</Card>
					</CardContent>
				</Card>
				<p>
					<a href="https://globaleliteassociates.com" className="text-primary underline">
						Visit our website
					</a>
				</p>
			</section>
			<Separator className="my-10" />

			{/* Download Center Section */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 py-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
				<Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
					<CardHeader className="text-center">
						<CardTitle>
							<div className="flex items-center justify-center mb-4">
								<Download className="w-8 h-8 mr-3 text-blue-600" />
								<h2 className="text-4xl font-bold">Photography & Information Center</h2>
							</div>
						</CardTitle>
						<CardDescription className="text-lg">
							Access high-resolution photography and marketing materials for all our hotel brands
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
									<ExternalLink className="w-8 h-8 text-blue-600" />
								</div>
								<h3 className="font-semibold">Armani Hotels</h3>
								<p className="text-sm text-gray-600">Luxury collection</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
									<ExternalLink className="w-8 h-8 text-green-600" />
								</div>
								<h3 className="font-semibold">Address Hotels</h3>
								<p className="text-sm text-gray-600">14+ properties</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
									<ExternalLink className="w-8 h-8 text-purple-600" />
								</div>
								<h3 className="font-semibold">Vida Hotels</h3>
								<p className="text-sm text-gray-600">9+ destinations</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
									<ExternalLink className="w-8 h-8 text-orange-600" />
								</div>
								<h3 className="font-semibold">Rove Hotels</h3>
								<p className="text-sm text-gray-600">Modern lifestyle</p>
							</div>
						</div>

						<div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
							<p className="flex items-center justify-center">
								<Calendar className="w-4 h-4 mr-2" />
								Last Updated: 20.06.2025 | High-resolution images available
							</p>
						</div>

						<Link href="/downloads">
							<Button size="lg" className="text-lg px-8 py-4">
								<Download className="w-5 h-5 mr-2" />
								Access Download Center
								<ExternalLink className="w-5 h-5 ml-2" />
							</Button>
						</Link>
					</CardContent>
				</Card>
			</section>

			<Separator className="my-10" />
			{/* Final CTA */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6">
				{" "}
				<blockquote className="italic text-xl">
					“When it comes to luxury, you deserve more. Stay, unwind, indulge and unlock your
					benefits.”
				</blockquote>
				<Button className="text-lg">Join Today</Button>
			</section>
			<Separator className="my-10" />
			{/* Footer */}
			<section className="max-w-5xl mx-auto px-4  space-y-6 py-10 bg-[var(--background)]">
				<CardFooter className="flex flex-col items-center justify-center ">
					<div>
						<Image
							src="/images/ge1.png"
							alt="Global Elite Logo"
							width={200}
							height={50}
							className="w-1/3 mx-auto mb-8 object-contain"
						/>
					</div>

					<div className="prose *:not-prose text-center text-sm text-muted-foreground">
						<p>| Privacy Policy | Cookies |</p>
					</div>
					<div className="prose *:not-prose text-center text-sm text-muted-foreground">
						<p>
							© {new Date().getFullYear()} Global Elite Associates. All rights reserved.{" "}
							<a href="https://globaleliteassociates.com" className="text-primary underline"></a>
						</p>
					</div>
				</CardFooter>
			</section>
		</>
	)
}

const features = [
	{
		img: "/images/a1.webp",
		title: "Exclusive Access",
		desc: "Gain access to exclusive offers and benefits at Address Hotels + Resorts.",
	},
	{
		img: "/images/a2.webp",
		title: "Personalized Service",
		desc: "Enjoy personalized service tailored to your travel needs.",
	},
	{
		img: "/images/a3.webp",
		title: "Luxury Experiences",
		desc: "Experience luxury like never before with our curated experiences.",
	},
]
