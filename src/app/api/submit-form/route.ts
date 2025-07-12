import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { z } from "zod"

// Better approach with validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
	throw new Error("Missing Supabase configuration")
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Add file validation
function validateFile(file: File, allowedTypes: string[], maxSize: number) {
	if (!allowedTypes.includes(file.type)) {
		throw new Error(`Invalid file type. Allowed: ${allowedTypes.join(", ")}`)
	}
	if (file.size > maxSize) {
		throw new Error(`File too large. Max size: ${maxSize / 1024 / 1024}MB`)
	}
}

const allowedTypes = ["application/pdf", "image/jpeg", "image/png"]
const maxSize = 5 * 1024 * 1024 // 5MB

const ltpRegistrationSchema = z.object({
	agencyName: z.string().min(2).max(100),
	fullName: z.string().min(2).max(50),
	email: z.string().email(),
	phoneNumber: z
		.string()
		.regex(/^\+?[\d\s-()]+$/)
		.min(10)
		.max(20),
	vatNumber: z.string().optional(),
	iataNumber: z.string().optional(),
	pccCode: z.string().optional(),
	gdsAccessCode: z.string().optional(),
	message: z.string().max(1000).optional(),
})

// Add rate limiting
const rateLimitMap = new Map()

function checkRateLimit(ip: string) {
	const now = Date.now()
	const windowStart = now - 60000 // 1 minute window

	const requests = rateLimitMap.get(ip) || []
	const recentRequests = requests.filter(time => time > windowStart)

	if (recentRequests.length >= 5) {
		// 5 requests per minute
		throw new Error("Rate limit exceeded")
	}

	recentRequests.push(now)
	rateLimitMap.set(ip, recentRequests)
}

// Standardized error responses
function createErrorResponse(message: string, code: string, status: number) {
	return NextResponse.json(
		{
			error: {
				message,
				code,
				timestamp: new Date().toISOString(),
			},
		},
		{ status }
	)
}

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
			validateFile(tradeLicense, allowedTypes, maxSize)

			// Sanitize filename
			const sanitizedName = tradeLicense.name.replace(/[^a-zA-Z0-9.-]/g, "_")
			const tradeLicenseFileName = `trade-license-${Date.now()}-${sanitizedName}`
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
			return createErrorResponse("Failed to submit application", "DATABASE_ERROR", 500)
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
