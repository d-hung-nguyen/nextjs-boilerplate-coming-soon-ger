import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
	// Base styles for all buttons
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
	{
		variants: {
			variant: {
				// Primary luxury button
				default:
					"bg-gradient-to-r from-gray-900 to-black text-white shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 focus-visible:ring-gray-900/30 transform hover:-translate-y-0.5 hover:scale-105",

				// Destructive/Warning button
				destructive:
					"bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl hover:from-red-500 hover:to-red-600 focus-visible:ring-red-500/30 transform hover:-translate-y-0.5",

				// Outline luxury button
				outline:
					"border-2 border-gray-900 bg-transparent text-gray-900 shadow-sm hover:bg-gray-900 hover:text-white hover:shadow-lg focus-visible:ring-gray-900/30 transform hover:-translate-y-0.5 transition-all duration-300",

				// Secondary luxury button (gold accent)
				secondary:
					"bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-500 focus-visible:ring-yellow-500/30 transform hover:-translate-y-0.5 font-semibold",

				// Ghost button
				ghost:
					"bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500/20 transition-colors duration-200",

				// Link style
				link: "text-gray-900 underline-offset-4 hover:underline hover:text-yellow-600 transition-colors duration-200 font-medium",

				// Luxury outline variant
				luxury:
					"border-2 border-gradient-to-r from-yellow-500 to-yellow-600 bg-transparent text-gray-900 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white shadow-sm hover:shadow-lg focus-visible:ring-yellow-500/30 transform hover:-translate-y-0.5 transition-all duration-300",
			},
			size: {
				sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
				default: "h-10 px-6 py-2 text-sm gap-2",
				lg: "h-12 px-8 py-3 text-base gap-2.5 rounded-xl",
				xl: "h-14 px-10 py-4 text-lg gap-3 rounded-xl",
				icon: "h-10 w-10 rounded-lg",
				"icon-sm": "h-8 w-8 rounded-md",
				"icon-lg": "h-12 w-12 rounded-xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

function Button({
	className,
	variant,
	size,
	asChild = false,
	children,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}): React.JSX.Element {
	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		>
			{/* Shimmer effect for luxury buttons */}
			{(variant === "default" || variant === "secondary" || variant === "luxury") && (
				<div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 skew-x-12 group-hover:animate-shimmer" />
			)}
			{children}
		</Comp>
	)
}

export { Button, buttonVariants }
