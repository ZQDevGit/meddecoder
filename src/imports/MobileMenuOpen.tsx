import svgPaths from "./svg-otxj78qbot";

function Close() {
  return (
    <div className="absolute left-[357px] size-4 top-4" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <path d={svgPaths.p2ca28800} fill="var(--fill-0, #292D33)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function MobileMenuOpen() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile menu open">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative size-full">
          <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[0px] text-nowrap">
            <p className="leading-[1.3] text-[14px] whitespace-pre">Features</p>
          </div>
          <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[0px] text-nowrap">
            <p className="leading-[1.3] text-[14px] whitespace-pre">About</p>
          </div>
          <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[0px] text-nowrap">
            <p className="leading-[1.3] text-[14px] whitespace-pre">FAQ</p>
          </div>
          <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[0px] text-nowrap">
            <p className="leading-[1.3] text-[14px] whitespace-pre">Contact</p>
          </div>
          <Close />
        </div>
      </div>
    </div>
  );
}