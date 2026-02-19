import { StrictMode, useEffect, useState, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'
import { LoadingScreen } from './components/LoadingScreen'
import { initializeAnalytics } from './lib/analytics'
import { useWebVitals } from './hooks/use-web-vitals'
import Layout from './components/Layout'

// Lazy-loaded pages
const HomePage = lazy(() => import('./App'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const N8nWorkflowAutomationPage = lazy(() => import('./pages/services/N8nWorkflowAutomationPage'));
const AiAgentIntegrationPage = lazy(() => import('./pages/services/AiAgentIntegrationPage'));
const ManagedAutomationPage = lazy(() => import('./pages/services/ManagedAutomationPage'));
const MonitoringMaintenancePage = lazy(() => import('./pages/services/MonitoringMaintenancePage'));

function Root() {
  const [loading, setLoading] = useState(true);
  
  useWebVitals();

  useEffect(() => {
    // Initialize analytics
    initializeAnalytics();
    
    // Minimal loading delay - prioritize LCP
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <ErrorBoundary>
        {loading && <LoadingScreen minDuration={100} />}
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-[#05050A]" />}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="case-studies" element={<CaseStudiesPage />} />
                <Route path="blog" element={<BlogIndexPage />} />
                <Route path="blog/:slug" element={<BlogPostPage />} />
                <Route path="services/n8n-workflow-automation" element={<N8nWorkflowAutomationPage />} />
                <Route path="services/ai-agent-integration" element={<AiAgentIntegrationPage />} />
                <Route path="services/managed-automation" element={<ManagedAutomationPage />} />
                <Route path="services/monitoring-maintenance" element={<MonitoringMaintenancePage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
