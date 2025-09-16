import svgPaths from "./svg-8xw8k6r3a6";

function LineGridFilledSquares() {
  return (
    <div className="absolute h-[550px] left-0 top-0 w-[361px]" data-name="Line Grid + Filled Squares">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 550">
        <g id="Line Grid + Filled Squares">
          <g clipPath="url(#clip0_13_1418)">
            <rect fill="var(--fill-0, #4692E4)" height="550" rx="24" width="361" />
            <path clipRule="evenodd" d={svgPaths.p38ca3400} fill="url(#paint0_linear_13_1418)" fillOpacity="0.2" fillRule="evenodd" id="Line" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_13_1418" x1="452" x2="452" y1="0" y2="480.702">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_13_1418">
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

export default function Container6() {
  return (
    <div className="relative size-full" data-name="Container">
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