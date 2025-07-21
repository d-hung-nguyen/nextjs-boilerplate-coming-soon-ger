"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Cookie, Settings } from "lucide-react"

export default function CookieBanner() {
	const [isVisible, setIsVisible] = useState(false)
	const [showSettings, setShowSettings] = useState(false)

	useEffect(() => {
		// Check if user has already made a choice
		const cookieConsent = localStorage.getItem("cookieConsent")
		if (!cookieConsent) {
			// Show banner after a short delay for better UX
			const timer = setTimeout(() => {
				setIsVisible(true)
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [])

	const handleAcceptAll = () => {
		localStorage.setItem("cookieConsent", "accepted")
		setIsVisible(false)

		// Initialize HubSpot tracking if available
		if (typeof window !== "undefined" && window._hsp) {
			window._hsp.push(["setTrackingEnabled", true])
		}
	}

	const handleRejectAll = () => {
		localStorage.setItem("cookieConsent", "rejected")
		setIsVisible(false)

		// Disable HubSpot tracking if available
		if (typeof window !== "undefined" && window._hsp) {
			window._hsp.push(["setTrackingEnabled", false])
		}
	}

	const handleCustomize = () => {
		setShowSettings(true)
	}

	const handleSaveCustom = preferences => {
		localStorage.setItem("cookieConsent", "custom")
		localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
		setIsVisible(false)
		setShowSettings(false)

		// Apply custom preferences to HubSpot if available
		if (typeof window !== "undefined" && window._hsp) {
			window._hsp.push(["setTrackingEnabled", preferences.analytics])
		}
	}

	const showHubSpotBanner = () => {
		if (typeof window !== "undefined" && window._hsp) {
			window._hsp.push(["showBanner"])
		}
	}

	if (!isVisible && !showSettings) return null

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
					className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
				>
					<div className="max-w-7xl mx-auto px-4 py-6">
						<div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
							{/* Cookie Icon */}
							<div className="flex-shrink-0">
								<Cookie className="w-8 h-8 text-amber-600" />
							</div>

							{/* Content */}
							<div className="flex-1">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">We value your privacy</h3>
								<p className="text-sm text-gray-600 leading-relaxed">
									We use cookies to enhance your browsing experience, serve personalized content,
									and analyze our traffic. By clicking "Accept All", you consent to our use of
									cookies. You can manage your preferences or learn more about our cookie policy.
								</p>
							</div>

							{/* Actions */}
							<div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
								<Button
									variant="outline"
									size="sm"
									onClick={handleCustomize}
									className="flex items-center gap-2"
								>
									<Settings className="w-4 h-4" />
									Customize
								</Button>
								<Button
									variant="outline"
									size="sm"
									onClick={handleRejectAll}
									className="text-gray-600 hover:text-gray-800"
								>
									Reject All
								</Button>
								<Button
									size="sm"
									onClick={handleAcceptAll}
									className="bg-slate-600 hover:bg-slate-700 text-white"
								>
									Accept All
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			)}

			{/* Settings Modal */}
			{showSettings && (
				<CookieSettingsModal onSave={handleSaveCustom} onClose={() => setShowSettings(false)} />
			)}
		</AnimatePresence>
	)
}

// Cookie Settings Modal Component
function CookieSettingsModal({ onSave, onClose }) {
	const [preferences, setPreferences] = useState({
		necessary: true, // Always true, can't be disabled
		analytics: true,
		marketing: true,
		preferences: true,
	})

	const handleSave = () => {
		onSave(preferences)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
		>
			<motion.div
				initial={{ scale: 0.95, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.95, opacity: 0 }}
				className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
			>
				<div className="p-6">
					{/* Header */}
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-xl font-semibold text-gray-900">Cookie Preferences</h2>
						<button
							onClick={onClose}
							className="text-gray-400 hover:text-gray-600 transition-colors"
						>
							<X className="w-6 h-6" />
						</button>
					</div>

					{/* Cookie Categories */}
					<div className="space-y-6">
						{/* Necessary Cookies */}
						<div className="border-b border-gray-200 pb-4">
							<div className="flex items-center justify-between mb-2">
								<h3 className="font-medium text-gray-900">Necessary Cookies</h3>
								<div className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
									Always Active
								</div>
							</div>
							<p className="text-sm text-gray-600">
								These cookies are essential for the website to function properly. They enable basic
								features like page navigation and access to secure areas.
							</p>
						</div>

						{/* Analytics Cookies */}
						<div className="border-b border-gray-200 pb-4">
							<div className="flex items-center justify-between mb-2">
								<h3 className="font-medium text-gray-900">Analytics Cookies</h3>
								<label className="relative inline-flex items-center cursor-pointer">
									<input
										type="checkbox"
										checked={preferences.analytics}
										onChange={e =>
											setPreferences(prev => ({ ...prev, analytics: e.target.checked }))
										}
										className="sr-only peer"
									/>
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
								</label>
							</div>
							<p className="text-sm text-gray-600">
								Help us understand how visitors interact with our website by providing anonymous
								statistics.
							</p>
						</div>

						{/* Marketing Cookies */}
						<div className="border-b border-gray-200 pb-4">
							<div className="flex items-center justify-between mb-2">
								<h3 className="font-medium text-gray-900">Marketing Cookies</h3>
								<label className="relative inline-flex items-center cursor-pointer">
									<input
										type="checkbox"
										checked={preferences.marketing}
										onChange={e =>
											setPreferences(prev => ({ ...prev, marketing: e.target.checked }))
										}
										className="sr-only peer"
									/>
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
								</label>
							</div>
							<p className="text-sm text-gray-600">
								Used to deliver personalized advertisements and measure the effectiveness of
								marketing campaigns.
							</p>
						</div>

						{/* Preference Cookies */}
						<div>
							<div className="flex items-center justify-between mb-2">
								<h3 className="font-medium text-gray-900">Preference Cookies</h3>
								<label className="relative inline-flex items-center cursor-pointer">
									<input
										type="checkbox"
										checked={preferences.preferences}
										onChange={e =>
											setPreferences(prev => ({ ...prev, preferences: e.target.checked }))
										}
										className="sr-only peer"
									/>
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
								</label>
							</div>
							<p className="text-sm text-gray-600">
								Remember your preferences and settings to provide a more personalized experience.
							</p>
						</div>
					</div>

					{/* Actions */}
					<div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
						<Button variant="outline" onClick={onClose} className="flex-1">
							Cancel
						</Button>
						<Button onClick={handleSave} className="flex-1 bg-slate-600 hover:bg-slate-700">
							Save Preferences
						</Button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}
