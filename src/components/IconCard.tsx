import { ReactNode } from 'react';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function IconCard({ icon, title, description, className = '' }: IconCardProps) {
  return (
    <div className={`bg-[#f7f9fc] box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative rounded-[24px] shrink-0 w-[560px] ${className}`}>
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] bg-[#4692e4] ml-0 mt-0 rounded-[12px] size-10" />
        <div className="[grid-area:1_/_1] ml-[10.857px] mt-[11.429px] relative size-[18.286px]">
          {icon}
        </div>
      </div>
      
      <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#292d33] w-full">
        <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] w-full">
          <p className="leading-[1.2]">{title}</p>
        </div>
        <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[0px] w-full">
          <p className="leading-[1.3] text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
}