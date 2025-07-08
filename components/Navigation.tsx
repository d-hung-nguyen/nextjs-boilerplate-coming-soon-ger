"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Home } from "lucide-react"

export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center">
                        <Home className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Global Elite</span>
                    </Link>
                    
                    <div className="flex items-center space-x-4">
                        <Link href="/ltp">
                            <Button variant="ghost">LTP Portal</Button>
                        </Link>
                        <Link href="/downloads">
                            <Button variant="ghost">
                                <Download className="w-4 h-4 mr-2" />
                                Downloads
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}