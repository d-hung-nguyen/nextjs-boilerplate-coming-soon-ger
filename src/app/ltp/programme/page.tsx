"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
	Star,
	Globe,
	Users,
	Award,
	TrendingUp,
	Shield,
	Plane,
	Crown,
	Handshake,
	BookOpen,
	Calendar,
	DollarSign,
} from "lucide-react"

const features = [
	{
		icon: <Crown className="w-8 h-8" />,
		title: "Exclusive Access",
		description: "Access to premium luxury travel packages and exclusive destinations worldwide",
		color: "from-yellow-400 to-amber-500",
	},
	{
		icon: <DollarSign className="w-8 h-8" />,
		title: "Premium Rewards",
		description: "Enhanced commission structures and performance-based incentives",
		color: "from-green-400 to-emerald-500",
	},
	{
		icon: <Handshake className="w-8 h-8" />,
		title: "Dedicated Support",
		description: "24/7 dedicated account management and customer support services",
		color: "from-blue-400 to-blue-500",
	},
	{
		icon: <TrendingUp className="w-8 h-8" />,
		title: "Marketing Support",
		description: "Co-branded marketing materials and digital marketing support",
		color: "from-purple-400 to-purple-500",
	},
	{
		icon: <BookOpen className="w-8 h-8" />,
		title: "Training Programs",
		description: "Comprehensive training and certification programs for your team",
		color: "from-pink-400 to-rose-500",
	},
	{
		icon: <Calendar className="w-8 h-8" />,
		title: "VIP Events",
		description: "Invitations to exclusive partner events and luxury travel experiences",
		color: "from-indigo-400 to-indigo-500",
	},
]

const statistics = [
	{ number: "500+", label: "Global Partners", icon: <Users className="w-6 h-6" /> },
	{ number: "150+", label: "Destinations", icon: <Globe className="w-6 h-6" /> },
	{ number: "98%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> },
	{ number: "$2M+", label: "Partner Revenue", icon: <Award className="w-6 h-6" /> },
]

const partnerTypes = [
	{ name: "Luxury Hotel Chains", image: "/images/hotel-partner.jpg" },
	{ name: "Premium Airlines", image: "/images/airline-partner.jpg" },
	{ name: "Cruise Lines", image: "/images/cruise-partner.jpg" },
	{ name: "Tour Operators", image: "/images/tour-partner.jpg" },
	{ name: "Travel Agencies", image: "/images/agency-partner.jpg" },
	{ name: "Concierge Services", image: "/images/concierge-partner.jpg" },
]

export default function LTPProgrammePage() {
	const [formData, setFormData] = useState({
		company: "",
		contactName: "",
		email: "",
		phone: "",
		message: "",
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission
		console.log("Form submitted:", formData)
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
				<div className="absolute inset-0 bg-black/20"></div>
				<div className="relative max-w-7xl mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<Badge className="mb-4 bg-white/20 text-white border-white/30">2025 Programme</Badge>
						<h1 className="text-5xl md:text-6xl font-bold mb-6">Luxury Travel Partner Programme</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Join our exclusive network of premium travel partners and unlock extraordinary
							opportunities
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="#contact">
								<Button size="lg" className="bg-white text-primary hover:bg-white/90">
									Become a Partner
								</Button>
							</Link>
							<Link href="#benefits">
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white/10"
								>
									Learn More
								</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="py-16 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{statistics.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="text-center"
							>
								<Card className="p-6">
									<CardContent className="p-0">
										<div className="flex justify-center mb-3 text-primary">{stat.icon}</div>
										<div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
										<p className="text-muted-foreground">{stat.label}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section id="benefits" className="py-20">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">Programme Benefits</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Discover the exclusive advantages of joining our luxury travel partner network
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5 }}
							>
								<Card className="h-full border-2 hover:border-primary/20 transition-all duration-300">
									<CardHeader>
										<div
											className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}
										>
											{feature.icon}
										</div>
										<CardTitle className="text-xl">{feature.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground">{feature.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			{/* Partners Section */}
			<section className="py-20 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">Our Partners</h2>
						<p className="text-xl text-muted-foreground">
							Join a prestigious network of luxury travel providers
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{partnerTypes.map((partner, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
							>
								<Card className="h-32 flex items-center justify-center text-center p-4 hover:shadow-lg transition-shadow">
									<CardContent className="p-0">
										<div className="text-sm font-medium text-muted-foreground">{partner.name}</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			{/* Contact Section */}
			<section id="contact" className="py-20">
				<div className="max-w-4xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">Join Our Programme</h2>
						<p className="text-xl text-muted-foreground">
							Ready to become a luxury travel partner? Get in touch with us today.
						</p>
					</div>

					<Card className="p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="company" className="block text-sm font-medium mb-2">
										Company Name *
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleInputChange}
										required
										className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
									/>
								</div>
								<div>
									<label htmlFor="contactName" className="block text-sm font-medium mb-2">
										Contact Name *
									</label>
									<input
										type="text"
										id="contactName"
										name="contactName"
										value={formData.contactName}
										onChange={handleInputChange}
										required
										className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="email" className="block text-sm font-medium mb-2">
										Email Address *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
									/>
								</div>
								<div>
									<label htmlFor="phone" className="block text-sm font-medium mb-2">
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2">
									Tell us about your business
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									rows={4}
									className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
								/>
							</div>

							<div className="text-center">
								<Button type="submit" size="lg" className="px-8">
									Submit Application
								</Button>
							</div>
						</form>
					</Card>
				</div>
			</section>
		</div>
	)
}
