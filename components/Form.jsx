import React from "react"
import { Card, CardContent } from "@/components/ui/card1"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Form() {
	return (
		<div className="p-6 max-w-6xl mx-auto space-y-10">
			{/* Hero Section */}
			<section className="text-center space-y-4">
				<h1 className="text-4xl font-bold">Join the Luxury Travel Partner Program</h1>
				<p className="text-lg text-gray-600">
					Exclusive rewards, curated stays, priority access. Tailored for top travel professionals.
				</p>
				<Button className="text-lg">Apply Now</Button>
			</section>

			{/* Sign-Up Form */}
			<section className="bg-white shadow-xl p-8 rounded-2xl">
				<h2 className="text-2xl font-semibold mb-6">Application Form</h2>
				<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Label>Agency Name</Label>
						<Input placeholder="Enter agency name" />
					</div>
					<div>
						<Label>Full Name</Label>
						<Input placeholder="Your name" />
					</div>
					<div>
						<Label>Email</Label>
						<Input type="email" placeholder="your@email.com" />
					</div>
					<div>
						<Label>Phone Number</Label>
						<Input type="tel" placeholder="+49123456789" />
					</div>
					<div>
						<Label>VAT Number</Label>
						<Input placeholder="DEXXXXXXXXX" />
					</div>
					<div>
						<Label>IATA/TIDS Number</Label>
						<Input placeholder="XXXXXXXX" />
					</div>
					<div>
						<Label>PCC Code</Label>
						<Input placeholder="ABC123" />
					</div>
					<div>
						<Label>GDS Access Code (if applicable)</Label>
						<Input placeholder="Optional" />
					</div>
					<div className="md:col-span-2">
						<Label>Upload Trade License</Label>
						<Input type="file" />
					</div>
					<div className="md:col-span-2">
						<Label>Upload VAT Registration</Label>
						<Input type="file" />
					</div>
					<div className="md:col-span-2">
						<Label>Message (optional)</Label>
						<Textarea placeholder="Any notes or questions..." />
					</div>
					<div className="md:col-span-2">
						<Button className="w-full">Submit Application</Button>
					</div>
				</form>
			</section>

			{/* Portal Sections */}
			<section className="grid md:grid-cols-2 gap-6">
				<Card>
					<CardContent className="p-6 space-y-2">
						<h3 className="text-xl font-semibold">Hotel Directory</h3>
						<p>Access contacts, concierge emails, media assets & fact sheets per hotel.</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-6 space-y-2">
						<h3 className="text-xl font-semibold">Latest Offers</h3>
						<p>Stay updated with exclusive partner-only offers and sales kits.</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-6 space-y-2">
						<h3 className="text-xl font-semibold">How It Works</h3>
						<p>Learn how to book, access perks, and maximize your client benefits.</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-6 space-y-2">
						<h3 className="text-xl font-semibold">Download Center</h3>
						<p>Logos, videos, brochures, and LTP program materials all in one place.</p>
					</CardContent>
				</Card>
			</section>
		</div>
	)
}
