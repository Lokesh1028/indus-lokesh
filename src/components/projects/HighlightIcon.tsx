'use client'

type IconName =
  | 'leaf' | 'club' | 'road' | 'park' | 'amphitheatre' | 'pet' | 'pool'
  | 'home' | 'sustain' | 'shield' | 'expand' | 'pin'

const paths: Record<IconName, JSX.Element> = {
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 5-5h11v5a7 7 0 0 1-7 7" />
      <path d="M2 21c4-6 9-10 15-12" />
    </>
  ),
  club: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  road: (
    <>
      <path d="M5 22 9 2" />
      <path d="m15 22-4-20" />
      <path d="M19 22 21 2" />
    </>
  ),
  park: (
    <>
      <path d="M12 2v8" />
      <path d="M12 14a4 4 0 0 0 4-4 4 4 0 0 0-8 0 4 4 0 0 0 4 4Z" />
      <path d="M5 22h14" />
      <path d="M12 14v8" />
    </>
  ),
  amphitheatre: (
    <>
      <path d="M2 14a10 10 0 0 1 20 0" />
      <path d="M5 14a7 7 0 0 1 14 0" />
      <path d="M8 14a4 4 0 0 1 8 0" />
      <path d="M2 18h20" />
    </>
  ),
  pet: (
    <>
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="4" cy="8" r="2" />
      <circle cx="20" cy="14" r="2" />
      <circle cx="4" cy="14" r="2" />
      <path d="M8 18a4 4 0 0 1 8 0c0 2-2 4-4 4s-4-2-4-4Z" />
    </>
  ),
  pool: (
    <>
      <path d="M2 20s1.5-1 4-1 4 1 6 1 4-1 6-1 4 1 4 1" />
      <path d="M2 16s1.5-1 4-1 4 1 6 1 4-1 6-1 4 1 4 1" />
      <path d="M7 13V4a2 2 0 0 1 4 0" />
      <path d="M17 13V4a2 2 0 0 0-4 0" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 9v12h14V9" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  sustain: (
    <>
      <path d="M12 2v6" />
      <path d="M5 8l3 4" />
      <path d="M19 8l-3 4" />
      <circle cx="12" cy="16" r="6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  expand: (
    <>
      <path d="M21 3h-6" />
      <path d="M21 3v6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21h6" />
      <path d="M3 21v-6" />
      <path d="M3 21l7-7" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
}

export default function HighlightIcon({ name, size = 28 }: { name: string; size?: number }) {
  const icon = paths[name as IconName] ?? paths.leaf
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  )
}
