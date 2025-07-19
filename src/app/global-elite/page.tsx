"use client"

import React, { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import BookingBar from "@/components/BookingBar"
import HeroVideo1 from "@/components/HeroVideo1"
import { EditorialBlock } from "@/components/Editorial"
import Form from "@/components/Form"
import ContactModalProps from "@/components/ContactModalProps"
import {
	ArrowRight,
	Network,
	TrendingUp,
	Star,
	BarChart3,
	Users,
	Heart,
	Lightbulb,
	Target,
} from "lucide-react"
import {
	luxuryFadeIn,
	staggerContainer,
	slideUpBounce,
	magneticHover,
	luxuryCardHover,
	sectionEntrance,
} from "@/src/lib/animations"

const features = [
	{ img: "/images/a1.webp", title: "By invitation only", desc: "" },
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

const teamMembers = [
	{
		id: 1,
		name: "Patricia de Mayer",
		title: "Founder & Managing Director",
		email: "pdemayer@globaleliteassociates.com",
		image: "/images/pde.png",
		badge: "Founder & MD",
		expertise: [
			{
				area: "Strategic Leadership",
				description: "20+ years in luxury hospitality sector development",
			},
			{ area: "Market Expertise", description: "Deep knowledge of European luxury travel markets" },
			{
				area: "Industry Relations",
				description: "Extensive network across luxury hospitality brands",
			},
		],
	},
	{
		id: 2,
		name: "Hung Nguyen",
		title: "Director of Sales",
		email: "hung@globaleliteassociates.com",
		image: "/images/hung.png",
		badge: "Director of Sales",
		expertise: [
			{
				area: "Sales Excellence",
				description: "15+ years proven track record in luxury travel partnership development",
			},
			{
				area: "Client Relations",
				description: "Specialist in building long-term strategic partnerships",
			},
			{ area: "Market Development", description: "Expert in European market expansion strategies" },
		],
	},
]

const teamQualities = [
	{
		icon: "lightbulb",
		title: "Deep Knowledge",
		description: "Comprehensive understanding of luxury hospitality sector dynamics",
	},
	{
		icon: "heart",
		title: "Passion for Excellence",
		description: "Genuine enthusiasm for delivering exceptional luxury experiences",
	},
	{
		icon: "users",
		title: "Industry Connections",
		description: "Extensive network of industry and media contacts across Europe",
	},
	{
		icon: "chart",
		title: "Strategic Approach",
		description: "Holistic methodology delivering measurable, exceptional results",
	},
]

export default function GlobalElitePage() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false)

	const handleContact = () => {
		setIsContactModalOpen(true)
	}
	const handleLetsTalk = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
	}
	const handleLearnMore = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<>
			<Head>
				<title>Global Elite & Associates | Luxury Hospitality Representation</title>
				<meta
					name="description"
					content="Representing the world’s most exclusive hospitality brands across Europe"
				/>
			</Head>

			{/* Hero Video */}
			<HeroVideo1 />

			{/* Luxury Showcase Section */}
			<section id="luxury-showcase" className="relative py-24 px-6 gradient-cream overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-luxury rounded-full blur-3xl" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-luxury rounded-full blur-3xl" />
				</div>

				<motion.div
					className="relative z-10 max-w-7xl mx-auto"
					variants={sectionEntrance}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="grid lg:grid-cols-2 gap-16 items-center luxury-text--elegant">
						{/* Content */}
						<motion.div className="space-y-8" variants={luxuryFadeIn}>
							<div className="space-y-6">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.2 }}
									viewport={{ once: true }}
								>
									<span className="text-luxury-caption">European Excellence</span>
								</motion.div>
								<h2 className="text-display-lg luxury-text--elegant mt-6">
									<span className="block text-gray-900">
										<h2>Rooted in Europe,</h2>
									</span>
									<span className="block text-luxury-display text-right mt-2">
										<h2>Dedicated to Luxury</h2>
									</span>
								</h2>
								<div className="w-24 h-1 gradient-luxury rounded-full" />
								<p className="text-body-lg text-readable leading-relaxed">
									Our mission is simple: Exceptional luxury brands deserve exceptional consultancy.
									Based in Germany, Global Elite & Associates boasts a network of associates located
									across Europe's most prestigious markets.
								</p>
							</div>

							<motion.div variants={magneticHover} whileHover="hover" whileTap="tap">
								<Link href="/portfolio">
									<button className="btn-secondary shimmer">
										<span className="">View Our Portfolio</span>
									</button>
								</Link>
							</motion.div>
						</motion.div>

						{/* Enhanced Image Section */}
						<motion.div
							className="relative"
							variants={luxuryFadeIn}
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.4 }}
						>
							<div className="relative overflow-hidden rounded-2xl">
								{/* Glass morphism overlay */}
								<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

								<Image
									src="/images/a4.webp"
									alt="Luxury Hotel Experience"
									width={600}
									height={400}
									className="object-cover transition-transform duration-700 hover:scale-110 rounded-2xl"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>

								{/* Floating stats card */}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</section>

			{/* Why Partner with Us Section */}
			<section className="relative py-24 px-6 gradient-navy text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
						                  radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`,
						}}
					/>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto">
					{/* Section Header */}
					<motion.div
						className="text-center mb-20"
						variants={luxuryFadeIn}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<span className="text-luxury-caption">Partnership Excellence</span>
						</motion.div>

						<h2 className="text-display-lg luxury-text--elegant mt-6">
							<span className="font-alta text-white">Why Partner</span>
							<span className="block text-luxury-display mt-2">with Us</span>
						</h2>

						<div className="w-32 h-1 gradient-luxury mx-auto mb-8 rounded-full" />

						<p className="text-body-lg text-readable-light max-w-3xl mx-auto">
							Unlock exclusive opportunities in Europe's most prestigious hospitality markets
							through our proven partnership approach.
						</p>
					</motion.div>

					{/* Partnership Benefits Grid */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{[
							{
								icon: Network,
								title: "Access an Elite Network",
								description:
									"Gain entry to high-value trade partners across key European markets—no cold calls, just curated introductions.",
								delay: 0.1,
							},
							{
								icon: TrendingUp,
								title: "Tailored Distribution Plans",
								description:
									"From bespoke consortia agreements to targeted trade shows, we craft a B2B roadmap that's unique to your brand.",
								delay: 0.2,
							},
							{
								icon: Star,
								title: "Brand-First Positioning",
								description:
									"We slot you alongside the continent's most exclusive hotel portfolios—elevating your visibility with the right buyers.",
								delay: 0.3,
							},
							{
								icon: BarChart3,
								title: "Transparent Performance",
								description:
									"Quarterly reviews, real-time dashboards and proactive strategy tweaks ensure every partnership drives revenue.",
								delay: 0.4,
							},
						].map((benefit, index) => {
							const IconComponent = benefit.icon
							return (
								<motion.div
									key={index}
									className="rounded-2xl p-8 hover-lift group"
									variants={luxuryFadeIn}
									whileHover={{
										scale: 1.02,
										y: -4,
										transition: { duration: 0.3 },
									}}
								>
									<div className="flex items-start space-x-6">
										{/* Enhanced Icon */}
										<motion.div className="w8 h-8   flex items-center justify-center flex-shrink-0 shimmer">
											<IconComponent className="w-8 h-8 text-gray-900" />
										</motion.div>

										{/* Content */}
										<div className="flex-1">
											<h3 className="text-heading-md font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
												{benefit.title}
											</h3>
											<p className="text-white/80 leading-relaxed text-body-md">
												{benefit.description}
											</p>
										</div>
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			{/* Team Section */}
			<section className="relative py-24 px-6 gradient-cream overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-1/3 right-1/3 w-96 h-96 gradient-luxury rounded-full blur-3xl" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto">
					{/* Section Header */}
					<motion.div
						className="text-center mb-20"
						variants={luxuryFadeIn}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<span className="text-luxury-caption">Leadership Excellence</span>
						</motion.div>

						<h2 className="text-display-lg luxury-text--elegant mt-6 mb-0">
							<span className="block text-gray-900">
								<h2>Expert in Luxury</h2>
							</span>
							<span className="block text-luxury-display mt-0">
								<h2>Hospitality Sales</h2>
							</span>
						</h2>

						<div className="w-32 h-1 gradient-luxury mx-auto mb-8 rounded-full" />

						<p className="text-body-lg text-readable max-w-4xl mx-auto">
							Our team combines deep market knowledge with a passion for perfection—so your brand
							always shines.
						</p>

						<motion.div className="mt-8" variants={magneticHover} whileHover="hover" whileTap="tap">
							<button className="btn-secondary shimmer" onClick={handleContact}>
								<span className="mr-3">Get in Touch</span>
								<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
							</button>
						</motion.div>
					</motion.div>

					{/* Team Cards */}
					<motion.div
						className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{[
							{
								name: "Patricia de Mayer",
								title: "Founder & Managing Director",
								email: "pdemayer@globaleliteassociates.com",
								image: "/images/pde.png",
								expertise: [
									"20+ years in luxury hospitality sector development",
									"Deep knowledge of European luxury travel markets",
									"Extensive network across luxury hospitality brands",
								],
							},
							{
								name: "Hung Nguyen",
								title: "Director of Sales",
								email: "hung@globaleliteassociates.com",
								image: "/images/hung.png",
								expertise: [
									"15+ years proven track record in luxury travel partnership development",
									"Specialist in building long-term strategic partnerships",
									"Expert in European market expansion strategies",
								],
							},
						].map((member, index) => (
							<motion.div
								key={index}
								variants={luxuryFadeIn}
								whileHover={{
									scale: 1.02,
									y: -1,
									transition: { duration: 0.3 },
								}}
							>
								<Card className="card-luxury hover-lift h-full group overflow-hidden">
									<CardContent className="p-0">
										{/* Image Section */}
										<div className="relative h-80 overflow-hidden">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-contain transition-transform duration-700 group-hover:scale-105"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
											{/* Gradient overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
										</div>

										{/* Content Section */}
										<div className="p-8 space-y-6">
											<div className="text-center">
												<h3 className="text-heading-lg font-bold text-gray-900 mb-2 group-hover:text-luxury-gold transition-colors">
													{member.name}
												</h3>
												<p className="text-luxury-caption text-gray-600">{member.title}</p>
											</div>

											{/* Expertise */}
											<div className="space-y-4">
												{member.expertise.map((skill, skillIndex) => (
													<motion.div
														key={skillIndex}
														className="flex items-start space-x-3"
														initial={{ opacity: 0, x: -20 }}
														whileInView={{ opacity: 1, x: 0 }}
														transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
														viewport={{ once: true }}
													>
														<div className="w-2 h-2 gradient-luxury rounded-full mt-2 flex-shrink-0" />
														<p className="text-body-md text-gray-700 leading-relaxed">{skill}</p>
													</motion.div>
												))}
											</div>

											{/* Contact Button */}
											<motion.div
												className="pt-4"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<a
													href={`mailto:${member.email}`}
													className="inline-flex items-center space-x-2 text-luxury-gold hover:text-luxury-gold-dark transition-colors"
												>
													<span className="text-sm font-medium">
														Contact {member.name.split(" ")[0]}
													</span>
													<ArrowRight className="w-4 h-4" />
												</a>
											</motion.div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
			{/* Contact Modal */}
			<ContactModalProps isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

			{/* Team Qualities */}
			<section className="relative py-24 px-6  text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`,
						}}
					/>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto">
					{/* Section Header */}
					<motion.div
						className="text-center mb-20"
						variants={luxuryFadeIn}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<h2 className="text-display-md luxury-text--elegant">
							<span className="font-alta text-white">What Sets Our</span>
							<span className="block text-luxury-display mt-2">Team Apart</span>
						</h2>

						<div className="w-32 h-1 gradient-luxury mx-auto mb-8 rounded-full" />

						<p className="text-body-lg text-readable-light max-w-3xl mx-auto">
							Our success is built on the exceptional qualities and expertise of our team members.
						</p>
					</motion.div>

					{/* Qualities Grid */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{[
							{
								icon: Lightbulb,
								title: "Deep Knowledge",
								description: "Comprehensive understanding of luxury hospitality sector dynamics",
							},
							{
								icon: Heart,
								title: "Passion for Excellence",
								description: "Genuine enthusiasm for delivering exceptional luxury experiences",
							},
							{
								icon: Users,
								title: "Industry Connections",
								description: "Extensive network of industry and media contacts across Europe",
							},
							{
								icon: Target,
								title: "Strategic Approach",
								description: "Holistic methodology delivering measurable, exceptional results",
							},
						].map((quality, index) => {
							const IconComponent = quality.icon
							return (
								<motion.div
									key={index}
									className="glass-dark rounded-xl p-6 text-center hover-lift group"
									variants={luxuryFadeIn}
									whileHover={{
										scale: 1.05,
										y: -8,
										transition: { duration: 0.3 },
									}}
								>
									<motion.div
										className="w-16 h-16 gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6 shimmer"
										whileHover={{ rotate: 360, scale: 1.1 }}
										transition={{ duration: 0.8 }}
									>
										<IconComponent className="w-8 h-8 text-gray-900" />
									</motion.div>

									<h3 className="text-heading-md font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
										{quality.title}
									</h3>

									<p className="text-white/80 text-body-md leading-relaxed">
										{quality.description}
									</p>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="relative py-24 px-6 gradient-cream overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-luxury rounded-full blur-3xl" />
				</div>

				<motion.div
					className="relative z-10 max-w-4xl mx-auto text-center"
					variants={sectionEntrance}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div className="space-y-8" variants={luxuryFadeIn}>
						<div className="space-y-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<span className="text-luxury-caption">Ready to Begin?</span>
							</motion.div>

							<h3 className="text-display-md luxury-text--elegant">
								<span className="block font-alta text-gray-900">Ready to Elevate Your</span>
								<span className="block text-luxury-display mt-2">European Presence?</span>
							</h3>

							<div className="w-32 h-1 gradient-luxury mx-auto rounded-full" />

							<p className="text-body-lg text-readable max-w-2xl mx-auto">
								Join Europe's most exclusive hospitality network and transform your distribution
								strategy today.
							</p>
						</div>

						<motion.div
							className="flex flex-col sm:flex-row gap-6 justify-center items-center"
							variants={staggerContainer}
							initial="hidden"
							animate="visible"
						>
							<motion.div variants={magneticHover} whileHover="hover" whileTap="tap">
								<button className="btn-secondary shimmer" onClick={handleContact}>
									<span className="mr-3">Schedule Consultation</span>
									<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
								</button>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>
		</>
	)
}
