"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

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
			setIsScrolled(scrollTop > 50)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	// Close mobile menu when clicking outside or on navigation
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			if (!target.closest("nav")) {
				setIsMobileMenuOpen(false)
			}
		}

		if (isMobileMenuOpen) {
			document.addEventListener("click", handleClickOutside)
		}

		return () => document.removeEventListener("click", handleClickOutside)
	}, [isMobileMenuOpen])

	// Close mobile menu on route change
	useEffect(() => {
		setIsMobileMenuOpen(false)
	}, [pathname])

	const navigationItems = [
		{ href: "/global-elite", label: "Home" },
		{ href: "/ltp", label: "LTP" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/admin/hotels", label: "Hotel Admin" },
	]

	return (
		<div className="fixed top-0 left-0 w-full z-50">
			<nav
				className={cn(
					"text-white transition-all duration-500 ease-out ",
					isScrolled
						? "bg-white shadow-lg border-b border-gray"
						: "bg-transparent border-b border-gray"
				)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link href="/global-elite" className="flex items-center space-x-3 group">
							<div className="relative overflow-hidden rounded-lg">
								<Image
									src={isScrolled ? "/images/ge1.png" : "/images/ge2.png"}
									alt="Global Elite Logo"
									width={160}
									height={45}
									className="h-5 w-auto object-contain transition-all duration-500 group-hover:scale-105"
									priority
								/>
							</div>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center text-white space-x-1">
							{navigationItems.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										"px-4 py-2  text-sm text-white font-medium transition-all duration-300 hover:bg-white/10",
										isScrolled ? "text-black  " : "text-white",
										isScrolled ? "hover:text-primary" : "hover:text-white"
									)}
								>
									{item.label}
								</Link>
							))}
						</div>

						{/* CTA Button & Mobile Menu */}
						<div className="flex items-center space-x-4">
							<Button
								className="btn-secondary w-10 mt-4 h-auto"
								onClick={() => (window.location.href = "/join-ltp")}
							>
								Join JTP
							</Button>

							{/* Mobile menu button */}
							<Button
								className={cn(
									"lg:hidden p-2 btn.primary rounded-none transition-all duration-300",
									isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
								)}
								onClick={e => {
									e.stopPropagation()
									toggleMobileMenu()
								}}
							>
								{isMobileMenuOpen ? (
									<X className="w-6 h-6 rounded-none" />
								) : (
									<Menu className="w-6 h-6 rounded-none" />
								)}
							</Button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={cn(
						"lg:hidden transition-all duration-300 ease-out overflow-hidden",
						isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
					)}
				>
					<div
						className={cn(
							"px-4 py-6 space-y-2",
							isScrolled
								? "bg-white/95 backdrop-blur-md border-t border-gray-100"
								: "bg-black/80 backdrop-blur-md border-t border-white/10"
						)}
						onClick={e => e.stopPropagation()}
					>
						{navigationItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									" px-4 py-3 text-sm flex items-center justify-center font-medium transition-all duration-200",

									isScrolled
										? "text-gray-700 hover:bg-white hover:text-primary"
										: "text-white hover:bg-white/10"
								)}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<Link href="/join-ltp" className=" px-4 py-3 text-sm flex items-center justify-center ">
							<Button className="btn-secondary">Join LTP</Button>
						</Link>

						{/* Mobile CTA */}
					</div>
				</div>
			</nav>
		</div>
	)
}
