'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { type Locale } from '@/i18n';
import { getReferralUrl } from '@/lib/referral';

export default function Hero() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = (params?.locale as Locale) || 'ru';
  
  const handleReferralClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = getReferralUrl(locale);
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('title')}{' '}
              <i className="italic">{t('titleItalic')}</i>{' '}
              {t('titleEnd')}
            </h1>
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <span className="text-lg text-gray-600">{t('priceFrom')}</span>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    {t('priceMonth')}
                    <br />
                    {t('priceMonthValue')}
                  </h1>
                </div>
              </div>
              <a
                href={getReferralUrl(locale)}
                onClick={handleReferralClick}
                className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded cursor-pointer"
              >
                {t('plansButton')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

