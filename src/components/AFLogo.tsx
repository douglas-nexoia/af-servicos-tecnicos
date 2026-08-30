import React from 'react';

interface AFLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const AFLogo: React.FC<AFLogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  showSubtitle = false,
}) => {
  // Primary colors based on variant
  const aColor = variant === 'dark' ? '#FFFFFF' : '#0A1128';
  const textColor = variant === 'dark' ? '#FFFFFF' : '#0A1128';
  const bgBadge = variant === 'dark' ? '#FFFFFF' : '#0A1128';
  const textBadge = variant === 'dark' ? '#0A1128' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 280 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-h-12 object-contain"
      >
        {/* Stylized slanted letter 'A' */}
        <path
          d="M32 68L56 8H74L49 68H32Z"
          fill={aColor}
        />
        <path
          d="M48 42H70L66 52H44L48 42Z"
          fill={aColor}
        />

        {/* Stylized slanted letter 'F' in Orange */}
        <path
          d="M68 8H106L102 20H81L77 32H98L94 44H73L63 68H47L68 8Z"
          fill="#FF7A00"
        />

        {/* Top White / Contrast Container for 'SERVIÇOS' */}
        <rect
          x="110"
          y="8"
          width="162"
          height="32"
          rx="3"
          fill={bgBadge}
        />
        <text
          x="191"
          y="31"
          fill={textBadge}
          fontFamily="Archivo, sans-serif"
          fontWeight="900"
          fontSize="22"
          letterSpacing="2"
          textAnchor="middle"
        >
          SERVIÇOS
        </text>

        {/* Bottom Orange Underline Bar */}
        <rect
          x="110"
          y="44"
          width="162"
          height="24"
          rx="2"
          fill="#FF7A00"
        />
      </svg>

      {showSubtitle && (
        <span className={`text-[10px] font-mono tracking-widest uppercase block ${variant === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
          Climatização & Soluções Técnicas
        </span>
      )}
    </div>
  );
};
