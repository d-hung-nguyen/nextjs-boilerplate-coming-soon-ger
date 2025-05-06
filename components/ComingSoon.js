import React from "react"

const ComingSoon = () => {
	return (
		<div className="font-[Alta,_Montserrat,_sans-serif] text-white">
			{/* Hero Section */}
			<section className="relative h-screen flex flex-col justify-center items-center text-center">
				<video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover object-center opacity-80 -z-10">
					<source
						src="https://cdn.prod.website-files.com/66df2740774eab1cc398361c/66df2741774eab1cc39836b4_pexels-taryn-elliott-6473325-transcode.webm"
						type="video/webm"
					/>
				</video>
				{/* Dark overlay for readability */}
				<div className="absolute inset-0 bg-black/50" />
				<img
					src="https://cdn.prod.website-files.com/66df2740774eab1cc398361c/66fa9e7e3edb846efe8e9920_2.png"
					alt="Global Elite Logo"
					className="max-w-[300px] mb-10"
				/>
				<h1 className="text-7xl font-bold">Coming Soon</h1>
			</section>

			{/* Contact Section */}
			<section className="bg-black py-16 px-4 text-center">
				<h2 className="text-4xl font-bold mb-4">Let's Talk</h2>
				<p className="font-light text-lg max-w-xl mx-auto mb-8">
					Contact us today to evaluate bespoke opportunities through a new lens!
				</p>
				<div className="text-sm opacity-80 space-y-2">
					<p>
						Patricia de Mayer –{" "}
						<a href="mailto:pdemayer@globaleliteassociates.com" className="underline">
							pdemayer@globaleliteassociates.com
						</a>{" "}
						– +49&nbsp;173&nbsp;306&nbsp;4859
					</p>
					<p>
						Hung Nguyen –{" "}
						<a href="mailto:hung@globaleliteassociates.com" className="underline">
							hung@globaleliteassociates.com
						</a>{" "}
						– +49&nbsp;1622&nbsp;655&nbsp;243
					</p>
				</div>
			</section>
		</div>
	)
}

export default ComingSoon
