'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { type Locale } from '@/i18n';
import { getReferralUrl, getDomainsUrl } from '@/lib/referral';

export default function Services() {
  const t = useTranslations('services');
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
  
  const handleDomainsCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getDomainsUrl(locale);
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href={getReferralUrl(locale)}
            onClick={handleReferralClick}
            className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors cursor-pointer block"
          >
            <h3 className="text-xl font-bold mb-2">{t('cloudServers')}</h3>
            <p className="text-sm text-gray-600 mb-4">{t('cloudServersDesc')}</p>
            <div className="flex justify-end">
              <svg width="27" height="18" viewBox="0 0 27 18" fill="none">
                <path
                  d="M1 9H26M26 9L17.6667 1M26 9L17.6667 17"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </a>

          <a
            href={getReferralUrl(locale)}
            onClick={handleReferralClick}
            className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors cursor-pointer block"
          >
            <h3 className="text-xl font-bold mb-2">
              <i className="italic">{t('dedicatedServers')}</i>
              <br />
              серверы
            </h3>
            <p className="text-sm text-gray-600 mb-4">{t('dedicatedServersDesc')}</p>
            <div className="flex justify-end">
              <svg width="27" height="18" viewBox="0 0 27 18" fill="none">
                <path
                  d="M1 9H26M26 9L17.6667 1M26 9L17.6667 17"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </a>

          <a
            href={getReferralUrl(locale)}
            onClick={handleReferralClick}
            className="p-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer block"
          >
            <h3 className="text-xl font-bold mb-2">
              {t('highCpu')}
              <br />
              {t('highCpuServers')}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{t('highCpuDesc')}</p>
            <div className="flex justify-end">
              <svg width="27" height="18" viewBox="0 0 27 18" fill="none">
                <path
                  d="M1 9H26M26 9L17.6667 1M26 9L17.6667 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </a>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('domains')}</h3>
            <form onSubmit={handleDomainsCheck} className="mb-4">
              <input
                type="text"
                placeholder={t('domainsPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded mb-2"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors rounded"
              >
                {t('domainsCheck')}
              </button>
            </form>
            <p className="text-sm text-gray-600">{t('domainsDesc')}</p>
            <div className="flex justify-end mt-4">
              <svg width="27" height="18" viewBox="0 0 27 18" fill="none">
                <path
                  d="M1 9H26M26 9L17.6667 1M26 9L17.6667 17"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

