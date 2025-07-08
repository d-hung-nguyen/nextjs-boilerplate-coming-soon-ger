"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import Form from "@/components/Form"
import { Download, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

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

export default function LTPPortal() {
	const [modalOpen, setModalOpen] = useState(false)

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
									<div className="p-4 bg-background/80 backdrop-blur-sm">
										<h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
										<p className="text-muted-foreground">{feature.desc}</p>
									</div>
								</div>
							</motion.div>
						))}
					</CardContent>
				</Card>
			</section>

			<Separator className="my-10" />

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
								<Calendar className="w-4 h-4 mr-2" />
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

			{/* Other Sections... */}

			<MembershipModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</>
	)
}
