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
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex-1">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              {t('title')} <i className="italic">{t('titleItalic')}</i> {t('titleEnd')}
            </h1>
            <div className="mb-8">
              <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <span className="text-lg text-gray-600">{t('priceFrom')}</span>
                <div>
                  <h1 className="text-3xl font-bold sm:text-4xl">
                    {t('priceMonth')}
                    <br />
                    {t('priceMonthValue')}
                  </h1>
                </div>
              </div>
              <a
                href={getReferralUrl(locale)}
                onClick={handleReferralClick}
                className="inline-block cursor-pointer rounded bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
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
