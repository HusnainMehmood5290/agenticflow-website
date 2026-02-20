import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Clock, Headphones, BarChart3, Wrench, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Managed Automation (AI Employee) - 24/7 Virtual Worker',
  description: 'A fully managed automation system that works like a virtual employee — handling tasks 24/7 without vacations, sick days, or supervision. We build, deploy, monitor, and maintain it.',
  alternates: { canonical: '/services/managed-automation' },
};

export default function ManagedAutomationPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">SERVICE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Managed Automation<br />
            <span className="text-[#39FF14]">(AI Employee)</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed mb-8">
            A fully managed automation system that works like a virtual employee — handling tasks 24/7 without vacations, sick days, or supervision. We build it, deploy it, monitor it, and maintain it. You just see the results.
          </p>
          <Link href="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
              Get Your AI Employee <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Bot className="w-6 h-6" />, title: 'Custom Workflow Suite', desc: 'A complete set of n8n workflows tailored to your business — from lead processing to reporting, all integrated with AI where it adds value.' },
              { icon: <Clock className="w-6 h-6" />, title: '24/7 Operation', desc: 'Your AI employee works around the clock. Leads get processed at 3 AM. Reports are ready by morning. Customer emails are triaged before you wake up.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Self-Healing Architecture', desc: 'Every workflow includes retry logic, fallback strategies, and automated recovery. Errors are detected and resolved automatically — often before you even notice.' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'Performance Dashboards', desc: 'Real-time visibility into what your AI employee is doing — executions, success rates, time saved, and ROI metrics. Updated live, accessible anytime.' },
              { icon: <Headphones className="w-6 h-6" />, title: 'Dedicated Support', desc: 'Direct Slack/email access to our engineering team. Issues get resolved in hours, not days. Workflow changes and optimizations included in your plan.' },
              { icon: <Wrench className="w-6 h-6" />, title: 'Ongoing Optimization', desc: 'We continuously monitor and improve your workflows. As your business evolves, your AI employee adapts — new integrations, updated logic, and performance tuning.' },
            ].map((item, i) => (
              <div key={i} className="card-dark p-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14]">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-[#A7ACB8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">AI Employee vs. Traditional Hire</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#F4F6FA]/10">
                  <th className="text-left py-4 text-[#A7ACB8] font-normal">Factor</th>
                  <th className="text-center py-4 text-[#39FF14] font-semibold">AI Employee</th>
                  <th className="text-center py-4 text-[#A7ACB8] font-normal">Traditional Hire</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly Cost', '$500-2,000', '$4,000-8,000+'],
                  ['Working Hours', '24/7/365', '40 hrs/week'],
                  ['Onboarding Time', '1-2 weeks', '1-3 months'],
                  ['Scaling', 'Instant', 'Hire more people'],
                  ['Consistency', '100% — never varies', 'Depends on the day'],
                  ['Sick Days / Vacation', 'None', '20-30 days/year'],
                  ['Error Rate', '<1% with self-healing', '5-15% manual errors'],
                ].map(([factor, ai, trad], i) => (
                  <tr key={i} className="border-b border-[#F4F6FA]/5">
                    <td className="py-4 text-[#F4F6FA]">{factor}</td>
                    <td className="text-center py-4 text-[#39FF14]">{ai}</td>
                    <td className="text-center py-4 text-[#A7ACB8]">{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#A7ACB8]/60 mt-4 text-center">*AI Employee doesn&apos;t replace all roles — it handles repetitive, rule-based, and data-processing tasks that don&apos;t require human creativity or relationship-building.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: 'Week 1', title: 'Audit & Design', desc: 'We review your business processes, identify the highest-ROI automations, and design a workflow architecture that maximizes impact.' },
              { step: 'Week 2', title: 'Build & Test', desc: 'We develop your complete workflow suite, including AI integrations and self-healing logic. Thorough testing in a staging environment.' },
              { step: 'Week 3', title: 'Deploy & Train', desc: 'We deploy to production, set up monitoring, and walk your team through the dashboards and how to request changes.' },
              { step: 'Ongoing', title: 'Monitor & Optimize', desc: 'We continuously monitor performance, resolve issues, apply updates, and optimize workflows as your business evolves.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="font-mono text-sm text-[#39FF14]">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#A7ACB8] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Hire Your AI Employee Today</h2>
          <p className="text-[#A7ACB8]">Start with a free automation audit. We&apos;ll show you exactly how much time and money an AI employee would save your business.</p>
          <Link href="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
              Book Free Audit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
