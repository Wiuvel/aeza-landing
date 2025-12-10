'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');
  const params = useParams();
  const locale = (params?.locale as string) || 'ru';

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text and Button */}
        <div className="flex-1 max-w-md">
          <p className="text-lg mb-8">
            {t('title')}{' '}
            <a
              href={`mailto:${t('email')}`}
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              {t('email')}
            </a>
          </p>
          <Link
            href={`/${locale}`}
            className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded"
          >
            {t('button')}
          </Link>
        </div>

        {/* Right side - Large 404 */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <h1 className="text-[200px] lg:text-[300px] font-bold leading-none">
            404
          </h1>
        </div>
      </div>
    </div>
  );
}