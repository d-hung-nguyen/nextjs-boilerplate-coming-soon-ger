"use client"

import React from "react"
import { FullscreenVideoWrapper } from "./ui/video-wrapper"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Mail, Calendar } from "lucide-react"
import {
	luxuryFadeIn,
	staggerContainer,
	slideUpBounce,
	magneticHover,
	badgePulse,
	floatAnimation,
} from "@/src/lib/animations"

const ComingSoon = () => {
	return (
		<FullscreenVideoWrapper
			videoSrc="/video/background-video.webm"
			posterImage="/images/av-poster.png"
			overlayOpacity={0.3}
			autoPlay={true}
			loop={true}
			muted={true}
			controls={false}
			showScrollIndicator={true}
		>
			{/* Luxury Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

			{/* Hero Content */}

			{/* Logo */}
			<div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
				<Image
					src="/images/global-elite-logo.png"
					alt="Global Elite & Associates luxury travel partner programme logo"
					width={450}
					height={225}
					priority
					className="relative z-10 drop-shadow-2xl magnetic-hover"
					style={{
						width: "auto",
						height: "auto",
						maxWidth: "min(450px, 90vw)",
					}}
				/>
			</div>

			{/* Main Heading */}
			<motion.div className="space-y-6 mb-12" variants={slideUpBounce}>
				<h1 className="text-display-xl text-white luxury-text--premium">
					<motion.span
						className="block font-alta text-reveal"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						Coming
					</motion.span>
					<motion.span
						className="block text-luxury-display mt-2 text-glow"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8 }}
					>
						Soon
					</motion.span>
				</h1>
			</motion.div>
		</FullscreenVideoWrapper>
	)
}

// Enhanced Contact Section Component
export const ContactSection = () => {
	return (
		<section className="relative py-24 px-6 gradient-navy text-white overflow-hidden">
			{/* Container */}
			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Heading */}
				<motion.div
					className="text-center mb-20"
					variants={luxuryFadeIn}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h2
						className="text-display-lg text-luxury-display font-alta text-glow"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Let's Connect
					</motion.h2>
				</motion.div>

				{/* Contact Cards */}
				<div className="grid md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
					{/* Patricia */}
					<div>
						<h3 className="text-xl font-bold mb-1 hover:text-yellow-300 transition-colors">
							Patricia de Mayer
						</h3>
						<p className="text-white/70 text-sm uppercase tracking-wider mb-4">
							Founder & Managing Director
						</p>
						<p className="text-sm">pdemayer@globaleliteassociates.com</p>
						<p className="text-white/60 text-sm mt-2">+49 173 306 4859</p>
					</div>

					{/* Hung */}
					<div>
						<h3 className="text-xl font-bold mb-1 hover:text-yellow-300 transition-colors">
							Hung Nguyen
						</h3>
						<p className="text-white/70 text-sm uppercase tracking-wider mb-4">Director of Sales</p>
						<p className="text-sm">hung@globaleliteassociates.com</p>
						<p className="text-white/60 text-sm mt-2">+49 162 265 5243</p>
					</div>

					{/* Company Info */}
					<div>
						<h3 className="text-xl font-bold mb-4 hover:text-yellow-300 transition-colors">
							Global Elite & Associates
						</h3>
						<p className="text-white/80 text-sm leading-relaxed mb-6">
							Leading European luxury hospitality representation. Tailored services for exclusive
							hotels across key European markets.
						</p>
						<div className="border-t border-white/20 pt-4">
							<p className="text-white/60 text-xs uppercase tracking-wider mb-1">Offices</p>
							<p className="text-white/80 text-sm">Frankfurt • London • Paris • Bucharest</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ComingSoon
