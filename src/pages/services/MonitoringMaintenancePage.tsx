import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Bell, LineChart, Shield, Wrench, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MonitoringMaintenancePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-xs text-[#39FF14] tracking-widest uppercase block mb-6">SERVICE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            24/7 Monitoring &<br />
            <span className="text-[#39FF14]">Maintenance</span>
          </h1>
          <p className="text-lg text-[#A7ACB8] max-w-3xl leading-relaxed mb-8">
            Round-the-clock monitoring, alerting, and maintenance for your automation infrastructure. We detect and resolve issues before they impact your business — often before you even know they exist.
          </p>
          <Link to="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
              Get 24/7 Monitoring <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Monitor */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">What We Monitor</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Activity className="w-6 h-6" />, title: 'Workflow Execution Health', desc: 'Real-time tracking of every workflow execution — success rates, failure patterns, execution times, and resource usage. Anomalies are flagged instantly.' },
              { icon: <Bell className="w-6 h-6" />, title: 'Smart Alerting', desc: 'Intelligent alerts that distinguish between transient issues and real problems. No alert fatigue — you only get notified when human attention is actually needed.' },
              { icon: <Shield className="w-6 h-6" />, title: 'API Health Checks', desc: 'Continuous monitoring of all third-party APIs your workflows depend on. We detect API changes, rate limit issues, and authentication failures proactively.' },
              { icon: <LineChart className="w-6 h-6" />, title: 'Performance Metrics', desc: 'Detailed dashboards showing execution volume, latency trends, error rates, and resource utilization. Historical data for trend analysis and capacity planning.' },
              { icon: <Eye className="w-6 h-6" />, title: 'Data Integrity Checks', desc: 'Automated validation that data flowing through your workflows is complete, correctly formatted, and consistent across systems. Drift detection included.' },
              { icon: <Wrench className="w-6 h-6" />, title: 'Proactive Maintenance', desc: 'Regular updates, security patches, credential rotation, and workflow optimization. We keep your automation stack healthy and up-to-date.' },
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

      {/* SLA */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our SLA Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '99.9%', label: 'Uptime Target', desc: 'Measured monthly. Self-healing workflows and redundant monitoring ensure maximum availability.' },
              { metric: '<30min', label: 'Alert Response', desc: 'Average time from issue detection to engineer acknowledgment during business hours.' },
              { metric: '<4hrs', label: 'Critical Resolution', desc: 'Maximum time to resolve critical issues that impact business operations.' },
            ].map((item, i) => (
              <div key={i} className="card-dark p-8 text-center space-y-2">
                <span className="text-4xl font-bold text-[#39FF14] font-mono">{item.metric}</span>
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <p className="text-[#A7ACB8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#F4F6FA]/5">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">Incident Response Process</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Detection', desc: 'Automated monitoring detects the issue — execution failure, performance degradation, or API error. Self-healing logic attempts immediate recovery.' },
              { step: '02', title: 'Classification', desc: 'The issue is classified by severity (critical/high/medium/low) and type (transient/persistent/external). This determines the response protocol.' },
              { step: '03', title: 'Notification', desc: 'If the issue isn\'t auto-resolved, our engineering team is alerted via Slack and PagerDuty. You receive a notification with the issue summary and estimated resolution time.' },
              { step: '04', title: 'Resolution', desc: 'Our engineers diagnose and fix the root cause. For critical issues, we deploy a fix or workaround within 4 hours. Post-fix, we verify full system recovery.' },
              { step: '05', title: 'Post-Mortem', desc: 'For significant incidents, we provide a written post-mortem explaining what happened, why, and what we\'ve done to prevent recurrence. Full transparency.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0">
                  <span className="font-mono text-2xl text-[#39FF14] font-bold">{item.step}</span>
                </div>
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
          <h2 className="text-3xl font-bold">Never Worry About Downtime Again</h2>
          <p className="text-[#A7ACB8]">Get 24/7 monitoring, self-healing workflows, and dedicated engineering support for your automation infrastructure.</p>
          <Link to="/contact">
            <Button className="bg-[#39FF14] text-[#05050A] hover:bg-[#2dd40e] px-8 py-6 text-sm font-semibold">
              Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
