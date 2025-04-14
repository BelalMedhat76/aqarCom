/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ar', 'en'], // Supported locales
    defaultLocale: 'ar',   // Default locale
    localeDetection: false, // Detect user locale automatically
  },
};

module.exports = nextConfig;