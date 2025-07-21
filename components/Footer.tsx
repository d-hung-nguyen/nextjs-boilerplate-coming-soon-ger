import { Separator } from "@/components/ui/separator"
import { CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
	return (
		<footer className="bg-background border-t border-border">
			<Separator className="my-0" />

			<section className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
					{/* Company Info */}
					<div className="space-y-4">
						<Image
							src="/images/ge1.png"
							alt="Global Elite Logo"
							width={180}
							height={45}
							className="h-12 w-auto object-contain"
						/>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Bespoke Luxury Hospitaliy Sales
						</p>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin className="w-4 h-4" />
							<span>Frankfurt, Germany</span>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="font-semibold text-base">Quick Links</h3>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/global-elite"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Home{" "}
							</Link>
							<Link
								href="/global-elite/portfolio"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Hotel Portfolio
							</Link>
							<Link
								href="/ltp"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								LTP Portal
							</Link>
							<Link
								href="/join-ltp"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Join LTP Programme
							</Link>
						</nav>
					</div>

					{/* Resources */}
					<div className="space-y-4">
						<h3 className="font-semibold text-base">Resources</h3>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/downloads"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Downloads
							</Link>
							<Link
								href="/ltp/programme"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Programme Details
							</Link>
							<Link
								href="/admin/hotels"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Hotels Admin
							</Link>
							<Link
								href="/thank-you"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Support
							</Link>
						</nav>
					</div>

					{/* Contact & Legal */}
					<div className="space-y-4">
						<h3 className="font-semibold text-base">Contact & Legal</h3>
						<nav className="flex flex-col space-y-2">
							<Link
								href="mailto:info@globaleliteassociates.com"
								className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
							>
								<Mail className="w-4 h-4" />
								Contact Us
							</Link>

							<Link
								href="/privacy"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/cookies"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Cookie Policy
							</Link>
						</nav>
					</div>
				</div>

				{/* Bottom Section */}
				<CardFooter className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-8 border-t border-border">
					{/* Copyright */}
					<div className="text-sm text-muted-foreground">
						<p>© {new Date().getFullYear()} Global Elite Associates. All rights reserved.</p>
					</div>
				</CardFooter>
			</section>
		</footer>
	)
}
