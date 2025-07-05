import ComingSoon from "@/components/ComingSoon"
import { Metadata } from "next"
import RootLayout from "./layout"

export default function Home() {
	return (
		<RootLayout>
			<ComingSoon />
		</RootLayout>
	)
}
