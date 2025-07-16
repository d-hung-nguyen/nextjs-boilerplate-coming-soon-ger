import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Globe } from "lucide-react"

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
		<footer className="relative overflow-hidden bg-black text-white ">
			<div className="container mx-auto px-4 py-16 border-t border-border/50 items-center">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
					{/* Company Info */}
					<div className="lg:col-span-2 space-y-6">
						<div>
							<Image
								src="/images/ge2.png"
								alt="Global Elite & Associates"
								width={240}
								height={60}
								className="h-8 w-auto object-contain mb-4"
								priority
							/>
							<p className="text-muted-foreground leading-relaxed max-w-md">
								Bridging luxury brands with Europe's leading travel brands.
							</p>
						</div>

						{/* Contact Information */}
						<div className="space-y-3">
							{contactInfo.map((item, index) => (
								<div key={index} className="flex items-start space-x-3">
									<div className="text-primary mt-0.5">{item.icon}</div>
									<div className="flex-1 min-w-0">
										<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
											{item.label}
										</p>
										{item.href ? (
											<Link
												href={item.href}
												className="text-sm text-foreground hover:text-primary transition-colors duration-200"
											>
												{item.value}
											</Link>
										) : (
											<p className="text-sm text-foreground">{item.value}</p>
										)}
									</div>
								</div>
							))}
						</div>

						{/* Social Links */}
						<div className="flex items-center space-x-4">
							<span className="text-sm font-medium text-muted-foreground">Follow us:</span>
							<div className="flex space-x-3">
								{socialLinks.map((social, index) => (
									<Link
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
										aria-label={social.label}
									>
										{social.icon}
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* Navigation Links */}
					<div className="space-y-6">
						<h3 className="text-lg font-semibold text-foreground">Navigation</h3>
						<nav className="space-y-3">
							{navigationLinks.map(link => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Legal & Resources */}
					<div className="space-y-16 ">
						<h3 className="text-lg font-semibold text-foreground"> Company</h3>
						<nav className="space-y-3">
							{legalLinks.map(link => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
								>
									{link.label}
								</Link>
							))}
						</nav>

						{/* Website Link */}
						<div className="pt-4">
							<Link
								href="https://www.globaleliteassociates.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
							></Link>
						</div>
					</div>
				</div>

				<Separator className="my-16" />

				{/* Bottom Footer */}
				<div className="flex flex-col items-center border-t border-border/50 pt-8">
					<div className="flex flex-col items-center space-y-2 md:space-y-0 md:space- text-sm text-muted-foreground">
						<p>globaleliteassociates.com</p>

						<p>© {currentYear} Global Elite & Associates. All rights reserved.</p>
					</div>
					<div className="text-xs text-muted text-white/45">
						Designed & developed by Hung Nguyen
					</div>
				</div>
			</div>

			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5 pointer-events-none">
				<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent"></div>
			</div>
		</footer>
	)
}
