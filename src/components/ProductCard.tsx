import { ReactNode } from 'react';

interface Feature {
  text: string;
  highlight?: string;
}

interface ProductCardProps {
  title: string;
  subtitle: string;
  features: Feature[];
  backgroundColor: string;
  className?: string;
}

export function ProductCard({ title, subtitle, features, backgroundColor, className = '' }: ProductCardProps) {
  return (
    <div className={`${backgroundColor} box-border content-stretch flex flex-col gap-6 h-[400px] items-start justify-start px-6 py-8 relative rounded-[24px] shrink-0 w-[360px] ${className}`}>
      <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-white w-full">
        <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[28px] w-full">
          <p className="leading-[1.2]">{title}</p>
        </div>
        <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-full">
          <p className="leading-[1.3]">{subtitle}</p>
        </div>
      </div>
      
      <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
        {features.map((feature, index) => (
          <div key={index} className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full">
            <div className="relative shrink-0 size-[18px]">
              <div className="absolute inset-[9.375%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <path d="M12.2105 6.91453C12.2628 6.96677 12.3043 7.02881 12.3326 7.0971C12.3609 7.16538 12.3754 7.23858 12.3754 7.3125C12.3754 7.38642 12.3609 7.45962 12.3326 7.5279C12.3043 7.59619 12.2628 7.65823 12.2105 7.71047L8.27297 11.648C8.22073 11.7003 8.15869 11.7418 8.0904 11.7701C8.02212 11.7984 7.94892 11.8129 7.875 11.8129C7.80108 11.8129 7.72788 11.7984 7.6596 11.7701C7.59131 11.7418 7.52927 11.7003 7.47703 11.648L5.78953 9.96047C5.68398 9.85492 5.62469 9.71177 5.62469 9.5625C5.62469 9.41323 5.68398 9.27008 5.78953 9.16453C5.89508 9.05898 6.03823 8.99969 6.1875 8.99969C6.33677 8.99969 6.47992 9.05898 6.58547 9.16453L7.875 10.4548L11.4145 6.91453C11.4668 6.86223 11.5288 6.82074 11.5971 6.79244C11.6654 6.76413 11.7386 6.74956 11.8125 6.74956C11.8864 6.74956 11.9596 6.76413 12.0279 6.79244C12.0962 6.82074 12.1582 6.86223 12.2105 6.91453ZM16.3125 9C16.3125 10.4463 15.8836 11.8601 15.0801 13.0626C14.2766 14.2651 13.1346 15.2024 11.7984 15.7559C10.4622 16.3093 8.99189 16.4541 7.5734 16.172C6.15492 15.8898 4.85195 15.1934 3.82928 14.1707C2.80661 13.148 2.11016 11.8451 1.82801 10.4266C1.54585 9.00811 1.69067 7.53781 2.24413 6.20163C2.7976 4.86544 3.73486 3.72339 4.93739 2.91988C6.13993 2.11637 7.55372 1.6875 9 1.6875C10.9388 1.68955 12.7975 2.46063 14.1685 3.83154C15.5394 5.20246 16.3105 7.06123 16.3125 9ZM15.1875 9C15.1875 7.77623 14.8246 6.57994 14.1447 5.56241C13.4648 4.54488 12.4985 3.75181 11.3679 3.2835C10.2372 2.81518 8.99314 2.69265 7.79288 2.93139C6.59262 3.17014 5.49011 3.75944 4.62478 4.62478C3.75944 5.49011 3.17014 6.59262 2.93139 7.79288C2.69265 8.99314 2.81518 10.2372 3.2835 11.3679C3.75181 12.4985 4.54488 13.4648 5.56241 14.1447C6.57994 14.8246 7.77623 15.1875 9 15.1875C10.6405 15.1856 12.2132 14.5331 13.3732 13.3732C14.5331 12.2132 15.1856 10.6405 15.1875 9Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white">
              <p className="leading-[1.3] text-[16px]">
                {feature.highlight && (
                  <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">{feature.highlight}</span>
                )}
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}