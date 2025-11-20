# 🎨 2MCrafters Modern UI System

## ✨ What's New

A complete modern UI transformation with premium components, smooth animations, and creative design patterns.

---

## 📦 Installed Libraries

### Core UI Framework
- **shadcn/ui** - Modern component library with Radix UI primitives
- **lucide-react** - Beautiful icon library (already installed)
- **framer-motion** - Advanced animations and transitions
- **react-wrap-balancer** - Responsive typography
- **class-variance-authority** - Component variants system
- **clsx + tailwind-merge** - Utility class management

### Already Existing
- **GSAP** - Advanced scroll animations
- **Lenis** - Smooth scroll
- **Next.js 16** - App Router
- **Tailwind CSS 4** - Styling

---

## 🧱 Component Library

### UI Components (`components/ui/`)

#### **button.tsx**
Modern button with multiple variants:
- `default` - White background with shadow
- `primary` - Gradient cyan to blue
- `secondary` - Gray background
- `ghost` - Transparent with hover
- `outline` - Border only
- `link` - Text with underline

Sizes: `sm`, `default`, `lg`, `icon`

```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="lg">
  Click me
</Button>
```

#### **card.tsx**
Premium card components with hover effects:
```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

#### **input.tsx**
Styled input with focus states:
```tsx
import { Input } from "@/components/ui/input"

<Input 
  type="email" 
  placeholder="email@example.com"
/>
```

#### **bento-grid.tsx**
Creative grid layout system:
```tsx
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"

<BentoGrid>
  <BentoCard span="double">Content</BentoCard>
  <BentoCard>Content</BentoCard>
</BentoGrid>
```

#### **hover-card-3d.tsx**
3D tilt effect on hover (Aceternity-style):
```tsx
import { HoverCard3D } from "@/components/ui/hover-card-3d"

<HoverCard3D intensity={15}>
  <Card>Your content</Card>
</HoverCard3D>
```

#### **animated-background.tsx**
Magic UI-style animated elements:
```tsx
import { AnimatedGradient, AnimatedBlob } from "@/components/ui/animated-background"

<AnimatedGradient />
<AnimatedBlob />
```

#### **animated-counter.tsx**
Number counting animation:
```tsx
import { AnimatedCounter } from "@/components/ui/animated-counter"

<AnimatedCounter 
  to={120} 
  suffix="+"
  duration={2.5}
/>
```

---

### Motion Components (`components/motion/`)

#### **FadeIn.tsx**
Scroll-triggered fade animations:
```tsx
import { FadeIn } from "@/components/motion/FadeIn"

<FadeIn delay={0.2} direction="up">
  Content appears on scroll
</FadeIn>
```

#### **StaggerContainer.tsx**
Staggered children animations:
```tsx
import { StaggerContainer, staggerItemVariants } from "@/components/motion/StaggerContainer"
import { motion } from "framer-motion"

<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <motion.div variants={staggerItemVariants}>
      {item}
    </motion.div>
  ))}
</StaggerContainer>
```

---

## 🎭 Section Components

### ModernFeaturesSection
- 9 feature cards with 3D hover effects
- Lucide icons with gradient backgrounds
- Stagger animations
- Responsive grid (1/2/3 columns)

### ModernStatsSection
- Animated counters
- 4-column stat grid
- Gradient icon backgrounds
- Hover lift effects

### BentoShowcaseSection
- Creative bento grid layout
- Cards with different spans
- Tech stack badges
- Mini stat cards

### TestimonialsSection
- Customer testimonial cards
- 5-star ratings
- Avatar placeholders
- Smooth hover effects

### ModernContactSection
- Contact form with shadcn inputs
- Contact info cards
- Gradient backgrounds
- Form validation ready

---

## 🎨 SVG Patterns

Located in `public/patterns/`:

- **dots.svg** - Dot grid pattern
- **waves.svg** - Wave gradient overlay
- **mesh.svg** - Mesh gradient blobs

Usage:
```tsx
<div className="bg-[url('/patterns/dots.svg')] opacity-20" />
```

---

## 🌈 Design Tokens

### Custom CSS Variables (globals.css)
```css
--radius-sm: 0.75rem
--radius-md: 1rem  
--radius-lg: 1.5rem
--radius-xl: 2rem

--shadow-sm to --shadow-xl
--shadow-cyan, --shadow-blue, --shadow-purple
```

### Animations
- `animate-float` - Floating effect
- `animate-gradient` - Gradient shift
- `animate-pulse-glow` - Pulsing glow
- `animate-marquee` - Horizontal scroll

---

## 🚀 Demo Page

Visit `/modern` to see all components in action:

```
http://localhost:3000/modern
```

Includes:
- Hero section with animated backgrounds
- Feature cards with 3D effects
- Animated stats
- Bento grid showcase
- Testimonials
- Contact form

---

## 📱 Responsive Design

All components are mobile-first and responsive:
- **Mobile**: 1 column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3-4 columns

---

## 🎯 Best Practices

### Import Organization
```tsx
// UI Components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Motion
import { FadeIn } from "@/components/motion/FadeIn"

// Icons
import { ArrowRight } from "lucide-react"
```

### Component Pattern
```tsx
<FadeIn delay={0.2}>
  <HoverCard3D>
    <Card>
      <CardHeader>
        <div className="bg-linear-to-br from-cyan-500 to-blue-600">
          <Icon />
        </div>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        Content
      </CardContent>
    </Card>
  </HoverCard3D>
</FadeIn>
```

---

## 🎨 Color Palette

### Gradients
- **Cyan to Blue**: `from-cyan-500 to-blue-600`
- **Purple to Pink**: `from-purple-500 to-pink-600`
- **Blue to Cyan**: `from-blue-500 to-cyan-600`
- **Orange to Red**: `from-orange-500 to-red-600`
- **Green to Emerald**: `from-green-500 to-emerald-600`

### Usage
```tsx
<div className="bg-linear-to-br from-cyan-500 to-blue-600">
  Gradient background
</div>
```

---

## ⚡ Performance

- All animations use Framer Motion (GPU accelerated)
- Images lazy loaded with Next.js Image
- Components code-split automatically
- Tailwind purges unused CSS

---

## 🔧 Customization

### Modify button variants
Edit `components/ui/button.tsx`:
```tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        custom: "your-custom-classes"
      }
    }
  }
)
```

### Add new animations
Edit `app/globals.css`:
```css
@keyframes your-animation {
  /* keyframes */
}

.animate-your-animation {
  animation: your-animation 2s ease infinite;
}
```

---

## 📖 Next Steps

1. Replace placeholder content with real data
2. Connect contact form to backend
3. Add real testimonial images
4. Integrate with CMS if needed
5. Add more page variants

---

## 🎓 Resources

- [shadcn/ui Docs](https://ui.shadcn.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

**Built with ❤️ by 2MCrafters**
