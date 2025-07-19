# Development Guide

## Console Messages Explained

### ✅ Expected Messages (Not Errors)

**Vercel Analytics Debug Messages:**
```
[Vercel Web Analytics] Debug mode is enabled by default in development
[Vercel Web Analytics] Running queued event pageview
[Vercel Web Analytics] [pageview] http://localhost:3001/
```
- **What it is**: Normal development logging from Vercel Analytics
- **Action needed**: None - this is expected behavior
- **In production**: These messages won't appear

### 🔧 Development vs Production

**Development Environment:**
- Cookiebot scripts are disabled (to avoid localhost domain errors)
- Analytics is in debug mode (no data sent)
- Additional logging enabled

**Production Environment:**
- Cookiebot consent management active
- Analytics tracking enabled
- Optimized performance

## Quick Fixes for Common Issues

### Missing Icon Files
If you see 404 errors for icon files, you can:
1. Use existing favicon.svg (already created)
2. Generate proper PNG icons using tools like [favicon.io](https://favicon.io)
3. Update manifest.json with your custom icons

### Cookiebot Setup for Production
1. Ensure your domain is authorized in Cookiebot Manager
2. Verify your Cookiebot ID in `components/CookieConsent.tsx`
3. Test on staging/production environment

## Environment Variables
Copy `.env.example` to `.env.local` and configure:
```env
# Required for production
NEXT_PUBLIC_SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_key
VALID_MEMBERSHIP_NUMBERS=MEMBER123,MEMBER456

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Build Commands
```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Type checking
npx tsc --noEmit
```