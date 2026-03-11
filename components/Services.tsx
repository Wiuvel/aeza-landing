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
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href={getReferralUrl(locale)}
            onClick={handleReferralClick}
            className="block cursor-pointer rounded-lg border border-gray-200 p-6 transition-colors hover:border-black"
          >
            <h3 className="mb-2 text-xl font-bold">{t('cloudServers')}</h3>
            <p className="mb-4 text-sm text-gray-600">{t('cloudServersDesc')}</p>
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
            className="block cursor-pointer rounded-lg border border-gray-200 p-6 transition-colors hover:border-black"
          >
            <h3 className="mb-2 text-xl font-bold">
              <i className="italic">{t('dedicatedServers')}</i>
              <br />
              серверы
            </h3>
            <p className="mb-4 text-sm text-gray-600">{t('dedicatedServersDesc')}</p>
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
            className="block cursor-pointer rounded-lg bg-black p-6 text-white transition-colors hover:bg-gray-800"
          >
            <h3 className="mb-2 text-xl font-bold">
              {t('highCpu')}
              <br />
              {t('highCpuServers')}
            </h3>
            <p className="mb-4 text-sm text-gray-300">{t('highCpuDesc')}</p>
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

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-bold">{t('domains')}</h3>
            <form onSubmit={handleDomainsCheck} className="mb-4">
              <input
                type="text"
                placeholder={t('domainsPlaceholder')}
                className="mb-2 w-full rounded border border-gray-300 px-4 py-2"
              />
              <button
                type="submit"
                className="w-full rounded bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
              >
                {t('domainsCheck')}
              </button>
            </form>
            <p className="text-sm text-gray-600">{t('domainsDesc')}</p>
            <div className="mt-4 flex justify-end">
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
