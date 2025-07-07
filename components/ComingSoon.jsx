"use client"

import React from "react"
import { FullscreenVideoWrapper } from "./ui/video-wrapper"
import Image from "next/image"

const ComingSoon = () => {
	return (
		<FullscreenVideoWrapper
			videoSrc="/video/background-video.webm"
			posterImage="/images/av-poster.png" // Add a proper poster image
			overlayOpacity={0.4}
			autoPlay={true}
			loop={true}
			muted={true}
			controls={false}
			showScrollIndicator={true}
		>
			{/* Hero Content */}
			<div className="space-y-8 text-center">
				<div className="flex justify-center mb-8">
					<Image
						src="/images/global-elite-logo.png"
						alt="Global Elite Logo"
						width={400}
						height={200}
						className="max-w-[400px] h-auto w-auto" // Fixed: Added both width and height auto
						priority
						style={{
							width: "auto",
							height: "auto",
							maxWidth: "400px",
						}}
					/>
				</div>

				<div className="space-y-4">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-alta">Coming Soon</h1>
				</div>
				{/* Main Heading and Description 
					<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-lagusans">
						Global Elite - The luxury travel partner programme by Address Hotels + Resorts
					</p>
				</div>

			
				<div className="mt-8">
					<button
						onClick={() => (window.location.href = "/ltp")}
						className="bg-white/20 hover:bg-white/30 text-white border border-white/50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                        >
						Learn More
					</button>
				</div>
                        */}
			</div>
		</FullscreenVideoWrapper>
	)
}

// Enhanced Contact Section Component
export const ContactSection = () => {
	return (
		<section className="py-20 px-6 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-12 text-center font-alta">Let's Talk</h2>

				<div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 text-sm md:text-base">
					{/* Patricia */}
					<div className="space-y-3 text-center">
						<p className="font-semibold text-lg">Patricia de Mayer</p>
						<div className="space-y-1">
							<p>
								<a
									href="mailto:pdemayer@globaleliteassociates.com"
									className="text-blue-400 hover:text-blue-300 underline transition-colors"
								>
									pdemayer@globaleliteassociates.com
								</a>
							</p>
							<p className="text-gray-300">+49&nbsp;173&nbsp;306&nbsp;4859</p>
						</div>
					</div>

					{/* Hung */}
					<div className="space-y-3 text-center">
						<p className="font-semibold text-lg">Hung Nguyen</p>
						<div className="space-y-1">
							<p>
								<a
									href="mailto:hung@globaleliteassociates.com"
									className="text-blue-400 hover:text-blue-300 underline transition-colors"
								>
									hung@globaleliteassociates.com
								</a>
							</p>
							<p className="text-gray-300">+49&nbsp;162&nbsp;265&nbsp;5243</p>
						</div>
					</div>

					{/* About */}
					<div className="lg:col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-3 mt-6 lg:mt-0">
						<div className="text-center lg:text-left">
							<h3 className="font-bold text-lg mb-4">About Global Elite & Associates</h3>
							<p className="text-gray-300 leading-relaxed">
								A leading European company specializing in representing luxury hospitality brands.
								We offer tailored services to enhance the visibility of exclusive hotels in key
								European markets. Our offices are strategically located in Frankfurt, London, Paris,
								and Bucharest.
							</p>
						</div>
					</div>
				</div>

				{/* Additional CTA */}
				<div className="text-center mt-16">
					<div className="inline-flex items-center space-x-4">
						<div className="h-px bg-gray-600 w-16"></div>
						<p className="text-gray-400 font-lagusans">Ready to partner with luxury?</p>
						<div className="h-px bg-gray-600 w-16"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ComingSoon
