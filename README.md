# Global Elite - Luxury Travel Partner Programme

A premium coming soon website for Global Elite, the luxury travel partner programme by Address Hotels + Resorts. Built with Next.js 15, featuring video backgrounds, elegant animations, and a sophisticated design befitting a luxury travel brand.

## 🌟 Features

-  **Video Hero Section** - Immersive full-screen video background with overlay
-  **Luxury Design** - Premium UI components with custom fonts (Lagusans & Alta)
-  **Responsive Layout** - Optimized for all devices and screen sizes
-  **Performance Optimized** - Built with Next.js 15 and Turbopack for lightning-fast development
-  **SEO Ready** - Complete metadata and Open Graph configuration
-  **Form Integration** - Lead capture form for partner applications
-  **Modern Tech Stack** - React 19, TypeScript, Tailwind CSS, Framer Motion

## 🚀 Quick Start

### Prerequisites

-  Node.js 18+
-  npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd nextjs-boilerplate-coming-soon-ger

# Install dependencies
npm install

# Start development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── src/app/                 # App Router pages and layouts
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   └── ltp/                # Luxury Travel Partner portal
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components (buttons, cards, etc.)
│   ├── Hero.jsx           # Video hero section
│   └── Form.jsx           # Partner application form
├── public/                 # Static assets
│   ├── images/            # Images and logos
│   └── video/             # Background videos
└── src/styles/            # Global styles and CSS
```

## 🎨 Design System

### Fonts

-  **Lagusans Light** - Primary brand font
-  **Alta** - Secondary/accent font

### Colors

-  Premium color palette optimized for luxury travel
-  OKLCH color space for better color accuracy
-  Dark/light mode support

### Components

-  Custom video wrapper with loading states
-  Responsive card layouts
-  Elegant form components
-  Smooth animations with Framer Motion

## 🛠 Tech Stack

-  **Framework**: Next.js 15 (App Router)
-  **Language**: TypeScript
-  **Styling**: Tailwind CSS
-  **UI Components**: Radix UI
-  **Animations**: Framer Motion
-  **Analytics**: Vercel Analytics
-  **Build Tool**: Turbopack

## 📱 Pages

### Homepage (`/`)

-  Full-screen video hero with Global Elite branding
-  Coming soon message with call-to-action
-  Responsive design with mobile optimization

### LTP Portal (`/ltp`)

-  Luxury Travel Partner programme details
-  Feature showcase with image galleries
-  Partner application form
-  Programme benefits and exclusives

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://globaleliteassociates.com
# Add other environment variables as needed
```

### Next.js Config

Optimized configuration includes:

-  Image optimization for luxury photography
-  Turbopack for faster development
-  Security headers
-  Performance optimizations

## 📈 Performance

-  **Lighthouse Score**: 95+
-  **Core Web Vitals**: Optimized
-  **Image Optimization**: WebP/AVIF format support
-  **Font Loading**: Optimized with `next/font`
-  **Bundle Size**: Minimized with tree shaking

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Connect to Vercel
vercel

# Deploy
vercel --prod
```

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 Brand Guidelines

This website represents the Global Elite luxury travel brand:

-  Maintain elegant, sophisticated design
-  Use high-quality imagery and videos
-  Ensure premium user experience
-  Follow accessibility best practices

## 📞 Support

For questions about the Global Elite programme:

-  Website: [globaleliteassociates.com](https://globaleliteassociates.com)
-  Email: [contact information]

## 📝 License

© 2025 Address Hotels + Resorts. All rights reserved.

---

Built with ❤️ using Next.js and modern web technologies.
