'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, type Locale } from '@/i18n';


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
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="flex items-center gap-2 rounded px-2 py-1 pb-1">
        <Globe
          className={`h-4 w-4 transition-colors ${isHovered ? 'text-blue-400' : 'text-black'}`}
          strokeWidth={1.5}
        />
        <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
      </button>

      {isHovered && (
        <div className="absolute left-0 top-full -mt-1 pt-1">
          <div className="min-w-[140px] rounded-md border border-gray-100 bg-white py-1 shadow-md">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  currentLocale === locale ? 'text-gray-400' : 'text-black hover:bg-gray-50'
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
