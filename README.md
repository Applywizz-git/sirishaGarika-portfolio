# DevOps Engineer Portfolio - Sirisha Garika

A modern, animated, and responsive portfolio website showcasing DevOps expertise, projects, and professional experience. Built with cutting-edge web technologies and designed with attention to micro-interactions and visual storytelling.

## 🌐 Live Demo

- **Production**: [https://applywizz-sirishagarika.vercel.app](https://applywizz-sirishagarika.vercel.app)
- **Portfolio URL**: Available on deployment

## 🎯 About

This portfolio represents **Sirisha Garika**, a results-driven DevOps Engineer with 3+ years of experience specializing in:
- CI/CD Pipeline Automation
- Cloud Infrastructure (AWS, Azure, GCP)
- Container Orchestration (Kubernetes)
- Infrastructure as Code (Terraform, Ansible)
- DevSecOps Practices
- Monitoring & Observability

## 🚀 Tech Stack

### Core Technologies
- **React 18** - Modern component-based UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Animation & Interactions
- **Framer Motion** - Production-ready motion library for React
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Swiper.js** - Modern touch slider for project carousel
- **React Type Animation** - Typewriter effect for hero section
- **React CountUp** - Animated counter for statistics

### UI Components
- **shadcn/ui** - Re-usable component collection
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful & consistent icon set

### Additional Libraries
- **React Router DOM** - Client-side routing
- **TanStack Query** - Powerful data synchronization
- **Sonner** - Toast notifications

## ✨ Features

### Design & UX
- 🎨 **Dark-mode First Design** with glassmorphism effects
- 🌊 **Smooth Scroll Animations** using AOS
- ⚡ **Micro-interactions** with Framer Motion
- 🎯 **Responsive Layout** for all devices
- 💫 **Animated Statistics** with CountUp
- ⌨️ **Typewriter Effect** in hero section
- 🎪 **3D Project Carousel** with Swiper
- 🌈 **Gradient Accents** inspired by DevOps pipelines
- 🔮 **Glow Effects** on interactive elements

### Sections
1. **Header** - Sticky navigation with scroll detection
2. **Hero** - Animated introduction with key metrics
3. **About** - Professional summary and core competencies
4. **Experience** - Timeline view of work history
5. **Projects** - 3D carousel showcase of key projects
6. **Skills** - Comprehensive technology stack display
7. **Certifications** - Industry-recognized credentials
8. **Education** - Academic background
9. **Contact** - Interactive contact form
10. **Footer** - Quick links and social connections

### Performance Optimizations
- Code splitting with React lazy loading
- Optimized asset loading
- Minimal bundle size
- Tree-shaking of unused code
- Production-ready build optimizations

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **bun**

### Setup Steps

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start development server
npm run dev
# or
yarn dev
# or
bun dev

# Build for production
npm run build
# or
yarn build
# or
bun build

# Preview production build
npm run preview
# or
yarn preview
# or
bun preview
```

The development server will start at `http://localhost:8080`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with stats
│   │   ├── About.tsx        # About section
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Projects.tsx     # Projects carousel
│   │   ├── Skills.tsx       # Technical skills grid
│   │   ├── Certification.tsx # Certifications display
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer section
│   ├── pages/
│   │   ├── Index.tsx        # Main portfolio page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/
│   │   ├── use-mobile.tsx   # Mobile detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & design tokens
├── index.html
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary: hsl(210 100% 56%)      /* Electric Blue */
--accent: hsl(173 80% 40%)         /* Cyan */
--secondary: hsl(217 33% 17%)      /* Dark Slate */

/* Dark Mode Background */
--background: hsl(210 50% 6%)      /* Deep Navy */
--card: hsl(217 33% 10%)           /* Darker Card */

/* Special Effects */
--glass-bg: hsla(255, 255%, 255%, 0.03)    /* Glassmorphism */
--glass-border: hsla(255, 255%, 255%, 0.08)
--shadow-glow: 0 0 50px hsla(173, 80%, 40%, 0.4)
```

### Animations
- **fade-in** - Smooth entrance animations
- **fade-in-up** - Elements rising into view
- **slide-in-right** - Horizontal slide animations
- **glow-pulse** - Pulsing glow effect
- **float** - Gentle floating motion

### Custom Utilities
```css
.text-gradient        /* Gradient text effect */
.glass-card          /* Glassmorphism card style */
.glow-effect         /* Glowing shadow effect */
```

## 📋 Content

All content is sourced from **Sirisha Garika's** professional resume:

### Contact Information
- **Name**: Sirisha Garika
- **Location**: Youngstown, OH
- **Phone**: +1 (330) 651-7991
- **Email**: Sirishagarika06@gmail.com
- **Portfolio**: https://applywizz-sirishagarika.vercel.app

### Professional Highlights
- 3+ years of DevOps experience
- 40% reduction in release time
- 30% reduction in downtime
- 75% reduction in critical security incidents
- Multi-cloud expertise (AWS, Azure, GCP)
- Kubernetes and container orchestration
- CI/CD automation specialist

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Manual Deployment
```bash
# Build the project
npm run build

# The 'dist' folder contains the production build
# Upload the contents to your hosting provider
```

## 🎯 Customization

### Updating Content
1. **Personal Information**: Edit `src/components/Hero.tsx`
2. **Experience**: Modify `src/components/Experience.tsx`
3. **Projects**: Update `src/components/Projects.tsx`
4. **Skills**: Customize `src/components/Skills.tsx`
5. **Certifications**: Edit `src/components/Certification.tsx`
6. **Education**: Modify `src/components/Education.tsx`

### Changing Colors
Edit design tokens in `src/index.css`:
```css
:root {
  --primary: <your-hsl-color>;
  --accent: <your-hsl-color>;
  /* ... other colors */
}
```

### Adding/Removing Sections
Edit `src/pages/Index.tsx` and add/remove component imports and JSX.

### Modifying Animations
Adjust animation timings in `tailwind.config.ts`:
```typescript
animation: {
  'your-animation': 'your-animation 1s ease-in-out',
}
```

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- Development server settings
- Build optimizations
- Path aliases

### Tailwind Configuration (`tailwind.config.ts`)
- Design system tokens
- Custom animations
- Responsive breakpoints

### TypeScript Configuration (`tsconfig.json`)
- Compiler options
- Path mappings
- Type checking rules

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

### Technologies
- React Team for React
- Vercel for Vite
- Tailwind Labs for Tailwind CSS
- shadcn for UI components
- Framer for Framer Motion
- Michał Sajnóg for AOS
- Vladimir Kharlampidi for Swiper

### Design Inspiration
- Modern DevOps platforms
- Senior engineer portfolios
- Glassmorphism design trends
- Terminal-inspired aesthetics

## 📞 Contact

For questions or opportunities:
- **Email**: Sirishagarika06@gmail.com
- **Phone**: +1 (330) 651-7991
- **LinkedIn**: [Connect on LinkedIn]
- **GitHub**: [View GitHub Profile]

---

**Built with ❤️ by Sirisha Garika**

*Last Updated: 2025*
