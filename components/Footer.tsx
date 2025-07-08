import { Separator } from "@/components/ui/separator"
import { CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="bg-background border-t border-border">
			<Separator className="my-0" />

			<section className="max-w-5xl mx-auto px-4 py-10">
				<CardFooter className="flex flex-col items-center justify-center space-y-6">
					{/* Logo */}
					<div>
						<Image
							src="/images/ge1.png"
							alt="Global Elite Logo"
							width={200}
							height={50}
							className="w-48 mx-auto object-contain"
						/>
					</div>

					{/* Navigation Links */}
					<div className="flex flex-wrap items-center justify-center gap-6 text-sm">
						<Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
							Home
						</Link>
						<Link
							href="/ltp"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							LTP Portal
						</Link>
						<Link
							href="/downloads"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Downloads
						</Link>
						<Link
							href="/privacy"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/cookies"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Cookies
						</Link>
					</div>

					{/* Website Link */}
					<div className="text-center">
						<Link
							href="https://globaleliteassociates.com"
							className="text-primary underline hover:no-underline transition-all"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit our website
						</Link>
					</div>

					{/* Copyright */}
					<div className="text-center text-sm text-muted-foreground">
						<p>© {new Date().getFullYear()} Global Elite Associates. All rights reserved.</p>
					</div>
				</CardFooter>
			</section>
		</footer>
	)
}
