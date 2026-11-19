import {useState} from 'react';
import {UtensilsCrossed} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackTitle = 'Raíz · Cocina casera',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-crema-soft border border-crema-border text-oliva p-8 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <UtensilsCrossed className="w-8 h-8 mb-3 text-terracota opacity-80" aria-hidden="true" />
        <p className="font-display text-lg font-medium text-oliva-deep">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-crema-soft ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}
