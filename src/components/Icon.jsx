const paths = {
  cloud: (
    <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 11.5 4 4 0 0 0 7 19h10.5Z" />
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="5" ry="2.5" />
      <path d="M4 7v4c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V7" />
      <path d="M14 12.5c.7.3 1.9.5 3 .5 2.76 0 5-1.12 5-2.5S19.76 8 17 8" />
      <path d="M10 13.5v3c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5v-4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  hybrid: (
    <>
      <rect x="3" y="4" width="8" height="6" rx="1.5" />
      <rect x="13" y="14" width="8" height="6" rx="1.5" />
      <path d="M7 10v3a3 3 0 0 0 3 3h3" />
    </>
  ),
  devops: (
    <>
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M21 3v6h-6" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 11l2.5-2.5L12 11l2-3 3 4" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  ai: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M9 7V4M15 7V4M1 12h3M20 12h3" />
      <circle cx="9.5" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <path d="M9.5 16.2h5" />
    </>
  ),
  spark: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
  ),
  bank: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
      <path d="M3 20h18" />
    </>
  ),
  health: <path d="M12 21s-7-4.35-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.65 12 21 12 21Z" />,
  cart: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.4 12h11l1.6-8H6" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4V10l6 4V7l6 4v10H3Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  media: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3V9Z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </>
  ),
}

export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  )
}
