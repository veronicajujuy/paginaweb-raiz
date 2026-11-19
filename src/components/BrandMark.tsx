interface BrandMarkProps {
  size?: 'header' | 'footer';
}

const LOGO_SRC = '/assets/aistudio/ChatGPT_Image_8_oct_2026__02_31_06_p.m._a0c38029.png';

export function BrandMark({size = 'header'}: BrandMarkProps) {
  const sizeClasses =
    size === 'footer' ? 'h-20 w-auto' : 'h-14 w-auto md:h-16';

  return (
    <span className="inline-flex items-center whitespace-nowrap shrink-0">
      <img
        src={LOGO_SRC}
        alt="Raíz"
        referrerPolicy="no-referrer"
        className={`${sizeClasses} object-contain mix-blend-multiply select-none`}
      />
    </span>
  );
}
