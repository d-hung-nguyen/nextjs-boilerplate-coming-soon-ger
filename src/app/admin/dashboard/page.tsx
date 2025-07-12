"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Users,
	Clock,
	CheckCircle,
	XCircle,
	Search,
	Filter,
	Download,
	Eye,
	Mail,
	Phone,
	Building,
	Calendar,
	FileText,
	Trash2,
} from "lucide-react"

interface Registration {
	id: number
	agency_name: string
	full_name: string
	email: string
	phone_number: string
	vat_number?: string
	iata_number?: string
	pcc_code?: string
	gds_access_code?: string
	trade_license_url?: string
	vat_registration_url?: string
	message?: string
	status: "pending" | "approved" | "rejected"
	created_at: string
}

export default function Dashboard() {
	const [registrations, setRegistrations] = useState<Registration[]>([])
	const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([])
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState("")
	const [statusFilter, setStatusFilter] = useState("all")
	const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null)
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	// Stats
	const stats = {
		total: registrations.length,
		pending: registrations.filter(r => r.status === "pending").length,
		approved: registrations.filter(r => r.status === "approved").length,
		rejected: registrations.filter(r => r.status === "rejected").length,
	}

	useEffect(() => {
		fetchRegistrations()
	}, [])

	useEffect(() => {
		filterRegistrations()
	}, [registrations, searchTerm, statusFilter])

	const fetchRegistrations = async () => {
		try {
			const response = await fetch("/api/admin/registrations")
			if (response.ok) {
				const data = await response.json()
				setRegistrations(data)
			}
		} catch (error) {
			console.error("Error fetching registrations:", error)
		} finally {
			setLoading(false)
		}
	}

	const filterRegistrations = () => {
		let filtered = registrations

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				reg =>
					reg.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					reg.agency_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					reg.email.toLowerCase().includes(searchTerm.toLowerCase())
			)
		}

		// Filter by status
		if (statusFilter !== "all") {
			filtered = filtered.filter(reg => reg.status === statusFilter)
		}

		setFilteredRegistrations(filtered)
	}

	const updateStatus = async (id: number, newStatus: "pending" | "approved" | "rejected") => {
		try {
			const response = await fetch("/api/admin/registrations", {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id, status: newStatus }),
			})

			if (response.ok) {
				setRegistrations(prev =>
					prev.map(reg => (reg.id === id ? { ...reg, status: newStatus } : reg))
				)
			}
		} catch (error) {
			console.error("Error updating status:", error)
		}
	}

	const deleteRegistration = async (id: number) => {
		if (!confirm("Are you sure you want to delete this registration?")) return

		try {
			const response = await fetch("/api/admin/registrations", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id }),
			})

			if (response.ok) {
				setRegistrations(prev => prev.filter(reg => reg.id !== id))
			}
		} catch (error) {
			console.error("Error deleting registration:", error)
		}
	}

	const exportToCsv = () => {
		const headers = [
			"ID",
			"Agency Name",
			"Full Name",
			"Email",
			"Phone",
			"VAT Number",
			"IATA Number",
			"PCC Code",
			"GDS Code",
			"Status",
			"Created At",
		]

		const csvContent = [
			headers.join(","),
			...filteredRegistrations.map(reg =>
				[
					reg.id,
					`"${reg.agency_name}"`,
					`"${reg.full_name}"`,
					reg.email,
					reg.phone_number,
					reg.vat_number || "",
					reg.iata_number || "",
					reg.pcc_code || "",
					reg.gds_access_code || "",
					reg.status,
					new Date(reg.created_at).toLocaleDateString(),
				].join(",")
			),
		].join("\n")

		const blob = new Blob([csvContent], { type: "text/csv" })
		const url = window.URL.createObjectURL(blob)
		const a = document.createElement("a")
		a.href = url
		a.download = `ltp-registrations-${new Date().toISOString().split("T")[0]}.csv`
		a.click()
	}

	const getStatusBadge = (status: string) => {
		const variants: Record<string, "default" | "secondary" | "destructive"> = {
			pending: "secondary",
			approved: "default",
			rejected: "destructive",
		}

		const icons = {
			pending: <Clock className="w-3 h-3 mr-1" />,
			approved: <CheckCircle className="w-3 h-3 mr-1" />,
			rejected: <XCircle className="w-3 h-3 mr-1" />,
		}

		return (
			<Badge variant={variants[status]} className="flex items-center">
				{icons[status as keyof typeof icons]}
				{status.charAt(0).toUpperCase() + status.slice(1)}
			</Badge>
		)
	}

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-lg">Loading dashboard...</div>
			</div>
		)
	}

	return (
		<div className="container mx-auto p-6 space-y-6">
			{/* Header */}
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">LTP Registrations Dashboard</h1>
				<Button onClick={exportToCsv} variant="outline">
					<Download className="w-4 h-4 mr-2" />
					Export CSV
				</Button>
			</div>

			{/* Stats Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Card>
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-600">Total Applications</p>
								<p className="text-2xl font-bold">{stats.total}</p>
							</div>
							<Users className="w-8 h-8 text-blue-500" />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-600">Pending Review</p>
								<p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
							</div>
							<Clock className="w-8 h-8 text-yellow-500" />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-600">Approved</p>
								<p className="text-2xl font-bold text-green-600">{stats.approved}</p>
							</div>
							<CheckCircle className="w-8 h-8 text-green-500" />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-600">Rejected</p>
								<p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
							</div>
							<XCircle className="w-8 h-8 text-red-500" />
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Filters */}
			<Card>
				<CardContent className="p-4">
					<div className="flex flex-col md:flex-row gap-4">
						<div className="flex-1">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
								<Input
									placeholder="Search by name, agency, or email..."
									value={searchTerm}
									onChange={e => setSearchTerm(e.target.value)}
									className="pl-9"
								/>
							</div>
						</div>
						<Select value={statusFilter} onValueChange={setStatusFilter}>
							<SelectTrigger className="w-full md:w-48">
								<Filter className="w-4 h-4 mr-2" />
								<SelectValue placeholder="Filter by status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Status</SelectItem>
								<SelectItem value="pending">Pending</SelectItem>
								<SelectItem value="approved">Approved</SelectItem>
								<SelectItem value="rejected">Rejected</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</CardContent>
			</Card>

			{/* Registrations Table */}
			<Card>
				<CardHeader>
					<CardTitle>Applications ({filteredRegistrations.length})</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b">
									<th className="text-left p-2">Agency</th>
									<th className="text-left p-2">Applicant</th>
									<th className="text-left p-2">Contact</th>
									<th className="text-left p-2">Status</th>
									<th className="text-left p-2">Date</th>
									<th className="text-left p-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{filteredRegistrations.map(registration => (
									<tr key={registration.id} className="border-b hover:bg-gray-50">
										<td className="p-2">
											<div className="font-medium">{registration.agency_name}</div>
											{registration.iata_number && (
												<div className="text-xs text-gray-500">
													IATA: {registration.iata_number}
												</div>
											)}
										</td>
										<td className="p-2">
											<div className="font-medium">{registration.full_name}</div>
										</td>
										<td className="p-2">
											<div className="text-sm">{registration.email}</div>
											<div className="text-xs text-gray-500">{registration.phone_number}</div>
										</td>
										<td className="p-2">{getStatusBadge(registration.status)}</td>
										<td className="p-2">
											<div className="text-sm">
												{new Date(registration.created_at).toLocaleDateString()}
											</div>
											<div className="text-xs text-gray-500">
												{new Date(registration.created_at).toLocaleTimeString()}
											</div>
										</td>
										<td className="p-2">
											<div className="flex gap-2">
												<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
													<DialogTrigger asChild>
														<Button
															size="sm"
															variant="outline"
															onClick={() => setSelectedRegistration(registration)}
														>
															<Eye className="w-3 h-3" />
														</Button>
													</DialogTrigger>
												</Dialog>

												<Select
													onValueChange={value => updateStatus(registration.id, value as any)}
												>
													<SelectTrigger className="w-24 h-8">
														<SelectValue placeholder="Status" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="pending">Pending</SelectItem>
														<SelectItem value="approved">Approve</SelectItem>
														<SelectItem value="rejected">Reject</SelectItem>
													</SelectContent>
												</Select>

												<Button
													size="sm"
													variant="outline"
													onClick={() => deleteRegistration(registration.id)}
													className="text-red-600 hover:text-red-700"
												>
													<Trash2 className="w-3 h-3" />
												</Button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						{filteredRegistrations.length === 0 && (
							<div className="text-center py-8 text-gray-500">
								No registrations found matching your criteria.
							</div>
						)}
					</div>
				</CardContent>
			</Card>

			{/* Registration Detail Dialog */}
			{selectedRegistration && (
				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					<DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
						<DialogHeader>
							<DialogTitle>Registration Details</DialogTitle>
						</DialogHeader>

						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="font-semibold flex items-center gap-2">
										<Building className="w-4 h-4" />
										Agency Name
									</label>
									<p>{selectedRegistration.agency_name}</p>
								</div>
								<div>
									<label className="font-semibold">Full Name</label>
									<p>{selectedRegistration.full_name}</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="font-semibold flex items-center gap-2">
										<Mail className="w-4 h-4" />
										Email
									</label>
									<p>{selectedRegistration.email}</p>
								</div>
								<div>
									<label className="font-semibold flex items-center gap-2">
										<Phone className="w-4 h-4" />
										Phone
									</label>
									<p>{selectedRegistration.phone_number}</p>
								</div>
							</div>

							{(selectedRegistration.vat_number || selectedRegistration.iata_number) && (
								<div className="grid grid-cols-2 gap-4">
									{selectedRegistration.vat_number && (
										<div>
											<label className="font-semibold">VAT Number</label>
											<p>{selectedRegistration.vat_number}</p>
										</div>
									)}
									{selectedRegistration.iata_number && (
										<div>
											<label className="font-semibold">IATA Number</label>
											<p>{selectedRegistration.iata_number}</p>
										</div>
									)}
								</div>
							)}

							{(selectedRegistration.pcc_code || selectedRegistration.gds_access_code) && (
								<div className="grid grid-cols-2 gap-4">
									{selectedRegistration.pcc_code && (
										<div>
											<label className="font-semibold">PCC Code</label>
											<p>{selectedRegistration.pcc_code}</p>
										</div>
									)}
									{selectedRegistration.gds_access_code && (
										<div>
											<label className="font-semibold">GDS Access Code</label>
											<p>{selectedRegistration.gds_access_code}</p>
										</div>
									)}
								</div>
							)}

							{selectedRegistration.message && (
								<div>
									<label className="font-semibold">Message</label>
									<p className="bg-gray-50 p-3 rounded">{selectedRegistration.message}</p>
								</div>
							)}

							{(selectedRegistration.trade_license_url ||
								selectedRegistration.vat_registration_url) && (
								<div>
									<label className="font-semibold flex items-center gap-2">
										<FileText className="w-4 h-4" />
										Uploaded Documents
									</label>
									<div className="space-y-2">
										{selectedRegistration.trade_license_url && (
											<div>
												<a
													href={selectedRegistration.trade_license_url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:underline flex items-center gap-2"
												>
													<Download className="w-4 h-4" />
													Trade License
												</a>
											</div>
										)}
										{selectedRegistration.vat_registration_url && (
											<div>
												<a
													href={selectedRegistration.vat_registration_url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:underline flex items-center gap-2"
												>
													<Download className="w-4 h-4" />
													VAT Registration
												</a>
											</div>
										)}
									</div>
								</div>
							)}

							<div className="flex items-center gap-4 pt-4 border-t">
								<div>
									<label className="font-semibold flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										Submitted
									</label>
									<p>{new Date(selectedRegistration.created_at).toLocaleString()}</p>
								</div>
								<div>
									<label className="font-semibold">Status</label>
									<div>{getStatusBadge(selectedRegistration.status)}</div>
								</div>
							</div>

							<div className="flex gap-2 pt-4">
								<Button
									onClick={() => updateStatus(selectedRegistration.id, "approved")}
									className="bg-green-600 hover:bg-green-700"
								>
									<CheckCircle className="w-4 h-4 mr-2" />
									Approve
								</Button>
								<Button
									onClick={() => updateStatus(selectedRegistration.id, "rejected")}
									variant="destructive"
								>
									<XCircle className="w-4 h-4 mr-2" />
									Reject
								</Button>
								<Button
									onClick={() => updateStatus(selectedRegistration.id, "pending")}
									variant="outline"
								>
									<Clock className="w-4 h-4 mr-2" />
									Mark Pending
								</Button>
							</div>
						</div>
					</DialogContent>
				</Dialog>
			)}
		</div>
	)
}
