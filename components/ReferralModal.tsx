'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReferralModal({ isOpen, onClose }: ReferralModalProps) {
  const t = useTranslations('referral');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRUClick = () => {
    const ruRef = process.env.NEXT_PUBLIC_REF_RU || 'https://aeza.ru/ref?123';
    const newWindow = window.open(ruRef, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
    onClose();
  };

  const handleEUClick = () => {
    const euRef = process.env.NEXT_PUBLIC_REF_EU || 'https://aeza.net/ref?123';
    const newWindow = window.open(euRef, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-md rounded-lg bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-6 text-center text-2xl font-bold">{t('title')}</h2>
        <div className="space-y-4">
          <button
            onClick={handleRUClick}
            className="w-full rounded-lg border-2 border-gray-300 p-4 text-left transition-colors hover:border-black"
          >
            <div className="text-lg font-semibold">{t('ruHosting')}</div>
            <div className="mt-1 text-sm text-gray-600">{t('ruHostingDesc')}</div>
          </button>
          <button
            onClick={handleEUClick}
            className="w-full rounded-lg border-2 border-gray-300 p-4 text-left transition-colors hover:border-black"
          >
            <div className="text-lg font-semibold">{t('euHosting')}</div>
            <div className="mt-1 text-sm text-gray-600">{t('euHostingDesc')}</div>
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-gray-200 p-3 transition-colors hover:bg-gray-300"
        >
          {t('close')}
        </button>
      </div>
    </div>
  );
}
