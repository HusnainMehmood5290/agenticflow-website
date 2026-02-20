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
