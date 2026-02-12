// Environment configuration utility
export const config = {
  site: {
    url: import.meta.env.VITE_SITE_URL || 'https://agenticflow.me',
    name: import.meta.env.VITE_SITE_NAME || 'AgenticFlow',
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@agenticflow.me',
  },
  analytics: {
    gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
    gtmId: import.meta.env.VITE_GTM_ID || '',
    enabled: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },
  features: {
    chatbot: import.meta.env.VITE_ENABLE_CHATBOT === 'true',
  },
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;
