// Global type declarations for the application

declare global {
	interface Window {
		Cookiebot?: CookiebotAPI
		CookiebotCallback_OnLoad?: () => void
		CookiebotCallback_OnAccept?: () => void
		CookiebotCallback_OnDecline?: () => void
		gtag?: (...args: any[]) => void
		dataLayer?: any[]
	}
	
	// Make types available globally
	type CookiebotConsent = {
		statistics: boolean
		marketing: boolean
		preferences: boolean
		necessary: boolean
	}
	
	type CookiebotAPI = {
		consent: CookiebotConsent
		renewed: boolean
		hasResponse: boolean
		show(): void
		hide(): void
		renew(): void
		withdraw(): void
	}
}

export {}