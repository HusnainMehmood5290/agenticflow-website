# Web App Design & Development Framework
## Project Structure & Best Practices Guide

---

## 🏗️ Project Architecture

### Technology Stack
- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4 (Fast HMR, optimized builds)
- **Styling**: TailwindCSS 3.4.19 with custom design tokens
- **Component Library**: shadcn/ui (Radix UI primitives)
- **UI Icons**: Lucide React
- **Animations**: tailwindcss-animate + custom CSS
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Theme**: next-themes for dark/light mode

### Project Structure
```
project-root/
├── public/                          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/
│   │   └── ui/                      # Reusable UI components (shadcn)
│   ├── hooks/                       # Custom React hooks
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn helper)
│   ├── App.tsx                      # Main application component
│   ├── App.css                      # Component-specific styles
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles & Tailwind config
├── components.json                  # shadcn/ui configuration
├── tailwind.config.js               # Tailwind configuration
├── vite.config.ts                   # Vite build configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies & scripts
└── README.md                        # Documentation
```

---

## 🎨 Design System

### Color Palette
**Primary Colors:**
- Background: `#05050A` (Deep dark blue-black)
- Foreground: `#F4F6FA` (Soft white)
- Accent: `#39FF14` (Electric neon green) - Primary CTA color
- Muted Text: `#A7ACB8` (Light gray for secondary text)

**Semantic Colors:**
- Card Background: `#0B0C15` (Slightly lighter than main bg)
- Border: `rgba(244, 246, 250, 0.08)` (Subtle white with opacity)
- Destructive: `hsl(0 84.2% 60.2%)`
- Muted: `hsl(232 15% 15%)`

**CSS Variables Structure:**
```css
:root {
  --background: 240 33% 3%;           /* HSL format for easy manipulation */
  --foreground: 220 20% 97%;
  --primary: 107 100% 54%;            /* Neon green */
  --accent: 107 100% 54%;
  --radius: 1.375rem;                 /* 22px - consistent border radius */
}
```

### Typography
**Font Families:**
1. **Headings**: 'Space Grotesk' - Bold, modern geometric sans-serif
2. **Body**: 'Inter' - Clean, readable interface font
3. **Mono**: 'IBM Plex Mono' - For code/technical content

**Font Loading:**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

### Visual Effects

**1. Noise Overlay:**
```css
.noise-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.04;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,..."); /* Fractal noise SVG */
}
```

**2. Vignette Effects:**
```css
.vignette {
  background: radial-gradient(
    ellipse at center, 
    transparent 0%, 
    transparent 50%, 
    rgba(0,0,0,0.5) 100%
  );
}

.vignette-heavy {
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 30%,
    rgba(0,0,0,0.7) 100%
  );
}
```

**3. Glow Effects:**
```css
.glow-accent {
  box-shadow: 0 0 40px rgba(57, 255, 20, 0.12);
}

.glow-accent-strong {
  box-shadow: 0 0 60px rgba(57, 255, 20, 0.25);
}
```

**4. Text Gradient:**
```css
.text-gradient {
  background-image: linear-gradient(135deg, #39FF14 0%, #2dd40e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**5. Custom Scrollbar:**
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #05050A; }
::-webkit-scrollbar-thumb { background: #1a1a2e; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #39FF14; }
```

---

## 🧩 Component Architecture

### shadcn/ui Configuration
**File:** `components.json`
```json
{
  "style": "new-york",              // shadcn style variant
  "rsc": false,                     // Not using React Server Components
  "tsx": true,                      // TypeScript support
  "tailwind": {
    "baseColor": "slate",
    "cssVariables": true,           // Use CSS variables for theming
    "prefix": ""                    // No prefix for Tailwind classes
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### Component Pattern
**All UI components follow this structure:**

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

function Component({ className, ...props }: React.ComponentProps<"element">) {
  return (
    <element
      data-slot="component-name"     // For targeting in CSS
      className={cn(
        "base-classes",               // Default styling
        "state-classes",              // Hover, focus, disabled states
        className                     // Allow override from parent
      )}
      {...props}
    />
  )
}

export { Component }
```

### Button Component Example
```tsx
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "base-classes",                     // Always applied
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-white",
        outline: "border bg-background",
        ghost: "hover:bg-accent",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

**Key Features:**
- Uses `class-variance-authority` for variant management
- `@radix-ui/react-slot` for polymorphic components
- Comprehensive accessibility states
- Focus-visible ring styling
- Dark mode support

### Utility Function
**File:** `src/lib/utils.ts`
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
**Purpose:** Merge Tailwind classes intelligently, resolving conflicts

---

## 📐 Layout Patterns

### Landing Page Structure
```tsx
<div className="relative min-h-screen bg-[#05050A] text-[#F4F6FA] overflow-x-hidden">
  {/* Global Effects */}
  <div className="noise-overlay" />
  
  {/* Fixed Navigation */}
  <nav className="fixed top-0 left-0 right-0 z-50">
    {/* Navigation content */}
  </nav>
  
  {/* Sections with Parallax */}
  <section className="relative min-h-screen">
    {/* Background with parallax */}
    <div 
      className="absolute inset-0"
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    >
      <img className="w-full h-full object-cover opacity-60" />
      <div className="vignette-heavy" />
    </div>
    
    {/* Content */}
    <div className="relative z-10">
      {/* Section content */}
    </div>
  </section>
</div>
```

### Grid Layouts
```tsx
{/* Two-column responsive grid */}
<div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1600px] mx-auto">
  <div>{/* Left content */}</div>
  <div>{/* Right content */}</div>
</div>

{/* Three-column card grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Spacing System
- Container padding: `px-6 lg:px-12` or `px-6 lg:px-16`
- Section gaps: `gap-8`, `gap-12`, `gap-16`
- Max width: `max-w-[1600px] mx-auto` for content containment

---

## ⚡ Animation & Interactions

### Scroll-based Animations
```tsx
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Parallax effect
style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
```

### Intersection Observer for Reveals
```tsx
const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id));
        }
      });
    },
    { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
  );
  
  sections.forEach((ref) => {
    if (ref.current) observer.observe(ref.current);
  });
  
  return () => observer.disconnect();
}, []);

// Usage
const isVisible = (id: string) => visibleSections.has(id);

<div className={`transition-all duration-1000 ${
  isVisible('section-id') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}>
```

### Tailwind Animations
```javascript
// tailwind.config.js
keyframes: {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "pulse-dot": {
    "0%, 100%": { transform: "scale(1)", opacity: "1" },
    "50%": { transform: "scale(1.15)", opacity: "0.8" },
  },
}
animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
}
```

---

## 🔧 Configuration Files

### Vite Configuration
```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: './',                        // Relative paths for deployment
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // @ alias for imports
    },
  },
});
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]             // Path mapping for @ alias
    }
  },
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### Tailwind Configuration Highlights
```javascript
module.exports = {
  darkMode: ["class"],               // Class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { /* HSL-based color system */ },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

---

## 📦 Component Library

### Available UI Components
**Form Elements:**
- `button` - Multi-variant button with sizes
- `input` - Text input with validation states
- `textarea` - Multi-line text input
- `checkbox` - Checkboxes with labels
- `radio-group` - Radio button groups
- `select` - Dropdown select menus
- `switch` - Toggle switches
- `slider` - Range sliders
- `calendar` - Date picker
- `form` - Form wrapper with validation (React Hook Form)
- `field` - Form field wrapper with label/error

**Layout:**
- `card` - Card container with header, title, description, content, footer
- `separator` - Horizontal/vertical dividers
- `tabs` - Tabbed interface
- `accordion` - Collapsible sections
- `collapsible` - Simple collapse/expand
- `scroll-area` - Custom scrollable areas
- `resizable` - Resizable panels

**Navigation:**
- `navigation-menu` - Complex navigation menus
- `menubar` - Menu bar component
- `dropdown-menu` - Dropdown menus
- `context-menu` - Right-click context menus
- `breadcrumb` - Breadcrumb navigation
- `pagination` - Pagination controls
- `sidebar` - Sidebar layout

**Overlays:**
- `dialog` - Modal dialogs
- `alert-dialog` - Confirmation dialogs
- `sheet` - Side sheets/drawers
- `drawer` - Bottom/side drawers
- `popover` - Floating popovers
- `tooltip` - Hover tooltips
- `hover-card` - Hover cards

**Feedback:**
- `alert` - Alert messages
- `toast` / `sonner` - Toast notifications
- `progress` - Progress bars
- `spinner` - Loading spinners
- `skeleton` - Loading skeletons
- `badge` - Status badges
- `empty` - Empty states

**Data Display:**
- `table` - Data tables
- `chart` - Chart components (Recharts)
- `avatar` - User avatars
- `carousel` - Image/content carousels
- `aspect-ratio` - Aspect ratio containers

**Advanced:**
- `command` - Command palette (CMD+K)
- `input-otp` - OTP input fields
- `input-group` - Grouped inputs
- `button-group` - Grouped buttons
- `toggle` / `toggle-group` - Toggle buttons
- `kbd` - Keyboard shortcuts display
- `item` - Generic list items

---

## 🎯 Best Practices

### Component Creation
1. **Always use the `cn()` utility** for className merging
2. **Add `data-slot` attributes** for targeting in CSS
3. **Use `React.ComponentProps<"element">`** for type safety
4. **Spread `...props`** for flexibility
5. **Accept `className` prop** for customization
6. **Use forwardRef** when components need refs

### Styling Approach
1. **Tailwind-first:** Use utility classes for most styling
2. **Custom CSS for complex effects:** Animations, gradients, filters
3. **CSS Variables for themes:** Dynamic color switching
4. **Mobile-first responsive:** `md:`, `lg:` breakpoints
5. **Dark mode support:** Use `dark:` prefix

### State Management
1. **Local state with `useState`** for component-specific data
2. **`useRef` for DOM references** and persistent values
3. **`useEffect` for side effects** (scroll listeners, observers)
4. **Custom hooks** for reusable logic (see `use-mobile.ts`)

### Performance
1. **Passive scroll listeners:** `{ passive: true }`
2. **Cleanup effects:** Return cleanup functions in useEffect
3. **Intersection Observer:** For scroll-triggered animations
4. **Lazy loading:** Consider for images and heavy components
5. **Vite's code splitting:** Automatic for production builds

### Accessibility
1. **Semantic HTML:** Use proper heading hierarchy
2. **ARIA attributes:** Radix UI handles most automatically
3. **Focus states:** `focus-visible:ring-ring`
4. **Keyboard navigation:** Tab order, Enter/Space interactions
5. **Color contrast:** High contrast accent (#39FF14 on dark bg)

### File Organization
```
src/
├── components/
│   ├── ui/                    # Pure UI components (shadcn)
│   └── [feature]/             # Feature-specific components
├── hooks/                     # Custom hooks
├── lib/                       # Utilities and helpers
├── types/                     # TypeScript type definitions
└── assets/                    # Images, fonts, etc.
```

---

## 🚀 Development Workflow

### Scripts
```json
{
  "dev": "vite",                    // Start dev server
  "build": "tsc -b && vite build",  // Type check + build
  "lint": "eslint .",               // Lint code
  "preview": "vite preview"         // Preview production build
}
```

### Adding New Components
1. **From shadcn/ui:**
   ```bash
   npx shadcn@latest add [component-name]
   ```
   
2. **Custom components:**
   - Create in `src/components/`
   - Export from index file
   - Use `cn()` utility
   - Follow existing patterns

### Styling Workflow
1. Use Tailwind utilities first
2. Extract repeated patterns to components
3. Use CSS variables for themeable values
4. Add custom CSS only for complex effects
5. Test dark mode if applicable

---

## 🎨 Design Patterns

### Hero Section Pattern
```tsx
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Parallax Background */}
  <div 
    className="absolute inset-0 z-0"
    style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
  >
    <img src="/bg.jpg" className="w-full h-full object-cover opacity-60" />
    <div className="vignette-heavy" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 w-full px-6 lg:px-16 pt-24">
    <div className="grid lg:grid-cols-2 gap-12 max-w-[1600px] mx-auto">
      {/* Text content with reveal animation */}
      <div className={`space-y-8 transition-all duration-1000 ${
        isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold">
          Your heading
          <span className="text-[#39FF14]">with accent</span>
        </h1>
        <p className="text-lg text-[#A7ACB8]">Description</p>
        <Button className="glow-accent">CTA Button</Button>
      </div>
    </div>
  </div>
</section>
```

### Card Grid Pattern
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <div 
      key={item.id}
      className="card-dark p-8 space-y-4 transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#39FF14]" />
      </div>
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-[#A7ACB8]">{item.description}</p>
    </div>
  ))}
</div>
```

### Navigation Pattern
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 
                flex items-center justify-between 
                bg-gradient-to-b from-[#05050A] to-transparent">
  {/* Logo */}
  <div className="flex items-center gap-3">
    <img src="/logo.png" className="w-10 h-10" />
    <span className="text-xl font-semibold">Brand</span>
  </div>
  
  {/* Navigation Links */}
  <div className="hidden md:flex items-center gap-8">
    <a href="#section" className="text-sm text-[#A7ACB8] 
                                  hover:text-[#39FF14] transition-colors">
      Link
    </a>
  </div>
  
  {/* CTA */}
  <Button className="border-[#39FF14] text-[#39FF14] 
                    hover:bg-[#39FF14] hover:text-[#05050A] 
                    glow-accent" 
          variant="outline">
    Call to Action
  </Button>
</nav>
```

---

## 📝 Code Style Guide

### Import Order
```typescript
// 1. React imports
import { useEffect, useState } from 'react';

// 2. Third-party libraries
import { cva } from 'class-variance-authority';

// 3. Internal components
import { Button } from '@/components/ui/button';

// 4. Utilities
import { cn } from '@/lib/utils';

// 5. Types
import type { ComponentProps } from './types';
```

### Component Structure
```tsx
// 1. Type definitions
type Props = {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
};

// 2. Component definition
function Component({ variant = 'default', children }: Props) {
  // 3. State and hooks
  const [state, setState] = useState(false);
  
  // 4. Effects
  useEffect(() => {
    // effect logic
  }, []);
  
  // 5. Handlers
  const handleClick = () => {
    // handler logic
  };
  
  // 6. Render
  return (
    <div className={cn("base-classes", variantClasses[variant])}>
      {children}
    </div>
  );
}

// 7. Export
export { Component };
```

### Naming Conventions
- **Components:** PascalCase (`Button`, `CardHeader`)
- **Files:** kebab-case (`button.tsx`, `use-mobile.ts`)
- **CSS Classes:** kebab-case Tailwind utilities
- **Custom CSS:** kebab-case (`.card-dark`, `.glow-accent`)
- **Functions:** camelCase (`handleClick`, `formatDate`)
- **Constants:** SCREAMING_SNAKE_CASE (`MAX_WIDTH`)

---

## 🌐 Responsive Design

### Breakpoints
```javascript
// Tailwind default breakpoints
sm: '640px'   // Small devices
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Large screens
```

### Responsive Patterns
```tsx
{/* Mobile: stack, Desktop: side-by-side */}
<div className="flex flex-col lg:flex-row gap-6">

{/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Responsive padding */}
<div className="px-4 md:px-8 lg:px-16">

{/* Responsive text */}
<h1 className="text-3xl md:text-5xl lg:text-7xl">

{/* Hide on mobile */}
<div className="hidden md:block">

{/* Show only on mobile */}
<div className="block md:hidden">
```

---

## 🔐 Type Safety

### Component Props Typing
```typescript
// Extend native HTML props
type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

// With CVA variants
type ButtonProps = React.ComponentProps<"button"> & 
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
```

### Generic Components
```typescript
type SelectProps<T> = {
  value: T;
  onChange: (value: T) => void;
  options: Array<{ label: string; value: T }>;
};

function Select<T extends string | number>({ 
  value, 
  onChange, 
  options 
}: SelectProps<T>) {
  // Implementation
}
```

---

## 📚 Key Dependencies

### Core
- `react` - UI library
- `react-dom` - DOM rendering
- `typescript` - Type safety
- `vite` - Build tool

### UI & Styling
- `@radix-ui/*` - Accessible component primitives
- `tailwindcss` - Utility-first CSS
- `tailwindcss-animate` - Animation utilities
- `class-variance-authority` - Variant management
- `clsx` / `tailwind-merge` - Class merging

### Forms & Validation
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Form validation resolvers
- `zod` - Schema validation

### Icons & Assets
- `lucide-react` - Icon library
- `next-themes` - Theme management

### Special Features
- `embla-carousel-react` - Carousels
- `recharts` - Charts
- `sonner` - Toast notifications
- `vaul` - Drawers
- `cmdk` - Command palette
- `date-fns` - Date utilities

---

## 🎯 Summary Checklist

When creating a new web app following this framework:

### Setup
- [ ] Initialize with Vite + React + TypeScript
- [ ] Install TailwindCSS + shadcn/ui
- [ ] Configure path aliases (`@/`)
- [ ] Set up ESLint and Prettier

### Design System
- [ ] Define color palette in CSS variables
- [ ] Import and configure fonts (Space Grotesk, Inter)
- [ ] Add noise overlay and vignette effects
- [ ] Create custom utility classes (glow, gradients)
- [ ] Configure custom scrollbar

### Components
- [ ] Install needed shadcn/ui components
- [ ] Create consistent component structure
- [ ] Use `cn()` utility for all className merging
- [ ] Add proper TypeScript types
- [ ] Include accessibility attributes

### Layout
- [ ] Fixed navigation with gradient backdrop
- [ ] Hero section with parallax background
- [ ] Responsive grid layouts (mobile-first)
- [ ] Consistent padding/spacing system
- [ ] Max-width containers for content

### Interactions
- [ ] Scroll-based animations (parallax)
- [ ] Intersection Observer for reveals
- [ ] Smooth scroll behavior
- [ ] Hover states with transitions
- [ ] Loading states and skeletons

### Performance
- [ ] Passive scroll listeners
- [ ] Proper effect cleanup
- [ ] Optimized images (compressed, proper formats)
- [ ] Code splitting (automatic with Vite)
- [ ] Build optimization (TypeScript check + Vite build)

### Final Touches
- [ ] Dark mode support (if needed)
- [ ] Mobile responsive testing
- [ ] Accessibility audit
- [ ] Performance testing
- [ ] Cross-browser compatibility

---

## 💡 Pro Tips

1. **Use the accent color (#39FF14) sparingly** - For CTAs, highlights, and important elements only
2. **Parallax multiplier 0.3-0.5** - Sweet spot for subtle background movement
3. **Animation duration 700-1000ms** - For smooth, professional feel
4. **Stagger animations by 100ms** - For sequential reveals (cards, lists)
5. **Always test in dark rooms** - This dark theme shines in low-light environments
6. **High contrast text** - #F4F6FA on #05050A ensures readability
7. **Use IntersectionObserver threshold 0.2** - Triggers when 20% visible
8. **Scale background images 1.1** - Prevents white edges during parallax
9. **Opacity 0.6 for background images** - Maintains readability over images
10. **Test with real content** - Lorem ipsum hides layout issues

---

This framework creates a modern, performant, and accessible web application with:
- ⚡ Lightning-fast Vite development
- 🎨 Beautiful dark theme with neon accents
- ♿ Accessible Radix UI components
- 📱 Mobile-first responsive design
- 🎭 Smooth animations and transitions
- 🔧 Type-safe TypeScript
- 🎯 Scalable component architecture

**When you provide this skill.md, I will understand exactly how to structure, style, and build your web applications following these proven patterns and best practices.**
