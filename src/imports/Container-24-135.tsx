import svgPaths from "./svg-ur8p5h7mw3";

function Container() {
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

function Icon() {
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
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Icon />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">100% HIPAA Compliant</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(30,91,167,0.5)] box-border content-stretch flex gap-6 items-center justify-start px-3 py-2 relative rounded-[500px] shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-[344px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function Container4() {
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

function Container5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[14px] text-neutral-200 tracking-[0.56px] uppercase w-full">
        <p className="leading-[1.3]">Product</p>
      </div>
      <Container4 />
    </div>
  );
}

function Icon1() {
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

function Container6() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">info@decodermd.com</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-white w-full">
        <p className="leading-[1.3]">{`Questions? We'd love to hear from you.`}</p>
      </div>
      <div className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.3]">MedDecoder</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="font-['Fustat:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[14px] text-neutral-200 tracking-[0.56px] uppercase w-full">
        <p className="leading-[1.3]">Contact us</p>
      </div>
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container9 />
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

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#d0d5dd] text-[12px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">© 2025 DecoderMD. All rights reserved.</p>
      </div>
      <Frame />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

export default function Container13() {
  return (
    <div className="bg-[#1a3760] relative size-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-8 relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}