"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroVideo1 from "@/components/HeroVideo1"
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
	magneticHover,
	sectionEntrance,
} from "@/src/lib/animations"

export default function GlobalElitePage() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	// Consolidate contact functions
	const handleContactAction = (action: "modal" | "scroll") => {
		if (action === "modal") {
			setIsContactModalOpen(true)
		} else {
			document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1000)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		document.title = "Global Elite & Associates | Luxury Hospitality Representation"
	}, [])

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold"></div>
			</div>
		)
	}

	return (
		<>
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
									<span className="text-luxury-caption"> Bespoke Luxury Hospitality </span>
								</motion.div>
								<h2 className="text-display-lg luxury-text--elegant mt-6">
									<span className="block text-gray-900">Rooted in Europe,Dedicated to Luxury</span>
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
									<Button className="btn-secondary shimmer">View Our Portfolio</Button>
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
								<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

								<Image
									src="/images/bt1.jpeg"
									alt="Luxury Hotel Experience"
									width={600}
									height={400}
									className="object-cover transition-transform duration-700 hover:scale-110 rounded-2xl"
									sizes="(max-width: 768px) 100vw, 50vw"
									quality={85}
									priority={false}
									loading="lazy"
								/>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</section>

			{/* Why Partner with Us Section */}
			<section className="relative py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-25">
					<Image
						src="/images/bt2.jpeg"
						alt=""
						fill
						className="object-cover"
						quality={40}
						loading="lazy"
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-slate-700/70 to-slate-600/60" />
				</div>
				<div className="absolute inset-0 opacity-5">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`,
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
							},
							{
								icon: TrendingUp,
								title: "Tailored Distribution Plans",
								description:
									"From bespoke consortia agreements to targeted trade shows, we craft a B2B roadmap that's unique to your brand.",
							},
							{
								icon: Star,
								title: "Brand-First Positioning",
								description:
									"We slot you alongside the continent's most exclusive hotel portfolios—elevating your visibility with the right buyers.",
							},
							{
								icon: BarChart3,
								title: "Transparent Performance",
								description:
									"Quarterly reviews, real-time dashboards and proactive strategy tweaks ensure every partnership drives revenue.",
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
										<motion.div className="w-8 h-8 flex items-center justify-center flex-shrink-0 shimmer">
											<IconComponent
												className="w-8 h-8 text-gray-900"
												fill="none"
												stroke="currentColor"
												strokeWidth={1.5}
											/>
										</motion.div>

										{/* Content */}
										<div className="flex-1">
											<h3 className="text-heading-md font-bold text-white mb-4 group-hover:text-amber-300 transition-colors drop-shadow-md">
												{benefit.title}
											</h3>
											<p className="text-white/90 leading-relaxed text-body-md drop-shadow-sm">
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

			{/* Image Gallery Section */}
			<section className="relative py-24 px-6 bg-gradient-to-br from-slate-100 via-white to-amber-50 overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-30">
					<Image
						src="/images/bt.png"
						alt=""
						fill
						className="object-cover"
						quality={50}
						loading="lazy"
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-white/40" />
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
							<span className="text-luxury-caption text-amber-600">Excellence Gallery</span>
						</motion.div>

						<h2 className="text-display-lg luxury-text--elegant mt-6 text-gray-900">
							<span className="block">Luxury Hospitality</span>
							<span className="block text-amber-600 mt-2">Experiences</span>
						</h2>

						<div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-8 rounded-full" />

						<p className="text-body-lg text-gray-700 max-w-3xl mx-auto">
							Discover the world of premium hospitality through our curated collection of
							exceptional properties and experiences.
						</p>
					</motion.div>

					{/* Gallery Grid */}
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{[
							{
								src: "/images/bt1.jpeg",
								title: "Premium Accommodations",
								description: "Luxury suites and exceptional amenities",
							},
							{
								src: "/images/bt2.jpeg",
								title: "Fine Dining Excellence",
								description: "World-class culinary experiences",
							},
							{
								src: "/images/bt3.jpeg",
								title: "Exclusive Venues",
								description: "Sophisticated event spaces",
							},
							{
								src: "/images/bt4.jpeg",
								title: "Wellness & Spa",
								description: "Rejuvenating luxury treatments",
							},
							{
								src: "/images/bt5.jpeg",
								title: "Scenic Locations",
								description: "Breathtaking destination properties",
							},
							{
								src: "/images/bt.png",
								title: "Architectural Excellence",
								description: "Outstanding design and craftsmanship",
							},
						].map((item, index) => (
							<motion.div
								key={index}
								className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] cursor-pointer"
								variants={luxuryFadeIn}
								whileHover={{
									scale: 1.03,
									y: -8,
									transition: { duration: 0.3 },
								}}
							>
								<Image
									src={item.src}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									quality={80}
									loading={index < 3 ? "eager" : "lazy"}
									priority={index < 3}
								/>

								{/* Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

								{/* Content */}
								<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
									<h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-amber-200 drop-shadow-md">
										{item.title}
									</h3>
									<p className="text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 drop-shadow-md">
										{item.description}
									</p>
								</div>

								{/* Shine effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Team Section */}
			<section className="relative py-24 px-6 gradient-cream overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-15">
					<Image
						src="/images/bt4.jpeg"
						alt=""
						fill
						className="object-cover"
						quality={40}
						loading="lazy"
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/80 to-white/70" />
				</div>
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
							<span className="block text-gray-900">Expert in Luxury</span>
							<span className="block text-luxury-display mt-0">Hospitality Sales</span>
						</h2>

						<div className="w-32 h-1 gradient-luxury mx-auto mb-8 rounded-full" />

						<p className="text-body-lg text-readable max-w-4xl mx-auto">
							Our team combines deep market knowledge with a passion for perfection—so your brand
							always shines.
						</p>

						<motion.div className="mt-8" variants={magneticHover} whileHover="hover" whileTap="tap">
							<Button
								className="btn-secondary shimmer"
								onClick={() => handleContactAction("modal")}
							>
								<span className="mr-3">Get in Touch</span>
								<ArrowRight
									className="w-5 h-5 transition-transform group-hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.5}
								/>
							</Button>
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
												alt={`${member.name} - ${member.title}`}
												fill
												className="object-contain transition-transform duration-700 group-hover:scale-105"
												sizes="(max-width: 768px) 100vw, 50vw"
												quality={90}
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
													<ArrowRight
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														strokeWidth={1.5}
													/>
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
			<section className="relative py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-25">
					<Image
						src="/images/bt3.jpeg"
						alt=""
						fill
						className="object-cover"
						quality={40}
						loading="lazy"
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-slate-700/70 to-slate-600/60" />
				</div>
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
										<IconComponent
											className="w-8 h-8 text-gray-900"
											fill="none"
											stroke="currentColor"
											strokeWidth={1.5}
										/>
									</motion.div>

									<h3 className="text-heading-md font-bold text-white mb-4 group-hover:text-amber-300 transition-colors drop-shadow-md">
										{quality.title}
									</h3>

									<p className="text-white/90 text-body-md leading-relaxed drop-shadow-sm">
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
				<div className="absolute inset-0 opacity-20">
					<Image
						src="/images/bt5.jpeg"
						alt=""
						fill
						className="object-cover"
						quality={40}
						loading="lazy"
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/75 to-white/65" />
				</div>
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
								<Button
									className="btn-secondary shimmer"
									onClick={() => handleContactAction("modal")}
									aria-label="Open contact modal to schedule consultation"
								>
									<span className="mr-3">Schedule Consultation</span>
									<ArrowRight
										className="w-5 h-5 transition-transform group-hover:translate-x-1"
										aria-hidden="true"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.5}
									/>
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>
		</>
	)
}
