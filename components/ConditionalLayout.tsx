"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Navigation from "./Navigation"
import Footer from "./Footer"

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const isHome = pathname === "/" // Assuming your coming soon homepage has the "/" route

	return (
		<>
			{/* Only show Navigation if not on the homepage */}
			{!isHome && <Navigation />}
			{children}
			{/* Only show Footer if not on the homepage */}
			{!isHome && <Footer />}
		</>
	)
}
