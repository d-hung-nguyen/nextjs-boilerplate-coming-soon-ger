import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Use service role key for server-side operations
const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY! // This bypasses RLS
)

export async function POST(request: NextRequest) {
	try {
		console.log("=== Form submission started ===")
		const formData = await request.formData()

		// Extract form fields
		const agencyName = formData.get("agencyName") as string
		const fullName = formData.get("fullName") as string
		const email = formData.get("email") as string
		const phoneNumber = formData.get("phoneNumber") as string
		const vatNumber = formData.get("vatNumber") as string
		const iataNumber = formData.get("iataNumber") as string
		const pccCode = formData.get("pccCode") as string
		const gdsAccessCode = formData.get("gdsAccessCode") as string
		const message = formData.get("message") as string
		const tradeLicense = formData.get("tradeLicense") as File
		const vatRegistration = formData.get("vatRegistration") as File

		console.log("Received data:", {
			agencyName,
			fullName,
			email,
			phoneNumber,
		})

		// Validate required fields
		if (!agencyName || !fullName || !email || !phoneNumber) {
			console.log("Validation failed - missing required fields")
			return NextResponse.json(
				{ error: "Agency name, full name, email, and phone number are required" },
				{ status: 400 }
			)
		}

		let tradeLicenseUrl = ""
		let vatRegistrationUrl = ""

		// Upload trade license if provided
		if (tradeLicense && tradeLicense.size > 0) {
			const tradeLicenseFileName = `trade-license-${Date.now()}-${tradeLicense.name}`
			const { data: tradeLicenseData, error: tradeLicenseError } = await supabase.storage
				.from("ltp-documents")
				.upload(tradeLicenseFileName, tradeLicense)

			if (tradeLicenseError) {
				console.error("Trade license upload error:", tradeLicenseError)
			} else {
				const {
					data: { publicUrl },
				} = supabase.storage.from("ltp-documents").getPublicUrl(tradeLicenseData.path)
				tradeLicenseUrl = publicUrl
			}
		}

		// Upload VAT registration if provided
		if (vatRegistration && vatRegistration.size > 0) {
			const vatRegistrationFileName = `vat-registration-${Date.now()}-${vatRegistration.name}`
			const { data: vatRegistrationData, error: vatRegistrationError } = await supabase.storage
				.from("ltp-documents")
				.upload(vatRegistrationFileName, vatRegistration)

			if (vatRegistrationError) {
				console.error("VAT registration upload error:", vatRegistrationError)
			} else {
				const {
					data: { publicUrl },
				} = supabase.storage.from("ltp-documents").getPublicUrl(vatRegistrationData.path)
				vatRegistrationUrl = publicUrl
			}
		}

		console.log("About to insert into database...")
		// Insert into database
		const { data, error } = await supabase
			.from("ltp_registrations")
			.insert([
				{
					agency_name: agencyName,
					full_name: fullName,
					email: email,
					phone_number: phoneNumber,
					vat_number: vatNumber || null,
					iata_number: iataNumber || null,
					pcc_code: pccCode || null,
					gds_access_code: gdsAccessCode || null,
					trade_license_url: tradeLicenseUrl || null,
					vat_registration_url: vatRegistrationUrl || null,
					message: message || null,
					created_at: new Date().toISOString(),
					status: "pending",
				},
			])
			.select()

		if (error) {
			console.error("Database error:", error)
			return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
		}

		console.log("Success! Inserted data:", data)
		return NextResponse.json(
			{ message: "Application submitted successfully", data },
			{ status: 200 }
		)
	} catch (error) {
		console.error("API error:", error)
		return NextResponse.json({ error: "Internal server error" }, { status: 500 })
	}
}
