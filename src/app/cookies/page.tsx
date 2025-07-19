import React from "react"
import HeroColor from "@/components/HeroColor"

export default function CookiePolicy() {
	return (
		<>
			<div className="relative ">
				<div className="gradient-navy">
					<HeroColor
						className="min-h-[calc(100vh*2/3)]"
						title="Cookie Policy"
						subtitle="View our cookie usage and preferences"
						overlayOpacity={0.6}
						showScrollIndicator={false}
						logoWidth={250}
						logoHeight={100}
						classNameLogo1="mb-4"
						classNameLogo2="opacity-80"
					/>
				</div>

				<div className="max-w-4xl mx-auto px-4 py-8">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
						<p>
							Cookies are small text files that are placed on your computer or mobile device when
							you visit our website. They help us provide you with a better experience and allow
							certain features to work properly.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Essential Cookies</h2>
						<p>These cookies are necessary for the website to function properly. They include:</p>
						<p>
							Session management and security Basic website functionality Remembering your cookie
							preferences
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Analytics Cookies (Optional)</h2>
						<p>
							We may use analytics cookies to understand how visitors interact with our website.
							This helps us improve our content and user experience. These cookies collect anonymous
							information only.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Managing Your Preferences</h2>
						<p>
							You can change your cookie preferences at any time by clicking the "Cookie Settings"
							link in our website footer or by adjusting your browser settings.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
						<p>
							If you have any questions about our cookie policy, please contact us at:
							<a
								href="mailto:info@globaleliteassociates.com"
								className="text-primary hover:underline ml-1"
							>
								info@globaleliteassociates.com
							</a>
						</p>
					</section>
				</div>
			</div>
		</>
	)
}
