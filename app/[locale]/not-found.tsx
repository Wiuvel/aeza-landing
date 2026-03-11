'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');
  const params = useParams();
  const locale = (params?.locale as string) || 'ru';

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-12 lg:flex-row">
        {/* Left side - Text and Button */}
        <div className="max-w-md flex-1">
          <p className="mb-8 text-lg">
            {t('title')}{' '}
            <a
              href={`mailto:${t('email')}`}
              className="text-blue-400 transition-colors hover:text-blue-500"
            >
              {t('email')}
            </a>
          </p>
          <Link
            href={`/${locale}`}
            className="inline-block rounded bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
          >
            {t('button')}
          </Link>
        </div>

        {/* Right side - Large 404 */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <h1 className="text-[200px] font-bold leading-none lg:text-[300px]">404</h1>
        </div>
      </div>
    </div>
  );
}
