import { useState } from 'react';

import { ArrowRight, Calendar, Mail, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trackFormSubmit } from '@/lib/analytics';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://n8n.agenticflow.me/webhook/form_filled', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formObject),
      });

      const data = await response.json();

      if (data.success || response.ok) {
        setSubmitSuccess(true);
        form.reset();
        trackFormSubmit('contact_page');
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24" itemScope itemType="https://schema.org/ContactPage">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">CONTACT US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Let's Build Your<br />
            <span className="text-[#39FF14]">First Workflow</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-2xl leading-relaxed">
            Book a free 20-minute automation audit. Tell us what you're doing manually — we'll map it, quote it, and ship it in 2 weeks.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="card-dark p-8 lg:p-10 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-[#39FF14]" />
              <h2 className="text-2xl font-semibold">Book a 20-Minute Call</h2>
            </div>
            <p className="text-[#A7ACB8] text-sm">Fill out the form below and we'll get back to you within 24 hours with a personalized automation plan.</p>

            <form className="space-y-4" aria-label="Contact form" onSubmit={handleFormSubmit}>
              {submitSuccess && (
                <div className="bg-[#39FF14]/10 border border-[#39FF14] text-[#39FF14] px-4 py-3 rounded-lg flex items-center gap-2" role="alert">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
                </div>
              )}
              {submitError && (
                <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg" role="alert">
                  <p className="text-sm font-medium">{submitError}</p>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#A7ACB8] mb-2">Name *</label>
                  <Input id="name" name="name" placeholder="Your name" autoComplete="name" required disabled={isSubmitting} className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 disabled:opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-[#A7ACB8] mb-2">Email *</label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required disabled={isSubmitting} className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 disabled:opacity-50" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm text-[#A7ACB8] mb-2">Company</label>
                  <Input id="company" name="company" placeholder="Your company name" autoComplete="organization" disabled={isSubmitting} className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 disabled:opacity-50" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm text-[#A7ACB8] mb-2">Budget Range</label>
                  <select id="budget" name="budget" disabled={isSubmitting} className="w-full h-10 rounded-md bg-[#05050A] border border-[#F4F6FA]/10 text-[#F4F6FA] px-3 text-sm disabled:opacity-50">
                    <option value="">Select a range</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-[#A7ACB8] mb-2">Service Interested In</label>
                <select id="service" name="service" disabled={isSubmitting} className="w-full h-10 rounded-md bg-[#05050A] border border-[#F4F6FA]/10 text-[#F4F6FA] px-3 text-sm disabled:opacity-50">
                  <option value="">Select a service</option>
                  <option value="workflow-development">n8n Workflow Development</option>
                  <option value="ai-integration">AI Agent Integration</option>
                  <option value="managed-automation">Managed Automation (AI Employee)</option>
                  <option value="monitoring">24/7 Monitoring & Maintenance</option>
                  <option value="audit">Free Automation Audit</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#A7ACB8] mb-2">Tell Us About Your Automation Needs *</label>
                <Textarea id="message" name="message" placeholder="What manual tasks are eating up your team's time? What tools do you currently use? What would ideal automation look like for your business?" required disabled={isSubmitting} className="bg-[#05050A] border-[#F4F6FA]/10 text-[#F4F6FA] placeholder:text-[#A7ACB8]/50 min-h-[150px] disabled:opacity-50" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] py-6 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message & Book a Call'}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-dark p-8 space-y-6">
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#39FF14] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a href="mailto:contact@agenticflow.me" className="text-[#A7ACB8] text-sm hover:text-[#39FF14] transition-colors">contact@agenticflow.me</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#39FF14] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Response Time</p>
                    <p className="text-[#A7ACB8] text-sm">Within 24 hours, usually much faster</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#39FF14] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-[#A7ACB8] text-sm">Remote — serving clients worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#39FF14] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Preferred Contact</p>
                    <p className="text-[#A7ACB8] text-sm">Email or form submission for fastest response</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-dark p-8 space-y-4">
              <h3 className="text-xl font-semibold">What Happens Next?</h3>
              <ol className="space-y-3 text-[#A7ACB8] text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#39FF14]/10 text-[#39FF14] flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                  <span>We review your submission and identify initial automation opportunities within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#39FF14]/10 text-[#39FF14] flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                  <span>We schedule a free 20-minute video call to discuss your specific workflows and goals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#39FF14]/10 text-[#39FF14] flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                  <span>You receive a detailed proposal with recommended automations, timeline, and transparent pricing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#39FF14]/10 text-[#39FF14] flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                  <span>If you approve, we start building and deliver working workflows within 2 weeks.</span>
                </li>
              </ol>
            </div>

            <div className="card-dark p-8 space-y-4">
              <h3 className="text-xl font-semibold">Trust Indicators</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39FF14]" /><span className="text-sm text-[#A7ACB8]">50+ workflows deployed</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39FF14]" /><span className="text-sm text-[#A7ACB8]">99.9% uptime</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39FF14]" /><span className="text-sm text-[#A7ACB8]">2-week delivery</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39FF14]" /><span className="text-sm text-[#A7ACB8]">Free audit included</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
