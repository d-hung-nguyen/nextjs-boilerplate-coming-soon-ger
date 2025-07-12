"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Menubar, MenubarMenu } from "@/components/ui/menubar"
import { Badge } from "@/components/ui/badge"
import { Download, Clock, ArrowUp, Coffee, Star, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import HeroVideo from "@/components/HeroVideo"
import Form from "@/components/Form"

// --- MembershipModal Component ---
function MembershipModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	const [membershipNumber, setMembershipNumber] = useState("")
	const [error, setError] = useState("")
	const router = useRouter()

	// List of valid membership numbers
	const validMembershipNumbers = ["MEMBER123", "MEMBER456", "MEMBER789"]

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		// Check if the entered membership number is in the valid list
		if (validMembershipNumbers.includes(membershipNumber)) {
			setError("")
			onClose()
			router.push("/downloads")
		} else {
			setError("Invalid membership number. Please try again.")
		}
	}

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="bg-background p-6 rounded shadow-lg w-80">
				<h2 className="text-xl font-bold mb-4">Enter Membership Number</h2>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Membership Number"
						value={membershipNumber}
						onChange={e => setMembershipNumber(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded mb-2"
					/>
					{error && <p className="text-red-500 text-sm mb-2">{error}</p>}
					<div className="flex justify-end space-x-2">
						<Button type="button" variant="outline" onClick={onClose}>
							Cancel
						</Button>
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

// --- End MembershipModal Component ---

const features = [
	{
		img: "/images/a1.webp",
		title: "By invitation only",
		desc: "",
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

export default function LTPPortal() {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<>
			<section className="bg-background border-b border-border ">
				<Menubar className="bg-background border-b border-border items-center flex-row justify-end gap-7">
					<MenubarMenu>
						<Link href="/ltp/programme" className="menu-item">
							Programme Info
						</Link>
						<Link href="/join-ltp" className="menu-item">
							Join Now
						</Link>
						<Link href="/admin/dashboard" className="menu-item">
							Dashboard
						</Link>
						<Link href="/downloads" className="menu-item">
							Downloads
						</Link>
					</MenubarMenu>
				</Menubar>
			</section>

			<HeroVideo />

			<Separator className="my-10" />

			{/* Hero Section */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 bg-[var(--background)] py-10">
				<Card>
					<CardHeader className="text-center mb-6">
						<CardTitle>
							<h2 className="text-4xl font-bold">
								Partner with us and be part of the selected few
							</h2>
						</CardTitle>
					</CardHeader>

					<CardContent className="space-y-8">
						{/* Programme Overview */}
						<div className="text-center space-y-4">
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Join our exclusive network of luxury travel partners and unlock extraordinary At
								Address Hotels + Resorts, luxury is not just a promise—it is a lifestyle. Designed
								exclusively for elite travel professionals and discerning globetrotters, our Luxury
								Travel Partner (LTP) Program offers unparalleled access to curated experiences,
								exclusive benefits, and personalised service across our award- winning destinations.
							</p>
							<Link href="/ltp/programme">
								<Button size="lg" className="mt-4">
									View Full Programme Details
								</Button>
							</Link>
						</div>

						{/* Features Grid
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
										<div className="p-4 bg-background/80 backdrop-blur-sm">
											<h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
											{feature.desc && (
												<p className="text-muted-foreground text-sm">{feature.desc}</p>
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>
						*/}
					</CardContent>
				</Card>
			</section>

			<Separator className="my-10" />

			{/* Value Added Benefits Section */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">Our Value Added Benefits</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Enjoy exclusive privileges and enhanced experiences as a member of our luxury travel
						programme
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* ROOMS Benefits */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
							<CardHeader className="relative h-48 p-0 m-0">
								{/* Background Image */}
								<div className="absolute inset-0">
									<Image src="/images/a4.webp" alt="Rooms Benefits" fill className="object-cover" />
									{/* Overlay for better text readability */}
									<div className="absolute inset-0 bg-black/40" />
								</div>

								{/* Content on top of background */}
								<div className="relative z-10 flex items-center justify-between h-full p-6">
									<CardTitle className="text-2xl font-bold text-white">ROOMS</CardTitle>
									<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
										Premium
									</Badge>
								</div>

								<CardDescription className="relative z-10 text-white/80 px-6 pb-4">
									Enhanced benefits for regular room stays
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4 p-6">
								<div className="space-y-4">
									{/* F&B Credit */}
									<div className="flex items-start space-x-3">
										<CreditCard className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">US$100 F&B Credit</p>
											<p className="text-sm text-muted-foreground">Per stay, per room</p>
											<p className="text-xs text-amber-600 mt-1">
												*Exceptions apply: US$50 at Address Istanbul/Address Jabal Omar Makkah
											</p>
										</div>
									</div>

									{/* Check-in/out */}
									<div className="flex items-start space-x-3">
										<Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">Flexible Check-in/out</p>
											<p className="text-sm text-muted-foreground">
												Early check-in / Late check-out, subject to availability
											</p>
										</div>
									</div>

									{/* Room Upgrade */}
									<div className="flex items-start space-x-3">
										<ArrowUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">Room Upgrade</p>
											<p className="text-sm text-muted-foreground">
												One category room upgrade, subject to availability at check-in
											</p>
										</div>
									</div>

									{/* Breakfast */}
									<div className="flex items-start space-x-3">
										<Coffee className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">Daily Breakfast</p>
											<p className="text-sm text-muted-foreground">
												Complimentary daily breakfast in The Restaurant
											</p>
										</div>
									</div>

									{/* VIP Recognition */}
									<div className="flex items-start space-x-3">
										<Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">VIP Recognition</p>
											<p className="text-sm text-muted-foreground">
												Special recognition by management and staff
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* SUITES Benefits */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Card className="h-full border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 overflow-hidden">
							<CardHeader className="relative h-48 p-0 m-0">
								{/* Background Image */}
								<div className="absolute inset-0">
									<Image
										src="/images/a5.webp"
										alt="Suites Benefits"
										fill
										className="object-cover"
									/>
									{/* Overlay for better text readability */}
									<div className="absolute inset-0 bg-black/40" />
								</div>

								{/* Content on top of background */}
								<div className="relative z-10 flex items-center justify-between h-full p-6">
									<CardTitle className="text-2xl font-bold text-white">SUITES</CardTitle>
									<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
										Luxury
									</Badge>
								</div>

								<CardDescription className="relative z-10 text-white/80 px-6 pb-4">
									Elevated benefits for suite accommodations
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4 p-6">
								<div className="space-y-4">
									{/* F&B Credit */}
									<div className="flex items-start space-x-3">
										<CreditCard className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">US$200 F&B Credit</p>
											<p className="text-sm text-muted-foreground">Per stay, per room</p>
											<p className="text-xs text-amber-600 mt-1">
												*Exceptions apply: US$100 at Address Istanbul
											</p>
										</div>
									</div>

									{/* Check-in/out */}
									<div className="flex items-start space-x-3">
										<Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">Flexible Check-in/out</p>
											<p className="text-sm text-muted-foreground">
												Early check-in / Late check-out, subject to availability
											</p>
										</div>
									</div>

									{/* Room Upgrade */}
									<div className="flex items-start space-x-3">
										<ArrowUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">Suite Upgrade</p>
											<p className="text-sm text-muted-foreground">
												One category room upgrade, subject to availability at check-in
											</p>
										</div>
									</div>

									{/* Breakfast */}
									<div className="flex items-start space-x-3">
										<Coffee className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">Daily Breakfast</p>
											<p className="text-sm text-muted-foreground">
												Complimentary daily breakfast in The Restaurant
											</p>
										</div>
									</div>

									{/* VIP Recognition */}
									<div className="flex items-start space-x-3">
										<Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold">VIP Recognition</p>
											<p className="text-sm text-muted-foreground">
												Special recognition by management and staff
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Additional Info */}
				<div className="mt-8 text-center">
					<span className="text-sm text-muted-foreground">
						<p className="text-sm text-muted-foreground">
							All benefits are subject to hotel terms and conditions. Availability may vary by
							property and season. Please contact our concierge team for specific details and
							reservations.
						</p>
					</span>
				</div>
			</section>

			<Separator className="my-10" />

			{/* LTP Partner Benefits Section */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">Our Benefits To You As LTP Partner!</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Unlock exclusive advantages and enhanced earning opportunities with our comprehensive
						partner programme
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Dedicated Web Access */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<svg
										className="w-8 h-8 text-primary-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-bold  tracking-wider">
									DEDICATED
									<br />
									WEB
									<br />
									ACCESS
								</CardTitle>
							</CardHeader>
							<CardContent className="p-6 text-center">
								<div className="space-y-4">
									<div className="border-primary/20 border   p-4">
										<p className="font-semibold ">Only bookable directly on Emaar Website</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Reservations through an individual agency web access code or via GDS
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Rate Level */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Card className="h-full border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 group">
							<CardHeader className=" text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<span className="text-2xl font-bold text-primary-foreground">5%</span>
								</div>
								<CardTitle className="text-xl font-bold tracking-wider">
									RATE LESS LEVEL
									<br />
									<span className="text-3xl font-extrabold">5%</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="p-6 text-center">
								<div className="space-y-4">
									<div className="border-primary/20 border   p-4">
										<p className="font-semibold ">Rate level is "Best Available Rate" less 5%!</p>
									</div>
									<div className="flex items-center justify-center space-x-2">
										<span className="text-sm text-muted-foreground line-through">Regular Rate</span>
										<span className="text-lg font-bold ">-5% Partner Rate</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Commission Level */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<Card className="h-full border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 group">
							<CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5 text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<span className="text-xl font-bold text-secondary">10%</span>
								</div>
								<CardTitle className="text-xl font-bold text-foreground tracking-wider">
									COMMISSION
									<br />
									LEVEL
									<br />
									<span className="text-3xl font-extrabold">10%</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="p-6 text-center">
								<div className="space-y-4">
									<div className="border-primary/20 border   p-4">
										<p className="font-semibold text-foreground">
											Automatic commission payment upon client departure
										</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											IATA/TIDS number must be entered with every booking
										</p>
									</div>
									<div className="flex items-center justify-center">
										<Badge variant="outline" className="border-secondary/30 text-foreground">
											Automatic Payment
										</Badge>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Summary Card */}
				<div className="mt-12">
					<Card className="border-0">
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Why Choose Our LTP Programme?</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
								<div className="flex items-center justify-center space-x-2">
									<div className="w-3 h-3 bg-primary rounded-full"></div>
									<span>Exclusive direct booking access</span>
								</div>
								<div className="flex items-center justify-center space-x-2">
									<div className="w-3 h-3 bg-accent rounded-full"></div>
									<span>Guaranteed best rates with 5% discount</span>
								</div>
								<div className="flex items-center justify-center space-x-2">
									<div className="w-3 h-3 bg-primary rounded-full"></div>
									<span>Automatic 10% commission payment</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<Separator className="my-10" />

			{/* Additional Services Section */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">Need More Services?</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Your personal Guest Relations Manager can assist with booking additional services
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Guest Relations Manager Card */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
							<CardHeader className="text-center bg-gradient-to-br from-primary/5 to-primary/10">
								<div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-10 h-10 text-primary-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<CardTitle className="text-2xl font-bold text-primary">
									Personal Guest Relations Manager
								</CardTitle>
								<CardDescription className="text-base">
									Dedicated support for all your additional service needs
								</CardDescription>
							</CardHeader>
							<CardContent className="p-6">
								<div className="space-y-4">
									<div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
										<p className="font-semibold text-primary mb-2">Available 24/7</p>
										<p className="text-sm text-muted-foreground">
											Professional assistance for seamless service coordination
										</p>
									</div>
									<div className="text-center">
										<Button variant="outline" className="border-primary/30 hover:bg-primary/10">
											Contact Your Manager
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Additional Services Card */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Card className="h-full border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
							<CardHeader className="text-center bg-gradient-to-br from-accent/5 to-accent/10">
								<div className="mx-auto w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-10 h-10 text-accent-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										/>
									</svg>
								</div>
								<CardTitle className="text-2xl font-bold text-accent">Available Services</CardTitle>
								<CardDescription className="text-base">
									Premium experiences and convenient arrangements
								</CardDescription>
							</CardHeader>
							<CardContent className="p-6">
								<div className="space-y-4">
									{/* Dubai Airport Transfers */}
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<p className="font-semibold">Dubai Airport Transfers</p>
											<p className="text-sm text-muted-foreground">
												Luxury transportation to and from Dubai International Airport
											</p>
										</div>
									</div>

									{/* Spa Treatments */}
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<p className="font-semibold">Spa Treatments</p>
											<p className="text-sm text-muted-foreground">
												Rejuvenating wellness experiences and therapeutic treatments
											</p>
										</div>
									</div>

									{/* Emaar Attractions */}
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<p className="font-semibold">Emaar Attractions</p>
											<p className="text-sm text-muted-foreground mb-2">
												Exclusive access to world-renowned attractions:
											</p>
											<div className="ml-4 space-y-1">
												<p className="text-xs text-muted-foreground">• At the Top Burj Khalifa</p>
												<p className="text-xs text-muted-foreground">• Sky Views Observatory</p>
												<p className="text-xs text-muted-foreground">• KidZania Dubai</p>
												<p className="text-xs text-muted-foreground">• And many more...</p>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Contact Information */}
				<div className="mt-12">
					<Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Experience?</h3>
							<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
								Contact your dedicated Guest Relations Manager to arrange any additional services
								and create unforgettable memories during your stay.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" className="flex items-center gap-2">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									Call Guest Relations
								</Button>
								<Button variant="outline" size="lg" className="flex items-center gap-2">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									Send Email Request
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<Separator className="my-10" />

			{/* Mutual Commitments Section */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">Our Partnership Commitments</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						A successful partnership requires mutual commitment and shared responsibilities
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Your Commitment to Us */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
							<CardHeader className="text-center bg-gradient-to-br from-primary/5 to-primary/10">
								<div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-10 h-10 text-primary-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<CardTitle className="text-2xl font-bold text-primary">
									Your Commitment to Us
								</CardTitle>
								<CardDescription className="text-base">
									Partnership requirements and marketing support
								</CardDescription>
							</CardHeader>
							<CardContent className="p-6">
								<div className="space-y-6">
									{/* Logo Showcase */}
									<div className="space-y-3">
										<div className="flex items-center space-x-3">
											<div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
											<h4 className="font-semibold text-lg">Showcase our LTP logo</h4>
										</div>
										<div className="ml-6 space-y-2">
											<div className="flex items-start space-x-2">
												<div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
												<p className="text-sm text-muted-foreground">E-Mailings</p>
											</div>
											<div className="flex items-start space-x-2">
												<div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
												<p className="text-sm text-muted-foreground">Newsletters</p>
											</div>
											<div className="flex items-start space-x-2">
												<div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
												<p className="text-sm text-muted-foreground">Web banners</p>
											</div>
											<div className="flex items-start space-x-2">
												<div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
												<p className="text-sm text-muted-foreground">Social media posts, etc</p>
											</div>
										</div>
									</div>

									<Separator />

									{/* Quarterly Reviews */}
									<div className="space-y-3">
										<div className="flex items-center space-x-3">
											<div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
											<h4 className="font-semibold text-lg">Quarterly call review with our team</h4>
										</div>
										<div className="ml-6">
											<p className="text-sm text-muted-foreground">
												Regular performance reviews and strategic planning sessions
											</p>
										</div>
									</div>

									<div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
										<p className="text-sm font-medium text-primary">
											Marketing materials and logo guidelines provided
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Our Commitment to You */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Card className="h-full border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
							<CardHeader className="text-center bg-gradient-to-br from-accent/5 to-accent/10">
								<div className="mx-auto w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-10 h-10 text-accent-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
								</div>
								<CardTitle className="text-2xl font-bold text-accent">
									Our Commitment to You
								</CardTitle>
								<CardDescription className="text-base">
									Training, support, and dedicated services
								</CardDescription>
							</CardHeader>
							<CardContent className="p-6">
								<div className="space-y-6">
									{/* Training */}
									<div className="space-y-3">
										<div className="flex items-center space-x-3">
											<div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
											<h4 className="font-semibold text-lg">
												In-depth training to key agency personnel
											</h4>
										</div>
										<div className="ml-6">
											<p className="text-sm text-muted-foreground">
												Comprehensive training programs for your team members
											</p>
										</div>
									</div>

									<Separator />

									{/* Portal Training */}
									<div className="space-y-3">
										<div className="flex items-center space-x-3">
											<div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
											<h4 className="font-semibold text-lg">
												LTP dedicated booking portal training
											</h4>
										</div>
										<div className="ml-6">
											<p className="text-sm text-muted-foreground">
												Specialized training on our exclusive booking system
											</p>
										</div>
									</div>

									<Separator />

									{/* Guest Relations Manager */}
									<div className="space-y-3">
										<div className="flex items-center space-x-3">
											<div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
											<h4 className="font-semibold text-lg">
												Your personal Guest Relations Manager
											</h4>
										</div>
										<div className="ml-6">
											<p className="text-sm text-muted-foreground">
												Available in all participating hotels for seamless service
											</p>
										</div>
									</div>

									<div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
										<p className="text-sm font-medium text-accent">
											Ongoing support and partnership development
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Partnership Benefits Summary */}
				<div className="mt-12">
					<Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-6">Partnership Success Indicators</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="text-center">
									<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
										<svg
											className="w-6 h-6 text-primary-foreground"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<h4 className="font-semibold mb-2">Brand Visibility</h4>
									<p className="text-sm text-muted-foreground">
										Enhanced brand presence through strategic marketing collaboration
									</p>
								</div>
								<div className="text-center">
									<div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
										<svg
											className="w-6 h-6 text-accent-foreground"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
											/>
										</svg>
									</div>
									<h4 className="font-semibold mb-2">Expert Training</h4>
									<p className="text-sm text-muted-foreground">
										Comprehensive knowledge transfer for optimal performance
									</p>
								</div>
								<div className="text-center">
									<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
										<svg
											className="w-6 h-6 text-primary-foreground"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
									<h4 className="font-semibold mb-2">Dedicated Support</h4>
									<p className="text-sm text-muted-foreground">
										Personal assistance and ongoing partnership management
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Download Center Section */}
			<section className="max-w-5xl mx-auto px-4 text-center space-y-6 py-10 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
				<Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
					<CardHeader className="text-center">
						<CardTitle>
							<div className="flex items-center justify-center mb-4">
								<Download className="w-8 h-8 mr-3 text-primary" />
								<h2 className="text-4xl font-bold text-foreground">
									Photography & Information Center
								</h2>
							</div>
						</CardTitle>
						<CardDescription className="text-lg text-muted-foreground">
							Access high-resolution photography and marketing materials for all our hotel brands
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							{/* Your grid items for the download center (if any) */}
						</div>

						<div className="bg-primary/5 rounded-lg p-4 text-sm text-primary">
							<p className="flex items-center justify-center">
								Last Updated: 20.06.2025 | High-resolution images available
							</p>
						</div>

						<Button size="lg" onClick={() => setModalOpen(true)}>
							Access Download Center
						</Button>
					</CardContent>
				</Card>
			</section>

			<Separator className="my-10" />

			{/* Continue with existing sections... */}

			<MembershipModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</>
	)
}
