import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-n8n-workflow-automation',
    title: 'What Is n8n? The Complete Guide to Open-Source Workflow Automation in 2026',
    description: 'A comprehensive introduction to n8n — the open-source automation platform that powers AgenticFlow. Learn how it compares to Zapier, Make.com, and why businesses choose n8n for AI workflow automation.',
    date: '2026-02-15',
    readTime: '8 min read',
    category: 'Guides',
    tags: ['n8n', 'workflow automation', 'open-source'],
  },
  {
    slug: 'how-to-automate-business-with-ai',
    title: 'How to Automate Your Business with AI: A Step-by-Step Guide for 2026',
    description: 'Learn the practical steps to identify automation opportunities, choose the right AI tools, and implement workflows that save 10+ hours weekly. Real examples from actual client engagements.',
    date: '2026-02-10',
    readTime: '10 min read',
    category: 'Guides',
    tags: ['AI automation', 'business automation', 'productivity'],
  },
  {
    slug: 'n8n-vs-zapier-vs-make',
    title: 'n8n vs Zapier vs Make.com: Which Automation Platform Is Right for Your Business?',
    description: 'An honest comparison of the three leading automation platforms. Pricing, capabilities, self-hosting, AI integration, and when to choose each one.',
    date: '2026-02-05',
    readTime: '12 min read',
    category: 'Comparisons',
    tags: ['n8n', 'Zapier', 'Make.com', 'comparison'],
  },
  {
    slug: '5-automations-every-business-needs',
    title: '5 AI Automations Every Small Business Should Set Up in 2026',
    description: 'From lead follow-ups to invoice processing, these are the five highest-ROI automations we build for clients. Each one saves 2-5 hours per week and pays for itself within a month.',
    date: '2026-01-28',
    readTime: '7 min read',
    category: 'Tips',
    tags: ['small business', 'automation', 'ROI'],
  },
  {
    slug: 'self-healing-workflows-explained',
    title: 'Self-Healing Workflows: How to Build Automations That Never Break',
    description: 'Deep dive into self-healing workflow architecture — retry logic, error handling, fallback strategies, and monitoring. Learn how we build n8n workflows with 99.9% uptime.',
    date: '2026-01-20',
    readTime: '9 min read',
    category: 'Technical',
    tags: ['self-healing', 'reliability', 'monitoring'],
  },
];

export default function BlogIndexPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">BLOG</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Automation Insights &<br />
            <span className="text-[#39FF14]">Expert Guides</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed">
            Practical guides, comparisons, and deep dives into AI workflow automation, n8n development, and building systems that scale your business without adding headcount.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="card-dark overflow-hidden group hover:border-[#39FF14]/30 transition-all">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#A7ACB8]">
                  <span className="px-2 py-0.5 bg-[#39FF14]/10 text-[#39FF14] rounded font-mono">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold group-hover:text-[#39FF14] transition-colors leading-snug">{post.title}</h2>
                <p className="text-[#A7ACB8] text-sm leading-relaxed">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#A7ACB8]/60 flex items-center gap-1"><Tag className="w-3 h-3" />{tag}</span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-[#39FF14] text-sm font-medium group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
