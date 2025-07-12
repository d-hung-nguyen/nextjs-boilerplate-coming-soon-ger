import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
	try {
		const { data, error } = await supabase
			.from("ltp_registrations")
			.select("*")
			.order("created_at", { ascending: false })

		if (error) {
			console.error("Database error:", error)
			return NextResponse.json({ error: "Failed to fetch registrations" }, { status: 500 })
		}

		return NextResponse.json(data)
	} catch (error) {
		console.error("API error:", error)
		return NextResponse.json({ error: "Internal server error" }, { status: 500 })
	}
}

export async function PATCH(request: NextRequest) {
	try {
		const { id, status } = await request.json()

		if (!id || !status) {
			return NextResponse.json({ error: "ID and status are required" }, { status: 400 })
		}

		const { data, error } = await supabase
			.from("ltp_registrations")
			.update({ status })
			.eq("id", id)
			.select()

		if (error) {
			console.error("Database error:", error)
			return NextResponse.json({ error: "Failed to update status" }, { status: 500 })
		}

		return NextResponse.json({ message: "Status updated successfully", data })
	} catch (error) {
		console.error("API error:", error)
		return NextResponse.json({ error: "Internal server error" }, { status: 500 })
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const { id } = await request.json()

		if (!id) {
			return NextResponse.json({ error: "ID is required" }, { status: 400 })
		}

		const { error } = await supabase.from("ltp_registrations").delete().eq("id", id)

		if (error) {
			console.error("Database error:", error)
			return NextResponse.json({ error: "Failed to delete registration" }, { status: 500 })
		}

		return NextResponse.json({ message: "Registration deleted successfully" })
	} catch (error) {
		console.error("API error:", error)
		return NextResponse.json({ error: "Internal server error" }, { status: 500 })
	}
}
