# Chai Culture - Landing Page

A premium, scroll-driven "Coming Soon" experience for Chai Culture, featuring immersive 3D animations and royal heritage aesthetics.

![Chai Culture](https://img.shields.io/badge/Status-Coming%20Soon-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000?style=for-the-badge&logo=three.js)

## 🎯 Overview

**Tagline:** *"Brew the Royal Tradition"*

Chai Culture is a premium instant chai tea premix brand inspired by royal Indian households. This landing page delivers an elegant, scroll-driven storytelling experience that combines:

- **3D WebGL Scene** with floating golden particles
- **Smooth scroll animations** powered by React Three Fiber
- **Royal aesthetic** with warm golds, deep browns, and cream tones
- **Parallax image sections** showcasing heritage and craftsmanship
- **Email capture form** for exclusive early access

## ✨ Features

- **Immersive 3D Environment**: Floating gold particles that respond to scroll
- **Cinematic Camera Movement**: Smooth orbital camera path synced with content sections
- **Scroll-Driven Storytelling**: Four distinct sections revealing the brand narrative
- **Premium Images**: AI-generated royal-themed visuals (spices, steam, palace textures)
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Email Signup**: Functional form for collecting early access requests
- **Performance Optimized**: Lazy loading, efficient rendering, minimal bundle size

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Font**: Playfair Display (serif) + Lato (sans-serif)

## 📦 Installation

```bash
# Clone the repository
git clone git@github.com:Aryaneefds/CC_landing_page.git
cd CC_landing_page

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

**Color Palette:**
- `chai-bg`: #0F0C0A (Deep Brown)
- `chai-gold`: #D4AF37 (Royal Gold)
- `chai-warm`: #E8DEC9 (Warm Beige)
- `chai-dark`: #1a1612 (Dark Chocolate)
- `chai-accent`: #C28E5C (Chai Brown)

**Typography:**
- Headers: Playfair Display (Serif)
- Body: Lato (Sans-serif)

## 📁 Project Structure

```
src/
├── components/
│   ├── canvas/
│   │   ├── Scene.tsx          # Main 3D canvas with ScrollControls
│   │   ├── Particles.tsx      # Floating gold particles
│   │   ├── RoyalEnvironment.tsx # Lighting and fog
│   │   └── ChaiVessel.tsx     # (Removed) 3D vessel component
│   └── ui/
│       └── Overlay.tsx        # HTML content overlay with sections
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
├── index.css                  # Global styles + Tailwind
└── lib/
    └── utils.ts               # Utility functions

public/
├── royal_spices.png           # Spices on brass plate
├── chai_steam.png             # Steaming chai glass
└── royal_texture.png          # Mughal pattern texture
```

## 🎬 Scroll Journey

1. **Opening Scene** - Brand name reveal with "Brew the Royal Tradition" tagline
2. **The Pause, Not The Rush** - Story section with chai steam image
3. **Heritage in Every Sip** - Craft section with royal spices image
4. **Invitation** - Email capture form for early access

## 🛠️ Configuration

**Tailwind Config** (`tailwind.config.js`):
```javascript
theme: {
  extend: {
    colors: {
      'chai-bg': '#0F0C0A',
      'chai-gold': '#D4AF37',
      'chai-warm': '#E8DEC9',
      // ... more colors
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Lato', 'sans-serif'],
    }
  }
}
```

## 🐛 Known Issues & Fixes

- **WebGL Shader Errors**: Removed `SoftShadows` component (incompatible with Three.js version)
- **Mobile Scroll**: Increased `ScrollControls pages={5}` for better mobile reach
- **React StrictMode**: Disabled to avoid R3F double-render issues

## 📄 License

This project is proprietary and confidential.

## 👨‍💻 Developer

Built with ❤️ for Chai Culture

---

**Need Help?** Check the [Vite docs](https://vitejs.dev/) or [React Three Fiber docs](https://docs.pmnd.rs/react-three-fiber)
