'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  useEffect(() => {
    const baseUrl = 'https://aeza.online';
    
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Aéza',
      alternateName: 'Aeza',
      url: baseUrl,
      logo: `${baseUrl}/svg/logo-large.svg`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: locale === 'ru' ? '+7-800-200-60-13' : '+44-772-937-60-58',
        contactType: 'customer service',
        email: 'support@aeza.net',
        availableLanguage: ['Russian', 'English'],
      },
      sameAs: [
        'https://aeza.net',
        'https://aeza.ru',
      ],
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Aéza',
      url: baseUrl,
      description: locale === 'ru'
        ? 'Современный облачный хостинг провайдер. VPS/VDS, выделенные серверы, домены.'
        : 'Modern cloud hosting provider. VPS/VDS, dedicated servers, domains.',
      inLanguage: [locale === 'ru' ? 'ru-RU' : 'en-US', locale === 'ru' ? 'en-US' : 'ru-RU'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/${locale}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'ru' ? 'Главная' : 'Home',
          item: `${baseUrl}/${locale}`,
        },
      ],
    };

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Cloud Hosting',
      provider: {
        '@type': 'Organization',
        name: 'Aéza',
      },
      areaServed: ['RU', 'EU', 'Worldwide'],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: baseUrl,
        serviceSmsNumber: '+7-800-200-60-13',
        servicePhone: {
          '@type': 'ContactPoint',
          telephone: locale === 'ru' ? '+7-800-200-60-13' : '+44-772-937-60-58',
          contactType: 'customer service',
        },
      },
      description: locale === 'ru'
        ? 'VPS/VDS серверы, выделенные серверы, домены, почасовая оплата'
        : 'VPS/VDS servers, dedicated servers, domains, hourly payment',
    };

    const schemas = [organizationSchema, websiteSchema, breadcrumbSchema, serviceSchema];

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${schema['@type']}`;
      
      // Remove existing script if present
      const existing = document.getElementById(script.id);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((schema) => {
        const script = document.getElementById(`structured-data-${schema['@type']}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [locale]);

  return null;
}

