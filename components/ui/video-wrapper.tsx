"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface VideoWrapperProps extends React.ComponentProps<"div"> {
	videoSrc: string
	posterImage?: string
	overlayOpacity?: number
	children?: React.ReactNode
	autoPlay?: boolean
	muted?: boolean
	loop?: boolean
	controls?: boolean
	showScrollIndicator?: boolean
}

function VideoWrapper({
	className,
	videoSrc,
	posterImage,
	overlayOpacity = 0.4,
	children,
	autoPlay = true,
	muted = true,
	loop = true,
	controls = false,
	showScrollIndicator = true,
	...props
}: VideoWrapperProps) {
	return (
		<div className={cn("relative min-h-screen w-full overflow-hidden", className)} {...props}>
			{/* Video Background */}
			<video
				className="absolute inset-0 h-full w-full object-cover"
				autoPlay={autoPlay}
				muted={muted}
				loop={loop}
				controls={controls}
				playsInline
				poster={posterImage}
				preload="auto"
			>
				<source src={videoSrc} type="video/mp4" />
				<source src={videoSrc} type="video/webm" />
				Your browser does not support the video tag.
			</video>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

			{/* Content */}
			<div className="relative z-10 flex h-full min-h-screen items-center justify-center">
				<div className="container mx-auto px-4 text-center text-white">{children}</div>
			</div>

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

function FullscreenVideoWrapper({ className, children, ...props }: VideoWrapperProps) {
	return (
		<VideoWrapper className={cn("h-screen", className)} {...props}>
			{children}
		</VideoWrapper>
	)
}

export { VideoWrapper, FullscreenVideoWrapper }
export type { VideoWrapperProps }
