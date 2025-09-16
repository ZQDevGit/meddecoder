import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Badge({ children, icon, className = '' }: BadgeProps) {
  return (
    <div className={`content-stretch flex gap-1 lg:gap-2 items-center justify-start relative shrink-0 transition-all duration-200 hover:scale-105 hover:brightness-110 ${className}`}>
      {icon && (
        <div className="relative shrink-0 size-[14px] lg:size-[18px] transition-transform duration-200">
          {icon}
        </div>
      )}
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] lg:text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">{children}</p>
      </div>
    </div>
  );
}