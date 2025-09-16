import svgPaths from "./svg-c94r8dud7u";
import imgLogo from "figma:asset/623484c955539fdb3d5670ecdfb54bc8aaf53029.png";
import imgImage from "figma:asset/58565a45bba2183a7b6373dfbc0daf7544e884a5.png";
import imgAbstractCurveGeometriesBackground3DRenderingDigitalDrawing1 from "figma:asset/ee22f72ed24be348966b55c4f05ed2c779f56511.png";

function Close() {
  return (
    <div className="relative shrink-0 size-4" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <path d={svgPaths.p2ca28800} fill="var(--fill-0, #F2FAFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PromoContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Promo Content">
      <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#f2faff] text-[12px] text-center">
        <p className="leading-[1.3]">Join our waiting list and save 20% on your first year!</p>
      </div>
      <Close />
    </div>
  );
}

function PromoBanner() {
  return (
    <div className="absolute bg-[#1a4a8a] box-border content-stretch flex flex-col gap-2.5 h-[38px] items-center justify-start left-0 px-5 py-[11px] top-0 w-[393px]" data-name="Promo Banner">
      <PromoContent />
    </div>
  );
}

function Promo() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[393px]" data-name="Promo">
      <PromoBanner />
    </div>
  );
}

function Menu() {
  return (
    <div className="relative shrink-0 size-8" data-name="Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Menu">
          <path d={svgPaths.p218f7000} fill="var(--fill-0, #343330)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-4 top-[47px] w-[361px]" data-name="header">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[60px]" data-name="Logo" style={{ backgroundImage: `url('${imgLogo}')` }} />
      <Menu />
    </div>
  );
}

function LineGridFilledSquares() {
  return (
    <div className="absolute h-[550px] left-0 top-0 w-[361px]" data-name="Line Grid + Filled Squares">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 550">
        <g id="Line Grid + Filled Squares">
          <g clipPath="url(#clip0_9_1286)">
            <rect fill="var(--fill-0, #4692E4)" height="550" rx="24" width="361" />
            <path clipRule="evenodd" d={svgPaths.p38ca3400} fill="url(#paint0_linear_9_1286)" fillOpacity="0.2" fillRule="evenodd" id="Line" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_1286" x1="452" x2="452" y1="0" y2="480.702">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_9_1286">
            <rect fill="white" height="550" rx="24" width="361" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-3" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1a9c3180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Icon />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0">{`100% HIPAA `}</p>
        <p>Compliant</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Icon1 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0">{`Physician `}</p>
        <p>Developed</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Icon2 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0">{`AI-Powered `}</p>
        <p>Analysis</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(30,91,167,0.5)] box-border content-stretch flex gap-2 items-center justify-start px-3 py-2 relative rounded-[500px] shrink-0" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1e5ba7] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-4 relative rounded-[50px] shrink-0" data-name="Button">
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">Join Waiting List</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-4 relative rounded-[50px] shrink-0 w-[164px]" data-name="Button">
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#1a4a8a] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Learn more</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-6 items-center justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[341px]" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[32px] text-center text-white" style={{ width: "min-content" }}>
        <p className="leading-[1.2]">{`Understand your medical bills & lab results—instantly`}</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-white" style={{ width: "min-content" }}>
        <p className="leading-[1.3]">DecoderMD is an AI-powered transparency platform with two tools: BillDecoder clarifies charges, codes, and out-of-pocket costs, while LabDecoder explains your bloodwork in plain English—so you can make confident decisions.</p>
      </div>
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[549px] overflow-clip relative shrink-0 w-[361px]" data-name="Container">
      <LineGridFilledSquares />
      <div className="absolute h-[147px] left-[-95px] top-[476px] w-[552px]">
        <div className="absolute inset-[-136.05%_-36.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 952 547">
            <g filter="url(#filter0_f_9_1273)" id="Ellipse 1">
              <ellipse cx="476" cy="273.5" fill="url(#paint0_radial_9_1273)" rx="276" ry="73.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="547" id="filter0_f_9_1273" width="952" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_9_1273" stdDeviation="100" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(476 266.013) rotate(90) scale(80.987 304.115)" gradientUnits="userSpaceOnUse" id="paint0_radial_9_1273" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-end justify-start leading-[0] relative shrink-0 text-center w-full" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold relative shrink-0 text-[#292d33] text-[28px] w-full">
        <p className="leading-[1.2]">Why DecoderMD matters</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[#8692a7] text-[14px] w-full">
        <p className="leading-[1.3]">Navigating healthcare today is overwhelming. Bills arrive packed with jargon and hidden errors, while lab reports leave most patients anxious and uncertain. DecoderMD exists because the stakes are too high to ignore.</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="[grid-area:1_/_1] ml-[10.857px] mt-[11.429px] relative size-[18.286px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Icon">
          <path d={svgPaths.p69a5e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#4692e4] ml-0 mt-0 rounded-[12px] size-10" data-name="Icon background" />
      <Icon3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#292d33] w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.2]">{`Save money & Eliminate Errors`}</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[0px] w-full">
        <p className="leading-[1.3] text-[16px]">
          <span>{`With up to 80% of medical bills containing errors, overcharges are common. Our AI detects mistakes and duplicate charges, `}</span>
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">potentially saving you hundreds or even thousands of dollars each year on unnecessary costs</span>.
        </p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[24px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="[grid-area:1_/_1] ml-[10.857px] mt-[11.429px] relative size-[18.286px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Clock">
          <path d={svgPaths.p35a0c180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#4692e4] ml-0 mt-0 rounded-[12px] size-10" data-name="Icon background" />
      <Clock />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#292d33] w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.2]">{`Gain Instant Clarity & Save Time`}</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[0px] w-full">
        <p className="leading-[1.3] text-[16px]">
          <span>{`Stop spending hours deciphering codes and confusing statements. `}</span>
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Get plain-English explanations of charges and lab results in seconds, not hours.</span>
          <span>{` Reclaim your time and eliminate the stress of the unknown.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function HeadCircuit() {
  return (
    <div className="[grid-area:1_/_1] ml-[10.857px] mt-[11.429px] relative size-[18.286px]" data-name="HeadCircuit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="HeadCircuit">
          <path d={svgPaths.p3a133100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#4692e4] ml-0 mt-0 rounded-[12px] size-10" data-name="Icon background" />
      <HeadCircuit />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#292d33] w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.2]">Make Confident, Informed Decisions</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[0px] w-full">
        <p className="leading-[1.3] text-[16px]">
          <span>{`Knowledge is power. Understand exactly what your healthcare costs and what your lab results mean for your health. `}</span>
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Ask better questions, avoid unnecessary procedures, and become an empowered advocate for your care.</span>
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Heartbeat() {
  return (
    <div className="[grid-area:1_/_1] ml-[10.857px] mt-[11.429px] relative size-[18.286px]" data-name="Heartbeat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Heartbeat">
          <path d={svgPaths.pa4fe400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#4692e4] ml-0 mt-0 rounded-[12px] size-10" data-name="Icon background" />
      <Heartbeat />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#292d33] w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.2]">{`Reduce Anxiety & Improve Health Outcomes`}</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[0px] w-full">
        <p className="leading-[1.3] text-[16px]">
          <span>{`Replace lab result anxiety with understanding. Track your health trends and get insights to prepare for doctor's visits. `}</span>
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Take proactive steps for your health without the fear of the unknown.</span>
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Section />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-[361px]" data-name="Container">
      <Container7 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-end justify-start leading-[0] relative shrink-0 text-center w-full" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold relative shrink-0 text-[#292d33] text-[28px] w-full">
        <p className="leading-[1.2]">Three powerful platforms under one umbrella</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[#8692a7] text-[16px] w-full">
        <p className="leading-[1.3]">BillDecoder, LabDecoder, MedDecoder are part of a suite of platforms that give you complete healthcare transparency with more platforms in development!</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-white w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] w-full">
        <p className="leading-[1.2]">BillDecoder</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[16px] w-full">
        <p className="leading-[1.3]">Transform confusing medical bills into clear, actionable insights</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white">
        <p className="leading-[1.3]">
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold text-[14px]">Error Detection.</span>
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold text-[16px]"> </span>
          <span className="font-['Fustat:Regular',_sans-serif] font-normal text-[14px]">Identifies duplicate charges, coding errors, and unusual fees</span>
        </p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white">
        <p className="leading-[1.3] text-[14px]">
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">{`Cost Savings. `}</span>Highlights overcharges and suggests cost-saving opportunities
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white">
        <p className="leading-[1.3] text-[14px]">
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Plain English Explanations.</span>
          <span className="font-['Fustat:Regular',_sans-serif] font-normal">{` Translates medical codes and procedures into understandable language`}</span>
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#4692e4] box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative rounded-[24px] shrink-0 w-[360px]" data-name="Section">
      <Container19 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-white w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] w-full">
        <p className="leading-[1.2]">LabDecoder</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[16px] w-full">
        <p className="leading-[1.3]">Understand your lab results with physician-level insights</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white">
        <p className="leading-[1.3]">
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold text-[14px]">Reference Range Analysis.</span>
          <span className="text-[16px]"> </span>
          <span className="font-['Fustat:Regular',_sans-serif] font-normal text-[14px]">Explains what normal, high, and low values mean for your health</span>
        </p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white">
        <p className="leading-[1.3]">
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold text-[14px]">Health Trend Tracking.</span>
          <span className="text-[16px]"> </span>
          <span className="font-['Fustat:Regular',_sans-serif] font-normal text-[14px]">Monitors changes in your lab values over time</span>
        </p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white">
        <p className="leading-[1.3]">
          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold text-[14px]">Doctor Discussion Prep.</span>
          <span className="text-[16px]"> </span>
          <span className="font-['Fustat:Regular',_sans-serif] font-normal text-[14px]">Generates informed questions to discuss with your healthcare provider</span>
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#1e5ba7] box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative rounded-[24px] shrink-0 w-[360px]">
      <Container24 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-white w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] w-full">
        <p className="leading-[1.2]">MedDecoder</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[16px] w-full">
        <p className="leading-[1.3]">Lorem ipsum dolor sit amet consectetur. Cum risus dolor nec.</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.3]">Lorem ipsum dolor sit amet consectetur. Cum risus dolor nec.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container30 key={i} />
      ))}
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#1a4a8a] box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative rounded-[24px] shrink-0 w-[360px]">
      <Container29 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Section1 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-[361px]" data-name="Container">
      <Container18 />
      <Container34 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="[grid-area:1_/_1] ml-[6.514px] mt-[6.857px] relative size-[10.971px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p33f15e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#2e78c9] ml-0 mt-0 rounded-[4px] size-6" data-name="Icon background" />
      <Icon13 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[#292d33] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Board-certified physician oversight</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="[grid-area:1_/_1] ml-[6.514px] mt-[6.857px] relative size-[10.971px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p3cfebf80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#2e78c9] ml-0 mt-0 rounded-[4px] size-6" data-name="Icon background" />
      <Icon14 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[#292d33] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Healthcare administration expertise</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="[grid-area:1_/_1] ml-[6.514px] mt-[6.857px] relative size-[10.971px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.pfdb7200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#2e78c9] ml-0 mt-0 rounded-[4px] size-6" data-name="Icon background" />
      <Icon15 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[#292d33] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Real-world clinical experience</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="[grid-area:1_/_1] ml-[6.514px] mt-[6.857px] relative size-[10.971px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p2b298900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] bg-[#2e78c9] ml-0 mt-0 rounded-[4px] size-6" data-name="Icon background" />
      <Icon16 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start leading-[0] relative shrink-0" data-name="Container">
      <Container42 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[#292d33] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Patient-centered approach</p>
      </div>
    </div>
  );
}

function FeaturesList() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Features List">
      <Container37 />
      <Container39 />
      <Container41 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f2faff] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[16px] w-full">
            <p className="leading-[1.3]">DecoderMD was developed by Dr. Peter Valenzuela, a family physician and healthcare leader who understands the frustration of confusing medical bills and complex lab results. Our platform combines clinical expertise with cutting-edge AI to provide you with the healthcare transparency you deserve.</p>
          </div>
          <FeaturesList />
          <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-black w-full">
            <p className="leading-[1.3] text-[12px]">
              <span className="text-[#2e78c9]">{`*Educational Platform Disclaimer. `}</span>
              <span className="text-[#8692a7]">DecoderMD is designed for educational purposes only and does not provide medical diagnoses or treatment recommendations. Always consult with your healthcare provider for medical decisions.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-no-repeat bg-size-[100%_183.21%] bg-top-left h-[289px] rounded-[24px] shrink-0 w-full" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-end justify-start relative shrink-0 w-[361px]" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#292d33] text-[28px] text-center w-full">
        <p className="leading-[1.2]">Built by Healthcare Professionals</p>
      </div>
      <Container45 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Icon17 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">Unlimited medical bill reviews</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Icon18 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">Comprehensive lab result analysis</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Icon19 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">HIPAA compliant security</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Container47 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[28px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[1.2]">Join the Waiting List</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#f0f2f5] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[1.3]">Be among the first to experience healthcare transparency. Early members save 20%!</p>
      </div>
      <Container50 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4]">Full Name</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-4 py-3.5 relative w-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#98a2b3] text-[14px] tracking-[0.14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[1.4]">&nbsp;</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Content">
      <Content1 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Input">
      <Content />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4]">Email</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-4 py-3.5 relative w-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#98a2b3] text-[14px] tracking-[0.14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[1.4]">&nbsp;</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Content">
      <Content4 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Input">
      <Content3 />
      <Content5 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1e5ba7] box-border content-stretch flex gap-2.5 h-12 items-center justify-center px-6 py-4 relative rounded-[50px] shrink-0" data-name="Button">
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">Join Waiting List</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Input />
      <Input1 />
      <Button2 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-white w-full">
        <p className="leading-[1.3]">By joining our waiting list, you agree to receive updates about DecoderMD. We respect your privacy and will never share your information.</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-8 items-start justify-start left-1/2 top-[33px] translate-x-[-50%] w-[325px]" data-name="Container">
      <Container51 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[593px] overflow-clip relative rounded-[24px] shrink-0 w-[361px]" data-name="Container">
      <div className="absolute bg-[#4692e4] h-[765px] left-0 rounded-[24px] top-0 w-[361px]" data-name="Background" />
      <div className="absolute h-[247px] left-[-133px] top-[602px] w-[629px]">
        <div className="absolute inset-[-80.97%_-31.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1029 647">
            <g filter="url(#filter0_f_9_1289)" id="Ellipse 1">
              <ellipse cx="514.5" cy="323.5" fill="url(#paint0_radial_9_1289)" rx="314.5" ry="123.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="647" id="filter0_f_9_1289" width="1029" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_9_1289" stdDeviation="100" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(514.5 310.92) rotate(90) scale(136.08 346.536)" gradientUnits="userSpaceOnUse" id="paint0_radial_9_1289" r="1">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[765px] left-[-40px] top-0 w-[1268px]" data-name="Line">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1268 765">
          <path clipRule="evenodd" d={svgPaths.p198b4500} fill="url(#paint0_linear_9_1259)" fillOpacity="0.2" fillRule="evenodd" id="Line" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_1259" x1="634" x2="634" y1="0" y2="668.613">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[344px] items-center justify-center left-[-13px] top-[363px] w-[373px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-no-repeat bg-right bg-size-[147.72%_100.11%] h-[344px] w-[373px]" data-name="abstract-curve-geometries-background-3d-rendering-digital-drawing 1" style={{ backgroundImage: `url('${imgAbstractCurveGeometriesBackground3DRenderingDigitalDrawing1}')` }} />
        </div>
      </div>
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-end justify-start relative shrink-0 w-full" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#292d33] text-[28px] text-center w-full">
        <p className="leading-[1.2]">Frequently Asked Questions</p>
      </div>
    </div>
  );
}

function CaretUp() {
  return (
    <div className="absolute aspect-[32/32] left-[21.88%] right-[21.88%] top-[7px]" data-name="CaretUp">
      <div className="absolute inset-[28.12%_15.62%_34.37%_15.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          <path d={svgPaths.p375ea800} fill="var(--fill-0, #F2FAFF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow">
      <div className="absolute aspect-[100/100] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #4692E4)" id="Ellipse 2" r="16" />
        </svg>
      </div>
      <CaretUp />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0 w-full">
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[16px]">
        <p className="leading-[1.3]">Is DecoderMD a diagnostic tool?</p>
      </div>
      <Arrow />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-0 pr-8 py-0 relative w-full">
          <div className="basis-0 font-['Fustat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[14px]">
            <p className="leading-[1.3]">No, DecoderMD is an educational platform designed to help you understand your medical bills and lab results. It does not provide medical diagnoses or treatment recommendations. Always consult with your healthcare provider for medical decisions and interpretations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-[#f2faff] relative rounded-[12px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <Frame36 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="absolute aspect-[32/32] left-[21.88%] right-[21.88%] top-[7px]" data-name="CaretDown">
      <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          <path d={svgPaths.p29109380} fill="var(--fill-0, #4692E4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow">
      <div className="absolute aspect-[100/100] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" id="Ellipse 2" r="15.5" stroke="var(--stroke-0, #4692E4)" />
        </svg>
      </div>
      <CaretDown />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[16px]">
        <p className="leading-[1.3]">How secure is my health information?</p>
      </div>
      <Arrow1 />
    </div>
  );
}

function Faq1() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[12px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="absolute aspect-[32/32] left-[21.88%] right-[21.88%] top-[7px]" data-name="CaretDown">
      <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          <path d={svgPaths.p29109380} fill="var(--fill-0, #4692E4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow">
      <div className="absolute aspect-[100/100] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" id="Ellipse 2" r="15.5" stroke="var(--stroke-0, #4692E4)" />
        </svg>
      </div>
      <CaretDown1 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[16px]">
        <p className="leading-[1.3]">What types of medical bills can DecoderMD analyze?</p>
      </div>
      <Arrow2 />
    </div>
  );
}

function Faq2() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[12px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="absolute aspect-[32/32] left-[21.88%] right-[21.88%] top-[7px]" data-name="CaretDown">
      <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          <path d={svgPaths.p29109380} fill="var(--fill-0, #4692E4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow">
      <div className="absolute aspect-[100/100] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" id="Ellipse 2" r="15.5" stroke="var(--stroke-0, #4692E4)" />
        </svg>
      </div>
      <CaretDown2 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[16px]">
        <p className="leading-[1.3]">How accurate is the lab result interpretation?</p>
      </div>
      <Arrow3 />
    </div>
  );
}

function Faq3() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[12px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function CaretDown3() {
  return (
    <div className="absolute aspect-[32/32] left-[21.88%] right-[21.88%] top-[7px]" data-name="CaretDown">
      <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          <path d={svgPaths.p29109380} fill="var(--fill-0, #4692E4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow">
      <div className="absolute aspect-[100/100] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" id="Ellipse 2" r="15.5" stroke="var(--stroke-0, #4692E4)" />
        </svg>
      </div>
      <CaretDown3 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[16px]">
        <p className="leading-[1.3]">When will DecoderMD be available?</p>
      </div>
      <Arrow4 />
    </div>
  );
}

function Faq4() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[12px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function CaretDown4() {
  return (
    <div className="absolute aspect-[32/32] left-[21.88%] right-[21.88%] top-[7px]" data-name="CaretDown">
      <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          <path d={svgPaths.p29109380} fill="var(--fill-0, #4692E4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Arrow5() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow">
      <div className="absolute aspect-[100/100] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" id="Ellipse 2" r="15.5" stroke="var(--stroke-0, #4692E4)" />
        </svg>
      </div>
      <CaretDown4 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="basis-0 font-['Fustat:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#292d33] text-[16px]">
        <p className="leading-[1.3]">{`What's the difference between consumer and business plans?`}</p>
      </div>
      <Arrow5 />
    </div>
  );
}

function Faq5() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[12px] shrink-0 w-full" data-name="FAQ">
      <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Faq />
      <Faq1 />
      <Faq2 />
      <Faq3 />
      <Faq4 />
      <Faq5 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-[360px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[1.3]">DecoderMD</p>
      </div>
      <div className="font-['Fustat:Regular',_sans-serif] font-normal relative shrink-0 text-[#ececec] text-[14px] w-full">
        <p className="leading-[1.3]">AI-powered healthcare transparency platform developed by physicians. Decode your medical bills and lab results with confidence.</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2b418600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Icon22 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">100% HIPAA Compliant</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(30,91,167,0.5)] box-border content-stretch flex gap-6 items-center justify-start px-3 py-2 relative rounded-[500px] shrink-0" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-[344px]" data-name="Container">
      <Container59 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col font-['Fustat:SemiBold',_sans-serif] font-semibold gap-3 items-start justify-start leading-[0] relative shrink-0 text-[14px] text-white w-full" data-name="Container">
      <div className="relative shrink-0 w-full">
        <p className="leading-[1.3]">BillDecoder</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="leading-[1.3]">LabDecoder</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="leading-[1.3]">MedDecoder</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[14px] text-neutral-200 tracking-[0.56px] uppercase w-full">
        <p className="leading-[1.3]">Product</p>
      </div>
      <Container63 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p20381480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Icon23 />
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">info@decodermd.com</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-white w-full">
        <p className="leading-[1.3]">{`Questions? We'd love to hear from you.`}</p>
      </div>
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.3]">MedDecoder</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[14px] text-neutral-200 tracking-[0.56px] uppercase w-full">
        <p className="leading-[1.3]">Contact us</p>
      </div>
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container68 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Fustat:Regular',_sans-serif] font-normal gap-6 items-start justify-start leading-[0] overflow-clip relative shrink-0 text-[#d0d5dd] text-[0px] text-nowrap w-full" data-name="Frame">
      <div className="relative shrink-0">
        <p className="leading-[1.3] text-[#d0d5dd] text-[12px] text-nowrap whitespace-pre">Privacy Policy</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[1.3] text-[#d0d5dd] text-[12px] text-nowrap whitespace-pre">Terms of Service</p>
      </div>
      <div className="relative shrink-0">
        <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#d0d5dd] text-[12px] text-nowrap whitespace-pre">HIPAA Compliance</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#d0d5dd] text-[12px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">© 2025 DecoderMD. All rights reserved.</p>
      </div>
      <Frame />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#1a3760] relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-8 relative w-full">
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-14 items-center justify-start left-0 top-[119px] w-[393px]" data-name="Main Content">
      <Container6 />
      <Container17 />
      <Container35 />
      <Container46 />
      <Container55 />
      <Container58 />
      <Container72 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile">
      <Promo />
      <Header />
      <MainContent />
    </div>
  );
}