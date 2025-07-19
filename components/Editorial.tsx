import Image from "next/image"

export function EditorialBlock({ title, text, imageSrc, reversed = false }) {
	return (
		<div
			className={`flex flex-col md:flex-row ${
				reversed ? "md:flex-row-reverse" : ""
			} items-center py-12`}
		>
			<div className="relative w-full h-64 md:h-96 md:w-1/2">
				<Image src={imageSrc} alt={title} fill className="object-cover " />
			</div>
			<div className="md:w-1/2 p-6">
				<h2 className="text-3xl font-alta mb-4 text-gray-900">{title}</h2>
				<p className="text-readable leading-relaxed">{text}</p>
			</div>
		</div>
	)
}
