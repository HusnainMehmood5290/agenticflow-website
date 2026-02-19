import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code2, GitBranch, Shield, RefreshCw, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function N8nWorkflowAutomationPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">SERVICE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            n8n Workflow<br />
            <span className="text-[#39FF14]">Development</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed mb-8">
            Custom-built n8n workflows designed, developed, and deployed for your specific business needs. From simple automations to complex multi-step AI pipelines — we build production-grade workflows that run 24/7.
          </p>
          <Link to="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
              Get a Free Workflow Audit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">What We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Lead Processing Pipelines', desc: 'Automated lead capture, enrichment, scoring with AI, CRM routing, and follow-up sequences. Sub-60-second processing from form submission to sales notification.' },
              { icon: <RefreshCw className="w-6 h-6" />, title: 'Order & Fulfillment Automation', desc: 'End-to-end order processing, inventory sync, shipping notifications, returns handling, and customer communication. Works with Shopify, WooCommerce, and custom platforms.' },
              { icon: <Code2 className="w-6 h-6" />, title: 'Data Sync & ETL Pipelines', desc: 'Real-time or scheduled data synchronization between any tools. Clean, transform, and route data across your entire tech stack without manual imports/exports.' },
              { icon: <GitBranch className="w-6 h-6" />, title: 'AI-Powered Document Processing', desc: 'Extract, summarize, and classify documents using GPT-4 or Claude. Invoices, contracts, emails, support tickets — processed automatically with AI understanding.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Self-Healing Error Recovery', desc: 'Every workflow includes retry logic, fallback strategies, error notifications, and automated recovery. 99.9% uptime is our standard, not a premium add-on.' },
              { icon: <Globe className="w-6 h-6" />, title: 'Custom API Integrations', desc: 'Need to connect a tool that doesn\'t have a pre-built integration? We build custom HTTP and webhook integrations for any API, internal tool, or database.' },
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

      {/* Process */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'We map your current processes, identify automation opportunities, and scope the highest-ROI workflows. Free for all new clients.' },
              { step: '02', title: 'Architecture & Design', desc: 'We design the workflow architecture, including error handling, fallback strategies, and monitoring. You approve the design before we build.' },
              { step: '03', title: 'Build & Test', desc: 'We develop your workflows in our staging environment with thorough testing — edge cases, error scenarios, and performance at scale.' },
              { step: '04', title: 'Deploy & Monitor', desc: 'We deploy to production, set up monitoring dashboards, and provide ongoing support. Most workflows are live within 1-2 weeks.' },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <span className="font-mono text-3xl text-[#39FF14] font-bold">{item.step}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-[#A7ACB8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">400+ Integrations Available</h2>
          <p className="text-[#A7ACB8] max-w-2xl mx-auto mb-12">We connect n8n with every tool in your stack. Common integrations include:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Slack', 'HubSpot', 'Salesforce', 'Shopify', 'Gmail', 'Google Sheets', 'Airtable', 'Notion', 'Stripe', 'Zendesk', 'Intercom', 'PostgreSQL', 'MongoDB', 'Webhooks', 'REST APIs', 'OpenAI', 'Claude', 'Twilio', 'SendGrid', 'WooCommerce'].map((tool) => (
              <span key={tool} className="px-4 py-2 text-sm font-mono text-[#A7ACB8] bg-[#0B0C15] border border-[#F4F6FA]/10 rounded-lg">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Automate?</h2>
          <p className="text-[#A7ACB8]">Book a free 20-minute automation audit. We'll identify your highest-impact workflows and give you a transparent quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
                Book Free Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" className="border-[#F4F6FA]/20 text-[#F4F6FA] hover:bg-[#F4F6FA]/5 px-8 py-6 text-sm">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
