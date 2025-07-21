"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Cookie, Settings, Globe } from "lucide-react"
import { showHubSpotCookieBanner } from "./HubSpotTracking"

export default function CookieBanner() {
	const [isVisible, setIsVisible] = useState(false)
	const [showSettings, setShowSettings] = useState(false)
	const [language, setLanguage] = useState("en") // Default to English

	// Language content
	const content = {
		en: {
			description:
				'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more about our cookie policy.',
			acceptAll: "Accept All",
			rejectAll: "Reject All",
			customize: "Customize",
			cookiePreferences: "Cookie Preferences",
			necessary: "Necessary Cookies",
			analytics: "Analytics Cookies",
			marketing: "Marketing Cookies",
			preferences: "Preference Cookies",
			alwaysActive: "Always Active",
			necessaryDesc:
				"These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.",
			analyticsDesc:
				"Help us understand how visitors interact with our website by providing anonymous statistics.",
			marketingDesc:
				"Used to deliver personalized advertisements and measure the effectiveness of marketing campaigns.",
			preferencesDesc:
				"Remember your preferences and settings to provide a more personalized experience.",
			cancel: "Cancel",
			savePreferences: "Save Preferences",
		},
		de: {
			description:
				'Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, personalisierte Inhalte zu liefern und unseren Traffic zu analysieren. Durch Klicken auf "Alle akzeptieren" stimmen Sie unserer Verwendung von Cookies zu. Sie können Ihre Einstellungen verwalten oder mehr über unsere Cookie-Richtlinie erfahren.',
			acceptAll: "Alle akzeptieren",
			rejectAll: "Alle ablehnen",
			customize: "Anpassen",
			cookiePreferences: "Cookie-Einstellungen",
			necessary: "Notwendige Cookies",
			analytics: "Analyse-Cookies",
			marketing: "Marketing-Cookies",
			preferences: "Präferenz-Cookies",
			alwaysActive: "Immer aktiv",
			necessaryDesc:
				"Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugang zu sicheren Bereichen.",
			analyticsDesc:
				"Helfen Sie uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Sie anonyme Statistiken bereitstellen.",
			marketingDesc:
				"Wird verwendet, um personalisierte Werbung zu liefern und die Wirksamkeit von Marketingkampagnen zu messen.",
			preferencesDesc:
				"Merken Sie sich Ihre Einstellungen und Präferenzen, um ein personalisierteres Erlebnis zu bieten.",
			cancel: "Abbrechen",
			savePreferences: "Einstellungen speichern",
		},
	}

	useEffect(() => {
		// Check if user has already made a choice
		const cookieConsent = localStorage.getItem("cookieConsent")
		// Load saved language preference
		const savedLanguage = localStorage.getItem("cookieLanguage") || "en"
		setLanguage(savedLanguage)

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

		// Trigger storage event for HubSpot component to pick up the change
		window.dispatchEvent(
			new StorageEvent("storage", {
				key: "cookieConsent",
				newValue: "accepted",
			})
		)
	}

	const handleRejectAll = () => {
		localStorage.setItem("cookieConsent", "rejected")
		setIsVisible(false)

		// Trigger storage event for HubSpot component to pick up the change
		window.dispatchEvent(
			new StorageEvent("storage", {
				key: "cookieConsent",
				newValue: "rejected",
			})
		)
	}

	const handleCustomize = () => {
		setShowSettings(true)
	}

	const handleSaveCustom = preferences => {
		localStorage.setItem("cookieConsent", "custom")
		localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
		setIsVisible(false)
		setShowSettings(false)

		// Trigger storage events for HubSpot component to pick up the changes
		window.dispatchEvent(
			new StorageEvent("storage", {
				key: "cookieConsent",
				newValue: "custom",
			})
		)
		window.dispatchEvent(
			new StorageEvent("storage", {
				key: "cookiePreferences",
				newValue: JSON.stringify(preferences),
			})
		)
	}

	const toggleLanguage = () => {
		const newLanguage = language === "en" ? "de" : "en"
		setLanguage(newLanguage)
		localStorage.setItem("cookieLanguage", newLanguage)
	}

	const showHubSpotBanner = () => {
		showHubSpotCookieBanner()
	}

	if (!isVisible && !showSettings) return null

	const currentContent = content[language]

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
							{/* Cookie Icon and Language Toggle */}
							<div className="flex items-center gap-3 flex-shrink-0">
								<button
									onClick={toggleLanguage}
									className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 
									          rounded-md transition-colors duration-200 text-gray-700 hover:text-gray-900"
									title={language === "en" ? "Switch to German" : "Auf Englisch wechseln"}
								>
									<Globe className="w-3 h-3" />
									<span className="font-medium">{language === "en" ? "DE" : "EN"}</span>
								</button>
							</div>

							{/* Content */}
							<div className="flex-1">
								<p className="text-sm text-gray-600 leading-relaxed">
									{currentContent.description}
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
									{currentContent.customize}
								</Button>
								<Button
									variant="outline"
									size="sm"
									onClick={handleRejectAll}
									className="text-gray-600 hover:text-gray-800"
								>
									{currentContent.rejectAll}
								</Button>
								<Button
									size="sm"
									onClick={handleAcceptAll}
									className="bg-slate-600 hover:bg-slate-700 text-white"
								>
									{currentContent.acceptAll}
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			)}

			{/* Settings Modal */}
			{showSettings && (
				<CookieSettingsModal
					onSave={handleSaveCustom}
					onClose={() => setShowSettings(false)}
					language={language}
					content={currentContent}
				/>
			)}
		</AnimatePresence>
	)
}

// Cookie Settings Modal Component
function CookieSettingsModal({ onSave, onClose, language, content }) {
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
						<h2 className="text-xl font-semibold text-gray-900">{content.cookiePreferences}</h2>
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
								<h3 className="font-medium text-gray-900">{content.necessary}</h3>
								<div className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
									{content.alwaysActive}
								</div>
							</div>
							<p className="text-sm text-gray-600">{content.necessaryDesc}</p>
						</div>

						{/* Analytics Cookies */}
						<div className="border-b border-gray-200 pb-4">
							<div className="flex items-center justify-between mb-2">
								<h3 className="font-medium text-gray-900">{content.analytics}</h3>
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
							<p className="text-sm text-gray-600">{content.analyticsDesc}</p>
						</div>

						{/* Marketing Cookies */}
						<div className="border-b border-gray-200 pb-4">
							<div className="flex items-center justify-between mb-2">
								<h3 className="font-medium text-gray-900">{content.marketing}</h3>
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
							<p className="text-sm text-gray-600">{content.marketingDesc}</p>
						</div>

						{/* Preference Cookies */}
						<div>
							<div className="flex items-center justify-between mb-2">
								<h3 className="font-medium text-gray-900">{content.preferences}</h3>
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
							<p className="text-sm text-gray-600">{content.preferencesDesc}</p>
						</div>
					</div>

					{/* Actions */}
					<div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
						<Button variant="outline" onClick={onClose} className="flex-1">
							{content.cancel}
						</Button>
						<Button onClick={handleSave} className="flex-1 bg-slate-600 hover:bg-slate-700">
							{content.savePreferences}
						</Button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}
