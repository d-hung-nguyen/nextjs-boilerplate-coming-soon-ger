"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "./ui/separator"
import { FullscreenVideoWrapper } from "./ui/video-wrapper"
import React from "react"

export default function Hero() {
	const handleJoinProgram = () => {
		window.location.href = "/ltp"
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
			showScrollIndicator={true}>
			{/* Top header - outside main content flow */}
			<div className="absolute top-4 left-0 right-0 z-20 px-4">
				{" "}
				{/* Added horizontal padding */}
				<div className="flex justify-center">
					<Image
						src="/images/ge2.png"
						alt="Global Elite"
						width={200}
						height={100}
						className="h-4 sm:h-6 w-auto" // Better mobile sizing
						priority // Since it's above the fold
					/>
				</div>
				<Separator className="w-full mt-3 sm:mt-5 border-white/50" />
			</div>

			{/* Main content */}
			<div className="space-y-8 pt-20 px-4">
				<div className="flex justify-center">
					<Image src="/images/logo.svg" alt="Address Hotels + Resorts" width={200} height={300} className="h-48 md:h-64 w-auto" />
				</div>

				<div className="space-y-6 max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-alta">
						Partner with us and be part of the selected few
					</h1>
					<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-lagusans">
						At Address Hotels + Resorts, luxury is not just a promise—it is a lifestyle.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
					<Button size="lg" className="text-lg" onClick={handleJoinProgram}>
						Join the Programme
					</Button>
					<Button
						variant="ghost"
						size="lg"
						className="text-lg text-white hover:bg-white/20 hover:text-white border border-white/50"
						onClick={handleLearnMore}>
						Learn More
					</Button>
				</div>
			</div>
		</FullscreenVideoWrapper>
	)
}
