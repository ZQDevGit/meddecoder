import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer?: string;
  isExpanded?: boolean;
}

export function FAQItem({ question, answer, isExpanded = false }: FAQItemProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  const ArrowIcon = ({ isUp }: { isUp: boolean }) => (
    <div className="relative shrink-0 size-8">
      <div className="absolute aspect-[100/100] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          {isUp ? (
            <circle cx="16" cy="16" fill="#4692E4" r="16" />
          ) : (
            <circle cx="16" cy="16" r="15.5" stroke="#4692E4" />
          )}
        </svg>
      </div>
      <div className="absolute aspect-[32/32] left-[21.88%] right-[21.88%] top-[7px]">
        <div className={`absolute ${isUp ? 'inset-[28.12%_15.62%_34.37%_15.62%]' : 'inset-[34.37%_15.62%_28.12%_15.62%]'}`}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
            <path 
              d={isUp 
                ? "M12.2108 6.58591C12.1585 6.63821 12.0965 6.6797 12.0282 6.70801C11.9599 6.73632 11.8867 6.75089 11.8128 6.75089C11.7389 6.75089 11.6657 6.73632 11.5974 6.70801C11.5291 6.6797 11.4671 6.63821 11.4148 6.58591L6.18781 1.35818L0.960781 6.58591C0.855234 6.69146 0.71208 6.75076 0.562813 6.75076C0.413546 6.75076 0.270392 6.69146 0.164844 6.58591C0.0592961 6.48036 2.94241e-09 6.33721 0 6.18794C-2.94241e-09 6.03868 0.0592961 5.89552 0.164844 5.78997L5.78984 0.164974C5.84208 0.112674 5.90412 0.0711852 5.97241 0.0428778C6.0407 0.0145704 6.11389 0 6.18781 0C6.26173 0 6.33493 0.0145704 6.40322 0.0428778C6.4715 0.0711852 6.53354 0.112674 6.58578 0.164974L12.2108 5.78997C12.2631 5.84222 12.3046 5.90425 12.3329 5.97254C12.3612 6.04083 12.3758 6.11402 12.3758 6.18794C12.3758 6.26186 12.3612 6.33506 12.3329 6.40335C12.3046 6.47163 12.2631 6.53367 12.2108 6.58591Z"
                : "M12.2108 0.960782L6.58578 6.58578C6.53354 6.63808 6.4715 6.67957 6.40322 6.70788C6.33493 6.73619 6.26173 6.75076 6.18781 6.75076C6.11389 6.75076 6.0407 6.73619 5.97241 6.70788C5.90412 6.67957 5.84208 6.63808 5.78984 6.58578L0.164844 0.960782C0.0592961 0.855234 0 0.71208 0 0.562813C0 0.413546 0.0592961 0.270392 0.164844 0.164844C0.270392 0.0592959 0.413546 0 0.562813 0C0.71208 0 0.855234 0.0592959 0.960781 0.164844L6.18781 5.39258L11.4148 0.164844C11.4671 0.112582 11.5292 0.0711253 11.5974 0.0428413C11.6657 0.0145573 11.7389 0 11.8128 0C11.8867 0 11.9599 0.0145573 12.0282 0.0428413C12.0965 0.0711253 12.1585 0.112582 12.2108 0.164844C12.263 0.217106 12.3045 0.27915 12.3328 0.347434C12.3611 0.415717 12.3756 0.488903 12.3756 0.562813C12.3756 0.636722 12.3611 0.709908 12.3328 0.778192C12.3045 0.846476 12.263 0.90852 12.2108 0.960782Z"
              } 
              fill={isUp ? "#F2FAFF" : "#4692E4"} 
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${expanded ? 'bg-[#f2faff]' : 'bg-[#f7f9fc]'} relative rounded-[12px] shrink-0 w-full`}>
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative w-full">
          <div 
            className="content-stretch flex gap-6 items-center justify-start relative shrink-0 w-full cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[20px]">
              <p className="leading-[1.3]">{question}</p>
            </div>
            <ArrowIcon isUp={expanded} />
          </div>
          
          {expanded && answer && (
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-0 pr-8 py-0 relative w-full">
                  <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[16px]">
                    <p className="leading-[1.3]">{answer}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}