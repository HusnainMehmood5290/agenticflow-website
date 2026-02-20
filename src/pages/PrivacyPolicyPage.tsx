

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24" itemScope itemType="https://schema.org/WebPage">
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[900px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">LEGAL</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#A7ACB8] mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-[#A7ACB8] leading-relaxed mb-4">We collect basic information when you use our contact form or book a call:</p>
              <ul className="list-disc list-inside text-[#A7ACB8] space-y-2 ml-4">
                <li>Name and email address</li>
                <li>Company name (optional)</li>
                <li>Information about your automation needs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-[#A7ACB8] space-y-2 ml-4">
                <li>To respond to your inquiries</li>
                <li>To deliver our automation services</li>
                <li>To improve our website and offerings</li>
              </ul>
              <p className="text-[#A7ACB8] leading-relaxed mt-4">We do <strong className="text-[#F4F6FA]">not</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
              <p className="text-[#A7ACB8] leading-relaxed">
                We use minimal cookies for basic website functionality and anonymous analytics. We do not use advertising trackers or third-party marketing cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-[#A7ACB8] leading-relaxed">
                Your data is transmitted securely via SSL encryption. We follow industry best practices to keep your information safe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-[#A7ACB8] leading-relaxed">
                You can request access to, correction, or deletion of your personal data at any time by contacting us at <a href="mailto:contact@agenticflow.me" className="text-[#39FF14] hover:underline">contact@agenticflow.me</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p className="text-[#A7ACB8] leading-relaxed">
                If you have any questions about this Privacy Policy, reach out to us at:
              </p>
              <div className="mt-4 card-dark p-6 space-y-2">
                <p className="text-[#F4F6FA] font-semibold">AgenticFlow</p>
                <p className="text-[#A7ACB8]">Email: <a href="mailto:contact@agenticflow.me" className="text-[#39FF14] hover:underline">contact@agenticflow.me</a></p>
                <p className="text-[#A7ACB8]">Website: <a href="https://agenticflow.me" className="text-[#39FF14] hover:underline">agenticflow.me</a></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
