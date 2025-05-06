import React from "react"

const ComingSoon = () => {
	return (
		<div>
			<div
				style={{
					fontFamily: "Alta, Montserrat, sans-serif",
					// backgroundColor removed to prevent white overlay on the video background
					color: "#fff",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					position: "relative",
				}}>
				<video
					autoPlay
					loop
					muted
					playsInline
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectPosition: "center",
						opacity: 0.8,

						objectFit: "cover",
						zIndex: -1,
					}}>
					<source
						src="https://cdn.prod.website-files.com/66df2740774eab1cc398361c/66df2741774eab1cc39836b4_pexels-taryn-elliott-6473325-transcode.webm"
						type="video/webm"
					/>
				</video>
				<div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
				<img
					src="https://cdn.prod.website-files.com/66df2740774eab1cc398361c/66fa9e7e3edb846efe8e9920_2.png"
					alt="Global Elite Logo"
					style={{ maxWidth: "300px", marginBottom: "40px" }}
				/>
				<h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "10px" }}>Coming Soon</h1>
				<h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "10px" }}>Let's Talk</h2>
				<p style={{ fontWeight: 300, fontSize: "1.2rem", maxWidth: "500px", margin: "0 auto 30px" }}>
					Contact us today to evaluate bespoke opportunities through a new lense!{" "}
				</p>
				<div style={{ fontSize: "0.9rem", opacity: 0.7 }}>
					<p>
						Patricia de Mayer -{" "}
						<a href="mailto:pdemayer@globaleliteassociates.com" style={{ color: "#fff" }}>
							pdemayer@globaleliteassociates.com
						</a>{" "}
						- +49 173 3064859
					</p>
					<p>
						Hung Nguyen -{" "}
						<a href="mailto:hung@globaleliteassociates.com" style={{ color: "#fff" }}>
							hung@globaleliteassociates.com
						</a>{" "}
						- +49 1622 655243
					</p>
				</div>
			</div>
		</div>
	)
}

export default ComingSoon
