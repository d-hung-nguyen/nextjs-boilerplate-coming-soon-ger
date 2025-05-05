import React from "react"

const ComingSoon = () => {
	return (
		<div
			style={{
				fontFamily: "Alta, Montserrat, sans-serif",
				backgroundColor: "white",
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
				style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}>
				<source
					src="https://cdn.prod.website-files.com/66df2740774eab1cc398361c/66df2741774eab1cc39836b4_pexels-taryn-elliott-6473325-transcode.mp4"
					type="video/mp4"
				/>
				<source
					src="https://cdn.prod.website-files.com/66df2740774eab1cc398361c/66df2741774eab1cc39836b4_pexels-taryn-elliott-6473325-transcode.webm"
					type="video/webm"
				/>
			</video>
			<img
				src="https://cdn.prod.website-files.com/66df2740774eab1cc398361c/66fa9e7e3edb846efe8e9920_2.png"
				alt="Global Elite Logo"
				style={{ maxWidth: "300px", marginBottom: "40px" }}
			/>
			<h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "10px" }}>Coming Soon</h1>
			<p style={{ fontWeight: 300, fontSize: "1.2rem", maxWidth: "500px", margin: "0 auto 30px" }}>
				We are crafting something exceptional in bespoke luxury hospitality. Stay tuned for the launch of our new digital experience.
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
	)
}

export default ComingSoon
