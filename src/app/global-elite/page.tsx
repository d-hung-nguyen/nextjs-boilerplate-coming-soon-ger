"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FullscreenVideoWrapper } from "@/components/ui/video-wrapper"

const features = [
	{
		img: "/images/a1.webp",
		title: "By invitation only",
		desc: "Exclusive access to curated luxury experiences reserved for our distinguished clientele.",
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

const teamMembers = [
	{
		id: 1,
		name: "Patricia de Mayer",
		title: "Founder & Managing Director",
		email: "pdemayer@globaleliteassociates.com",
		image: "/images/pde.png",
		badge: "Founder & MD",
		colorScheme: "primary",
		expertise: [
			{
				area: "Strategic Leadership",
				description: "15+ years in luxury hospitality sector development",
			},
			{
				area: "Market Expertise",
				description: "Deep knowledge of European luxury travel markets",
			},
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
		colorScheme: "primary",
		expertise: [
			{
				area: "Sales Excellence",
				description: "Proven track record in luxury travel partnership development",
			},
			{
				area: "Client Relations",
				description: "Specialist in building long-term strategic partnerships",
			},
			{
				area: "Market Development",
				description: "Expert in European market expansion strategies",
			},
		],
	},
]

const teamQualities = [
	{
		icon: "lightbulb",
		title: "Deep Knowledge",
		description: "Comprehensive understanding of luxury hospitality sector dynamics",
		color: "primary",
	},
	{
		icon: "heart",
		title: "Passion for Excellence",
		description: "Genuine enthusiasm for delivering exceptional luxury experiences",
		color: "accent",
	},
	{
		icon: "users",
		title: "Industry Connections",
		description: "Extensive network of industry and media contacts across Europe",
		color: "secondary",
	},
	{
		icon: "chart",
		title: "Strategic Approach",
		description: "Holistic methodology delivering measurable, exceptional results",
		color: "primary",
	},
]

export default function GlobalElitePage() {
	const handleLetsTalk = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<>
			<div className="relative h-screen overflow-hidden">
				<FullscreenVideoWrapper
					videoSrc="/video/by-v.webm"
					posterImage="/images/by-v-poster.jpg"
					overlayOpacity={0.4}
					autoPlay={true}
					loop={true}
					muted={true}
					controls={false}
					showScrollIndicator={false}
					className="fixed h-screen -z-10"
				></FullscreenVideoWrapper>
			</div>

			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ 
					duration: 0.4,
					ease: "easeOut"
				}}
				className="absolute top-70 left-0 "
			>
				<div className="relative space-y-6 px-4">
					<div className="space-y-8 max-w-4xl px-4 text-start">
						<h1 className="text-md md:text-lg lg:text-xl font-bold text-white leading-tight font-serif mb-4">
							Global Elite & Associates
						</h1>
						<p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif">
							Bespoke Luxury Hospitality Sales
						</p>
						<p className="text-lg md:text-xl text-white/90 mx-auto leading-relaxed font-lagusans">
							We are a leading European company specializing in representing luxury hospitality
							brands. We offer tailored services to enhance the visibility of exclusive hotels in
							key European markets. Our offices are strategically located in Frankfurt, London,
							Paris, and Bucharest.
						</p>
					</div>
				</div>
			</motion.div>

			{/* Hero Section */}
			<section className="mx-auto text-center bg-background py-20">
				<div className="relative h-100 w-full py-32">
					<Image
						src="/images/langco.png"
						alt="Global Elite & Associates"
						fill
						className="object-cover "
					/>
				</div>
				<Card>
					<CardHeader className="text-center mb-6">
						<CardTitle>
							<h2 className="text-4xl font-bold">Rooted in Europe, Dedicated to Luxury</h2>
						</CardTitle>
					</CardHeader>

					<CardContent className="space-y-8">
						{/* Programme Overview */}
						<div className="text-center space-y-4">
							<p className="text-lg text-foreground/80 max-w-3xl mx-auto">
								Our mission is simple: Exceptional luxury brands deserve exceptional consultancy.
								Based in Germany, Global Elite & Associates boasts a network of associates located
								across Europe, including the UK, France, Belgium, and Romania.
							</p>
						</div>
					</CardContent>
				</Card>
			</section>

			<Separator className="my-10" />

			{/* Our Comprehensive Services Section */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">Our Comprehensive Services</h2>
					<p className="text-lg text-foreground/80 max-w-2xl mx-auto">
						Delivering strategic expertise and market intelligence across all aspects of luxury
						hospitality
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Reporting and Insights */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 services-card-icon"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-bold services-card-title">
									Reporting and Insights
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-foreground/80 mb-4">
									Regular assessments of competitive standing, key industry developments, and market
									trends. Monthly and annual reports are typically accompanied by Teams
									presentations for client engagement and feedback.
								</p>
								<div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
									<p className="text-sm font-medium services-feature-text">Monthly & Annual Reports</p>
									<p className="text-xs text-muted-foreground">With client presentations</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Independent Marketing Assessment */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
					>
						<Card className="h-full border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 services-assessment-icon"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-bold services-assessment-title">
									Independent Marketing Assessment
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-foreground/80 mb-4">
									We produce marketing budget proposals targeting brand visibility across five
									strategic pillars, synchronized with consumer booking patterns.
								</p>
								<div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
									<p className="text-sm font-medium services-assessment-feature">Strategic Budget Planning</p>
									<p className="text-xs text-muted-foreground">5 pillars approach</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Geographical Range and Responsiveness */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
					>
						<Card className="h-full border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 services-geographic-icon"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-bold services-geographic-title">
									Geographical Range & Responsiveness
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground mb-4">
									We target single or multiple markets while maintaining high uniform standards,
									providing a single point of contact and accountability.
								</p>
								<div className="bg-secondary/5 border border-secondary/20 rounded-lg p-3">
									<p className="text-sm font-medium services-geographic-feature">Unified Contact Point</p>
									<p className="text-xs text-muted-foreground">High standards maintained</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Aligned Regional Strategy */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
					>
						<Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 services-strategy-icon"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-bold services-strategy-title">
									Aligned Regional Strategy
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground mb-4">
									Our regional sales team structure provides a consistent reporting approach, led by
									our senior market leader.
								</p>
								<div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
									<p className="text-sm font-medium services-strategy-feature">Consistent Approach</p>
									<p className="text-xs text-muted-foreground">Senior market leadership</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Comprehensive Strategic Planning */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					>
						<Card className="h-full border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 services-planning-icon"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-bold services-planning-title">
									Comprehensive Strategic Planning
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground mb-4">
									Delivering robust annual commercial plans that provide clear direction and focus,
									including market insights, trade partner feedback, trends & expectations,
									competitive analysis, SWOT analysis, and annual planners.
								</p>
								<div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
									<p className="text-sm font-medium services-planning-feature">Annual Commercial Plans</p>
									<p className="text-xs text-muted-foreground">Including SWOT analysis</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Strategic Partnerships */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
					>
						<Card className="h-full border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 services-partnership-icon"
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
								<CardTitle className="text-xl font-bold services-partnership-title">
									Strategic Partnerships
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground mb-4">
									Partnerships with prestigious luxury lifestyle brands and travel trade activation
									through expansion and nurturing of key relationships with travel agents and
									airlines.
								</p>
								<div className="bg-secondary/5 border border-secondary/20 rounded-lg p-3">
									<p className="text-sm font-medium services-partnership-feature">Luxury Brand Partnerships</p>
									<p className="text-xs text-muted-foreground">Travel trade activation</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Services Summary */}
				<div className="mt-12">
					<Card className=" bg-background border-2 border-primary/20">
						<CardContent className="p-8">
							<div className="text-center mb-8">
								<h3 className="text-2xl font-bold mb-4">Why Choose Global Elite & Associates?</h3>
								<p className="text-muted-foreground max-w-3xl mx-auto">
									Our comprehensive approach combines strategic thinking, market intelligence, and
									operational excellence to deliver measurable results for luxury hospitality brands
									across Europe.
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
									<h4 className="font-semibold mb-2">Market Intelligence</h4>
									<p className="text-sm text-muted-foreground">
										Regular competitive analysis and industry insights
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
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
									<h4 className="font-semibold mb-2">Strategic Planning</h4>
									<p className="text-sm text-muted-foreground">
										Comprehensive annual commercial planning with SWOT analysis
									</p>
								</div>
								<div className="text-center">
									<div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
										<svg
											className="w-6 h-6 text-secondary-foreground"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h4 className="font-semibold mb-2">European Reach</h4>
									<p className="text-sm text-muted-foreground">
										Strategic presence across key European markets
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
									<h4 className="font-semibold mb-2">Partnership Focus</h4>
									<p className="text-sm text-muted-foreground">
										Building strategic relationships with luxury brands and travel trade
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Team Section */}
			<section className="max-w-6xl mx-auto px-4 py-16 bg-background">
				<div className="text-center mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<h2 className="text-4xl font-bold mb-4">A Team Built for Excellence</h2>
						<p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
							Each associate is selected for their deep knowledge and passion for the sector,
							extensive industry and media contacts, holistic strategic approach, and unwavering
							commitment to delivering exceptional results.
						</p>
					</motion.div>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.id}
							initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
						>
							<Card className="h-full bg-background  hover:border-primary/40 transition-all duration-300 overflow-hidden group">
								<CardContent className="p-0 bg-accent">
									{/* Photo Section */}
									<div className="relative h-80 overflow-hidden">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-contain transition-transform duration-300 group-hover:scale-105"
										/>
										{/* Gradient overlay for better text readability */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
									</div>

									{/* Content Section */}
									<div className="p-6 bg-background">
										<div className="text-center mb-4">
											<h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
											<p className="text-lg font-semibold text-muted-foreground">{member.title}</p>
										</div>

										{/* Expertise Areas */}
										<div className="space-y-3 mb-6">
											{member.expertise.map((skill, skillIndex) => (
												<div key={skillIndex} className="flex items-start space-x-3">
													<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
													<p className="text-sm text-muted-foreground">
														<span className="font-semibold text-foreground">{skill.area}:</span>{" "}
														{skill.description}
													</p>
												</div>
											))}
										</div>

										{/* Contact Button */}
										<div className="text-center">
											<Button
												variant="outline"
												className="border-primary/30 hover:bg-primary/10 w-full"
												asChild
											>
												<a
													href={`mailto:${member.email}`}
													className="flex items-center justify-center gap-2"
												>
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														/>
													</svg>
													Contact {member.name.split(" ")[0]}
												</a>
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}

					{/* Team Qualities Section - MOVED OUTSIDE THE GRID */}
				</div>
				<div className="mt-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
					>
						<Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
							<CardContent className="p-8">
								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold mb-4">What Sets Our Team Apart</h3>
									<p className="text-muted-foreground max-w-3xl mx-auto">
										Our success is built on the exceptional qualities and expertise of our team
										members
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
									{teamQualities.map((quality, index) => {
										const getIcon = iconName => {
											const iconMap = {
												lightbulb: (
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
													/>
												),
												heart: (
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
													/>
												),
												users: (
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
													/>
												),
												chart: (
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
													/>
												),
											}
											return iconMap[iconName] || iconMap.chart
										}

										return (
											<div key={index} className="text-center">
												<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
													<svg
														className="w-8 h-8 text-primary-foreground"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														{getIcon(quality.icon)}
													</svg>
												</div>
												<h4 className="font-semibold mb-2">{quality.title}</h4>
												<p className="text-sm text-muted-foreground">{quality.description}</p>
											</div>
										)
									})}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Call to Action */}
				<section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
							Ready to Partner with Excellence?
						</h2>
						<p className="text-lg text-foreground/90 max-w-2xl mx-auto mb-8">
							Join our exclusive network of luxury hospitality brands and unlock new opportunities
							in the European market.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" asChild>
								<Link href="/join-ltp">Let's Talk</Link>
							</Button>
						</div>
					</div>
				</section>
			</section>
		</>
	)
}
