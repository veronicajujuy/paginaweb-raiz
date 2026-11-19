interface BrandMarkProps {
  variant?: 'default' | 'light';
}

export function BrandMark({variant = 'default'}: BrandMarkProps) {
  const textColor = variant === 'light' ? 'text-crema' : 'text-oliva-deep';
  const leafColor = variant === 'light' ? '#fefae0' : '#606c38';
  const rootColor = variant === 'light' ? '#e6dfc0' : '#bc6c25';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${textColor}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M14 3.5C14 3.5 8.5 6.5 8.5 11.5C8.5 14.5 10.9 16.5 14 16.5C17.1 16.5 19.5 14.5 19.5 11.5C19.5 6.5 14 3.5 14 3.5Z"
          stroke={leafColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7.5V23.5"
          stroke={rootColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 19C11.5 19 9.5 20.5 8.5 22.5"
          stroke={rootColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M14 17.5C16.5 17.5 18.5 19 19.5 21.5"
          stroke={rootColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-2xl font-semibold tracking-tight leading-none">
        Raíz
      </span>
    </span>
  );
}
