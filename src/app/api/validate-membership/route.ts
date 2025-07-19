import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const membershipSchema = z.object({
	membershipNumber: z.string().min(1).max(50),
})

// Rate limiting
const rateLimitMap = new Map()

function checkRateLimit(ip: string) {
	const now = Date.now()
	const windowStart = now - 60000 // 1 minute window

	const requests = rateLimitMap.get(ip) || []
	const recentRequests = requests.filter(time => time > windowStart)

	if (recentRequests.length >= 10) {
		// 10 requests per minute for membership validation
		throw new Error("Rate limit exceeded")
	}

	recentRequests.push(now)
	rateLimitMap.set(ip, recentRequests)
}

export async function POST(request: NextRequest) {
	try {
		// Rate limiting
		const ip = request.headers.get('x-forwarded-for') || 
		         request.headers.get('x-real-ip') || 
		         'unknown'
		checkRateLimit(ip)

		const body = await request.json()
		const { membershipNumber } = membershipSchema.parse(body)

		// Sanitize input
		const sanitizedMembershipNumber = membershipNumber.trim().toUpperCase()

		// Check against database or environment variables
		const validMembershipNumbers = process.env.VALID_MEMBERSHIP_NUMBERS?.split(',') || []
		
		// You could also check against a database table:
		// const { data } = await supabase
		//   .from('valid_memberships')
		//   .select('number')
		//   .eq('number', sanitizedMembershipNumber)
		//   .eq('active', true)
		//   .single()

		const isValid = validMembershipNumbers.includes(sanitizedMembershipNumber)

		if (isValid) {
			return NextResponse.json({ valid: true })
		} else {
			return NextResponse.json(
				{ valid: false, error: "Invalid membership number" },
				{ status: 401 }
			)
		}
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ valid: false, error: "Invalid input format" },
				{ status: 400 }
			)
		}

		if (error instanceof Error && error.message === "Rate limit exceeded") {
			return NextResponse.json(
				{ valid: false, error: "Too many requests. Please try again later." },
				{ status: 429 }
			)
		}

		console.error("Membership validation error:", error)
		return NextResponse.json(
			{ valid: false, error: "Internal server error" },
			{ status: 500 }
		)
	}
}