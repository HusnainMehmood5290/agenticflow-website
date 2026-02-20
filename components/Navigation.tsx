'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackButtonClick } from '@/lib/analytics';

export default function Navigation() {
  return (
    <header role="banner">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 flex items-center justify-between bg-gradient-to-b from-[#05050A] to-transparent" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="AgenticFlow - Home">
          <img src="https://ik.imagekit.io/d9541kfaqh/logo.png" alt="AgenticFlow Logo" width="40" height="40" loading="eager" className="w-10 h-10" />
          <span className="text-xl font-semibold tracking-tight">AgenticFlow</span>
        </Link>
        <div className="hidden md:flex items-center gap-8" role="menubar">
          <Link href="/about" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">About</Link>
          <Link href="/services/n8n-workflow-automation" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Services</Link>
          <Link href="/case-studies" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Case Studies</Link>
          <Link href="/blog" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Blog</Link>
          <Link href="/contact" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Contact</Link>
        </div>
        <a href="https://calendly.com/husnainmehmood5290/30min" target="_blank" rel="noopener noreferrer">
          <Button
            className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-[#05050A] transition-all glow-accent"
            variant="outline"
            aria-label="Book a call with AgenticFlow"
            onClick={() => trackButtonClick('book_call_nav')}
          >
            Book a call
          </Button>
        </a>
      </nav>
    </header>
  );
}
