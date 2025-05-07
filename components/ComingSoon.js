import React from "react"

const ComingSoon = () => {
	return (
		<div className="font-[Alta,_Montserrat,_sans-serif] text-white">
			{/* Hero Section */}
			<section className="relative h-screen flex flex-col justify-center items-center text-center">
				<video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover object-center opacity-80 -z-10">
					<source src="/video/background-video.webm" type="video/webm" />
				</video>
				{/* Dark overlay for readability */}
				<div className="absolute inset-0 bg-black/50" />
				<img src="/images/global-elite-logo.png" alt="Global Elite Logo" className="max-w-[600px] mb-10" />
				<h1 className="text-5xl font-bold">Coming Soon</h1>
			</section>

			{/* Contact Section */}
			<section className="bg-black py-20 px-6 text-center">
				<h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
				<p className="font-light text-lg max-w-2xl mx-auto mb-12">
					Contact us today to evaluate bespoke opportunities through a new lens!
				</p>

				<div className="flex flex-col md:flex-row justify-center items-center gap-10 text-sm md:text-base opacity-90">
					<div className="space-y-2 text-center">
						<p className="font-semibold">Patricia de Mayer</p>
						<p>
							<a href="mailto:pdemayer@globaleliteassociates.com" className="underline">
								pdemayer@globaleliteassociates.com
							</a>
						</p>
						<p>+49&nbsp;173&nbsp;306&nbsp;4859</p>
					</div>

					<div className="space-y-2 text-center">
						<p className="font-semibold">Hung Nguyen</p>
						<p>
							<a href="mailto:hung@globaleliteassociates.com" className="underline">
								hung@globaleliteassociates.com
							</a>
						</p>
						<p>+49&nbsp;1622&nbsp;655&nbsp;243</p>
					</div>
					<p className="text-sm md:text-base font-light text-gray-400 mt-10">
						<span className="font-semibold">Global Elite & Associates</span> is a leading European company specializing in
						representing luxury hospitality brands. We offer tailored services to enhance the visibility of exclusive hotels in key
						European markets. Our offices are strategically located in Frankfurt, London, Paris, and Bucharest.
					</p>
				</div>
			</section>
		</div>
	)
}

export default ComingSoon
