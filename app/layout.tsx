import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SkipToContent } from '@/components/SkipToContent';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://agenticflow.me'),
  title: {
    default: 'AgenticFlow - AI-Powered Business Automation & n8n Workflows | Save 10+ Hours Weekly',
    template: '%s | AgenticFlow',
  },
  description: 'Build reliable, AI-powered workflows on n8n that run 24/7. Scale your business without hiring for every task. Free automation audit. 2-week delivery. Save 10+ hours weekly with intelligent business automation.',
  keywords: ['AI automation', 'n8n workflows', 'business automation', 'n8n automation agency', 'hire n8n developer', 'AI workflow automation service', 'process automation', 'workflow automation agency', 'AI agents', 'no-code automation', 'business process automation', 'automated workflows', 'AI business tools', 'AI employee', 'workflow builder', 'CRM automation', 'Slack automation', 'n8n developer for hire', 'custom n8n workflows', 'managed automation service', 'AI-powered workflows', 'workflow automation consultant'],
  authors: [{ name: 'Husnain Mehmood' }],
  creator: 'AgenticFlow',
  publisher: 'AgenticFlow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: { 'en': '/', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    url: 'https://agenticflow.me/',
    title: 'AgenticFlow - AI-Powered Business Automation That Runs 24/7',
    description: 'Build reliable, AI-powered workflows on n8n. Scale your business without hiring for every task. Save 10+ hours weekly with intelligent automation.',
    images: [{
      url: 'https://ik.imagekit.io/d9541kfaqh/hero_bg.jpg',
      alt: 'AgenticFlow - AI-Powered Business Automation Platform',
      width: 1200,
      height: 630,
    }],
    siteName: 'AgenticFlow',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgenticFlow - AI-Powered Business Automation | Save 10+ Hours Weekly',
    description: 'Build reliable, AI-powered workflows on n8n. Save 10+ hours weekly with intelligent automation that runs 24/7. Free audit included.',
    images: ['https://ik.imagekit.io/d9541kfaqh/hero_bg.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: 'https://ik.imagekit.io/d9541kfaqh/logo.png?tr=w-32,h-32', sizes: '32x32', type: 'image/png' },
      { url: 'https://ik.imagekit.io/d9541kfaqh/logo.png?tr=w-16,h-16', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: 'https://ik.imagekit.io/d9541kfaqh/logo.png?tr=w-180,h-180', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#05050A',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'AgenticFlow',
    'application-name': 'AgenticFlow',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'geo.region': 'US',
    'geo.placename': 'Worldwide',
    'rating': 'general',
    'coverage': 'Worldwide',
    'distribution': 'global',
    'revisit-after': '7 days',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://agenticflow.me/#organization',
      name: 'AgenticFlow',
      url: 'https://agenticflow.me',
      logo: { '@type': 'ImageObject', url: 'https://ik.imagekit.io/d9541kfaqh/logo.png', width: 512, height: 512 },
      image: 'https://ik.imagekit.io/d9541kfaqh/hero_bg.jpg',
      sameAs: ['https://www.linkedin.com/in/husnainmehmood', 'https://github.com/HusnainMehmood5290'],
      contactPoint: { '@type': 'ContactPoint', email: 'contact@agenticflow.me', contactType: 'Customer Service', availableLanguage: ['English'], areaServed: 'Worldwide' },
      founder: { '@id': 'https://agenticflow.me/#founder' },
      slogan: 'Your business runs while you sleep',
      knowsAbout: ['AI Automation', 'n8n Workflows', 'Business Process Automation', 'AI Agents', 'CRM Integration'],
    },
    {
      '@type': 'Person',
      '@id': 'https://agenticflow.me/#founder',
      name: 'Husnain Mehmood',
      jobTitle: 'Founder & CEO',
      url: 'https://www.linkedin.com/in/husnainmehmood',
      sameAs: ['https://www.linkedin.com/in/husnainmehmood', 'https://github.com/HusnainMehmood5290'],
      worksFor: { '@id': 'https://agenticflow.me/#organization' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://agenticflow.me/#website',
      url: 'https://agenticflow.me',
      name: 'AgenticFlow',
      description: 'AI-Powered Business Automation Platform - Build reliable n8n workflows that run 24/7',
      publisher: { '@id': 'https://agenticflow.me/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://agenticflow.me/#service',
      name: 'AgenticFlow - AI Workflow Automation',
      description: 'We build, host, monitor, and improve n8n workflows integrated with your CRM, Slack, inbox, and AI models.',
      provider: { '@id': 'https://agenticflow.me/#organization' },
      serviceType: 'Business Process Automation',
      areaServed: { '@type': 'Place', name: 'Worldwide' },
      priceRange: '$$',
      url: 'https://agenticflow.me',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Automation Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'n8n Workflow Development', description: 'Custom AI-powered workflow automation using n8n' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Monitoring & Maintenance', description: 'Continuous monitoring with self-healing workflows' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent Integration', description: 'Integration with AI models for intelligent automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Automation Audit', description: 'Complimentary 20-minute consultation' } },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://agenticflow.me/#howto',
      name: 'How to Get Started with AI Business Automation',
      description: 'Three simple steps to automate your business with AgenticFlow',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Book a Free Audit', text: 'Schedule a free 20-minute automation audit.' },
        { '@type': 'HowToStep', position: 2, name: 'We Build & Ship', text: 'Our team designs, builds, and deploys your custom n8n workflows within 2 weeks.' },
        { '@type': 'HowToStep', position: 3, name: 'Monitor & Scale', text: 'Your workflows run 24/7 with self-healing capabilities.' },
      ],
      totalTime: 'P14D',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://n8n.agenticflow.me" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
        <link rel="preload" href="https://ik.imagekit.io/d9541kfaqh/hero_bg.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        <link rel="preload" href="https://ik.imagekit.io/d9541kfaqh/logo.png" as="image" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="relative min-h-screen bg-[#05050A] text-[#F4F6FA] overflow-x-hidden">
          <SkipToContent />
          <div className="noise-overlay" aria-hidden="true" />
          <Navigation />
          <main id="main-content" role="main">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-full px-6 lg:px-16 py-16 border-t border-[#F4F6FA]/10" role="contentinfo">
            <div className="max-w-[1600px] mx-auto">
              <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="space-y-4">
                  <Link href="/" className="flex items-center gap-3" aria-label="AgenticFlow Home">
                    <img src="https://ik.imagekit.io/d9541kfaqh/logo.png" alt="AgenticFlow" width="32" height="32" loading="lazy" className="w-8 h-8" />
                    <span className="text-lg font-semibold">AgenticFlow</span>
                  </Link>
                  <p className="text-sm text-[#A7ACB8] leading-relaxed">
                    AI-powered business automation agency specializing in n8n workflow development, deployment, and 24/7 managed monitoring. We help teams save 10+ hours weekly.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wider">Services</h4>
                  <nav aria-label="Services navigation" className="flex flex-col gap-2">
                    <Link href="/services/n8n-workflow-automation" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">n8n Workflow Development</Link>
                    <Link href="/services/ai-agent-integration" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">AI Agent Integration</Link>
                    <Link href="/services/managed-automation" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Managed Automation (AI Employee)</Link>
                    <Link href="/services/monitoring-maintenance" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">24/7 Monitoring & Maintenance</Link>
                    <Link href="/contact" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Free Automation Audit</Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wider">Resources</h4>
                  <nav aria-label="Resources navigation" className="flex flex-col gap-2">
                    <Link href="/about" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">About Us</Link>
                    <Link href="/case-studies" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Case Studies</Link>
                    <Link href="/blog" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Blog</Link>
                    <Link href="/privacy-policy" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Privacy Policy</Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wider">Connect</h4>
                  <nav aria-label="Social navigation" className="flex flex-col gap-2">
                    <a href="mailto:contact@agenticflow.me" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">contact@agenticflow.me</a>
                    <a href="https://www.linkedin.com/in/husnainmehmood" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">LinkedIn</a>
                    <a href="https://github.com/HusnainMehmood5290" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">GitHub</a>
                    <a href="https://calendly.com/husnainmehmood5290/30min" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Book a Call</a>
                  </nav>
                </div>
              </div>
              <div className="pt-8 border-t border-[#F4F6FA]/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#A7ACB8]">2026 © AgenticFlow by Husnain Mehmood. All rights reserved.</p>
                <div className="flex items-center gap-6">
                  <Link href="/privacy-policy" className="text-xs text-[#A7ACB8]/60 hover:text-[#39FF14] transition-colors">Privacy Policy</Link>
                  <Link href="/about" className="text-xs text-[#A7ACB8]/60 hover:text-[#39FF14] transition-colors">About</Link>
                  <Link href="/contact" className="text-xs text-[#A7ACB8]/60 hover:text-[#39FF14] transition-colors">Contact</Link>
                </div>
              </div>
            </div>
          </footer>

          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
