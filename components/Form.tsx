"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card1"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Form() {
	const router = useRouter()
	const [formData, setFormData] = useState({
		agencyName: "",
		fullName: "",
		email: "",
		phoneNumber: "",
		vatNumber: "",
		iataNumber: "",
		pccCode: "",
		gdsAccessCode: "",
		tradeLicense: null as File | null,
		vatRegistration: null as File | null,
		message: "",
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null
		setFormData({
			...formData,
			[e.target.name]: file,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus("idle")

		try {
			// Create FormData for file uploads
			const submitFormData = new FormData()

			// Append all text fields
			Object.entries(formData).forEach(([key, value]) => {
				if (value instanceof File) {
					submitFormData.append(key, value)
				} else if (value !== null) {
					submitFormData.append(key, value.toString())
				}
			})

			const response = await fetch("/api/submit-form", {
				method: "POST",
				body: submitFormData,
			})

			if (response.ok) {
				setSubmitStatus("success")
				// Redirect to thank you page after a brief delay
				setTimeout(() => {
					router.push("/thank-you")
				}, 1500)
			} else {
				setSubmitStatus("error")
			}
		} catch (error) {
			console.error("Form submission error:", error)
			setSubmitStatus("error")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="p-6 max-w-6xl mx-auto space-y-10">
			{/* Hero Section */}

			{/* Sign-Up Form */}
			<section className="bg-white shadow-xl p-8 rounded-2xl">
				<h2 className="text-2xl font-semibold mb-6">Application Form</h2>

				{submitStatus === "success" && (
					<div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
						Thank you! Your application has been submitted successfully. Redirecting to confirmation
						page...
					</div>
				)}

				{submitStatus === "error" && (
					<div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">
						Sorry, there was an error submitting your application. Please try again.
					</div>
				)}

				<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Label>Agency Name *</Label>
						<Input
							name="agencyName"
							placeholder="Enter agency name"
							value={formData.agencyName}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label>Full Name *</Label>
						<Input
							name="fullName"
							placeholder="Your name"
							value={formData.fullName}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label>Email *</Label>
						<Input
							name="email"
							type="email"
							placeholder="your@email.com"
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label>Phone Number *</Label>
						<Input
							name="phoneNumber"
							type="tel"
							placeholder="+49123456789"
							value={formData.phoneNumber}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label>VAT Number</Label>
						<Input
							name="vatNumber"
							placeholder="DEXXXXXXXXX"
							value={formData.vatNumber}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>IATA/TIDS Number</Label>
						<Input
							name="iataNumber"
							placeholder="XXXXXXXX"
							value={formData.iataNumber}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>PCC Code</Label>
						<Input
							name="pccCode"
							placeholder="ABC123"
							value={formData.pccCode}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>GDS Access Code (if applicable)</Label>
						<Input
							name="gdsAccessCode"
							placeholder="Optional"
							value={formData.gdsAccessCode}
							onChange={handleInputChange}
						/>
					</div>
					<div className="md:col-span-2">
						<Label>Upload Trade License</Label>
						<Input
							name="tradeLicense"
							type="file"
							onChange={handleFileChange}
							accept=".pdf,.jpg,.jpeg,.png"
						/>
					</div>
					<div className="md:col-span-2">
						<Label>Upload VAT Registration</Label>
						<Input
							name="vatRegistration"
							type="file"
							onChange={handleFileChange}
							accept=".pdf,.jpg,.jpeg,.png"
						/>
					</div>
					<div className="md:col-span-2">
						<Label>Message (optional)</Label>
						<Textarea
							name="message"
							placeholder="Any notes or questions..."
							value={formData.message}
							onChange={handleInputChange}
						/>
					</div>
					<div className="md:col-span-2">
						<Button type="submit" disabled={isSubmitting} className="w-full">
							{isSubmitting ? "Submitting Application..." : "Submit Application"}
						</Button>
					</div>
				</form>
			</section>
		</div>
	)
}
