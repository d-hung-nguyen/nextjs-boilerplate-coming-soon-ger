var klaroConfig = {
	version: 1,
	elementID: "klaro",
	storageMethod: "cookie",
	cookieName: "klaro",
	htmlTexts: true,
	default: false,
	mustConsent: true,
	lang: "en",
	translations: {
		en: {
			consentModal: {
				title: "Privacy Settings",
				description: "Here you can manage your cookie preferences.",
			},
			googleAnalytics: {
				title: "Google Analytics",
				description: "Used to collect anonymous usage data.",
			},
			purposes: {
				analytics: "Analytics",
			},
			ok: "Accept all",
			acceptSelected: "Accept selected",
			decline: "Decline",
		},
		de: {
			consentModal: {
				title: "Datenschutzeinstellungen",
				description: "Hier können Sie Ihre Cookie-Einstellungen verwalten.",
			},
			googleAnalytics: {
				title: "Google Analytics",
				description: "Wird verwendet, um anonymisierte Nutzungsdaten zu erfassen.",
			},
			purposes: {
				analytics: "Analyse",
			},
			ok: "Alle akzeptieren",
			acceptSelected: "Auswahl akzeptieren",
			decline: "Ablehnen",
		},
	},
	apps: [
		{
			name: "googleAnalytics",
			title: "Google Analytics",
			purposes: ["analytics"],
			cookies: [/^_ga/, /^_gid/],
			required: false,
			optOut: false,
			onlyOnce: true,
		},
	],
}
