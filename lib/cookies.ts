// utils/cookies.ts

/**
 * Cookie management utilities for GDPR compliance
 * Works with Cookiebot consent management platform
 */
import React from "react"

export interface CookieConsentStatus {
	necessary: boolean
	statistics: boolean
	preferences: boolean
	marketing: boolean
}

export class CookieManager {
	private static instance: CookieManager
	private consentStatus: CookieConsentStatus | null = null

	private constructor() {
		if (typeof window !== "undefined") {
			this.initializeCookieManager()
		}
	}

	public static getInstance(): CookieManager {
		if (!CookieManager.instance) {
			CookieManager.instance = new CookieManager()
		}
		return CookieManager.instance
	}

	private initializeCookieManager(): void {
		// Check if Cookiebot is available
		if (window.Cookiebot) {
			this.consentStatus = window.Cookiebot.consent
		}

		// Listen for consent changes
		document.addEventListener("CookiebotOnAccept", this.handleConsentUpdate.bind(this))
		document.addEventListener("CookiebotOnDecline", this.handleConsentUpdate.bind(this))
		document.addEventListener("CookiebotOnLoad", this.handleConsentUpdate.bind(this))
	}

	private handleConsentUpdate(): void {
		if (window.Cookiebot?.consent) {
			this.consentStatus = window.Cookiebot.consent
			this.triggerConsentCallbacks()
		}
	}

	private triggerConsentCallbacks(): void {
		// Trigger custom events for other parts of the application
		const event = new CustomEvent("cookieConsentUpdated", {
			detail: this.consentStatus,
		})
		document.dispatchEvent(event)
	}

	/**
	 * Check if a specific cookie category is consented to
	 */
	public hasConsent(category: keyof CookieConsentStatus): boolean {
		if (!this.consentStatus) {
			// If no consent status available, only allow necessary cookies
			return category === "necessary"
		}
		return this.consentStatus[category] === true
	}

	/**
	 * Get current consent status
	 */
	public getConsentStatus(): CookieConsentStatus | null {
		return this.consentStatus
	}

	/**
	 * Set a cookie with consent validation
	 */
	public setCookie(
		name: string,
		value: string,
		category: keyof CookieConsentStatus,
		options: {
			days?: number
			path?: string
			domain?: string
			secure?: boolean
			sameSite?: "Strict" | "Lax" | "None"
		} = {}
	): boolean {
		if (!this.hasConsent(category)) {
			console.warn(`Cannot set cookie ${name}: No consent for ${category} cookies`)
			return false
		}

		const { days = 30, path = "/", domain, secure = true, sameSite = "Lax" } = options

		let cookieString = `${name}=${encodeURIComponent(value)}`

		if (days) {
			const date = new Date()
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
			cookieString += `; expires=${date.toUTCString()}`
		}

		cookieString += `; path=${path}`

		if (domain) {
			cookieString += `; domain=${domain}`
		}

		if (secure) {
			cookieString += "; secure"
		}

		cookieString += `; samesite=${sameSite}`

		document.cookie = cookieString
		return true
	}

	/**
	 * Get a cookie value
	 */
	public getCookie(name: string): string | null {
		const nameEQ = name + "="
		const ca = document.cookie.split(";")

		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) === " ") c = c.substring(1, c.length)
			if (c.indexOf(nameEQ) === 0) {
				return decodeURIComponent(c.substring(nameEQ.length, c.length))
			}
		}
		return null
	}

	/**
	 * Delete a cookie
	 */
	public deleteCookie(name: string, path: string = "/", domain?: string): void {
		let cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=${path}`

		if (domain) {
			cookieString += `; domain=${domain}`
		}

		document.cookie = cookieString
	}

	/**
	 * Clean up all cookies for categories that are no longer consented
	 */
	public cleanupCookies(): void {
		const cookies = document.cookie.split(";")

		cookies.forEach(cookie => {
			const name = cookie.split("=")[0].trim()

			// Clean up analytics cookies if statistics consent is withdrawn
			if (!this.hasConsent("statistics") && this.isAnalyticsCookie(name)) {
				this.deleteCookie(name)
				this.deleteCookie(name, "/", `.${window.location.hostname}`)
			}

			// Clean up marketing cookies if marketing consent is withdrawn
			if (!this.hasConsent("marketing") && this.isMarketingCookie(name)) {
				this.deleteCookie(name)
				this.deleteCookie(name, "/", `.${window.location.hostname}`)
			}

			// Clean up preference cookies if preferences consent is withdrawn
			if (!this.hasConsent("preferences") && this.isPreferenceCookie(name)) {
				this.deleteCookie(name)
				this.deleteCookie(name, "/", `.${window.location.hostname}`)
			}
		})
	}

	private isAnalyticsCookie(name: string): boolean {
		const analyticsCookies = [
			"_ga",
			"_ga_",
			"_gid",
			"_gt",
			"_gat",
			"_utm_",
			"__utm",
			"_dc_gtm_",
			"_fbp",
			"_fbc",
		]
		return analyticsCookies.some(prefix => name.startsWith(prefix))
	}

	private isMarketingCookie(name: string): boolean {
		const marketingCookies = [
			"_gcl_",
			"_gcl_au",
			"_gcl_aw",
			"_gcl_dc",
			"__gads",
			"__gpi",
			"_ym_",
			"yandexuid",
			"_pinterest_",
			"_pin_unauth",
			"_routing_id",
			"fr",
			"tr",
			"ads",
			"datr",
			"sb",
			"wd",
		]
		return marketingCookies.some(prefix => name.startsWith(prefix))
	}

	private isPreferenceCookie(name: string): boolean {
		const preferenceCookies = [
			"lang",
			"language",
			"locale",
			"timezone",
			"theme",
			"dark_mode",
			"currency",
			"region",
			"preferences_",
			"settings_",
			"user_pref",
		]
		return preferenceCookies.some(prefix => name.startsWith(prefix))
	}

	/**
	 * Initialize Google Analytics with proper consent
	 */
	public initializeGoogleAnalytics(measurementId: string): void {
		if (!this.hasConsent("statistics")) {
			console.log("Google Analytics not initialized: No statistics consent")
			return
		}

		// Load Google Analytics
		const script = document.createElement("script")
		script.async = true
		script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
		document.head.appendChild(script)

		// Configure Google Analytics
		window.dataLayer = window.dataLayer || []
		function gtag(...args: any[]) {
			window.dataLayer.push(args)
		}

		gtag("js", new Date())
		gtag("config", measurementId, {
			anonymize_ip: true,
			allow_google_signals: this.hasConsent("marketing"),
			allow_ad_personalization_signals: this.hasConsent("marketing"),
			cookie_expires: 63072000, // 2 years in seconds
			send_page_view: true,
		})

		// Set up consent mode
		gtag("consent", "update", {
			analytics_storage: this.hasConsent("statistics") ? "granted" : "denied",
			ad_storage: this.hasConsent("marketing") ? "granted" : "denied",
			functionality_storage: this.hasConsent("preferences") ? "granted" : "denied",
			personalization_storage: this.hasConsent("preferences") ? "granted" : "denied",
			security_storage: "granted",
		})
	}

	/**
	 * Track page view (only if analytics consent is given)
	 */
	public trackPageView(url: string, title?: string): void {
		if (!this.hasConsent("statistics") || typeof window.gtag !== "function") {
			return
		}

		window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
			page_location: url,
			page_title: title,
		})
	}

	/**
	 * Track custom event (only if analytics consent is given)
	 */
	public trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
		if (!this.hasConsent("statistics") || typeof window.gtag !== "function") {
			return
		}

		window.gtag("event", eventName, {
			event_category: parameters.category || "engagement",
			event_label: parameters.label,
			value: parameters.value,
			...parameters,
		})
	}

	/**
	 * Show Cookiebot consent dialog
	 */
	public showConsentDialog(): void {
		if (window.Cookiebot) {
			window.Cookiebot.show()
		}
	}

	/**
	 * Renew consent (show preferences dialog)
	 */
	public renewConsent(): void {
		if (window.Cookiebot) {
			window.Cookiebot.renew()
		}
	}
}

// Export singleton instance
export const cookieManager = CookieManager.getInstance()

// React hook for using cookie consent in components
export function useCookieConsent() {
	const [consentStatus, setConsentStatus] = React.useState<CookieConsentStatus | null>(
		cookieManager.getConsentStatus()
	)

	React.useEffect(() => {
		const handleConsentUpdate = (event: CustomEvent<CookieConsentStatus>) => {
			setConsentStatus(event.detail)
		}

		document.addEventListener("cookieConsentUpdated", handleConsentUpdate as EventListener)

		return () => {
			document.removeEventListener("cookieConsentUpdated", handleConsentUpdate as EventListener)
		}
	}, [])

	return {
		consentStatus,
		hasConsent: (category: keyof CookieConsentStatus) => cookieManager.hasConsent(category),
		trackEvent: cookieManager.trackEvent.bind(cookieManager),
		trackPageView: cookieManager.trackPageView.bind(cookieManager),
		showConsentDialog: cookieManager.showConsentDialog.bind(cookieManager),
		renewConsent: cookieManager.renewConsent.bind(cookieManager),
	}
}
