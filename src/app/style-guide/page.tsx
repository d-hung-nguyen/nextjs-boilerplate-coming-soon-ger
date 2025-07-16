// "use client"
// pages/style-guide.jsx

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StyleGuide() {
    return (
        <main className="container mx-auto p-8 max-w-6xl">
            <div className="mb-12">
                <h1 className="text-4xl font-bold luxury-text mb-4">Style Guide</h1>
                <p className="text-lg text-muted-foreground">
                    Design system and component library for Global Elite & Associates
                </p>
            </div>

            {/* COLORS */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Color Palette</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        { name: "primary", label: "Primary" },
                        { name: "secondary", label: "Secondary" },
                        { name: "accent", label: "Accent" },
                        { name: "muted", label: "Muted" },
                        { name: "destructive", label: "Destructive" },
                        { name: "card", label: "Card" },
                        { name: "popover", label: "Popover" },
                        { name: "background", label: "Background" },
                    ].map(({ name, label }) => (
                        <Card key={name} className="border-0 shadow-sm">
                            <CardContent className="p-4">
                                <div
                                    className="w-full h-20 rounded-lg border mb-3"
                                    style={{ backgroundColor: `hsl(var(--${name}))` }}
                                />
                                <div className="space-y-1">
                                    <p className="font-medium text-sm">{label}</p>
                                    <code className="text-xs text-muted-foreground">--{name}</code>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* TYPOGRAPHY */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Typography</h2>
                <div className="space-y-8">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-6 space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">H1. Heading One</h1>
                                <p className="text-muted-foreground">
                                    Primary heading for hero sections and page titles. The quick brown fox jumps over the lazy dog.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">H2. Heading Two</h2>
                                <p className="text-muted-foreground">
                                    Section headings with <strong>bold text</strong>, <em>italic emphasis</em>, and <code className="bg-muted px-1 rounded">inline code</code>.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">H3. Heading Three</h3>
                                <p className="text-sm text-muted-foreground">Subsection headings with smaller supporting text.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">H4. Heading Four</h4>
                                <p className="luxury-text luxury-text--gold">
                                    Luxury text utility with gold gradient effect for premium branding.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* BUTTONS */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Buttons</h2>
                <div className="grid gap-8">
                    {/* Primary Buttons */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Primary Buttons</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Button size="sm" className="btn-primary">
                                    Small Primary
                                </Button>
                                <Button className="btn-primary">
                                    Default Primary
                                </Button>
                                <Button size="lg" className="btn-primary">
                                    Large Primary
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Secondary Buttons */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Secondary Buttons</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Button size="sm" className="btn-secondary">
                                    Small Secondary
                                </Button>
                                <Button className="btn-secondary">
                                    Default Secondary
                                </Button>
                                <Button size="lg" className="btn-secondary">
                                    Large Secondary
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Variant Buttons */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Button Variants</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Button variant="destructive">
                                    Destructive
                                </Button>
                                <Button variant="outline">
                                    Outline
                                </Button>
                                <Button variant="ghost">
                                    Ghost
                                </Button>
                                <Button variant="link">
                                    Link
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* LUXURY TEXT UTILITIES */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Luxury Text Utilities</h2>
                <Card className="border-0 shadow-sm">
                    <CardContent className="p-6 space-y-6">
                        <div>
                            <h4 className="font-semibold mb-2">Gold Gradient Text</h4>
                            <p className="luxury-text luxury-text--gold text-2xl font-bold">
                                LUXURY HOSPITALITY EXCELLENCE
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">White Gradient Text</h4>
                            <div className="bg-black p-4 rounded">
                                <p className="luxury-text luxury-text--white text-2xl font-bold">
                                    PREMIUM EUROPEAN REPRESENTATION
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Premium Text Shadow</h4>
                            <p className="luxury-text luxury-text--premium text-2xl font-bold">
                                GLOBAL ELITE & ASSOCIATES
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* CARDS */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Cards</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="card">
                        <CardHeader>
                            <CardTitle>Default Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Standard card with hover effects and shadows.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="card border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-primary">Branded Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Card with primary brand colors and styling.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="card bg-gradient-to-br from-primary/10 to-accent/10">
                        <CardHeader>
                            <CardTitle>Gradient Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Card with subtle gradient background.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* BADGES */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Badges</h2>
                <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="default">Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20">Custom</Badge>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* UTILITY CLASSES */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Utility Classes</h2>
                <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Typography Utilities</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><code className="bg-muted px-2 py-1 rounded">.luxury-text</code> – Base luxury text styling</li>
                                    <li><code className="bg-muted px-2 py-1 rounded">.luxury-text--gold</code> – Gold gradient effect</li>
                                    <li><code className="bg-muted px-2 py-1 rounded">.luxury-text--white</code> – White gradient effect</li>
                                    <li><code className="bg-muted px-2 py-1 rounded">.luxury-text--premium</code> – Premium text shadow</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Component Utilities</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><code className="bg-muted px-2 py-1 rounded">.card</code> – Enhanced card styling</li>
                                    <li><code className="bg-muted px-2 py-1 rounded">.btn-primary</code> – Primary button styling</li>
                                    <li><code className="bg-muted px-2 py-1 rounded">.btn-secondary</code> – Secondary button styling</li>
                                    <li><code className="bg-muted px-2 py-1 rounded">.hero-overlay</code> – Gradient overlay for hero sections</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* RESPONSIVE DEMO */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Responsive Layout</h2>
                <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-primary/10 p-4 rounded text-center">
                                    <p className="text-sm font-medium">Grid Item {i}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop
                        </p>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}
