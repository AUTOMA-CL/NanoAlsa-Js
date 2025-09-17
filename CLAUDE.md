# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NanoAlsa Corporate Website** - A modern React-based static website for NanoAlsa, a Chilean company specializing in high-purity nanometals (Copper and Silver only).

## Essential Commands

```bash
# Install dependencies
npm install

# Start development server (port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Architecture & Key Files

### Core Stack
- **Framework**: React 18.2 + Vite 4.4
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Icons**: React Icons 4.11 (no external CDNs)
- **Utilities**: react-intersection-observer, react-countup

### Data Flow Architecture
- **Single Source of Truth**: All content centralized in `src/data/content.js`
- **Static Site**: No backend/database - all data is hardcoded
- **Component Structure**: Sections consume data from content.js and render with animations

### Critical Business Rules

1. **Products**: ONLY Nano Copper (Cu) and Nano Silver (Ag) - never add Gold, Iron, Aluminum or others
2. **Tagline**: Always "Nanometales de Alta Pureza" (NOT "de Precisión")
3. **Images**: Use images from `/public/images/` directory (copied from proyecto base/image/)
4. **SEO**: Meta tags are already optimized in index.html - maintain structure
5. **Icons**: Use React Icons library exclusively - no FontAwesome or external CDNs

### Key Component Hierarchy

```
App.jsx
├── Header (sticky navigation)
├── Main
│   ├── Hero (hero2.png background)
│   ├── About ("Excelencia en Nanotecnología")
│   ├── Products (Cu & Ag product cards)
│   ├── Industries (6 industry applications)
│   ├── Certifications (PUC & USACH)
│   ├── Research (PDF download section)
│   └── Contact (form + contact info)
├── Footer
├── ScrollProgress (top bar)
└── BackToTop (floating button)
```

### Color System

```javascript
// Primary colors
primary.blue: '#1e40af'
primary.darkBlue: '#1e3a8a'

// Product colors
copper: '#ea580c'  // Orange for Nano Copper
silver: '#94a3b8'  // Silver gray for Nano Silver

// Industry colors (for cards)
defense: '#dc2626'
aerospace: '#2563eb'
energy: '#16a34a'
electronics: '#9333ea'
catalysis: '#6366f1'
medicine: '#14b8a6'
```

## Development Workflow

### Modifying Content
1. Edit `src/data/content.js` for all text/data changes
2. Component files only contain structure and animations
3. Images referenced in content.js point to `/images/` path

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and consume data from `content.js`
3. Apply standard animation patterns (fade-in + slide-up)
4. Add to App.jsx in correct order

### Animation Patterns
- All sections use Framer Motion with intersection observer
- Standard pattern: fade-in + slide-up on scroll
- Cards have hover scale effects
- Maintain 60fps performance

## Project Constraints

- **No Database**: This is a static site - all data must be hardcoded
- **Offline First**: All resources must be local (no external CDNs)
- **Performance**: Keep Lighthouse score > 95
- **SEO Critical**: Maintain existing meta tags structure
- **Company Products**: Only Nano Cu and Nano Ag (strictly enforced)

## Contact Information

- **Client**: José Antonio Cox
- **Email**: jacox@nanoalsa.com
- **Company**: NanoAlsa
- **Location**: Santiago, Chile