"use client"

import { useEffect } from "react"

// Extend Window interface to include HubSpot properties
declare global {
	interface Window {
		_hsp: any[]
	}
}

interface HubSpotTrackingProps {
	hubspotId: string
}

export default function HubSpotTracking({ hubspotId }: HubSpotTrackingProps) {
	useEffect(() => {
		// Function to load HubSpot script
		const loadHubSpotScript = () => {
			if (document.getElementById("hs-script")) {
				return // Script already loaded
			}

			const script = document.createElement("script")
			script.id = "hs-script"
			script.src = `//js.hs-scripts.com/${hubspotId}.js`
			script.async = true
			script.defer = true

			script.onload = () => {
				console.log("HubSpot tracking script loaded")
				// Check and apply cookie consent after script loads
				checkAndApplyCookieConsent()
			}

			script.onerror = () => {
				console.error("Failed to load HubSpot tracking script")
			}

			document.head.appendChild(script)
		}

		// Function to check and apply cookie consent
		const checkAndApplyCookieConsent = () => {
			if (typeof window === "undefined") return

			const cookieConsent = localStorage.getItem("cookieConsent")
			const cookiePreferences = localStorage.getItem("cookiePreferences")

			// Initialize HubSpot global object if not exists
			window._hsp = window._hsp || []

			if (cookieConsent === "accepted") {
				// Enable all tracking
				window._hsp.push(["setTrackingEnabled", true])
				console.log("HubSpot tracking enabled (all cookies accepted)")
			} else if (cookieConsent === "rejected") {
				// Disable all tracking
				window._hsp.push(["setTrackingEnabled", false])
				console.log("HubSpot tracking disabled (all cookies rejected)")
			} else if (cookieConsent === "custom" && cookiePreferences) {
				// Apply custom preferences
				try {
					const preferences = JSON.parse(cookiePreferences)
					const analyticsEnabled = preferences.analytics || false
					window._hsp.push(["setTrackingEnabled", analyticsEnabled])
					console.log(
						`HubSpot tracking ${analyticsEnabled ? "enabled" : "disabled"} (custom preferences)`
					)
				} catch (e) {
					console.warn("Failed to parse cookie preferences, disabling tracking")
					window._hsp.push(["setTrackingEnabled", false])
				}
			} else {
				// No consent given yet, disable tracking by default
				window._hsp.push(["setTrackingEnabled", false])
				console.log("HubSpot tracking disabled (no consent given)")
			}
		}

		// Load the script
		loadHubSpotScript()

		// Listen for storage changes (when user updates cookie preferences)
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === "cookieConsent" || e.key === "cookiePreferences") {
				checkAndApplyCookieConsent()
			}
		}

		window.addEventListener("storage", handleStorageChange)

		// Cleanup
		return () => {
			window.removeEventListener("storage", handleStorageChange)
		}
	}, [hubspotId])

	// This component doesn't render anything visible
	return null
}

// Helper function to manually trigger HubSpot banner (for cookie settings)
export const showHubSpotCookieBanner = () => {
	if (typeof window !== "undefined" && window._hsp) {
		window._hsp.push(["showBanner"])
	}
}
