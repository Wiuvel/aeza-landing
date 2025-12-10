import { type Locale } from '@/i18n';

export function getReferralUrl(locale: Locale): string {
  if (locale === 'ru') {
    return process.env.NEXT_PUBLIC_REF_RU || 'https://aeza.ru/ref?123';
  }
  return process.env.NEXT_PUBLIC_REF_EU || 'https://aeza.net/ref?123';
}

export function getDomainsUrl(locale: Locale): string {
  return `https://aeza.net/${locale}/domains`;
}



