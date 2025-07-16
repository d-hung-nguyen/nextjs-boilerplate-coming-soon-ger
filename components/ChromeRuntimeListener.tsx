"use client"
import { useEffect } from "react"

// Type definition for Chrome extension API
interface ChromeRuntime {
	onMessage?: {
		addListener: (callback: Function) => void
		removeListener: (callback: Function) => void
	}
}

declare global {
	interface Window {
		chrome?: {
			runtime?: ChromeRuntime
		}
	}
}

export default function ChromeRuntimeListener() {
	useEffect(() => {
		// Check if we're in a browser environment and chrome extension API exists
		if (typeof window !== "undefined" && window.chrome?.runtime?.onMessage) {
			const handler = () => {
				// no-op or your message logic
			}

			window.chrome.runtime.onMessage.addListener(handler)

			return () => {
				if (window.chrome?.runtime?.onMessage) {
					window.chrome.runtime.onMessage.removeListener(handler)
				}
			}
		}
	}, [])

	return null
}
