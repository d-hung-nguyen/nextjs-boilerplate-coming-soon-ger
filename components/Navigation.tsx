"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev)
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			setIsScrolled(scrollTop > 50) // Change background after 50px scroll
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="fixed top-0 left-0 w-full h6 z-50">
			<nav
				className={cn(
					"sticky top-0 z-50 transition-all duration-700 ease-out",
					isScrolled ? "bg-white border-b-1" : "bg-accent/20"
				)}
			>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<Link href="/" className="flex items-center">
							<Image
								src={isScrolled ? "/images/ge1.png" : "/images/ge2.png"} // You'll need a white version
								alt="Global Elite Logo"
								width={150}
								height={40}
								className="h-5 w-auto object-contain transition-all duration-300"
							/>
						</Link>

						{/* Desktop Navigation Links */}
						<div className="hidden md:flex items-center space-x-8">
							<Link
								href="/"
								className={cn(
									"text-sm font-medium transition-all duration-300 hover:text-primary",
									pathname === "/"
										? "text-black "
										: isScrolled
										? "text-muted-foreground"
										: "text-white"
								)}
							>
								Home
							</Link>
							<Link
								href="/ltp"
								className={cn(
									"text-sm font-medium transition-all duration-300 hover:text-primary",
									pathname === "/ltp"
										? "text-black "
										: isScrolled
										? "text-muted-foreground"
										: "text-white"
								)}
							>
								LTP Portal
							</Link>
							<Link
								href="/global-elite"
								className={cn(
									"text-sm font-medium transition-all duration-300 hover:text-primary",
									pathname === "/global-elite"
										? "text-black "
										: isScrolled
										? "text-muted-foreground"
										: "text-white"
								)}
							>
								Global Elite & Associates
							</Link>
							<Link
								href="/global-elite/portfolio"
								className={cn(
									"text-sm font-medium transition-all duration-300 hover:text-primary",
									pathname === "/global-elite/portfolio"
										? "text-black "
										: isScrolled
										? "text-muted-foreground"
										: "text-white"
								)}
							>
								Portfolio
							</Link>
							<Link
								href="/admin/hotels"
								className={cn(
									"text-sm font-medium transition-all duration-300 hover:text-primary",
									pathname === "/admin/hotels"
										? "text-black"
										: isScrolled
										? "text-muted-foreground"
										: "text-white"
								)}
							>
								Hotels Admin
							</Link>
						</div>

						{/* CTA Button */}
						<div className="flex items-center space-x-4">
							<Link href="/join-ltp">
								<Button
									size="sm"
									className={cn(
										"hidden sm:inline-flex transition-all duration-300",
										!isScrolled && "bg-white/20 hover:bg-white/30 text-white border-white/30"
									)}
									variant={isScrolled ? "default" : "outline"}
								>
									Join LTP
								</Button>
							</Link>

							{/* Mobile menu button */}
							<Button
								variant="ghost"
								size="sm"
								className={cn(
									"md:hidden transition-all duration-300",
									!isScrolled && "text-white hover:bg-white/20"
								)}
								onClick={toggleMobileMenu}
							>
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
					<div
						className={cn(
							"md:hidden border-t px-4 py-2 flex flex-col space-y-2 transition-all duration-300",
							isScrolled ? "bg-background border-border" : "bg-accent border-transparent"
						)}
					>
						<Link
							href="/"
							className={cn(
								"text-sm font-medium transition-all duration-300 hover:text-primary py-2",
								pathname === "/"
									? "text-primary"
									: isScrolled
									? "text-muted-foreground"
									: "text-white"
							)}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/ltp"
							className={cn(
								"text-sm font-medium transition-all duration-300 hover:text-primary py-2",
								pathname === "/ltp"
									? "text-primary"
									: isScrolled
									? "text-muted-foreground"
									: "text-white"
							)}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							LTP Portal
						</Link>
						<Link
							href="/global-elite"
							className={cn(
								"text-sm font-medium transition-all duration-300 hover:text-primary py-2",
								pathname === "/global-elite"
									? "text-primary"
									: isScrolled
									? "text-muted-foreground"
									: "text-white"
							)}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Global Elite & Associates
						</Link>
						<Link
							href="/global-elite/portfolio"
							className={cn(
								"text-sm font-medium transition-all duration-300 hover:text-primary py-2",
								pathname === "/global-elite/portfolio"
									? "text-primary"
									: isScrolled
									? "text-muted-foreground"
									: "text-white"
							)}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Portfolio
						</Link>
						<Link
							href="/admin/hotels"
							className={cn(
								"text-sm font-medium transition-all duration-300 hover:text-primary py-2",
								pathname === "/admin/hotels"
									? "text-primary"
									: isScrolled
									? "text-muted-foreground"
									: "text-white"
							)}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Hotels Admin
						</Link>
					</div>
				)}
			</nav>
		</div>
	)
}
