'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { type Locale } from '@/i18n';
import Logo from './Logo';
import ReferralModal from './ReferralModal';
import LanguageSwitcher from './LanguageSwitcher';
import DoorIcon from './DoorIcon';

export default function Header() {
  const t = useTranslations('header');
  const params = useParams();
  const currentLocale = (params?.locale as Locale) || 'ru';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="p-2 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <svg width="16" height="5" viewBox="0 0 16 5" fill="none">
                  <rect width="16" height="1" fill="black" />
                  <rect y="4" width="16" height="1" fill="black" />
                </svg>
              </button>
              <Logo />
            </div>

            <div className="hidden items-center gap-6 md:flex">
              <LanguageSwitcher currentLocale={currentLocale} />
              <div className="flex items-center gap-2">
                <DoorIcon className="h-5 w-5" size={20} />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-base font-medium hover:underline"
                >
                  {t('login')}
                </button>
                <span className="text-base">/</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-base font-medium hover:underline"
                >
                  {t('signup')}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1 rounded-full bg-gray-200 p-2"
                aria-label="Login"
              >
                <DoorIcon className="h-5 w-5" size={20} />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="space-y-4 px-4 py-4">
              <LanguageSwitcher currentLocale={currentLocale} />
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex w-full items-center gap-2 py-2 text-left hover:bg-gray-50"
              >
                <DoorIcon className="h-4 w-4" size={16} />
                {t('login')} / {t('signup')}
              </button>
            </div>
          </div>
        )}
      </header>
      <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
