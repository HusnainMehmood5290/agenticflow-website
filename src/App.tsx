import { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight, Calendar, Mail, CheckCircle, Zap, Clock, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SkipToContent } from '@/components/SkipToContent';
import { trackButtonClick, trackFormSubmit } from '@/lib/analytics';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxTransform = useMemo(
    () => `translateY(${scrollY * 0.3}px) scale(1.1)`,
    [scrollY]
  );

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

    const sections = [heroRef, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref, contactRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to JSON object for n8n webhook
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://n8n.agenticflow.me:5678/webhook/form_filled', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject)
      });

      const data = await response.json();

      if (data.success || response.ok) {
        setSubmitSuccess(true);
        form.reset();
        trackFormSubmit('contact');
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05050A] text-[#F4F6FA] overflow-x-hidden" itemScope itemType="https://schema.org/WebPage">
      <SkipToContent />
      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <header role="banner">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 flex items-center justify-between bg-gradient-to-b from-[#05050A] to-transparent" aria-label="Main navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
          <a href="/" className="flex items-center gap-3" aria-label="AgenticFlow - Home" itemProp="url">
            <img src="/logo.png" alt="AgenticFlow Logo" width="40" height="40" loading="eager" className="w-10 h-10" />
            <span className="text-xl font-semibold tracking-tight" itemProp="name">AgenticFlow</span>
          </a>
          <div className="hidden md:flex items-center gap-8" role="menubar">
            <a href="#work" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Work</a>
            <a href="#services" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Services</a>
            <a href="#pricing" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Pricing</a>
            <a href="#contact" role="menuitem" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors">Contact</a>
          </div>
          <Button 
            className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-[#05050A] transition-all glow-accent"
            variant="outline"
            aria-label="Book a call with AgenticFlow"
            onClick={() => { trackButtonClick('book_call_nav'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Book a call
          </Button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main id="main-content" role="main" itemScope itemType="https://schema.org/Service">

      {/* Section 1: Hero */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Hero - AI-Powered Business Automation"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: parallaxTransform }}
          aria-hidden="true"
        >
          <img 
            src="/hero_bg.jpg" 
            alt="" 
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="vignette-heavy" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-16 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1600px] mx-auto">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight" itemProp="name">
                Your business runs<br />
                while you<br />
                <span className="text-[#39FF14] relative">
                  sleep
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#39FF14] opacity-60" aria-hidden="true" />
                </span>.
              </h1>
              <p className="text-lg text-[#A7ACB8] max-w-xl leading-relaxed hero-description" itemProp="description">
                We build reliable, AI-powered workflows on n8n—so your team ships faster 
                and scales without hiring for every task.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-base font-semibold glow-accent-strong"
                  onClick={() => { trackButtonClick('book_audit'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  aria-label="Book a free automation audit - scroll to contact form"
                >
                  Book a free automation audit
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#F4F6FA]/20 text-[#F4F6FA] hover:bg-[#F4F6FA]/10 px-8 py-6 text-base"
                  onClick={() => { trackButtonClick('see_builds'); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
                  aria-label="See recent automation workflow builds"
                >
                  See recent builds
                </Button>
              </div>
            </div>

            {/* Right Card */}
            <div 
              className={`transition-all duration-1000 delay-300 ${isVisible('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
              <div className="card-dark overflow-hidden relative">
                <span className="absolute top-6 left-6 font-mono text-xs text-[#39FF14] tracking-widest uppercase">
                  AGENTICFLOW — AUTOMATION STUDIO
                </span>
                <img 
                  src="/portrait_card.jpg" 
                  alt="AI automation expert at AgenticFlow studio" 
                  loading="lazy"
                  width="600"
                  height="500"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B0C15] to-transparent">
                  <h3 className="text-2xl font-semibold mb-3">Smart systems for busy teams.</h3>
                  <button className="flex items-center gap-2 text-[#39FF14] hover:gap-4 transition-all">
                    Explore the stack <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Build */}
      <section
        id="work"
        ref={section2Ref}
        className="relative min-h-screen flex items-center py-24"
        aria-label="What We Build - AI Workflow Automation Services"
      >
        <div className="w-full px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1600px] mx-auto">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible('work') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="flex items-start gap-4">
                <div className="w-0.5 h-24 bg-[#39FF14] origin-top" />
                <div>
                  <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-4">
                    WHAT WE BUILD
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    AI Workflows That Actually Ship
                  </h2>
                </div>
              </div>
              <p className="text-lg text-[#A7ACB8] max-w-lg leading-relaxed pl-5">
                We design, build, and maintain n8n automations—integrated with your CRM, 
                Slack, inbox, and AI models. One system, less overhead, more output.
              </p>
              <Button 
                variant="outline" 
                className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-[#05050A] ml-5"
              >
                See example workflows
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right Image */}
            <div 
              className={`transition-all duration-1000 delay-200 ${isVisible('work') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'}`}
            >
              <div className="card-dark overflow-hidden">
                <img 
                  src="/hands_laptop.jpg" 
                  alt="Developer building n8n workflow automation on laptop" 
                  loading="lazy"
                  width="800"
                  height="500"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Scale Without Bloat */}
      <section
        id="services"
        ref={section3Ref}
        className="relative min-h-screen flex flex-col items-center justify-center py-24"
        aria-label="Services - Scale Your Business Without Adding Headcount"
      >
        <div className="w-full px-6 lg:px-16 text-center max-w-[1400px] mx-auto">
          {/* Top Content */}
          <div className={`space-y-6 mb-16 transition-all duration-1000 ${isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Scale Without the Bloat
            </h2>
            <p className="text-lg text-[#A7ACB8] max-w-2xl mx-auto">
              Add AI steps, webhooks, and approvals—without adding headcount. 
              We keep the logic clean so it's easy to change later.
            </p>
          </div>

          {/* Center Image Card */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${isVisible('services') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
          >
            <div className="card-dark overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF14]/5 to-transparent pointer-events-none" />
              <img 
                src="/workflow_laptop.jpg" 
                alt="n8n workflow automation dashboard showing AI-powered integrations" 
                loading="lazy"
                width="1200"
                height="400"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Floating Tags */}
            <span className="absolute -bottom-4 left-8 font-mono text-xs text-[#39FF14] tracking-widest uppercase bg-[#0B0C15] px-4 py-2 rounded-full border border-[#39FF14]/20">
              INTEGRATIONS
            </span>
            <span className="absolute -bottom-4 right-8 font-mono text-xs text-[#39FF14] tracking-widest uppercase bg-[#0B0C15] px-4 py-2 rounded-full border border-[#39FF14]/20">
              MAINTENANCE
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: Save 10+ Hours */}
      <section
        id="pricing"
        ref={section4Ref}
        className="relative min-h-screen flex flex-col items-center justify-center py-24"
        aria-label="Pricing - Save 10+ Hours a Week with AI Automation"
      >
        <div className="w-full px-6 lg:px-16 text-center max-w-[1400px] mx-auto">
          {/* Top Content */}
          <div className={`space-y-6 mb-16 transition-all duration-1000 ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Save 10+ Hours a Week
            </h2>
            <p className="text-lg text-[#A7ACB8] max-w-2xl mx-auto">
              Repetitive work becomes instant—data entry, follow-ups, routing, and reporting. 
              Your team gets time back for the work that moves the needle.
            </p>
          </div>

          {/* Center Image Card */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${isVisible('pricing') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
          >
            {/* Decorative Ring */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#39FF14]/30 rounded-full pointer-events-none" />
            
            <div className="card-dark overflow-hidden">
              <img 
                src="/dashboard_laptop.jpg" 
                alt="Business analytics dashboard showing 10+ hours saved weekly through AI automation" 
                loading="lazy"
                width="1200"
                height="400"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Metric Label */}
            <span className="absolute -bottom-4 left-8 font-mono text-xs text-[#A7ACB8] tracking-widest uppercase bg-[#0B0C15] px-4 py-2 rounded-full border border-[#F4F6FA]/10">
              TYPICAL ROI: 2–4 WEEKS
            </span>
          </div>
        </div>
      </section>

      {/* Section 5: Hire an AI Employee */}
      <section
        id="ai-employee"
        ref={section5Ref}
        className="relative min-h-screen flex flex-col items-center justify-center py-24"
        aria-label="Hire an AI Employee - Managed Automation Service"
      >
        <div className="w-full px-6 lg:px-16 text-center max-w-[1400px] mx-auto">
          {/* Top Content */}
          <div className={`space-y-6 mb-16 transition-all duration-1000 ${isVisible('ai-employee') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hire an AI Employee
            </h2>
            <p className="text-lg text-[#A7ACB8] max-w-2xl mx-auto">
              One monthly fee. No onboarding. No downtime. We build, host, monitor, 
              and improve your workflows—like having a senior ops engineer on call.
            </p>
          </div>

          {/* Center Image Card */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${isVisible('ai-employee') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
          >
            <div className="card-dark overflow-hidden relative">
              {/* Status Dot */}
              <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                <div className="w-3 h-3 bg-[#39FF14] rounded-full animate-pulse-dot" />
                <span className="font-mono text-xs text-[#39FF14] tracking-wider">ACTIVE</span>
              </div>
              <img 
                src="/workspace_coffee.jpg" 
                alt="Modern workspace with AI employee running automated workflows 24/7" 
                loading="lazy"
                width="1200"
                height="400"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Caption */}
            <span className="absolute -bottom-4 right-8 font-mono text-xs text-[#A7ACB8] tracking-widest uppercase bg-[#0B0C15] px-4 py-2 rounded-full border border-[#F4F6FA]/10">
              PREDICTABLE MONTHLY COST
            </span>
          </div>
        </div>
      </section>

      {/* Section 6: Runs 24/7 */}
      <section
        id="reliability"
        ref={section6Ref}
        className="relative min-h-screen flex flex-col items-center justify-center py-24"
        aria-label="Reliability - Self-Healing Workflows That Run 24/7"
      >
        <div className="w-full px-6 lg:px-16 text-center max-w-[1400px] mx-auto">
          {/* Top Content */}
          <div className={`space-y-6 mb-16 transition-all duration-1000 ${isVisible('reliability') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Runs 24/7
            </h2>
            <p className="text-lg text-[#A7ACB8] max-w-2xl mx-auto">
              Self-healing workflows with retry logic, error alerts, and run logs. 
              If something breaks, we know before you do—and we fix it.
            </p>
          </div>

          {/* Center Image Card */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${isVisible('reliability') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
          >
            <div className="card-dark overflow-hidden relative">
              {/* Grid Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              <img 
                src="/server_room.jpg" 
                alt="Enterprise server room hosting 24/7 automated workflows with monitoring" 
                loading="lazy"
                width="1200"
                height="400"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Caption */}
            <span className="absolute -bottom-4 left-8 font-mono text-xs text-[#39FF14] tracking-widest uppercase bg-[#0B0C15] px-4 py-2 rounded-full border border-[#39FF14]/20">
              MONITORED & MAINTAINED
            </span>
          </div>
        </div>
      </section>

      {/* Section 7: Contact & Footer */}
      <section
        id="contact"
        ref={contactRef}
        className="relative py-24"
        aria-label="Contact - Book a Free Automation Audit"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Let's Build Your First Workflow
              </h2>
              <p className="text-lg text-[#A7ACB8] max-w-lg">
                Tell us what you're doing manually. We'll map it, quote it, and ship it—fast.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14]" />
                  <span className="text-sm text-[#A7ACB8]">Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14]" />
                  <span className="text-sm text-[#A7ACB8]">No commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14]" />
                  <span className="text-sm text-[#A7ACB8]">2-week delivery</span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="card-dark p-6 space-y-3">
                  <Zap className="w-6 h-6 text-[#39FF14]" />
                  <h4 className="font-semibold">Lightning Fast</h4>
                  <p className="text-sm text-[#A7ACB8]">Automations that work in real-time</p>
                </div>
                <div className="card-dark p-6 space-y-3">
                  <Clock className="w-6 h-6 text-[#39FF14]" />
                  <h4 className="font-semibold">Always On</h4>
                  <p className="text-sm text-[#A7ACB8]">24/7 operation without breaks</p>
                </div>
                <div className="card-dark p-6 space-y-3">
                  <Shield className="w-6 h-6 text-[#39FF14]" />
                  <h4 className="font-semibold">Secure</h4>
                  <p className="text-sm text-[#A7ACB8]">Enterprise-grade security</p>
                </div>
                <div className="card-dark p-6 space-y-3">
                  <TrendingUp className="w-6 h-6 text-[#39FF14]" />
                  <h4 className="font-semibold">Scalable</h4>
                  <p className="text-sm text-[#A7ACB8]">Grows with your business</p>
                </div>
              </div>
            </div>

            {/* Right Contact Card */}
            <div 
              className={`transition-all duration-1000 delay-200 ${isVisible('contact') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-98'}`}
            >
              <div className="card-dark p-8 lg:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-[#39FF14]" />
                  <h3 className="text-2xl font-semibold">Book a 20-minute call</h3>
                </div>
                
                <form className="space-y-4" aria-label="Contact form" onSubmit={handleFormSubmit}>
                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="bg-[#39FF14]/10 border border-[#39FF14] text-[#39FF14] px-4 py-3 rounded-lg flex items-center gap-2" role="alert">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg" role="alert">
                      <p className="text-sm font-medium">{submitError}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-[#A7ACB8] mb-2">Name</label>
                    <Input 
                      id="contact-name"
                      name="name"
                      placeholder="Your name" 
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                      className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-[#A7ACB8] mb-2">Email</label>
                    <Input 
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com" 
                      autoComplete="email"
                      required
                      disabled={isSubmitting}
                      className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm text-[#A7ACB8] mb-2">Company</label>
                    <Input 
                      id="contact-company"
                      name="company"
                      placeholder="Your company name" 
                      autoComplete="organization"
                      disabled={isSubmitting}
                      className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm text-[#A7ACB8] mb-2">Message</label>
                    <Textarea 
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about the tasks you'd like to automate..." 
                      required
                      disabled={isSubmitting}
                      className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 min-h-[120px] disabled:opacity-50"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] py-6 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Request a call'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 text-sm text-[#A7ACB8] pt-4">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Prefer email?</span>
                  <a href="mailto:contact@agenticflow.me" className="text-[#39FF14] hover:underline" itemProp="email">
                    contact@agenticflow.me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

        {/* Footer */}
        <footer className="w-full px-6 lg:px-16 py-12 border-t border-[#F4F6FA]/10" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3" aria-label="AgenticFlow Home">
              <img src="/logo.png" alt="AgenticFlow" width="32" height="32" loading="lazy" className="w-8 h-8" />
              <span className="text-lg font-semibold">AgenticFlow</span>
            </a>
            <nav aria-label="Footer navigation" className="flex items-center gap-8">
              <a href="mailto:contact@agenticflow.me" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors" aria-label="Email AgenticFlow">Contact</a>
              <a href="https://www.linkedin.com/in/husnainmehmood" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors" aria-label="Visit Husnain Mehmood on LinkedIn">LinkedIn</a>
              <a href="https://github.com/HusnainMehmood5290" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A7ACB8] hover:text-[#39FF14] transition-colors" aria-label="Visit AgenticFlow on GitHub">GitHub</a>
            </nav>
            <p className="text-sm text-[#A7ACB8]">
              <span itemProp="copyrightYear">2026</span> © <span itemProp="copyrightHolder">AgenticFlow by Husnain Mehmood</span>. All rights reserved.
            </p>
          </div>
        </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
