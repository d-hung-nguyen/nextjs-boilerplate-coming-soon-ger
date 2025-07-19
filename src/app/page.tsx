import ComingSoon, { ContactSection } from "@/components/ComingSoon"
import Footer from "@/components/Footer"
import { Contact } from "lucide-react"

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			<ComingSoon />
			<ContactSection />
		</div>
	)
}
