const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  outputFileTracingIncludes: {
    '/': ['./messages/**/*'],
  },
};

module.exports = withNextIntl(nextConfig);
