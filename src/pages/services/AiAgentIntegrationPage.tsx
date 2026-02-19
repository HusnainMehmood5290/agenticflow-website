import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Bot, MessageSquare, FileSearch, Sparkles, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AiAgentIntegrationPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">SERVICE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            AI Agent<br />
            <span className="text-[#39FF14]">Integration</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed mb-8">
            We embed AI models — GPT-4, Claude, Gemini, and open-source alternatives — directly into your business workflows. Not just API calls, but intelligent agents that reason, decide, and act autonomously.
          </p>
          <Link to="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
              Discuss Your AI Integration <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">AI Capabilities We Integrate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain className="w-6 h-6" />, title: 'Intelligent Decision-Making', desc: 'AI agents that evaluate data, apply business rules, and make decisions — lead scoring, content classification, risk assessment, and priority routing.' },
              { icon: <MessageSquare className="w-6 h-6" />, title: 'Natural Language Processing', desc: 'Extract meaning from emails, support tickets, reviews, and documents. Summarize, classify, and respond with human-quality language understanding.' },
              { icon: <FileSearch className="w-6 h-6" />, title: 'Document Intelligence', desc: 'Process invoices, contracts, applications, and reports. AI extracts structured data from unstructured documents, eliminating manual data entry.' },
              { icon: <Bot className="w-6 h-6" />, title: 'Autonomous Agent Loops', desc: 'Full AI agent architectures with memory, tool use, and multi-step reasoning. Agents that can research, plan, execute, and verify their own work.' },
              { icon: <Sparkles className="w-6 h-6" />, title: 'Content Generation', desc: 'AI-powered content creation for emails, social media, reports, and documentation. Personalized, on-brand content generated at scale.' },
              { icon: <Cpu className="w-6 h-6" />, title: 'Model Orchestration', desc: 'Multi-model architectures that route tasks to the right AI model. GPT-4 for complex reasoning, Claude for long documents, local models for fast processing.' },
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

      {/* Models */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">AI Models We Work With</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'OpenAI GPT-4 / GPT-4o', strengths: 'Best for complex reasoning, code generation, and multi-step analysis. The most versatile model for business automation.' },
              { name: 'Anthropic Claude 3.5', strengths: 'Excels at long document analysis, nuanced writing, and tasks requiring careful instruction-following. 200K context window.' },
              { name: 'Google Gemini', strengths: 'Strong multimodal capabilities (text + images). Good for visual document processing and cross-modal analysis.' },
              { name: 'Open-Source (Ollama/LLaMA)', strengths: 'Self-hosted models for maximum data privacy. No data leaves your infrastructure. Best for regulated industries.' },
            ].map((model, i) => (
              <div key={i} className="card-dark p-6 space-y-2">
                <h3 className="text-lg font-semibold text-[#39FF14]">{model.name}</h3>
                <p className="text-[#A7ACB8] text-sm leading-relaxed">{model.strengths}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">Real-World AI Use Cases</h2>
          <div className="space-y-6">
            {[
              { title: 'AI Lead Qualification', desc: 'GPT-4 analyzes incoming leads against your ideal customer profile, assigns a score, writes a personalized follow-up draft, and routes to the right sales rep — all in under 60 seconds.' },
              { title: 'Email Triage & Response Drafting', desc: 'Claude categorizes incoming emails by urgency and type, extracts action items, drafts context-aware responses, and routes urgent items to Slack for immediate attention.' },
              { title: 'Customer Support Automation', desc: 'AI agents handle Tier 1 support queries — answering FAQs, processing simple requests, and escalating complex issues to humans with full context and suggested solutions.' },
              { title: 'Automated Report Generation', desc: 'AI pulls data from Google Analytics, Stripe, and your CRM, then generates a plain-English executive summary highlighting key trends, anomalies, and recommended actions.' },
              { title: 'Contract & Invoice Processing', desc: 'AI extracts key terms, dates, amounts, and parties from contracts and invoices. Structured data is routed to accounting or legal systems automatically.' },
            ].map((item, i) => (
              <div key={i} className="card-dark p-6 flex flex-col md:flex-row gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] shrink-0 font-mono font-bold text-sm">{String(i + 1).padStart(2, '0')}</div>
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
          <h2 className="text-3xl font-bold">Ready to Add AI to Your Workflows?</h2>
          <p className="text-[#A7ACB8]">We'll assess your current processes and identify where AI can deliver the highest impact. Free 20-minute consultation.</p>
          <Link to="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
