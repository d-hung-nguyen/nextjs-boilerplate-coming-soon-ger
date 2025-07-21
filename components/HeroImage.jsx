"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { showHubSpotCookieBanner } from "./HubSpotTracking"

export default function HeroImage({
	backgroundImage = "/images/av-poster.png",
	logo1 = "",
	logo2 = "",
	title = "",
	subtitle = "",
	span = "",
	overlayOpacity = 0.4,
	showScrollIndicator = false,
	logoWidth = 40,
	logoHeight = 40,
	className = "",
	classNameLogo1 = "",
	classNameLogo2 = "",
	alt = "Hero Background",
}) {
	return (
		<div className={`relative w-full h-auto min-h-[50vh] py-8 overflow-hidden ${className}`}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				{/* Background Image */}
				<Image
					src={backgroundImage}
					alt={alt}
					fill
					className="object-cover"
					priority
					quality={100}
				/>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

				{/* Content */}
				<div className="relative z-10 flex h-full items-center justify-center mt-20">
					<div className="container mx-auto px-4 text-center text-white">
						{/* Main content */}
						<div className="space-y-5 px-4">
							<div className="my-8 ">
								{logo1 && (
									<div className=" flex justify-center">
										<Image
											src={logo1}
											alt="Logo"
											width={logoWidth}
											height={logoHeight}
											className={classNameLogo1}
										/>
									</div>
								)}
								{logo2 && (
									<div className="flex justify-center">
										<Image
											src={logo2}
											alt="Logo"
											width={logoWidth}
											height={logoHeight}
											className={classNameLogo2}
										/>
									</div>
								)}
							</div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
							>
								<div className="space-y-6 max-w-4xl mx-auto text-center">
									{title && (
										<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-alta">
											{title}
										</h1>
									)}
									{subtitle && (
										<p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-lagusans">
											{subtitle}
										</p>
									)}
								</div>
								{span && (
									<p className="text-sm md:text-base text-white/70 mt-4">
										<span className="font-semibold">{span}</span>
									</p>
								)}
							</motion.div>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Scroll Indicator */}
			{showScrollIndicator && (
				<div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
					<div className="flex h-6 w-4 justify-center rounded-full border-2 border-white/50">
						<div className="mt-1 h-2 w-0.5 animate-pulse bg-white/70 rounded-full" />
					</div>
				</div>
			)}
		</div>
	)
}
