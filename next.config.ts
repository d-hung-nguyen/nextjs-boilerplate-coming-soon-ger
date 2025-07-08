import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	// SEO optimizations
	trailingSlash: false,

	// Enhanced compression
	compress: true,

	// Remove X-Powered-By header for security
	poweredByHeader: false,

	// Optimized for luxury imagery
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 31536000, // 1 year cache
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		unoptimized: false,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},

	// Turbopack configuration (moved from experimental.turbo)
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},

	// Performance optimizations
	experimental: {
		optimizePackageImports: ["lucide-react", "framer-motion"],
		serverComponentsHmrCache: true,
	},

	// Security and performance headers
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
			{
				source: "/images/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/video/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		]
	},

	// Production optimization
	output: process.env.NODE_ENV === "production" ? "standalone" : undefined,

	// SEO redirects
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
		]
	},
}

export default nextConfig
