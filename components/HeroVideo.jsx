"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "./ui/separator"
import { FullscreenVideoWrapper } from "./ui/video-wrapper"
import React from "react"

export default function HeroVideo() {
	const handleJoinProgram = () => {
		window.location.href = "/join-ltp"
	}

	const handleLearnMore = () => {
		document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<FullscreenVideoWrapper
			videoSrc="/video/av1.mp4"
			posterImage="/images/av-poster.png"
			overlayOpacity={0.4}
			autoPlay={true}
			loop={true}
			muted={true}
			controls={false}
			showScrollIndicator={false}
		>
			<div className="relative">
				<div className="hero-overlay" />
				<div className="flex justify-center">
					<Image
						src="/images/logo.svg"
						alt="Address Hotels + Resorts"
						width={200}
						height={300}
						className="h-48 md:h-64 w-auto"
					/>
				</div>

				<div className="space-y-6 max-w-4xl mx-auto text-center bg-black bg-opacity-50 p-8 rounded-lg relative z-20">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-alta">
						Luxury Travel Partner Programme
					</h1>
					<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-lagusans">
						At Address Hotels + Resorts, luxury is not just a promise—it is a lifestyle.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
					<Button
						size="lg"
						className="btn-primary text-lg relative z-20"
						onClick={handleJoinProgram}
					>
						Join the Programme
					</Button>
					<Button
						size="lg"
						className="btn-secondary text-lg relative z-20"
						onClick={handleLearnMore}
					>
						Learn More
					</Button>
				</div>
			</div>
		</FullscreenVideoWrapper>
	)
}
