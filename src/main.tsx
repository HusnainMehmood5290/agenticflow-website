import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary'
import { LoadingScreen } from './components/LoadingScreen'
import { initializeAnalytics } from './lib/analytics'
import { useWebVitals } from './hooks/use-web-vitals'

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
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
