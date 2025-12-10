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
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">{t('title')}</h2>
        <div className="space-y-4">
          <button
            onClick={handleRUClick}
            className="w-full p-4 border-2 border-gray-300 rounded-lg hover:border-black transition-colors text-left"
          >
            <div className="font-semibold text-lg">{t('ruHosting')}</div>
            <div className="text-sm text-gray-600 mt-1">{t('ruHostingDesc')}</div>
          </button>
          <button
            onClick={handleEUClick}
            className="w-full p-4 border-2 border-gray-300 rounded-lg hover:border-black transition-colors text-left"
          >
            <div className="font-semibold text-lg">{t('euHosting')}</div>
            <div className="text-sm text-gray-600 mt-1">{t('euHostingDesc')}</div>
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full p-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          {t('close')}
        </button>
      </div>
    </div>
  );
}

