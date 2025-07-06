import React from "react"

const ComingSoon = () => {
	return (
		<div className="font-[Alta,_Montserrat,_sans-serif] text-white">
			{/* Hero Section */}
			<section className="relative h-screen flex flex-col justify-center items-center text-center">
				<video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover object-center opacity-90 -z-10">
					<source src="/video/background-video.webm" type="video/webm" />
				</video>

				{/* Dark overlay for readability */}
				<div className="absolute inset-0 bg-slate" />
				<img src="/images/global-elite-logo.png" alt="Global Elite Logo" className="max-w-[400px] mb-10" />
				<h1 className="text-4xl font-bold">Coming Soon</h1>
			</section>

			{/* Contact Section */}
			<section className="py-20 px-6 text-center">
				<h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
				{/* Add contact form or info here */}
			</section>

			<div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 text-sm md:text-base bg-slate text-opacity-90">
				{/* Patricia */}
				<div className="space-y-2 text-center prose prose-invert">
					<p className="font-semibold">Patricia de Mayer</p>
					<p>
						<a href="mailto:pdemayer@globaleliteassociates.com" className="underline">
							pdemayer@globaleliteassociates.com
						</a>
					</p>
					<p>+49&nbsp;173&nbsp;306&nbsp;4859</p>
				</div>

				{/* Hung */}
				<div className="space-y-2 text-center prose prose-invert">
					<p className="font-semibold">Hung Nguyen</p>
					<p>
						<a href="mailto:hung@globaleliteassociates.com" className="underline">
							hung@globaleliteassociates.com
						</a>
					</p>
					<p>+49&nbsp;162&nbsp;265&nbsp;5243</p>
				</div>

				{/* About */}
				<div className="lg:col-span-1 md:col-span-2 prose prose-invert mt-6 md:mt-0 text-center md:text-left">
					<p>
						<strong>Global Elite & Associates</strong> is a leading European company specializing in representing luxury hospitality
						brands. We offer tailored services to enhance the visibility of exclusive hotels in key European markets. Our offices are
						strategically located in Frankfurt, London, Paris, and Bucharest.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ComingSoon
