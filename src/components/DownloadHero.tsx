"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function DownloadHero() {
	return (
		<>
			<section className="relative h-96 flex items-center justify-center overflow-hidden">
				{/* Background Image */}
				<Image
					src="/images/a4.webp" // Replace with your actual background image path
					alt="Download Background"
					fill
					className="object-cover"
					priority
				/>

				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-black/40"></div>

				{/* Hero Content */}
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold text-white font-alta mb-4">
						Photography &amp; Information Center
					</h1>
					<p className="text-lg md:text-xl text-white mb-6">
						Explore high-resolution photography and marketing materials for our hotel brands.
					</p>
				</div>
			</section>
		</>
	)
}
