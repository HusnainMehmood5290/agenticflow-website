import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Zap, Clock, Star, CheckCircle, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="pt-24" itemScope itemType="https://schema.org/AboutPage">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">ABOUT AGENTICFLOW</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            We Build AI Systems That<br />
            <span className="text-[#39FF14]">Run Your Business 24/7</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed mb-8">
            AgenticFlow is an AI workflow automation agency founded by Husnain Mehmood. We specialize in building, deploying, and managing n8n-powered automation workflows that eliminate repetitive tasks, reduce operational costs, and help businesses scale without adding headcount.
          </p>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed">
            Our mission is simple: take the manual, time-consuming processes that slow your team down and turn them into intelligent, self-healing automations that work around the clock. Whether you're a startup looking to ship faster or an established business tired of operational bottlenecks, we build the systems that set you free.
          </p>
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
                We don't dabble in every tool — we specialize in n8n, the most powerful open-source workflow automation platform. This deep expertise means faster builds, fewer bugs, and workflows that scale reliably.
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
                We don't just build and leave. Every workflow includes 24/7 monitoring, self-healing retry logic, real-time error alerts, and proactive maintenance. If something breaks at 3 AM, we fix it before your team wakes up.
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
              <img
                src="https://ik.imagekit.io/d9541kfaqh/portrait_card.jpg"
                alt="Husnain Mehmood - Founder of AgenticFlow"
                width="600"
                height="500"
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
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
            Book a free 20-minute automation audit. We'll identify your highest-impact automation opportunities and show you exactly how we'd build them.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-base font-semibold glow-accent-strong">
                Book a Free Audit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
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
