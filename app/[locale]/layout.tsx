import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: locale === 'ru' 
      ? 'Современный облачный хостинг провайдер | Aéza'
      : 'Modern cloud hosting provider | Aéza',
    description: locale === 'ru'
      ? 'Передовые виртуальные и выделенные серверы для проектов любой сложности и структуры.'
      : 'Advanced virtual and dedicated servers for projects of any complexity and structure.',
    keywords: locale === 'ru'
      ? 'хостинг, VDS, VPS, выделенные серверы, облачный хостинг, aeza'
      : 'hosting, VDS, VPS, dedicated servers, cloud hosting, aeza',
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
        <NextIntlClientProvider messages={messages}>
          <div className="h-full w-full overflow-hidden">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}