"use client"

import { useEffect } from "react"

export default function ChromeRuntimeListener() {
	useEffect(() => {
		if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
			const handler = () => {
				// no-op or your message logic
			}
			chrome.runtime.onMessage.addListener(handler)
			return () => {
				chrome.runtime.onMessage.removeListener(handler)
			}
		}
	}, [])

	return null
}
