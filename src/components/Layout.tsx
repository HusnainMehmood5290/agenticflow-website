import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SkipToContent } from '@/components/SkipToContent';
import { Button } from '@/components/ui/button';
import { trackButtonClick } from '@/lib/analytics';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#05050A] text-[#F4F6FA] overflow-x-hidden">
      <SkipToContent />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <header role="banner">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 flex items-center justify-between bg-gradient-to-b from-[#05050A] to-transparent" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-3" aria-label="AgenticFlow - Home">
            <img src="https://ik.imagekit.io/d9541kfaqh/logo.png" alt="AgenticFlow Logo" width="40" height="40" loading="eager" className="w-10 h-10" />
            <span className="text-xl font-semibold tracking-tight">AgenticFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-8" role="menubar">
            <Link to="/about" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">About</Link>
            <Link to="/services/n8n-workflow-automation" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Services</Link>
            <Link to="/case-studies" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Case Studies</Link>
            <Link to="/blog" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Blog</Link>
            <Link to="/contact" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Contact</Link>
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

      {/* Main Content */}
      <main id="main-content" role="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full px-6 lg:px-16 py-16 border-t border-[#F4F6FA]/10" role="contentinfo">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3" aria-label="AgenticFlow Home">
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
                <Link to="/services/n8n-workflow-automation" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">n8n Workflow Development</Link>
                <Link to="/services/ai-agent-integration" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">AI Agent Integration</Link>
                <Link to="/services/managed-automation" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Managed Automation (AI Employee)</Link>
                <Link to="/services/monitoring-maintenance" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">24/7 Monitoring & Maintenance</Link>
                <Link to="/contact" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Free Automation Audit</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider">Resources</h4>
              <nav aria-label="Resources navigation" className="flex flex-col gap-2">
                <Link to="/about" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">About Us</Link>
                <Link to="/case-studies" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Case Studies</Link>
                <Link to="/blog" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Blog</Link>
                <Link to="/privacy-policy" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Privacy Policy</Link>
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
            <p className="text-sm text-[#A7ACB8]">
              2026 © AgenticFlow by Husnain Mehmood. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-xs text-[#A7ACB8]/60 hover:text-[#39FF14] transition-colors">Privacy Policy</Link>
              <Link to="/about" className="text-xs text-[#A7ACB8]/60 hover:text-[#39FF14] transition-colors">About</Link>
              <Link to="/contact" className="text-xs text-[#A7ACB8]/60 hover:text-[#39FF14] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
