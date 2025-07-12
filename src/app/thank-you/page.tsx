import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Mail, Phone } from "lucide-react"

export default function ThankYou() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
			<Card className="max-w-2xl w-full shadow-2xl">
				<CardHeader className="text-center pb-4">
					<div className="flex justify-center mb-4">
						<CheckCircle className="w-16 h-16 text-green-500" />
					</div>
					<CardTitle className="text-3xl font-bold text-primary">
						Application Submitted Successfully!
					</CardTitle>
				</CardHeader>

				<CardContent className="text-center space-y-6">
					<div className="space-y-4">
						<h2 className="text-xl font-semibold">
							Thank you for joining the Luxury Travel Partner Program
						</h2>
						<p className="text-gray-600">
							Your application has been received and is currently under review. Our team will
							contact you within 48 hours to discuss the next steps.
						</p>
					</div>

					<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
						<h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
						<ul className="text-sm text-blue-800 space-y-1 text-left">
							<li>• Application review within 48 hours</li>
							<li>• Email confirmation with your application ID</li>
							<li>• Personal consultation call (if approved)</li>
							<li>• Access to exclusive partner portal</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Need immediate assistance?</h3>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<div className="flex items-center justify-center gap-2 text-sm">
								<Mail className="w-4 h-4" />
								<span>pde@globaleliteassociates.com</span>
							</div>
							<div className="flex items-center justify-center gap-2 text-sm">
								<Phone className="w-4 h-4" />
								<span>+49 (0) 123 456 789</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 pt-6">
						<Button asChild className="flex-1">
							<Link href="/">Return to Homepage</Link>
						</Button>
						<Button variant="outline" asChild className="flex-1">
							<Link href="/ltp">LTP</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
