import React, { useState } from 'react';

interface TecnicLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'header';
  src?: string;
}

export const TecnicLogo: React.FC<TecnicLogoProps> = ({
  className = '',
  size = 'md',
  showSlogan = false,
  showText = false,
  variant = 'header',
  src,
}) => {
  const [hasError, setHasError] = useState(false);

  // Gọi trực tiếp duy nhất theo chuẩn tecnic.com.vn: public/logo-tecnic.jpg -> /logo-tecnic.jpg
  const logoSrc = src || '/logo-tecnic.jpg';

  const logoDimension = {
    sm: 'h-8 max-w-[130px]',
    md: 'h-11 sm:h-12 max-w-[180px]',
    lg: 'h-14 sm:h-16 max-w-[220px]',
    xl: 'h-18 sm:h-20 max-w-[280px]',
  }[size];

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Khối chứa ảnh logo thật */}
      <div className={`relative ${logoDimension} flex items-center justify-center shrink-0`}>
        {!hasError ? (
          <img
            src={logoSrc}
            alt="TECNIC Logo"
            className="h-full w-auto object-contain rounded-lg shadow-sm"
            onError={() => setHasError(true)}
          />
        ) : (
          /* Fallback chữ TECNIC chỉ hiển thị khi ảnh thật lỗi */
          <div className="h-10 px-4 bg-gradient-to-br from-blue-700 to-[#00a8e8] flex items-center justify-center text-white font-black text-lg rounded-xl shadow-sm">
            <span>TECNIC</span>
          </div>
        )}
      </div>

      {/* Tên thương hiệu hiển thị kèm theo khi có thuộc tính showText */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-wider font-black text-xl leading-none">
            <span className={variant === 'dark' ? 'text-slate-900' : 'text-white'}>TEC</span>
            <span className="text-[#00b4d8]">NIC</span>
          </div>
          {showSlogan && (
            <span
              className={`${
                variant === 'dark' ? 'text-blue-900' : 'text-cyan-300'
              } text-[10px] tracking-tight font-bold mt-1 uppercase`}
            >
              Kiến tạo giá trị bằng công nghệ
            </span>
          )}
        </div>
      )}
    </div>
  );
};
