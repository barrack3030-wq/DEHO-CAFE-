import React from 'react';

// Section top header flourish with ribbon swirl lines and center text/icon
export const SectionFlourish: React.FC<{
  label: string;
  className?: string;
  textColor?: string;
  strokeColor?: string;
}> = ({
  label,
  className = '',
  textColor = 'text-[#b0d12a]',
  strokeColor = '#b0d12a',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Left curl swirl */}
      <svg
        width="44"
        height="14"
        viewBox="0 0 44 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        <path
          d="M42 7C35 7 32 1 24 1C16 1 12 13 4 13C2 13 1 11.5 1 10"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="43" cy="7" r="1.5" fill={strokeColor} />
      </svg>

      <span
        className={`font-serif italic text-base md:text-lg font-bold tracking-wide ${textColor}`}
      >
        {label}
      </span>

      {/* Right curl swirl */}
      <svg
        width="44"
        height="14"
        viewBox="0 0 44 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        <path
          d="M2 7C9 7 12 1 20 1C28 1 32 13 40 13C42 13 43 11.5 43 10"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="1" cy="7" r="1.5" fill={strokeColor} />
      </svg>
    </div>
  );
};

// 3 Lime Green Floral Dots / Stars matching the Gustavo reference
export const ThreeLimeStars: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="6.5" fill="#b0d12a" stroke="#8da819" strokeWidth="1" />
          <circle cx="8" cy="8" r="3" fill="#ffffff" />
          <circle cx="8" cy="8" r="1.5" fill="#1c1410" />
        </svg>
      ))}
    </div>
  );
};

// Wavy underline for food titles in the circular menu
export const WavyMenuUnderline: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <svg
        width="56"
        height="8"
        viewBox="0 0 56 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 4C6 1 10 7 15 4C20 1 24 7 29 4C34 1 38 7 43 4C48 1 52 7 55 4"
          stroke="#b0d12a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Scalloped / Wavy Orange Circular Badge (like "$8.29 IT'S FAJITAS DAY!" and "$2.29 PER A SHOT!")
export const OrangePromoBadge: React.FC<{
  topText: string;
  mainText: string;
  subText?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ topText, mainText, subText, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24 text-xs',
    md: 'w-32 h-32 md:w-36 md:h-36 text-sm',
    lg: 'w-36 h-36 md:w-44 md:h-44 text-base',
  }[size];

  return (
    <div
      className={`relative rounded-full bg-[#f26522] text-white flex flex-col items-center justify-center text-center p-3 shadow-xl border-4 border-dashed border-white/50 animate-pulse-slow ${sizeClasses} ${className}`}
    >
      {topText && (
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-amber-100">
          {topText}
        </span>
      )}
      <span className="font-display text-xl md:text-2xl font-black leading-tight tracking-tight drop-shadow-sm">
        {mainText}
      </span>
      {subText && (
        <span className="text-[10px] md:text-xs font-semibold leading-tight text-white/95 mt-0.5">
          {subText}
        </span>
      )}
    </div>
  );
};

// Organic Wavy Edge Divider (torn paper effect)
export const WavyDivider: React.FC<{
  fillColor?: string;
  direction?: 'down' | 'up';
  className?: string;
}> = ({ fillColor = '#faf8f4', direction = 'down', className = '' }) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none z-10 ${className} ${
        direction === 'up' ? 'rotate-180' : ''
      }`}
    >
      <svg
        className="relative block w-full h-8 md:h-14 text-current"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill={fillColor}
      >
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
};
