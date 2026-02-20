'use client';

import { useEffect } from 'react';

export function useWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reportWebVitals = async () => {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');

      const sendToAnalytics = (metric: any) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          });
        }

        if (process.env.NODE_ENV === 'development') {
          console.log(`[Web Vital] ${metric.name}:`, metric.value);
        }
      };

      onCLS(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
      onINP(sendToAnalytics);
    };

    reportWebVitals();
  }, []);
}
