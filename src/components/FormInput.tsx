interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  disabled?: boolean;
}

export function FormInput({ 
  label, 
  type = "text", 
  placeholder = "", 
  value, 
  onChange,
  className = "",
  error,
  disabled = false
}: FormInputProps) {
  const hasValue = value && value.length > 0;
  const hasError = error && error.length > 0;

  return (
    <div className={`content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full lg:w-[241px] ${className}`}>
      <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full">
        <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[1.4]">{label}</p>
        </div>
      </div>
      
      <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
        <div className={`
          bg-white relative rounded-[12px] shrink-0 w-full transition-all duration-200 group
          ${hasError ? 'ring-2 ring-red-500' : ''}
          ${!hasError && hasValue ? 'ring-2 ring-green-500' : ''}
          ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'}
        `}>
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-4 py-3.5 relative w-full">
              <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`
                  basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] tracking-[0.14px] bg-transparent border-none outline-none w-full transition-colors duration-200
                  ${hasValue ? 'text-[#292d33]' : 'text-[#98a2b3]'}
                  ${disabled ? 'cursor-not-allowed' : 'focus:text-[#292d33]'}
                  placeholder:text-[#98a2b3]
                `}
                style={{ fontVariationSettings: "'opsz' 14" }}
              />
            </div>
          </div>
          <div 
            aria-hidden="true" 
            className={`
              absolute border-[0.75px] border-solid inset-0 pointer-events-none rounded-[12px] transition-colors duration-200
              ${hasError ? 'border-red-500' : hasValue ? 'border-green-500' : 'border-[#e4e7ec]'}
            `} 
          />
        </div>
        
        {/* Зарезервированное место для сообщений - всегда занимает место */}
        <div className="h-5 w-full">
          {hasError && (
            <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[12px] text-red-500 leading-[1.3] animate-in fade-in slide-in-from-top duration-200">
              {error}
            </p>
          )}
          
          {!hasError && hasValue && type === 'email' && (
            <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[12px] text-green-600 leading-[1.3] animate-in fade-in slide-in-from-top duration-200">
              ✓ Valid email format
            </p>
          )}
        </div>
      </div>
    </div>
  );
}