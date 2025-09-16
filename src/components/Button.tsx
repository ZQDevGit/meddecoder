import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = "box-border content-stretch flex gap-2.5 items-center justify-center relative rounded-[50px] shrink-0 transition-all duration-200 font-['Fustat:Regular',_sans-serif] font-normal";
  
  const variantClasses = {
    primary: disabled 
      ? "bg-[#8692a7] text-white cursor-not-allowed opacity-60" 
      : "bg-[#1e5ba7] text-white hover:bg-[#1a4a8a] hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4692e4] focus:ring-offset-2",
    secondary: disabled 
      ? "bg-[#f7f9fc] text-[#8692a7] cursor-not-allowed opacity-60" 
      : "bg-white text-[#1a4a8a] border border-white hover:bg-gray-50 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
    outline: disabled 
      ? "border border-[#e4e7ec] text-[#8692a7] bg-transparent cursor-not-allowed opacity-60" 
      : "border border-[#4692e4] text-[#4692e4] bg-transparent hover:bg-[#4692e4] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4692e4] focus:ring-offset-2"
  };

  const sizeClasses = {
    sm: "px-4 py-2 h-10 text-[14px]",
    md: "px-6 py-4 h-12 text-[16px]", 
    lg: "px-8 py-5 h-14 text-[18px]"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="leading-[1.3] whitespace-pre">
        {children}
      </span>
    </button>
  );
}