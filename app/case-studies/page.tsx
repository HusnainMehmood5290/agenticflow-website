import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, BarChart3, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Example Automations - What We Can Build',
  description: 'Explore example automation scenarios AgenticFlow can build for SaaS, e-commerce, and professional services — from lead pipelines to self-healing workflows.',
  alternates: { canonical: '/case-studies' },
};

const scenarios = [
  {
    slug: 'saas-lead-qualification',
    icon: Zap,
    title: 'Automated Lead Qualification Pipeline',
    industry: 'SaaS / Technology',
    description: 'Capture inbound leads, enrich and score them with AI, update your CRM, and route qualified prospects to the right sales rep — all automatically.',
    tools: ['n8n', 'HubSpot', 'Slack', 'GPT-4', 'Google Sheets'],
    highlights: [
      { label: 'Typical Time Savings', value: '10-15 hrs/week' },
      { label: 'Lead Response', value: 'Under 5 min' },
      { label: 'Delivery Timeline', value: '1-2 weeks' },
    ],
    problem: 'Sales teams often spend 2-3 hours a day manually reviewing inbound leads, updating CRM fields, scoring prospects, and routing them. Slow response times lead to lost opportunities.',
    approach: 'We build an n8n workflow that captures form submissions, enriches lead data via APIs, scores leads with GPT-4 against your custom criteria, updates your CRM with full profiles, and sends qualified leads to the right rep via Slack — all in under 60 seconds.',
    outcome: 'Your team stops doing repetitive CRM work and focuses on closing deals. Lead response times drop from hours to minutes, and every lead gets consistent scoring and routing.',
  },
  {
    slug: 'ecommerce-order-processing',
    icon: BarChart3,
    title: 'E-Commerce Order & Returns Automation',
    industry: 'E-Commerce / Retail',
    description: 'Automate order logging, tracking emails, returns processing, and inventory syncing — with Slack alerts for anything needing human attention.',
    tools: ['n8n', 'Shopify', 'Slack', 'Airtable', 'Gmail'],
    highlights: [
      { label: 'Typical Time Savings', value: '8-12 hrs/week' },
      { label: 'Processing Speed', value: 'Under 2 min' },
      { label: 'Delivery Timeline', value: '1-2 weeks' },
    ],
    problem: 'Brands processing hundreds of orders manually face spreadsheet errors, delayed tracking emails, slow returns processing, and inventory mismatches across channels.',
    approach: 'We create an n8n automation suite: orders auto-log in Airtable, tracking emails send on shipment, returns get instant processing with customer confirmation, inventory syncs in real-time, and your ops team gets Slack alerts for edge cases. Full audit logs included.',
    outcome: 'Order processing goes from 15 minutes to under 2 minutes per order. Returns resolve same-day. Your team redirects hours toward growth instead of data entry.',
  },
  {
    slug: 'agency-client-reporting',
    icon: RefreshCw,
    title: 'Self-Healing Reporting Workflows',
    industry: 'Agency / Professional Services',
    description: 'Pull analytics data, generate AI-powered summaries, populate dashboards, and deliver scheduled client reports — with automatic error recovery.',
    tools: ['n8n', 'Google Analytics', 'Slack', 'Google Sheets', 'Claude'],
    highlights: [
      { label: 'Typical Time Savings', value: '15-20 hrs/week' },
      { label: 'Report Delivery', value: 'Fully Automatic' },
      { label: 'Delivery Timeline', value: '1-2 weeks' },
    ],
    problem: 'Agencies managing multiple client accounts spend 15-20+ hours weekly compiling reports from analytics platforms, creating summaries, and updating dashboards. When an API changes, reports break without warning.',
    approach: 'We build a self-healing n8n workflow that pulls client data from analytics platforms, generates AI-powered summaries with Claude, populates formatted dashboards, and emails scheduled reports. Retry logic and automatic error recovery handle API changes gracefully.',
    outcome: 'Reports go out on schedule every week — formatted, insightful, and requiring zero manual work. When APIs change, the self-healing system recovers automatically instead of breaking silently.',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">EXAMPLE AUTOMATIONS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            What We Can<br />
            <span className="text-[#39FF14]">Build for You.</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed">
            These are example automation scenarios we design and build for businesses across SaaS, e-commerce, and professional services. Every project is tailored to your specific tools and workflows.
          </p>
        </div>
      </section>

      {/* Scenarios */}
      {scenarios.map((scenario, i) => {
        const Icon = scenario.icon;
        return (
          <section key={scenario.slug} className={`py-24 px-6 lg:px-16 ${i % 2 === 0 ? '' : 'bg-[#0B0C15]/50'} border-t border-[#F4F6FA]/10`} id={scenario.slug}>
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase">{scenario.industry}</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#39FF14]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{scenario.title}</h2>
              </div>
              <p className="text-lg text-[#A7ACB8] mb-8 max-w-3xl">{scenario.description}</p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                {scenario.highlights.map((h) => (
                  <div key={h.label} className="card-dark p-4 text-center">
                    <p className="text-xl font-bold text-[#39FF14]">{h.value}</p>
                    <p className="text-xs text-[#A7ACB8] mt-1">{h.label}</p>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-8">
                {scenario.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 text-xs font-mono text-[#39FF14] bg-[#39FF14]/10 rounded-full border border-[#39FF14]/20">{tool}</span>
                ))}
              </div>

              {/* Problem / Approach / Outcome */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#F4F6FA]">The Problem</h3>
                  <p className="text-[#A7ACB8] leading-relaxed text-sm">{scenario.problem}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#F4F6FA]">Our Approach</h3>
                  <p className="text-[#A7ACB8] leading-relaxed text-sm">{scenario.approach}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#F4F6FA]">Expected Outcome</h3>
                  <p className="text-[#A7ACB8] leading-relaxed text-sm">{scenario.outcome}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/10">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Have a Workflow in Mind?</h2>
          <p className="text-lg text-[#A7ACB8]">
            Every business has different automation needs. Book a free audit and we&apos;ll map out your highest-impact opportunities.
          </p>
          <Link href="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-base font-semibold glow-accent-strong">
              Book a Free Automation Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
