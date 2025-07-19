import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Globe, ArrowRight, Send, Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { luxuryFadeIn, staggerContainer, magneticHover } from "@/src/lib/animations"

interface NavLink {
	href: string
	label: string
}

interface ContactItem {
	icon: React.ReactNode
	label: string
	value: string
	href?: string
}

const navigationLinks: NavLink[] = [
	{ href: "/global-elite", label: "Home" },
	{ href: "/ltp", label: "LTP" },
	{ href: "/portfolio", label: "Portfolio" },
]

const legalLinks: NavLink[] = [
	{ href: "/privacy", label: "Privacy Policy" },
	{ href: "/cookies", label: "Cookies" },
	{ href: "/terms", label: "Terms of Service" },
	{ href: "/downloads", label: "Downloads" },
]

const contactInfo: ContactItem[] = [
	{
		icon: <Mail className="w-5 h-5" />,
		label: "General Inquiries",
		value: "hung@globaleliteassociates.com",
		href: "mailto:hung@globaleliteassociates.com",
	},
	{
		icon: <Phone className="w-5 h-5" />,
		label: "Phone",
		value: "+49 (0) 162 2655243",
		href: "tel:+491622655243",
	},
	{
		icon: <MapPin className="w-5 h-5" />,
		label: "Location",
		value: "Frankfurt, Germany, Europe",
	},
]

const socialLinks: { icon: React.ReactNode; href: string; label: string }[] = [
	{
		icon: <Linkedin className="w-5 h-5" />,
		href: "https://linkedin.com/company/globaleliteassociates",
		label: "LinkedIn",
	},
	{
		icon: <Globe className="w-5 h-5" />,
		href: "https://www.globaleliteassociates.com",
		label: "Website",
	},
]

const footerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const floatingAnimation: Variants = {
	animate: {
		y: -10,
		transition: {
			duration: 3,
			repeat: Infinity,
			repeatType: "reverse",
			ease: "easeInOut",
		},
	},
}

const shimmerAnimation: Variants = {
	animate: {
		backgroundPosition: ["200% 0", "-200% 0"],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "linear",
		},
	},
}

export const Footer: React.FC = () => {
	const year = new Date().getFullYear()

	return (
		<motion.footer
			className="relative overflow-hidden"
			variants={footerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			role="contentinfo"
			aria-label="Footer"
		>
			<div className="absolute inset-0 -z-10">
				<Image src="/images/bt.png" alt="" fill className="object-cover " priority />
				<div className="absolute inset-0" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12	bg-amber-900/90  p-6 sm:p-8 shadow-lg">
					{/* Company Section */}
					<motion.div
						variants={luxuryFadeIn}
						className="md:col-span-2 lg:col-span-2 space-y-6 sm:space-y-8"
					>
						<motion.div
							className="flex items-center space-x-2 mb-6"
							variants={floatingAnimation}
							animate="animate"
						></motion.div>
						<div className="flex flex-col sm:flex-col sm:items-start gap-4 sm:gap-6">
							<Image
								src="/images/ge2.png"
								alt="Global Elite & Associates"
								width={280}
								height={70}
								className="h-10 w-auto object-contain filter drop-shadow-lg"
								priority
							/>

							<p className="text-lg sm:text-xl text-white max-w-lg leading-relaxed font-light">
								Your Bridge to Europe's Finest Distribution Partners
							</p>
						</div>

						<div className="space-y-4 sm:space-y-6">
							{contactInfo.map((item, i) => (
								<motion.div
									key={i}
									className="flex text-white items-start space-x-3 sm:space-x-4 hover:translate-x-1 sm:hover:translate-x-2 transition-transform"
									variants={luxuryFadeIn}
									whileHover={{ x: 8, transition: { type: "spring", stiffness: 400 } }}
								>
									<div className="flex-shrink-0">{item.icon}</div>
									<div>
										<p className="text-sm">{item.label}</p>
										{item.href ? (
											<Link href={item.href} className="text-white font-medium">
												{item.value}
											</Link>
										) : (
											<span className="text-white font-medium">{item.value}</span>
										)}
									</div>
								</motion.div>
							))}
						</div>

						<div className="space-y-4">
							<span className="font-medium text-sm tracking-wide uppercase">Connect With Us</span>
							<div className="flex items-center space-x-3 flex-wrap gap-y-2">
								{socialLinks.map((social, i) => (
									<motion.a
										key={i}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										variants={magneticHover}
										whileHover={{
											scale: 1.1,
											backgroundColor: "white/10",
											rotate: 5,
											transition: { duration: 0.3 },
										}}
										whileTap={{ scale: 0.95 }}
										className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center text-white hover:text-gray-900 transition-all duration-300 shadow-lg"
										aria-label={`Follow us on ${social.label}`}
									>
										{social.icon}
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Navigation Links */}
					<motion.div variants={luxuryFadeIn} className="space-y-6 sm:space-y-8">
						<h3 className="text-white font-semibold text-lg tracking-wide">Navigation</h3>
						<nav className="space-y-4">
							{navigationLinks.map((link, i) => (
								<motion.div key={i} variants={luxuryFadeIn}>
									<Link
										href={link.href}
										className="group flex items-center space-x-3 text-white/90 hover:text-amber-300 transition-all duration-300 hover:translate-x-1"
									>
										<ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
										<span className="font-medium">{link.label}</span>
									</Link>
								</motion.div>
							))}
						</nav>
					</motion.div>

					{/* Legal Links */}
					<motion.div variants={luxuryFadeIn} className="space-y-6 sm:space-y-8">
						<h3 className="text-white font-semibold text-lg tracking-wide">Company</h3>
						<nav className="space-y-4">
							{legalLinks.map((link, i) => (
								<motion.div key={i} variants={luxuryFadeIn}>
									<Link
										href={link.href}
										className="group flex items-center space-x-3 text-white/90 hover:text-amber-300 transition-all duration-300 hover:translate-x-1"
									>
										<ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
										<span className="font-medium">{link.label}</span>
									</Link>
								</motion.div>
							))}
							<motion.button
								onClick={() => window.Cookiebot?.show?.()}
								className="group flex items-center space-x-3 text-white/90 hover:text-amber-300 transition-all duration-300 hover:translate-x-1"
								variants={luxuryFadeIn}
								aria-label="Open cookie settings"
							>
								<ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="font-medium">Cookie Settings</span>
							</motion.button>
						</nav>
					</motion.div>
				</div>

				{/* Newsletter Subscription */}
				<motion.div
					variants={luxuryFadeIn}
					className="my-12 sm:my-16 bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
				>
					<div className="text-center space-y-4 sm:space-y-6">
						<div className="space-y-2">
							<h3 className="text-xl sm:text-2xl font-semibold text-amber-300">Stay Connected</h3>
							<p className="text-sm sm:text-base text-white/80 max-w-md mx-auto px-4">
								Get the latest updates on premium distribution opportunities and market insights.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 bg-white/10 border border-amber-500/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm"
								aria-label="Email address for newsletter"
							/>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-4 sm:px-6 py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2 justify-center min-w-[120px]"
								aria-label="Subscribe to newsletter"
							>
								<Send className="w-4 h-4" />
								<span>Subscribe</span>
							</motion.button>
						</div>
					</div>
				</motion.div>

				<motion.div className="my-12 sm:my-16 flex items-center space-x-4" variants={luxuryFadeIn}>
					<motion.div
						className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-amber-300/20"
						animate={{ scaleX: 1 }}
						initial={{ scaleX: 0 }}
						transition={{ duration: 1.5, ease: "easeOut" }}
					/>
					<motion.div
						animate={{
							rotate: 360,
							scale: 1.2,
						}}
						transition={{
							rotate: { duration: 20, repeat: Infinity, ease: "linear" },
							scale: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
						}}
					>
						<Star className="w-4 h-4 text-amber-400 fill-amber-400" />
					</motion.div>
					<motion.div
						className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-300/50 to-amber-300/20"
						animate={{ scaleX: 1 }}
						initial={{ scaleX: 0 }}
						transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
					/>
				</motion.div>

				<motion.div variants={luxuryFadeIn} className="text-center space-y-6 sm:space-y-8">
					<motion.a
						href="https://globaleliteassociates.com"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{
							scale: 1.05,
							textShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
							transition: { duration: 0.3 },
						}}
						className="inline-block text-amber-300 font-semibold text-lg sm:text-xl tracking-wide hover:text-amber-200 transition-colors duration-300"
						aria-label="Visit Global Elite Associates website"
					>
						globaleliteassociates.com
					</motion.a>

					<div className="space-y-3 sm:space-y-4">
						<p className="text-white/90 font-medium">
							© {year} Global Elite & Associates. All rights reserved.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-white/70">
							<span className="text-sm">Designed & developed with</span>
							<span className="text-amber-300">♥</span>
							<span className="text-sm">by</span>
							<motion.span
								whileHover={{ scale: 1.05 }}
								className="text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
							>
								Hung Nguyen
							</motion.span>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.footer>
	)
}

export default Footer
