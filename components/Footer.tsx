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
    <footer className="w-full bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href={`/${locale}`} className="block">
              <Image
                src="/svg/logo-large.svg"
                alt="Aeza Logo"
                width={354}
                height={85}
                className="h-10 w-auto no-drag"
                draggable={false}
              />
            </Link>
            <p className="text-sm text-gray-600 whitespace-pre-line mt-4">
              {t('legal')}
            </p>
            <a
              href="https://uk.trustpilot.com/review/aeza.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:underline mt-2 inline-block"
            >
              Trustpilot
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('information')}</h4>
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
            <h4 className="font-semibold mb-4">{t('services')}</h4>
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
            <h4 className="font-semibold mb-4">{t('contacts')}</h4>
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
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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

