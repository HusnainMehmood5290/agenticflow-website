import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact AgenticFlow - Book Free Automation Audit',
  description: 'Get in touch with AgenticFlow. Book a free 20-minute automation audit and discover how AI-powered n8n workflows can save your business 10+ hours per week.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactForm />;
}
