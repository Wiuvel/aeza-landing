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
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-system">
          {t('title')}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {t('description')}
          <br />
          {t('description2')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                index === 2
                  ? 'bg-black text-white'
                  : index === 3
                  ? 'bg-gray-800 text-white'
                  : 'bg-white'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
              {feature.image && (
                <div className="mt-4 w-full flex items-center justify-center">
                  <Image
                    src="/svg/help.webp"
                    alt="help"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain no-drag"
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

