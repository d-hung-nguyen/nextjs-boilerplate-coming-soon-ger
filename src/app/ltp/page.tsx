"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import RootLayout from "@/src/app/layout"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import Form from "@/components/Form"

export default function LTPPortal() {
	return (
		<RootLayout>
			<Hero />
			<Form />
			<Separator className="my-10" />
			{/* Hero Section */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 bg-[var(--background)] py-10 ">
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
							whileTap={{ scale: 0.95 }}>
							<div className="p-0">
								<AspectRatio ratio={4 / 3}>
									<Image src={feature.img} alt={feature.title} fill className="object-cover" />
								</AspectRatio>
								<div className="p-4 bg-white/80 backdrop-blur-sm">
									<h3>{feature.title}</h3>
									<p>{feature.desc}</p>
								</div>
							</div>
						</motion.div>
					))}
				</CardContent>
			</section>
			<Separator className="my-10" />
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 py-10 bg-[var(--background)]">
				<Card className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<CardHeader className="text-center">
						<AspectRatio ratio={4 / 3} className="relative object-fill w-full h-full">
							<Image src="/images/a7.webp" alt="Client Benefit 1" width={100} height={100} className="w-full h-full object-cover" />

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
								<li>US$100 F&B credit per stay, per room (US$50 at Address Istanbul/Jabal Omar Makkah)</li>
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
						<Card>
							<Image
								src="/images/pde.png"
								alt="Local Team Member 1"
								width={1200}
								height={1200}
								className="w-1/2 mx-auto mb-4 object-contain aspect-square shadow-lg rounded "
							/>
							<CardDescription className="p-4">
								<h3 className="text-lg font-semibold"> Patricia de Mayer</h3>
								<p className="text-sm mt-1">Founder & MD</p>
								<p>+49 173 306 4859</p>
								<p>pdemayer@globaleliteassociates.com</p>
							</CardDescription>
						</Card>
						<Card>
							<Image
								src="/images/hung.png"
								alt="Local Team Member 1"
								width={1200}
								height={1200}
								className="w-1/2 mx-auto mb-4 object-contain aspect-square shadow-lg rounded "
							/>
							<CardDescription className="p-4">
								<h3 className="text-lg font-semibold">Hung Nguyen</h3>
								<p className="text-sm mt-1">Director of Sales</p>
								<p>+49 162 265 5243</p>
								<p>hung@globaleliteassociates.com</p>
							</CardDescription>
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
			{/* Final CTA */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6">
				{" "}
				<blockquote className="italic text-xl">
					“When it comes to luxury, you deserve more. Stay, unwind, indulge and unlock your benefits.”
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
		</RootLayout>
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
