'use client';

import dynamic from 'next/dynamic';

const CursorGlow = dynamic(
  () => import('@/components/ui/CursorGlow').then((mod) => ({ default: mod.CursorGlow })),
  { ssr: false }
);

export function CursorGlowWrapper() {
  return <CursorGlow />;
}
