// pages/style-guide.jsx

import React from "react"
import { Button } from "@/components/ui/button"

export default function StyleGuide() {
	return (
		<main className="prose mx-auto p-8">
			{/* COLORS */}
			<section>
				<h2>Color Palette</h2>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{["primary", "secondary", "accent", "muted", "destructive", "card", "popover"].map(
						name => (
							<div key={name} className="flex flex-col items-center">
								<div
									className="w-24 h-24 rounded-lg border"
									style={{ backgroundColor: `var(--${name})` }}
								/>
								<small>--{name}</small>
							</div>
						)
					)}
				</div>
			</section>

			{/* TYPOGRAPHY */}
			<section>
				<h2>Typography</h2>
				<div className="space-y-6">
					<div>
						<h1>H1. Heading One</h1>
						<p>Body copy example under H1. The quick brown fox jumps over the lazy dog.</p>
					</div>
					<div>
						<h2>H2. Heading Two</h2>
						<p>
							Some <strong>bold</strong>, <em>italic</em>, and <code>inline code</code>.
						</p>
					</div>
					<div>
						<h3>H3. Heading Three</h3>
						<p className="text-sm">Small text example.</p>
					</div>
					<div>
						<h4>H4. Heading Four</h4>
						<p className="luxury-text luxury-text--gold luxury-text--medium">
							Luxury-text utility in gold.
						</p>
					</div>
				</div>
			</section>

			{/* BUTTONS */}
			<section>
				<h2>Buttons</h2>
				<div className="flex flex-wrap gap-4 items-center">
					<Button size="sm">Small Button</Button>
					<Button size="md">Default Button</Button>
					<Button size="lg">Large Button</Button>
					<Button variant="destructive" size="md">
						Destructive
					</Button>
				</div>
			</section>

			{/* UTILITIES */}
			<section>
				<h2>Utility Classes</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>.text-luxury</code> – uppercase luxury text
					</li>
					<li>
						<code>.text-luxury-gradient</code> – gradient clipped text
					</li>
					<li>
						<code>.perspective-1000</code> + <code>.rotate-x-2</code>/<code>.rotate-y-1</code> – 3D
						transforms
					</li>
					<li>
						<code>.transform-gpu</code> – force GPU acceleration
					</li>
					<li>
						<code>.logo-white</code> – invert filter for logos
					</li>
				</ul>
				<div className="mt-4 flex gap-4">
					<div className="perspective-1000 transform-gpu rotate-x-2 rotate-y-1 p-4 border">
						3D card
					</div>
					<div className="flex items-center gap-2">
						<span className="text-luxury">Luxury Text</span>
						<span className="text-luxury-gradient">Gradient</span>
					</div>
				</div>
			</section>

			{/* VIDEO DEMO */}
			<section>
				<h2>Fullscreen Video Wrapper</h2>
				<div className="border">
					{/* This is just a placeholder; to see your actual component in action, import and render it here. */}
					<p>Insert your &lt;FullscreenVideoWrapper&gt; demo here.</p>
				</div>
			</section>
		</main>
	)
}
