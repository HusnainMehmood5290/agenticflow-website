import { config } from './config';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const initializeAnalytics = () => {
  if (!config.analytics.enabled || !config.analytics.gaMeasurementId) {
    console.log('[Analytics] Disabled or no measurement ID');
    return;
  }

  // Google Analytics 4
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaMeasurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', config.analytics.gaMeasurementId, {
    page_path: window.location.pathname,
    send_page_view: true,
  });

  console.log('[Analytics] Initialized');
};

export const trackPageView = (url: string) => {
  if (!config.analytics.enabled || typeof window.gtag === 'undefined') return;

  window.gtag('config', config.analytics.gaMeasurementId, {
    page_path: url,
  });
};

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (!config.analytics.enabled || typeof window.gtag === 'undefined') return;

  window.gtag('event', eventName, eventParams);
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
  });
};

export const trackScroll = (percentage: number) => {
  trackEvent('scroll_depth', {
    percentage,
  });
};
