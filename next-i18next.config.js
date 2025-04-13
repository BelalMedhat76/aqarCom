/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'], // Supported locales
    defaultLocale: 'en',   // Default locale
    localeDetection: false, // Detect user locale automatically
  },
};

module.exports = nextConfig;