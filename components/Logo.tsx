'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Logo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null);
  const eRef = useRef<HTMLDivElement>(null);
  const zRef = useRef<HTMLDivElement>(null);
  const lastARef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const locale = params?.locale || 'ru';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const a = aRef.current;
    const e = eRef.current;
    const z = zRef.current;
    const lastA = lastARef.current;

    if (!a || !e || !z || !lastA) return;

    // Initial state: only 'e' visible
    gsap.set([a, z, lastA], {
      opacity: 0,
      x: (i) => (i === 0 ? 5 : -5), // 'a' from right, 'z' and last 'a' from left
    });
    gsap.set(e, {
      opacity: 1,
      x: 0,
      zIndex: 3,
    });

    const showAll = () => {
      gsap.to([a, z, lastA], {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.05,
      });
    };

    const hideOthers = () => {
      gsap.to([a, z, lastA], {
        opacity: 0,
        x: (i) => (i === 0 ? 5 : -5),
        duration: 0.3,
        ease: 'power2.in',
        stagger: 0.05,
      });
      gsap.to(e, {
        zIndex: 3,
        duration: 0.3,
      });
    };

    container.addEventListener('mouseenter', showAll);
    container.addEventListener('mouseleave', hideOthers);

    return () => {
      container.removeEventListener('mouseenter', showAll);
      container.removeEventListener('mouseleave', hideOthers);
    };
  }, []);

  return (
    <Link href={`/${locale}`} className="inline-block">
      <div
        ref={containerRef}
        className="relative flex cursor-pointer items-center"
        style={{ width: '144px', height: '36px' }}
      >
        <div ref={aRef} className="absolute opacity-0" style={{ left: 0, zIndex: 1 }}>
          <Image src="/svg/a.svg" alt="a" width={36} height={36} className="block" />
        </div>
        <div ref={eRef} className="absolute opacity-100" style={{ left: '38px', zIndex: 3 }}>
          <Image src="/svg/e.svg" alt="e" width={36} height={36} className="block" />
        </div>
        <div ref={zRef} className="absolute opacity-0" style={{ left: '76px', zIndex: 2 }}>
          <Image src="/svg/z.svg" alt="z" width={36} height={36} className="block" />
        </div>
        <div ref={lastARef} className="absolute opacity-0" style={{ left: '108px', zIndex: 1 }}>
          <Image src="/svg/last_a.svg" alt="a" width={36} height={36} className="block" />
        </div>
      </div>
    </Link>
  );
}
