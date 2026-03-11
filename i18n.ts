export const locales = ['ru', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

export function getLocale(request: Request): Locale {
  // Try to get locale from cookie first
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const localeMatch = cookieHeader.match(/locale=([^;]+)/);
    if (localeMatch && locales.includes(localeMatch[1] as Locale)) {
      return localeMatch[1] as Locale;
    }
  }

  // Try to get from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
    if (preferredLang === 'en') return 'en';
    if (preferredLang === 'ru') return 'ru';
  }

  return defaultLocale;
}
