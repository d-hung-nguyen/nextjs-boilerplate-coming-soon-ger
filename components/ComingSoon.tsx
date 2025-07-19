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
  floatAnimation 
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
			<motion.div 
				className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
				variants={staggerContainer}
				initial="hidden"
				animate="visible"
			>
				{/* Logo */}
				<motion.div 
					className="mb-12"
					variants={luxuryFadeIn}
				>
					<div className="relative shimmer">
						<div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl -m-4 float-luxury" />
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
				</motion.div>

				{/* Main Heading */}
				<motion.div 
					className="space-y-6 mb-12"
					variants={slideUpBounce}
				>
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
					
					<motion.div 
						className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"
						initial={{ width: 0 }}
						animate={{ width: 96 }}
						transition={{ duration: 1.5, delay: 1.2 }}
					/>
					
					<motion.p 
						className="text-body-xl text-readable-light max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1.5 }}
					>
						The future of luxury travel partnerships is arriving.
						<span className="block mt-4 text-luxury-caption">
							Exclusive. Elegant. Extraordinary.
						</span>
					</motion.p>
				</motion.div>

				{/* Call to Actions */}
				<motion.div 
					className="flex flex-col sm:flex-row gap-6 mb-16"
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={magneticHover} whileHover="hover" whileTap="tap">
						<Button 
							size="lg" 
							className="glass-card hover-lift group px-8 py-4 text-lg font-medium shimmer"
							onClick={() => window.location.href = "/ltp"}
						>
							<span className="mr-2">Explore Preview</span>
							<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
						</Button>
					</motion.div>
					
					<motion.div variants={magneticHover} whileHover="hover" whileTap="tap">
						<Button 
							size="lg" 
							variant="outline"
							className="glass-dark hover-lift group px-8 py-4 text-lg font-medium border-white/30 hover:border-white/50"
						>
							<Mail className="w-5 h-5 mr-2" />
							<span>Get Notified</span>
						</Button>
					</motion.div>
				</motion.div>

				{/* Coming Soon Details */}
				<motion.div 
					className="glass-card rounded-2xl p-8 max-w-md mx-auto"
					variants={luxuryFadeIn}
					whileHover={{ scale: 1.02, y: -4 }}
					transition={{ duration: 0.3 }}
				>
					<div className="flex items-center justify-center space-x-3 mb-4">
						<motion.div variants={badgePulse} animate="animate">
							<Calendar className="w-5 h-5 text-luxury-gold" />
						</motion.div>
						<span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
							Expected Launch
						</span>
					</div>
					<p className="text-2xl font-bold text-gray-900">Q2 2025</p>
					<p className="text-sm text-gray-600 mt-2">
						Join our exclusive preview program for early access
					</p>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div 
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
					variants={floatAnimation}
					animate="animate"
				>
					<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pulse-gold">
						<div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
					</div>
				</motion.div>
			</motion.div>
		</FullscreenVideoWrapper>
	)
}

// Enhanced Contact Section Component
export const ContactSection = () => {
	return (
		<section className="relative py-24 px-6 gradient-navy text-white overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<motion.div 
					className="absolute inset-0" 
					style={{
						backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
						                  radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`
					}}
					variants={floatAnimation}
					animate="animate"
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
					<motion.h2 
						className="text-display-lg text-luxury-display font-alta text-glow"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Let's Connect
					</motion.h2>
					<motion.div 
						className="w-32 h-1 gradient-luxury mx-auto mb-8 rounded-full shimmer"
						initial={{ width: 0 }}
						whileInView={{ width: 128 }}
						transition={{ duration: 1.5, delay: 0.5 }}
						viewport={{ once: true }}
					/>
					<motion.p 
						className="text-body-lg text-readable-light max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						viewport={{ once: true }}
					>
						Ready to explore the future of luxury travel partnerships?
					</motion.p>
				</motion.div>

				{/* Contact Cards */}
				<motion.div 
					className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Patricia Card */}
					<motion.div 
						className="glass-dark rounded-2xl p-8 text-center group"
						variants={luxuryFadeIn}
						whileHover={{ 
							scale: 1.05, 
							y: -10,
							rotateY: 5,
							transition: { duration: 0.3 }
						}}
						whileTap={{ scale: 0.98 }}
					>
						<motion.div 
							className="w-16 h-16 gradient-luxury rounded-full mx-auto mb-6 flex items-center justify-center shimmer"
							whileHover={{ rotate: 360, scale: 1.1 }}
							transition={{ duration: 0.8 }}
						>
							<span className="text-xl font-bold text-gray-900">PM</span>
						</motion.div>
						<h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">Patricia de Mayer</h3>
						<p className="text-white/70 mb-4 text-sm uppercase tracking-wider">Founder & Managing Director</p>
						<div className="space-y-3">
							<motion.a
								href="mailto:pdemayer@globaleliteassociates.com"
								className="block text-yellow-300 hover:text-yellow-200 transition-colors text-sm"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								pdemayer@globaleliteassociates.com
							</motion.a>
							<p className="text-white/60 text-sm">+49 173 306 4859</p>
						</div>
					</motion.div>

					{/* Hung Card */}
					<motion.div 
						className="glass-dark rounded-2xl p-8 text-center group"
						variants={luxuryFadeIn}
						whileHover={{ 
							scale: 1.05, 
							y: -10,
							rotateY: -5,
							transition: { duration: 0.3 }
						}}
						whileTap={{ scale: 0.98 }}
					>
						<motion.div 
							className="w-16 h-16 gradient-luxury rounded-full mx-auto mb-6 flex items-center justify-center shimmer"
							whileHover={{ rotate: -360, scale: 1.1 }}
							transition={{ duration: 0.8 }}
						>
							<span className="text-xl font-bold text-gray-900">HN</span>
						</motion.div>
						<h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">Hung Nguyen</h3>
						<p className="text-white/70 mb-4 text-sm uppercase tracking-wider">Director of Sales</p>
						<div className="space-y-3">
							<motion.a
								href="mailto:hung@globaleliteassociates.com"
								className="block text-yellow-300 hover:text-yellow-200 transition-colors text-sm"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								hung@globaleliteassociates.com
							</motion.a>
							<p className="text-white/60 text-sm">+49 162 265 5243</p>
						</div>
					</motion.div>

					{/* Company Info Card */}
					<motion.div 
						className="glass-dark rounded-2xl p-8 md:col-span-2 lg:col-span-1 group"
						variants={luxuryFadeIn}
						whileHover={{ 
							scale: 1.05, 
							y: -10,
							rotateX: 5,
							transition: { duration: 0.3 }
						}}
						whileTap={{ scale: 0.98 }}
					>
						<motion.div 
							className="w-16 h-16 gradient-luxury rounded-full mb-6 flex items-center justify-center shimmer"
							whileHover={{ rotate: 180, scale: 1.1 }}
							transition={{ duration: 0.8 }}
						>
							<span className="text-xl font-bold text-gray-900">GE</span>
						</motion.div>
						<h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">Global Elite & Associates</h3>
						<p className="text-white/80 leading-relaxed text-sm">
							Leading European luxury hospitality representation. Tailored services for exclusive hotels 
							across key European markets.
						</p>
						<div className="mt-6 pt-6 border-t border-white/20">
							<p className="text-white/60 text-xs uppercase tracking-wider mb-2">Offices</p>
							<p className="text-white/80 text-sm">Frankfurt • London • Paris • Bucharest</p>
						</div>
					</motion.div>
				</motion.div>

				{/* CTA Section */}
				<motion.div 
					className="text-center"
					variants={luxuryFadeIn}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div 
						className="inline-flex items-center space-x-6 mb-8"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<motion.div 
							className="h-px bg-gradient-to-r from-transparent to-yellow-300 w-20"
							initial={{ width: 0 }}
							whileInView={{ width: 80 }}
							transition={{ duration: 1, delay: 0.5 }}
							viewport={{ once: true }}
						/>
						<span className="text-yellow-300 font-medium uppercase tracking-wider text-sm text-glow">
							Ready to partner with luxury?
						</span>
						<motion.div 
							className="h-px bg-gradient-to-l from-transparent to-yellow-300 w-20"
							initial={{ width: 0 }}
							whileInView={{ width: 80 }}
							transition={{ duration: 1, delay: 0.5 }}
							viewport={{ once: true }}
						/>
					</motion.div>
					
					<motion.div
						variants={magneticHover}
						whileHover="hover"
						whileTap="tap"
					>
						<Button 
							size="lg"
							className="glass-card hover-lift px-8 py-4 text-lg font-medium shimmer"
							onClick={() => window.location.href = "/ltp"}
						>
							<ArrowRight className="w-5 h-5 mr-2" />
							Start Your Journey
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default ComingSoon
