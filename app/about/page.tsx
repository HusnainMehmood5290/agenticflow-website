import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Zap, Clock, Star, CheckCircle, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About AgenticFlow - AI Workflow Automation Agency',
  description: 'Learn about AgenticFlow, our mission, values, and the team behind our AI-powered n8n workflow automation services. Founded by Husnain Mehmood.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="pt-24" itemScope itemType="https://schema.org/AboutPage">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">ABOUT AGENTICFLOW</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            About<br />
            <span className="text-[#39FF14]">AgenticFlow</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed mb-8">
            AgenticFlow is an n8n workflow automation agency helping businesses eliminate repetitive manual tasks through intelligent AI-powered automation.
          </p>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed mb-8">
            We specialize in building, deploying, and maintaining custom workflows that run 24/7 — so you can focus on growing your business, not managing it.
          </p>

          <div className="card-dark p-8 max-w-3xl space-y-4 mb-8">
            <h2 className="text-xl font-semibold">What We Believe</h2>
            <p className="text-[#A7ACB8] leading-relaxed">
              Every hour spent on manual repetitive tasks is an hour stolen from real growth. Automation isn&apos;t a luxury — it&apos;s a necessity for modern businesses.
            </p>
          </div>

          <div className="card-dark p-8 max-w-3xl space-y-4">
            <h2 className="text-xl font-semibold">What Makes Us Different</h2>
            <p className="text-[#A7ACB8] leading-relaxed">
              We don&apos;t just build and disappear. We monitor, maintain, and continuously improve your workflows every month.
            </p>
          </div>
        </div>
      </section>

      {/* Why AgenticFlow */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Why Choose AgenticFlow?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-dark p-8 space-y-4">
              <Zap className="w-8 h-8 text-[#39FF14]" />
              <h3 className="text-xl font-semibold">n8n Specialists</h3>
              <p className="text-[#A7ACB8] leading-relaxed">
                We don&apos;t dabble in every tool — we specialize in n8n, the most powerful open-source workflow automation platform. This deep expertise means faster builds, fewer bugs, and workflows that scale reliably.
              </p>
            </div>
            <div className="card-dark p-8 space-y-4">
              <Shield className="w-8 h-8 text-[#39FF14]" />
              <h3 className="text-xl font-semibold">AI-Native Approach</h3>
              <p className="text-[#A7ACB8] leading-relaxed">
                Every workflow we build is designed with AI at its core. We integrate GPT-4, Claude, Gemini, and other models directly into your business processes — not as afterthoughts, but as first-class decision-makers in your automation stack.
              </p>
            </div>
            <div className="card-dark p-8 space-y-4">
              <Clock className="w-8 h-8 text-[#39FF14]" />
              <h3 className="text-xl font-semibold">Managed & Monitored</h3>
              <p className="text-[#A7ACB8] leading-relaxed">
                We don&apos;t just build and leave. Every workflow includes 24/7 monitoring, self-healing retry logic, real-time error alerts, and proactive maintenance. If something breaks at 3 AM, we fix it before your team wakes up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/10" itemScope itemType="https://schema.org/Person">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">FOUNDER</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" itemProp="name">Husnain Mehmood</h2>
              <p className="text-[#A7ACB8] leading-relaxed mb-4" itemProp="description">
                Husnain is an automation engineer and AI workflow specialist who has built and deployed 50+ production n8n workflows across e-commerce, SaaS, and professional services. He founded AgenticFlow with a singular focus: make AI automation accessible, reliable, and affordable for growing businesses.
              </p>
              <p className="text-[#A7ACB8] leading-relaxed mb-6">
                With deep expertise in n8n, Node.js, API integrations, and AI model orchestration, Husnain personally oversees every workflow architecture to ensure it meets production-grade reliability standards.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/husnainmehmood" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] hover:underline text-sm">LinkedIn →</a>
                <a href="https://github.com/HusnainMehmood5290" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] hover:underline text-sm">GitHub →</a>
              </div>
            </div>
            <div className="card-dark overflow-hidden">
              <img src="https://ik.imagekit.io/d9541kfaqh/portrait_card.jpg" alt="Husnain Mehmood - Founder of AgenticFlow" width="600" height="500" loading="lazy" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Star, title: "Reliability First", desc: "Every workflow we build includes retry logic, error handling, and self-healing capabilities. We treat your automations like production infrastructure — because that's exactly what they are." },
              { icon: Users, title: "Transparency", desc: "No hidden fees, no black boxes. You get full documentation, clear run logs, and direct access to your workflow architecture. We believe in empowering clients, not creating dependency." },
              { icon: Award, title: "Speed to Value", desc: "We deliver working automations in 2 weeks, not 2 months. Our proven workflow templates and deep n8n expertise mean you see ROI fast — typically within the first month." },
              { icon: BookOpen, title: "Continuous Improvement", desc: "Automation isn't a one-time project. We continuously monitor performance, identify optimization opportunities, and proactively improve your workflows as your business evolves." },
            ].map((val, i) => (
              <div key={i} className="flex gap-6 p-6">
                <val.icon className="w-8 h-8 text-[#39FF14] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{val.title}</h3>
                  <p className="text-[#A7ACB8] leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/10">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Automate?</h2>
          <p className="text-lg text-[#A7ACB8]">
            Book a free 20-minute automation audit. We&apos;ll identify your highest-impact automation opportunities and show you exactly how we&apos;d build them.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/husnainmehmood5290/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-base font-semibold glow-accent-strong">
                Book a Free Audit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link href="/case-studies">
              <Button variant="outline" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-[#05050A] px-8 py-6 text-base">
                View Case Studies
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39FF14]" /><span className="text-sm text-[#A7ACB8]">Free consultation</span></div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39FF14]" /><span className="text-sm text-[#A7ACB8]">No commitment</span></div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39FF14]" /><span className="text-sm text-[#A7ACB8]">2-week delivery</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
