"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
	children: ReactNode
	fallback?: ReactNode
}

interface State {
	hasError: boolean
	error?: Error
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	}

	public static getDerivedStateFromError(error: Error): State {
		// Update state so the next render will show the fallback UI
		return { hasError: true, error }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Error boundary caught an error:", error, errorInfo)
		
		// Log to external service in production
		if (process.env.NODE_ENV === "production") {
			// You can integrate with services like Sentry here
			// Sentry.captureException(error, { contexts: { errorBoundary: errorInfo } })
		}
	}

	public render() {
		if (this.state.hasError) {
			// Custom fallback UI
			if (this.props.fallback) {
				return this.props.fallback
			}

			return (
				<div className="min-h-screen flex items-center justify-center p-4 bg-background">
					<Card className="max-w-md w-full">
						<CardHeader>
							<CardTitle className="text-center text-red-600">
								Something went wrong
							</CardTitle>
						</CardHeader>
						<CardContent className="text-center space-y-4">
							<p className="text-muted-foreground">
								We apologize for the inconvenience. An unexpected error has occurred.
							</p>
							{process.env.NODE_ENV === "development" && this.state.error && (
								<details className="text-left bg-gray-100 p-4 rounded text-sm">
									<summary className="cursor-pointer font-semibold mb-2">
										Error Details (Development Only)
									</summary>
									<pre className="whitespace-pre-wrap break-words">
										{this.state.error.message}
										{this.state.error.stack}
									</pre>
								</details>
							)}
							<div className="space-y-2">
								<Button
									onClick={() => this.setState({ hasError: false, error: undefined })}
									className="w-full"
								>
									Try Again
								</Button>
								<Button
									variant="outline"
									onClick={() => window.location.reload()}
									className="w-full"
								>
									Reload Page
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary