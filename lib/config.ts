// Environment configuration utility
export const config = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://agenticflow.me',
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'AgenticFlow',
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@agenticflow.me',
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
    enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  },
  features: {
    chatbot: process.env.NEXT_PUBLIC_ENABLE_CHATBOT === 'true',
  },
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
} as const;
