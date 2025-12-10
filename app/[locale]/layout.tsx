import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import StructuredData from '@/components/StructuredData';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = 'https://aeza.online';
  const currentUrl = `${baseUrl}/${locale}`;
  
  const title = locale === 'ru' 
    ? 'Современный облачный хостинг провайдер | Aéza'
    : 'Modern cloud hosting provider | Aéza';
  const description = locale === 'ru'
    ? 'Передовые виртуальные и выделенные серверы для проектов любой сложности и структуры. VPS/VDS, выделенные серверы, домены, почасовая оплата.'
    : 'Advanced virtual and dedicated servers for projects of any complexity and structure. VPS/VDS, dedicated servers, domains, hourly payment.';
  const keywords = locale === 'ru'
    ? 'хостинг, VDS, VPS, выделенные серверы, облачный хостинг, aeza, виртуальный сервер, vds хостинг, vps хостинг, облачный сервер'
    : 'hosting, VDS, VPS, dedicated servers, cloud hosting, aeza, virtual server, vds hosting, vps hosting, cloud server';
  
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'ru': `${baseUrl}/ru`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/ru`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: 'Aéza',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      alternateLocale: locale === 'ru' ? 'en_US' : 'ru_RU',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/svg/logo-large.svg`,
          width: 1200,
          height: 630,
          alt: 'Aéza - Cloud Hosting Provider',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/svg/logo-large.svg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification if needed
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <body className="h-full w-full overflow-hidden">
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <div className="h-full w-full overflow-hidden">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}