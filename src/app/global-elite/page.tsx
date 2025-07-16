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
			<section id="luxury-showcase" className=" py-16 w-screen bg-white">
				<div className="space-y-16">
					<motion.section
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.39, 0.575, 0.565, 1], delay: 0.2 }}
						className="relative py-16 md:py-24 px-6 md:px-16 text-center rounded-lg overflow-hidden"
						style={{
							backgroundColor: "rgb(247, 247, 247)",
							backgroundImage: "url(/images/a5.webp)",
							backgroundRepeat: "no-repeat",
							backgroundSize: "auto 100%",
							backgroundPosition: "100% 0%",
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg" />
						<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
							{/* Content */}
							<div className="flex-1 max-w-lg">
								<Card className="card bg-transparent border-0">
									<CardContent className="p-6 md:p-8 lg:p-12">
										<motion.h2
											className="text-2xl md:text-3xl lg:text-4xl luxury-text bg-black luxury-text--premium mb-4"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.5 }}
										>
											Rooted in Europe, Dedicated to Luxury
										</motion.h2>
										<p className="text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide font-sans mb-6">
											Our mission is simple: Exceptional luxury brands deserve exceptional
											consultancy. Based in Germany, Global Elite & Associates boasts a network of
											associates located across Europe.
										</p>
										<Link href="/portfolio">
											<motion.button className="btn-primary ">View Our Portfolio </motion.button>
										</Link>
									</CardContent>
								</Card>
							</div>
							{/* Image */}
							<motion.div
								className="flex-1 relative overflow-hidden "
								initial={{ opacity: 0, scale: 1.1 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.3 }}
							>
								<div className="w-full aspect-square lg:aspect-[4/3]">
									<Image
										src="/images/a4.webp"
										alt="Luxury Hotel Experience"
										fill
										className="object-cover transition-transform duration-700 hover:scale-105 rounded-lg"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
							</motion.div>
						</div>
					</motion.section>
				</div>
			</section>

			{/* Why Partner with Us Section */}
			<section className=" w-screen pt-70 pb-0">
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl md:text-5xl font-bold luxury-text bg-white mb-6">
							Why Partner with Us
						</h2>
						<p className="text-lg text-muted-foreground luxury-text bg-white max-w-3xl mx-auto leading-relaxed">
							Unlock exclusive opportunities in Europe's most prestigious hospitality markets
							through our proven partnership approach.
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-8 bg-white ">
					{/* Left Column - Partnership Benefits */}

					{[
						{
							icon: "/images/icons/network.svg",
							title: "Access an Elite Network",
							description:
								"Gain entry to high-value trade partners across key European markets—no cold calls, just curated introductions.",
							delay: 0.1,
						},
						{
							icon: "/images/icons/strategy.svg",
							title: "Tailored Distribution Plans",
							description:
								"From bespoke consortia agreements to targeted trade shows, we craft a B2B roadmap that's unique to your brand.",
							delay: 0.2,
						},
						{
							icon: "/images/icons/positioning.svg",
							title: "Brand-First Positioning",
							description:
								"We slot you alongside the continent's most exclusive hotel portfolios—elevating your visibility with the right buyers.",
							delay: 0.3,
						},
						{
							icon: "/images/icons/analytics.svg",
							title: "Transparent Performance",
							description:
								"Quarterly reviews, real-time dashboards and proactive strategy tweaks ensure every partnership drives revenue.",
							delay: 0.4,
						},
					].map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: benefit.delay }}
							className="flex items-start space-x-6  bg-white"
						>
							{/* Icon */}
							<div className="grid grid-rows-2">
								<div className=" flex items-center justify-center ">
									<svg
										className="w-4 h-4 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										{index === 0 && (
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										)}
										{index === 1 && (
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										)}
										{index === 2 && (
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										)}
										{index === 3 && (
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										)}
									</svg>
								</div>
							</div>

							{/* Content */}
							<div className="flex flex-col px-10 h-full">
								<h3 className="text-xl font-bold luxury-text bg-black mb-3  ">{benefit.title}</h3>
								<p className="text-muted-foreground leading-relaxed h-full">
									{benefit.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Team Section */}
			<section className=" bg-gray-100 md:px-30 py-30 flex gap-3 sm:*:gap-8 flex-col md:flex-row mx-0">
				{" "}
				<div className="text-center mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl font-bold luxury-text bg-black mb-4">
							Experts in Luxury Hospitality Sales
						</h2>
						<p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
							Our team combines deep market knowledge with a passion for perfection—so your brand
							always shines.
						</p>
						<div className="flex justify-center">
							<Button className="btn-secondary w-10 mt-4 h-auto" onClick={handleContact}>
								Get in Touch{" "}
							</Button>
						</div>
					</motion.div>
				</div>
				<div className="flex justify-center flex-col item-center md:flex-row gap-8 mx-auto">
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
					].map((member, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
						>
							<Card className="  bg-white max-w-sm min-w-sm group overflow-hidden  ">
								<CardContent className="">
									<div className="px-4 mb-4overflow-hidden relative">
										<Image
											src={member.image}
											alt={member.name}
											width={160}
											height={160}
											className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
											priority
										/>
									</div>
									<div className="px-4 ">
										<h3 className="text-2xl md:text-3xl mb-0 mt-4 font-bold luxury-text  bg-black text-left">
											{member.name}
										</h3>
										<h6 className="text-md mt-0 font-semibold text-muted-foreground text-left m-auto">
											{member.title}
										</h6>
									</div>
									<div className="px-4">
										{member.expertise.map((skill, i) => (
											<div key={i} className="flex">
												<p className="text-sm text-muted-foreground">
													<span className="font-semibold text-foreground"></span> {skill}
												</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</section>
			{/* Contact Modal */}
			<ContactModalProps isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

			{/* Team Qualities */}
			<section className="  bg-turquoise opacity-70 px-20 min-sm:px-2 md:px-30 pt-40 ">
				<div className=" card relative overflow-hidden  bg-white ">
					{/* Background Image */}

					<CardContent className="p-8 z-0 m-8 bg-white">
						<h2 className="z-10 text-2xl md:text-3xl font-bold luxury-text bg-black mb-4 text-center">
							What Sets Our Team Apart
						</h2>
						<p className="text-muted-foreground mb-8 text-center">
							Our success is built on the exceptional qualities and expertise of our team members.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{teamQualities.map((quality, k) => (
								<div key={k} className="text-center  p-6 rounded-lg">
									<div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
										{/* inline SVG icon */}
									</div>
									<h3 className="font-semibold text-xl md:text-2xl luxury-text bg-black mb-2">
										{quality.title}
									</h3>
									<p className="text-sm">{quality.description}</p>
								</div>
							))}
						</div>
					</CardContent>
				</div>
			</section>

			{/* Call to Action */}
			<section className=" m-0 bg-black py-20 text-white">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.39, 0.575, 0.565, 1], delay: 0.4 }}
					className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 mt-16"
				>
					<div className="relative z-10 p-8 flex flex-col items-center justify-center h-full text-center">
						<h3 className="text-3xl md:text-4xl font-bold mb-4">
							Ready to Elevate Your European Presence?
						</h3>
						<p className="text-lg text-override-white mb-6 max-w-2xl mx-auto">
							Join Europe's most exclusive hospitality network and transform your distribution
							strategy today.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="btn-secondary">Schedule Consultation</button>
						</div>
					</div>
				</motion.div>
			</section>
		</>
	)
}
