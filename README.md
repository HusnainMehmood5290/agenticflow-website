# 🚀 AgenticFlow - AI Business Automation Website

Modern, high-performance landing page for AgenticFlow - AI-powered workflow automation services built with n8n.

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-purple?style=flat&logo=vite)](https://vitejs.dev/)

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Sleek dark theme with neon green accents
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔄 **Auto Deployment** - Push to GitHub → deploys to Vercel automatically
- 📊 **Web Vitals** - Performance monitoring built-in
- 🎯 **SEO Optimized** - Meta tags, semantic HTML, sitemap
- 📮 **n8n Integration** - Contact form connected to n8n webhook

## 🛠️ Tech Stack

- **Framework:** React 19.2 + TypeScript
- **Build Tool:** Vite 7.3
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Custom components with Radix UI primitives
- **Icons:** Lucide React
- **Animations:** CSS + Intersection Observer API
- **Backend:** n8n Webhook Integration
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/agenticflow-website.git

# Navigate to project directory
cd agenticflow-website

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Development

```bash
# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
agenticflow-website/
├── public/              # Static assets
│   ├── logo.png
│   ├── hero_bg.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # UI components (Button, Input, Textarea)
│   │   ├── ErrorBoundary.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── SkipToContent.tsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and configs
│   │   ├── analytics.ts
│   │   ├── config.ts
│   │   └── utils.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── GITHUB_VERCEL_DEPLOYMENT.md  # Deployment guide
└── package.json
```

## 🌐 Deployment

This project is configured for automatic deployment on Vercel via GitHub integration.

### Quick Deploy

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

2. **Vercel Auto-Deploys** - That's it! 🎉

See [GITHUB_VERCEL_DEPLOYMENT.md](./GITHUB_VERCEL_DEPLOYMENT.md) for detailed setup instructions.

## 📮 Contact Form Setup

The contact form integrates with n8n webhook. Current endpoint:
```
https://n8n.agenticflow.me:5678/webhook/form_filled
```

Form data is sent as JSON:
```json
{
  "name": "User name",
  "email": "user@example.com",
  "company": "Company name",
  "message": "User message"
}
```

## 🎨 Customization

### Colors

Main colors defined in `src/index.css`:
- Background: `#05050A`
- Text: `#F4F6FA`
- Accent: `#39FF14` (neon green)

### Content

Main content is in `src/App.tsx`. Update sections:
- Hero section
- Services
- Pricing
- Contact information

## 📊 Performance

- **Bundle Size:** ~216 KB (65 KB gzipped)
- **Lighthouse Score:** 95+ on all metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👤 Author

**Husnain Mehmood**
- LinkedIn: [@husnainmehmood](https://www.linkedin.com/in/husnainmehmood)
- Email: contact@agenticflow.me

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Hosted on [Vercel](https://vercel.com/)

---

**Made with ❤️ by AgenticFlow Team**
