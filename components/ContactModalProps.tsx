"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ContactModalProps {
	isOpen: boolean
	onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
	const contactInfo = [
		{
			icon: <Mail className="w-5 h-5" />,
			label: "General Inquiries",
			value: "info@globaleliteassociates.com",
			href: "mailto:info@globaleliteassociates.com",
		},
		{
			icon: <Phone className="w-5 h-5" />,
			label: "Phone",
			value: "+49 (0) 123 456 789",
			href: "tel:+491234567890",
		},
		{
			icon: <MapPin className="w-5 h-5" />,
			label: "Location",
			value: "Frankfurt, Germany",
			href: null,
		},
	]

	const teamMembers = [
		{
			name: "Patricia de Mayer",
			title: "Founder & Managing Director",
			email: "pdemayer@globaleliteassociates.com",
			telefone: "+49 173 306 4859",
		},
		{
			name: "Hung Nguyen",
			title: "Director of Sales",
			email: "hung@globaleliteassociates.com",
			telefone: "+49 162 265 5243",
		},
	]

	if (!isOpen) return null

	return (
		<AnimatePresence initial={false}>
			{/* Modal Backdrop */}{" "}
			<div className="fixed w-full h-full inset-0 z-50 flex items-center justify-center p-4">
				{/* Backdrop */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="absolute inset-0 bg-black/60 backdrop-blur-sm"
					onClick={onClose}
				/>

				{/* Modal */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.9, y: 20 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
				>
					{/* Header */}
					<div className="relative p-8 bg-gradient-to-r from-primary to-accent text-white">
						<button
							onClick={onClose}
							className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
						>
							<X className="w-5 h-5" />
						</button>
						<h2 className="text-3xl font-bold luxury-text bg-black mb-2">Get in Touch</h2>

						<p className="text-black/90 mb-6">Let's discuss your brand's needs</p>

						{/* Team Members */}
						<div>
							<div className="grid gap-4">
								{teamMembers.map((teamMember, index) => (
									<div>
										<div key={index} className="p-4 bg-gray-50 rounded-lg">
											<h4 className="font-bold luxury-text bg-black">{teamMember.name}</h4>
											<p className="text-sm text-black font-medium mb-2">{teamMember.title}</p>
											<Link
												href={`mailto:${teamMember.email}`}
												className="text-sm text-black hover:text-primary transition-colors"
											>
												{teamMember.email}
												<br />
												{teamMember.telefone}
											</Link>
										</div>
										<div className="flex flex-row gap-3 space-y-2 mt-4">
											<Link href={`tel:${teamMember.telefone}`}>
												<button className="w-60 btn-secondary">Call {teamMember.name}</button>
											</Link>
											<Link href={`mailto:${teamMember.email}`}>
												<button className="w-60 btn-primary">Email {teamMember.name}</button>
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="p-8 space-y-8">
						{/* Contact Information */}
						<div>
							<div className="space-y-4">
								{contactInfo.map((item, index) => (
									<div key={index} className="flex items-center space-x-4">
										<div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
											{item.icon}
										</div>
										<div>
											<p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
												{item.label}
											</p>
											{item.href ? (
												<Link
													href={item.href}
													className="text-foreground hover:text-primary transition-colors"
												>
													{item.value}
												</Link>
											) : (
												<p className="text-foreground">{item.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Call to Action */}
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	)
}
