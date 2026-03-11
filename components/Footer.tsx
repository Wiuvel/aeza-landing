'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const locale = params?.locale || 'ru';

  return (
    <footer className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href={`/${locale}`} className="block">
              <Image
                src="/svg/logo-large.svg"
                alt="Aeza Logo"
                width={354}
                height={85}
                className="no-drag h-10 w-auto"
                draggable={false}
              />
            </Link>
            <p className="mt-4 whitespace-pre-line text-sm text-gray-600">{t('legal')}</p>
            <a
              href="https://uk.trustpilot.com/review/aeza.net"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-gray-600 hover:underline"
            >
              Trustpilot
            </a>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t('information')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wiki.aeza.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('knowledgeBase')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t('services')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`https://aeza.net/${locale}/virtual-servers`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('virtualServers')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t('contacts')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+78002006013" className="hover:underline">
                  {t('phone')}
                </a>
              </li>
              <li>
                <a href="mailto:support@aeza.net" className="hover:underline">
                  {t('email')}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/aezasupport_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('bot')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={`https://aeza.net/legal/${locale}/privacy.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t('privacy')}
            </a>
            <a
              href={`https://aeza.net/legal/${locale}/terms.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t('terms')}
            </a>
            <p>{t('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
