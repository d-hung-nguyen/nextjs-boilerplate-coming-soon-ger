import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"

export default function Hero() {
	return (
		<>
			<section className="relative w-full h-svh overflow-hidden flex items-start justify-center bg-black">
				{/* Background Video */}
				<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full opacity-35 object-cover object-center z-0">
					<source
						src="https://www-addresshotels-com.azureedge.net/wp-content/uploads/2024/11/Address-Hotels-Landscape-Video.mp4"
						type="video/mp4"
					/>
				</video>

				{/* Overlay Content */}

				<div className="relative z-10 text-white text-center px-4 md:px-8 lg:px-16 xl:px-32">
					<div className="my-6 flex justify-center">
						<Image src="/images/ge2.png" alt="Address Hotels + Resorts" width={200} height={100} className="h-4 w-auto" />
					</div>
					<Separator className="w-full mx-auto border-white border-b-1 mb-30" />
					<div className="mb-6 flex justify-center">
						<Image src="/images/logo.svg" alt="Address Hotels + Resorts" width={200} height={100} className="h-80 w-auto" />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Partner with us and be part of the selected few</h1>
					<p className="text-lg md:text-xl text-white/80 mb-6">
						At Address Hotels + Resorts, luxury is not just a promise—it is a lifestyle.
					</p>
				</div>

				{/* Decorative Elements */}
			</section>
		</>
	)
}
