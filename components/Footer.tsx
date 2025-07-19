import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Globe, ArrowRight } from "lucide-react"
import { luxuryFadeIn, staggerContainer, magneticHover } from "@/src/lib/animations"

// Global types are now defined in types/global.d.ts

export default function Footer() {
	const currentYear = new Date().getFullYear()

	const navigationLinks = [
		{ href: "/global-elite", label: "Home" },
		{ href: "/ltp", label: "LTP" },
		{ href: "/portfolio", label: "Portfolio" },
	]

	const legalLinks = [
		{ href: "/privacy", label: "Privacy Policy" },
		{ href: "/cookies", label: "Cookies" },
		{ href: "/terms", label: "Terms of Service" },
		{ href: "/downloads", label: "Downloads" },
	]

	const contactInfo = [
		{
			icon: <Mail className="w-3 h-3" />,
			label: "General Inquiries",
			value: "hung@globaleliteassociates.com",
			href: "mailto:hung@globaleliteassociates.com",
		},
		{
			icon: <Phone className="w-3 h-3" />,
			label: "Phone",
			value: "+49 (0) 1622655243",
			href: "tel:+491622655243",
		},
		{
			icon: <MapPin className="w-4 h-4" />,
			label: "Location",
			value: "Frankfurt, Germany, Europe",
			href: null,
		},
	]

	const socialLinks = [
		{
			icon: <Linkedin className="w-3 h-3" />,
			href: "https://linkedin.com/company/globaleliteassociates",
			label: "LinkedIn",
		},
		{
			icon: <Globe className="w-3 h-3" />,
			href: "https://www.globaleliteassociates.com",
			label: "Website",
		},
	]

	return (
		<footer className="relative overflow-hidden gradient-navy text-white">
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

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
				{/* Main Footer Content */}
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Company Info */}
					<motion.div className="lg:col-span-2 space-y-8" variants={luxuryFadeIn}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							viewport={{ once: true }}
						>
							<div className="mb-6">
								<Image
									src="/images/ge2.png"
									alt="Global Elite & Associates"
									width={240}
									height={60}
									className="h-10 w-auto object-contain mb-6 brightness-0 invert"
									priority
								/>
							</div>
							<p className="text-body-lg text-white/80 leading-relaxed max-w-md">
								Bridging luxury brands with Europe's leading travel brands through exceptional
								hospitality partnerships.
							</p>
						</motion.div>

						{/* Contact Information */}
						<motion.div
							className="space-y-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							{contactInfo.map((item, index) => (
								<motion.div
									key={index}
									className="flex items-start space-x-4 group"
									whileHover={{ x: 4 }}
									transition={{ duration: 0.2 }}
								>
									<div className="w-10 h-10   flex items-center justify-center flex-shrink-0">
										{item.icon}
									</div>
									<div className="flex-1">
										<p className="text-luxury-caption text-yellow-300 mb-1">{item.label}</p>
										{item.href ? (
											<Link
												href={item.href}
												className="text-body-md text-white hover:text-yellow-300 transition-colors duration-300 group-hover:underline"
											>
												{item.value}
											</Link>
										) : (
											<p className="text-body-md text-white">{item.value}</p>
										)}
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* Social Links */}
						<motion.div
							className="flex items-center space-x-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<span className="text-luxury-caption text-yellow-300">Follow us:</span>
							<div className="flex space-x-4">
								{socialLinks.map((social, index) => (
									<motion.div
										key={index}
										variants={magneticHover}
										whileHover="hover"
										whileTap="tap"
									>
										<Link
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="w-12 h-12 glass-dark rounded-full flex items-center justify-center text-yellow-300 hover:text-gray-900 hover:bg-yellow-300 transition-all duration-300"
											aria-label={social.label}
										>
											{social.icon}
										</Link>
									</motion.div>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Navigation Links - FIXED */}
					<motion.div className="space-y-8" variants={luxuryFadeIn}>
						<h3 className="text-luxury-caption">Navigation</h3>
						<nav className="space-y-4">
							{navigationLinks.map((link, index) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									<Link
										href={link.href}
										className="group flex items-center space-x-2 text-body-md text-white/80 hover:text-yellow-300 transition-all duration-300"
									>
										<ArrowRight
											className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
											fill="none"
											stroke="currentColor"
											strokeWidth={1.5}
										/>
										<span className="group-hover:translate-x-1 transition-transform duration-300">
											{link.label}
										</span>
									</Link>
								</motion.div>
							))}
						</nav>
					</motion.div>

					{/* Legal & Resources - FIXED */}
					<motion.div className="space-y-8" variants={luxuryFadeIn}>
						<h3 className="text-luxury-caption">Company</h3>
						<nav className="space-y-4">
							{legalLinks.map((link, index) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									<Link
										href={link.href}
										className="group flex items-center space-x-2 text-body-md text-white/80 hover:text-yellow-300 transition-all duration-300"
									>
										<ArrowRight
											className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
											fill="none"
											stroke="currentColor"
											strokeWidth={1.5}
										/>
										<span className="group-hover:translate-x-1 transition-transform duration-300">
											{link.label}
										</span>
									</Link>
								</motion.div>
							))}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: legalLinks.length * 0.1 }}
								viewport={{ once: true }}
							>
								<button
									className="group flex items-center space-x-2 text-body-md text-white/80 hover:text-yellow-300 transition-all duration-300 text-left"
									onClick={() => {
										if (window.Cookiebot && typeof window.Cookiebot.show === "function") {
											window.Cookiebot.show()
										}
									}}
								>
									<ArrowRight
										className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.5}
									/>
									<span className="group-hover:translate-x-1 transition-transform duration-300">
										Cookie Settings
									</span>
								</button>
							</motion.div>
						</nav>
					</motion.div>
				</motion.div>

				{/* Separator */}
				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					whileInView={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent my-16" />
				</motion.div>

				{/* Bottom Footer */}
				<motion.div
					className="text-center space-y-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<div className="space-y-3">
						<motion.p
							className="text-body-lg text-yellow-300 font-medium"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
						>
							globaleliteassociates.com
						</motion.p>
						<p className="text-body-md text-white/80">
							© {currentYear} Global Elite & Associates. All rights reserved.
						</p>
					</div>

					<div className="flex items-center justify-center space-x-2 text-white/60">
						<span className="text-sm">Designed & developed by</span>
						<motion.span
							className="text-sm font-medium text-yellow-300"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
						>
							Hung Nguyen
						</motion.span>
					</div>
				</motion.div>
			</div>
		</footer>
	)
}
