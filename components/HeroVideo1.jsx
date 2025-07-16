"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FullscreenVideoWrapper } from "@/components/ui/video-wrapper"
import React from "react"

export default function HeroVideo1() {
	const scrollToNextSection = () => {
		const nextSection = document.querySelector("section:first-of-type")
		if (nextSection) {
			nextSection.scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
		}
	}

	return (
		<div className="relative h-screen w-full">
			<FullscreenVideoWrapper
				videoSrc="/video/by-v.webm"
				posterImage="/images/by-v-poster.png"
				autoPlay
				loop
				muted
				overlayOpacity={0.4}
				className="fixed  -z-10"
			/>
			{/* overlay for video */}
			<motion.div
				className="fixed w-full h-ful opacity-70"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			/>

			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
				<motion.h1
					className="text-4xl md:text-6xl font-serif font-bold leading-tight text-override-white"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					The Art of Connection{" "}
				</motion.h1>
				<p className="text-xl md:text-2xl mt-4 text-override-white *:leading-relaxed *:max-w-2xl">
					From discerning niche to industry giants, <br /> we open the doors to Europe’s finest
					distribution partners.
				</p>
				<Button className="btn-secondary w-10 mt-4 h-auto" onClick={scrollToNextSection}>
					Learn More{" "}
				</Button>
			</div>
		</div>
	)
}
