"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import RootLayout from "@/src/app/layout"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion } from "framer-motion"
import Hero from "@/components/Hero"

export default function LTPPortal() {
	const features = [
		{
			img: "/images/a1.webp",
			title: "By Invitation Only",
			desc: "An exclusive, invitation-only network of elite travel consultants globally",
		},
		{
			img: "/images/a2.webp",
			title: "Rewarding Loyalty",
			desc: "Your clients will enjoy a series of benefits and so will you. Our way to recognise you and your clients in more ways than one",
		},
		{
			img: "/images/a3.webp",
			title: "Bookings Made Easy",
			desc: "Book via our website or via GDS, your choice!",
		},
		{
			img: "/images/a4.webp",
			title: "Unique Value-Added Benefits",
			desc: "From VIP status to flexible perks and dedicated concierge support",
		},
	]

	return (
		<RootLayout>
			<Hero />
			<Separator className="my-10" />
			{/* Hero Section */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 bg-[var(--background)] py-10 ">
				<CardHeader className="text-center mb-6">
					<CardTitle className="text-2xl font-semibold">
						<h2 className="text-4xl font-bold">Luxury Travel Partner Programme</h2>
					</CardTitle>
					<p className="text-lg mt-4 text-muted-foreground">
						Join the exclusive network of elite travel consultants with Address Hotels + Resorts.
					</p>
				</CardHeader>

				<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{features.map(({ img, title, desc }) => (
						<motion.div
							key={img}
							className="relative overflow-hidden rounded-lg shadow-lg"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<CardContent className="p-0">
								<AspectRatio ratio={4 / 3} className="w-full">
									<Image
										src={img}
										alt={title}
										className="object-cover w-full h-full"
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										priority
									/>
								</AspectRatio>
								<CardContent className="p-4 bg-white/80 backdrop-blur-sm">
									<h3 className="text-lg font-semibold">{title}</h3>
									<p className="text-sm mt-1">{desc}</p>
								</CardContent>
							</CardContent>
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
						<CardHeader>
							<CardTitle className="text-2xl font-semibold">
								<h2>Rooms</h2>
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
			{/* Travel Agent Benefits */}

			<Separator className="my-10" />
			{/* Support & Commitments */}

			{/* Local Team */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6">
				<Card className="bg-white  rounded-lg p-6">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl font-semibold">
							<h2 className="text-4xl font-bold">Meet Your Local Team</h2>
						</CardTitle>
					</CardHeader>
				</Card>
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
				<p>
					<a href="https://globaleliteassociates.com" className="text-primary underline">
						globaleliteassociates.com
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
		</RootLayout>
	)
}
