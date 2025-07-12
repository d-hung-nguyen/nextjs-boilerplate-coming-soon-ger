"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev)
	}

	return (
		<nav className="bg-background border-b border-border sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/images/ge1.png"
							alt="Global Elite Logo"
							width={150}
							height={40}
							className="h-8 w-auto object-contain"
						/>
					</Link>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className={cn(
								"text-sm font-medium transition-colors hover:text-primary",
								pathname === "/" ? "text-primary" : "text-muted-foreground"
							)}
						>
							Home
						</Link>
						<Link
							href="/ltp"
							className={cn(
								"text-sm font-medium transition-colors hover:text-primary",
								pathname === "/ltp" ? "text-primary" : "text-muted-foreground"
							)}
						>
							LTP Portal
						</Link>
						<Link
							href="/downloads"
							className={cn(
								"text-sm font-medium transition-colors hover:text-primary",
								pathname === "/global-elite" ? "text-primary" : "text-muted-foreground"
							)}
						>
							Global Elite & Associates
						</Link>
					</div>

					{/* CTA Button */}
					<div className="flex items-center space-x-4">
						<Link href="/ltp">
							<Button size="sm" className="hidden sm:inline-flex">
								Join LTP
							</Button>
						</Link>

						{/* Mobile menu button */}
						<Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
								/>
							</svg>
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-background border-t border-border px-4 py-2 flex flex-col space-y-2">
					<Link
						href="/"
						className={cn(
							"text-sm font-medium transition-colors hover:text-primary",
							pathname === "/" ? "text-primary" : "text-muted-foreground"
						)}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Home
					</Link>
					<Link
						href="/ltp"
						className={cn(
							"text-sm font-medium transition-colors hover:text-primary",
							pathname === "/ltp" ? "text-primary" : "text-muted-foreground"
						)}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						LTP Portal
					</Link>
					<Link
						href="/downloads"
						className={cn(
							"text-sm font-medium transition-colors hover:text-primary",
							pathname === "/downloads" ? "text-primary" : "text-muted-foreground"
						)}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Downloads
					</Link>
				</div>
			)}
		</nav>
	)
}
