import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params: _params }: { params: Promise<{ locale: string }> }) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Footer />
      </main>
    </div>
  );
}
