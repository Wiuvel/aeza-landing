'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Features() {
  const t = useTranslations('features');

  const features = [
    {
      title: t('chatSupport.title'),
      description: t('chatSupport.description'),
      image: '/help.jpeg',
    },
    {
      title: t('backups.title'),
      description: t('backups.description'),
      icon: true,
    },
    {
      title: t('hourlyPayment.title'),
      description: t('hourlyPayment.description'),
    },
    {
      title: t('ddosProtection.title'),
      description: t('ddosProtection.description'),
      icon: true,
    },
  ];

  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-system mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mb-12 text-center text-gray-600">
          {t('description')}
          <br />
          {t('description2')}
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                index === 2
                  ? 'bg-black text-white'
                  : index === 3
                    ? 'bg-gray-800 text-white'
                    : 'bg-white'
              }`}
            >
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
              {feature.image && (
                <div className="mt-4 flex w-full items-center justify-center">
                  <Image
                    src="/svg/help.webp"
                    alt="help"
                    width={200}
                    height={200}
                    className="no-drag h-48 w-48 object-contain"
                    draggable={false}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
