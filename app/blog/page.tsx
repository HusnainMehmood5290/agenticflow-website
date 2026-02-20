import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog - Automation Insights & Expert Guides',
  description: 'Practical guides, comparisons, and deep dives into AI workflow automation, n8n development, and building systems that scale your business.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">BLOG</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Automation Insights &amp;<br />
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
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-dark overflow-hidden group hover:border-[#39FF14]/30 transition-all">
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
