import svgPaths from "./svg-lbsa6oshzw";
import imgContainer from "./8b0585e729c511525a2f8850a915b6b062164d4b.png";
import imgContainer1 from "./5a477468543c0ef90e3e09106bd0967d3e1f577e.png";
import imgContainer2 from "./a4390ece8ee60a3ef770e0d6a5e6da032cad318c.png";
import imgContainer3 from "./d7eea08a110f77edab3991feb72e8651aeea7fb3.png";
import imgContainer4 from "./8d735113eec3f323fcdc91234049efc03f43ec90.png";

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[24px] text-white whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`European Society of Clinical Microbiology `}</p>
        <p className="leading-[normal]">and Infectious Diseases</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1237)" id="Icon">
          <path d={svgPaths.p9931180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3f162900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1237">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Munich, Germany</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon />
        <Text1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1219)" id="Icon">
          <path d="M3.99884 0.999711V2.99913" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M7.99769 0.999711V2.99913" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p9d58900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M1.49957 4.99855H10.497" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1219">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">17–21 April 2026</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon1 />
        <Text3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-end min-h-px relative w-full" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[116.89%] left-0 max-w-none top-[0.08%] w-full" src={imgContainer} />
        </div>
        <div className="absolute bg-gradient-to-t from-black inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function CongressCard() {
  return (
    <div className="h-[438px] relative shrink-0 w-[586px]" data-name="CongressCard">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[24px] text-white w-[351px]">European Association for the Study of Diabetes</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1237)" id="Icon">
          <path d={svgPaths.p9931180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3f162900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1237">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Hamburg, Germany</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon2 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1219)" id="Icon">
          <path d="M3.99884 0.999711V2.99913" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M7.99769 0.999711V2.99913" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p9d58900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M1.49957 4.99855H10.497" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1219">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">28 September – 2 October 2026</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon3 />
        <Text7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-end min-h-px relative w-full" data-name="Container">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[101.72%] left-[-9.04%] max-w-none top-[-1.72%] w-[114.13%]" src={imgContainer1} />
        </div>
        <div className="absolute bg-gradient-to-t from-black inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function CongressCard1() {
  return (
    <div className="h-[438px] relative shrink-0 w-[586px]" data-name="CongressCard">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[24px] text-white w-[351px]">European Hematology Association Congress</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1237)" id="Icon">
          <path d={svgPaths.p9931180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3f162900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1237">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Milan, Italy</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon4 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1219)" id="Icon">
          <path d="M3.99884 0.999711V2.99913" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M7.99769 0.999711V2.99913" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p9d58900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M1.49957 4.99855H10.497" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1219">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">11–14 June 2026</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon5 />
        <Text11 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-end min-h-px relative w-full" data-name="Container">
      <Heading2 />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[107.17%] left-[-6.23%] max-w-none top-[0.1%] w-[112.45%]" src={imgContainer2} />
        </div>
        <div className="absolute bg-gradient-to-t from-black inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function CongressCard2() {
  return (
    <div className="h-[438px] relative shrink-0 w-[586px]" data-name="CongressCard">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[351px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`European Society for `}</p>
        <p className="leading-[normal]">Medical Oncology Congress</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1237)" id="Icon">
          <path d={svgPaths.p9931180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3f162900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1237">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Prague, Czech Republic</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon6 />
        <Text13 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1219)" id="Icon">
          <path d="M3.99884 0.999711V2.99913" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M7.99769 0.999711V2.99913" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p9d58900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M1.49957 4.99855H10.497" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1219">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">23–27 October 2026</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon7 />
        <Text15 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-end min-h-px relative w-full" data-name="Container">
      <Heading3 />
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[104.35%] left-[-6.08%] max-w-none top-[0.01%] w-[112.16%]" src={imgContainer3} />
        </div>
        <div className="absolute bg-gradient-to-t from-black inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function CongressCard3() {
  return (
    <div className="h-[438px] relative shrink-0 w-[586px]" data-name="CongressCard">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[24px] text-white whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`European Alliance of Associations `}</p>
        <p className="leading-[normal]">for Rheumatology</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1237)" id="Icon">
          <path d={svgPaths.p9931180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3f162900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1237">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Vienna, Austria</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon8 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1219)" id="Icon">
          <path d="M3.99884 0.999711V2.99913" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M7.99769 0.999711V2.99913" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p9d58900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M1.49957 4.99855H10.497" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1219">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">3–6 June 2026</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[17.995px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Icon9 />
        <Text19 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-end min-h-px relative w-full" data-name="Container">
      <Heading4 />
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer4} />
        <div className="absolute bg-gradient-to-t from-black inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function CongressCard4() {
  return (
    <div className="h-[438px] relative shrink-0 w-[586px]" data-name="CongressCard">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Container">
      <CongressCard />
      <CongressCard1 />
      <CongressCard2 />
      <CongressCard3 />
      <CongressCard4 />
    </div>
  );
}