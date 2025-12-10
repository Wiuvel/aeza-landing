'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, type Locale } from '@/i18n';
import { useTranslations } from 'next-intl';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  
  const localeNames: Record<Locale, string> = {
    ru: 'русский',
    en: 'english',
  };

  const switchLocale = (newLocale: Locale) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    setIsHovered(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="flex items-center gap-2 px-2 py-1 rounded pb-1">
        <Globe className={`w-4 h-4 transition-colors ${isHovered ? 'text-blue-400' : 'text-black'}`} strokeWidth={1.5} />
        <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
      </button>

      {isHovered && (
        <div className="absolute top-full left-0 -mt-1 pt-1">
          <div className="bg-white rounded-md shadow-md border border-gray-100 py-1 min-w-[140px]">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  currentLocale === locale
                    ? 'text-gray-400'
                    : 'text-black hover:bg-gray-50'
                }`}
              >
                {localeNames[locale]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
