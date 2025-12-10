'use client';

import Image from 'next/image';

interface DoorIconProps {
  className?: string;
  size?: number;
}

export default function DoorIcon({ className = 'w-5 h-5', size = 20 }: DoorIconProps) {
  return (
    <Image
      src="/svg/door.9135da57.svg"
      alt="door"
      width={size}
      height={size}
      className={className}
    />
  );
}

