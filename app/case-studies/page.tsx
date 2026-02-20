import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Case Studies - Real Automation Results',
  description: 'See how AgenticFlow has helped businesses across SaaS, e-commerce, and professional services automate operations and save 10-20+ hours per week.',
  alternates: { canonical: '/case-studies' },
};

const caseStudies = [
  {
    slug: 'saas-lead-qualification',
    title: 'Automated Lead Qualification Pipeline for SaaS Startup',
    client: 'B2B SaaS Company',
    industry: 'SaaS / Technology',
    result: '15 hours saved per week',
    description: 'How we automated the entire lead qualification and CRM update pipeline, eliminating 3 hours of daily manual work.',
    tools: ['n8n', 'HubSpot', 'Slack', 'GPT-4', 'Google Sheets'],
    metrics: [
      { label: 'Time Saved', value: '15 hrs/week' },
      { label: 'Lead Response', value: '< 5 min' },
      { label: 'ROI Timeline', value: '1 week' },
      { label: 'Accuracy', value: '98%' },
    ],
    challenge: 'The client\'s sales team was spending 3+ hours every day manually reviewing inbound leads, updating their HubSpot CRM, scoring prospects, and routing qualified leads to the right sales rep. Lead response times averaged 4-6 hours, causing significant drop-off.',
    solution: 'We built an n8n workflow that automatically captures inbound leads from their website form, enriches lead data using Clearbit, scores them using GPT-4 based on custom criteria, updates HubSpot with complete lead profiles, sends qualified leads to the right sales rep via Slack with full context, and adds unqualified leads to a nurture sequence. The entire pipeline runs in under 60 seconds.',
    results: 'Lead response time dropped from 4-6 hours to under 5 minutes. The sales team recovered 15 hours per week previously spent on manual data entry and lead routing. Qualified lead conversion rates increased by 34% within the first month. The self-healing workflow has maintained 99.9% uptime since deployment.',
    testimonial: {
      quote: 'AgenticFlow automated our entire lead qualification pipeline. What used to take 3 hours of manual CRM updates every day now runs entirely on autopilot. The ROI was visible within the first week.',
      author: 'Sarah K.',
      role: 'Operations Lead',
    },
  },
  {
    slug: 'ecommerce-order-processing',
    title: 'E-Commerce Order Processing & Returns Automation',
    client: 'Direct-to-Consumer E-Commerce Brand',
    industry: 'E-Commerce / Retail',
    result: '12 hours saved per week',
    description: 'End-to-end order processing automation including returns management, inventory updates, and customer notifications.',
    tools: ['n8n', 'Shopify', 'Slack', 'Airtable', 'Gmail'],
    metrics: [
      { label: 'Time Saved', value: '12 hrs/week' },
      { label: 'Processing Speed', value: '< 2 min' },
      { label: 'ROI Timeline', value: '10 days' },
      { label: 'Error Rate', value: '< 1%' },
    ],
    challenge: 'The brand was processing 200+ orders daily with a team of 3 manually updating spreadsheets, sending tracking emails, handling returns, and syncing inventory across channels. Errors were frequent and returns processing took 3-5 business days.',
    solution: 'We created a comprehensive n8n automation suite: new orders are automatically logged in Airtable with customer data, tracking information is sent via Gmail when orders ship, returns requests are auto-processed with instant customer confirmation, inventory levels sync across Shopify and Airtable in real-time, and the operations team gets Slack alerts for anything requiring manual attention. Auto-tagging and full audit logs ensure complete visibility.',
    results: 'Order processing went from 15 minutes average to under 2 minutes. Returns processing dropped from 3-5 days to same-day. The team saved 12 hours per week, allowing them to focus on growth initiatives. Error rates dropped from 8% to under 1%.',
    testimonial: {
      quote: 'We needed n8n workflow automation for our e-commerce order processing and returns management. AgenticFlow delivered in 10 days with Slack notifications, auto-tagging, and full audit logs. Incredible work.',
      author: 'Marcus T.',
      role: 'Founder',
    },
  },
  {
    slug: 'agency-client-reporting',
    title: '24/7 Self-Healing Workflow for Digital Agency',
    client: 'Digital Marketing Agency',
    industry: 'Agency / Professional Services',
    result: '20 hours saved per week',
    description: 'Automated client reporting, social media scheduling, and campaign performance monitoring with self-healing capabilities.',
    tools: ['n8n', 'Google Analytics', 'Slack', 'Google Sheets', 'Claude'],
    metrics: [
      { label: 'Time Saved', value: '20 hrs/week' },
      { label: 'Report Delivery', value: 'Automatic' },
      { label: 'ROI Timeline', value: '2 weeks' },
      { label: 'Uptime', value: '99.99%' },
    ],
    challenge: 'The agency managed 15+ client accounts, spending 20+ hours weekly on manual report compilation from Google Analytics, creating performance summaries, updating client dashboards, and monitoring campaign health. A critical API change at 2 AM once caused a full day of missed reports.',
    solution: 'We built a self-healing n8n workflow system that automatically pulls data from Google Analytics for all client accounts, generates AI-powered performance summaries using Claude, populates Google Sheets dashboards with formatted data and charts, sends weekly client reports via email on schedule, monitors campaigns 24/7 with anomaly detection and Slack alerts, and retry logic + automatic error recovery handles API changes gracefully.',
    results: 'The agency eliminated 20 hours of manual reporting per week across the team. Reports are now delivered automatically every Monday morning, perfectly formatted and with AI-generated insights. The self-healing system handled 3 API changes in the first quarter without any downtime or human intervention.',
    testimonial: {
      quote: 'The 24/7 monitoring alone is worth it. We had a critical API change at 2 AM and AgenticFlow\'s self-healing workflows handled it automatically. No downtime, no manual intervention needed.',
      author: 'David L.',
      role: 'CTO',
    },
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">CASE STUDIES</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Real Automations.<br />
            <span className="text-[#39FF14]">Real Results.</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed">
            See how we&apos;ve helped businesses across SaaS, e-commerce, and professional services automate their operations, save hours every week, and scale without adding headcount.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="card-dark p-6 text-center">
            <p className="text-3xl font-bold text-[#39FF14]">50+</p>
            <p className="text-sm text-[#A7ACB8] mt-1">Workflows Deployed</p>
          </div>
          <div className="card-dark p-6 text-center">
            <p className="text-3xl font-bold text-[#39FF14]">47+</p>
            <p className="text-sm text-[#A7ACB8] mt-1">Hours Saved Weekly</p>
          </div>
          <div className="card-dark p-6 text-center">
            <p className="text-3xl font-bold text-[#39FF14]">99.9%</p>
            <p className="text-sm text-[#A7ACB8] mt-1">Average Uptime</p>
          </div>
          <div className="card-dark p-6 text-center">
            <p className="text-3xl font-bold text-[#39FF14]">&lt; 2 Weeks</p>
            <p className="text-sm text-[#A7ACB8] mt-1">Average Delivery</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, i) => (
        <section key={study.slug} className={`py-24 px-6 lg:px-16 ${i % 2 === 0 ? '' : 'bg-[#0B0C15]/50'} border-t border-[#F4F6FA]/10`} id={study.slug}>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase">{study.industry}</span>
              <span className="text-[#A7ACB8] text-xs">&bull;</span>
              <span className="text-[#A7ACB8] text-xs">{study.client}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{study.title}</h2>
            <p className="text-lg text-[#A7ACB8] mb-8 max-w-3xl">{study.description}</p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {study.metrics.map((m) => (
                <div key={m.label} className="card-dark p-4 text-center">
                  <p className="text-xl font-bold text-[#39FF14]">{m.value}</p>
                  <p className="text-xs text-[#A7ACB8] mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-8">
              {study.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 text-xs font-mono text-[#39FF14] bg-[#39FF14]/10 rounded-full border border-[#39FF14]/20">{tool}</span>
              ))}
            </div>

            {/* Challenge / Solution / Results */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#F4F6FA]">The Challenge</h3>
                <p className="text-[#A7ACB8] leading-relaxed text-sm">{study.challenge}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#F4F6FA]">Our Solution</h3>
                <p className="text-[#A7ACB8] leading-relaxed text-sm">{study.solution}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#F4F6FA]">The Results</h3>
                <p className="text-[#A7ACB8] leading-relaxed text-sm">{study.results}</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="card-dark p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#39FF14] text-[#39FF14]" />)}
              </div>
              <p className="text-[#A7ACB8] leading-relaxed italic mb-4">&ldquo;{study.testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#39FF14]" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{study.testimonial.author}</p>
                  <p className="text-xs text-[#A7ACB8]">{study.testimonial.role}, {study.client}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/10">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Want Results Like These?</h2>
          <p className="text-lg text-[#A7ACB8]">
            Every business has different automation needs. Book a free audit and we&apos;ll identify your highest-impact opportunities.
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
