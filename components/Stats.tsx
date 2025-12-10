'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Stats() {
  const t = useTranslations('stats');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const mskTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
      
      const months = ['янв.', 'фев.', 'мар.', 'апр.', 'май', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
      const day = mskTime.getDate();
      const month = months[mskTime.getMonth()];
      const hours = String(mskTime.getHours()).padStart(2, '0');
      const minutes = String(mskTime.getMinutes()).padStart(2, '0');
      const seconds = String(mskTime.getSeconds()).padStart(2, '0');
      
      setCurrentTime(`${day} ${month}, ${hours}:${minutes}:${seconds} GMT+3`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/svg/today.670ca392.svg"
                alt="today"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('today')}</p>
              <p className="text-sm font-medium">{currentTime || '—'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/svg/attacks.365cb085.svg"
                alt="attacks"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">0</p>
              <p className="text-sm text-gray-600">{t('attacks')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/svg/status.8191c510.svg"
                alt="status"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">{t('status')}</p>
              <p className="text-sm font-medium">{t('working')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/svg/servers.380daf98.svg"
                alt="servers"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">92 027</p>
              <p className="text-sm text-gray-600">{t('servers')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

