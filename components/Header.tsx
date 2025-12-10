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
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2"
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

            <div className="hidden md:flex items-center gap-6">
              <LanguageSwitcher currentLocale={currentLocale} />
              <div className="flex items-center gap-2">
                <DoorIcon className="w-5 h-5" size={20} />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-base hover:underline font-medium"
                >
                  {t('login')}
                </button>
                <span className="text-base">/</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-base hover:underline font-medium"
                >
                  {t('signup')}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="p-2 flex items-center gap-1 bg-gray-200 rounded-full"
                aria-label="Login"
              >
                <DoorIcon className="w-5 h-5" size={20} />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <LanguageSwitcher currentLocale={currentLocale} />
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left py-2 hover:bg-gray-50"
              >
                <DoorIcon className="w-4 h-4" size={16} />
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
