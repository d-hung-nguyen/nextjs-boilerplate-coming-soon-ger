"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion } from "framer-motion"
import HeroImage from "@/components/HeroImage"
import Form from "@/components/Form"
import { Download, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function JointLTP() {
	return (
		<>
			<HeroImage
				backgroundImage="/images/a7.webp"
				logo1="/images/em-l.svg"
				logo2="/images/logo.svg"
				title="Join the Luxury Travel Partner Program"
				subtitle="Register now and enjoy exclusive benefits"
				showScrollIndicator={false}
			/>
			<Form />
		</>
	)
}
