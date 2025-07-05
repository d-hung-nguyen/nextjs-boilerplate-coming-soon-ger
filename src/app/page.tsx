import ComingSoon from "@/components/ComingSoon"
import { Metadata } from "next"
import RootLayout from "./layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<RootLayout>
			<ComingSoon />
			<Button className="mt-10" asChild>
				<Link href="/ltp">Explore LTP Portal</Link>
			</Button>
		</RootLayout>
	)
}
