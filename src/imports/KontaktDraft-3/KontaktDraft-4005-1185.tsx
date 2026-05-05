import svgPaths from "./svg-nvevfvsxh2";

function MiceMakerLogo() {
  return (
    <div className="h-[52px] relative shrink-0 w-[338px]" data-name="mice-maker-logo 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 338 52">
        <g clipPath="url(#clip0_4002_1411)" id="mice-maker-logo 1">
          <path d={svgPaths.p282aa100} fill="var(--fill-0, #C49201)" id="Vector" />
          <path d={svgPaths.p2ed87d80} fill="var(--fill-0, #3F3F3F)" id="Vector_2" />
          <path d={svgPaths.p342a6300} fill="var(--fill-0, #3F3F3F)" id="Vector_3" />
          <path d={svgPaths.p27b6e380} fill="var(--fill-0, #3F3F3F)" id="Vector_4" />
          <path d={svgPaths.p1bb41100} fill="var(--fill-0, #3F3F3F)" id="Vector_5" />
          <path d={svgPaths.p1e132a00} fill="var(--fill-0, #3F3F3F)" id="Vector_6" />
          <path d={svgPaths.p14db3130} fill="var(--fill-0, #3F3F3F)" id="Vector_7" />
          <path d={svgPaths.p39dc6b80} fill="var(--fill-0, #3F3F3F)" id="Vector_8" />
          <path d={svgPaths.pac97e00} fill="var(--fill-0, #3F3F3F)" id="Vector_9" />
          <path d={svgPaths.p11bf9300} fill="var(--fill-0, #3F3F3F)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1411">
            <rect fill="white" height="52" width="338" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#f8f7f4] h-[31.502px] relative rounded-[8px] shrink-0 w-[64.991px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[13.99px] not-italic text-[#3f3f3f] text-[13px] top-[6.66px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] h-[31.502px] min-w-px relative rounded-[8px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[13.99px] not-italic text-[#6b6b6b] text-[13px] top-[6.66px] whitespace-nowrap">Major Congresses</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[31.502px] relative rounded-[8px] shrink-0 w-[65.339px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[13.99px] not-italic text-[#6b6b6b] text-[13px] top-[6.66px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[31.502px] relative rounded-[8px] shrink-0 w-[76.988px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[13.99px] not-italic text-[#6b6b6b] text-[13px] top-[6.66px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[3.993px] h-[31.502px] items-center relative shrink-0 w-[360.469px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#c6a56b] drop-shadow-[0px_1px_4px_rgba(198,165,107,0.3)] h-[37.491px] relative rounded-[8px] shrink-0 w-[139.453px]" data-name="Link">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-[20px] not-italic text-[13px] text-white top-[9.66px] tracking-[0.13px] whitespace-nowrap">Request Rooms</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[80px] relative shrink-0 w-full" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(232,228,220,0.55)] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[50px] relative size-full">
          <MiceMakerLogo />
          <Container />
          <Link4 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[848px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[60px] not-italic relative shrink-0 text-[#3f3f3f] text-[56px] w-[1297px]">{`Curious or already convinced? `}</p>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f0eadf] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[50px] py-[100px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[33px] not-italic relative shrink-0 text-[#3f3f3f] text-[22px] tracking-[-0.33px] whitespace-nowrap">Send an Enquiry</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#3f3f3f] text-[12px] top-[0.67px] tracking-[0.12px] whitespace-nowrap">
        <span className="leading-[18px]">Full Name</span>
        <span className="leading-[18px] text-[#c6a56b]">*</span>
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[#f8f7f4] h-[44.097px] relative rounded-[9px] shrink-0 w-full" data-name="Contact">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[11px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">Jane Smith</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5.998px] h-[68.09px] items-start min-w-px relative" data-name="Field">
      <Label />
      <Contact />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#3f3f3f] text-[12px] top-[0.67px] tracking-[0.12px] whitespace-nowrap">
        <span className="leading-[18px]">Company</span>
        <span className="leading-[18px] text-[#c6a56b]">*</span>
      </p>
    </div>
  );
}

function Contact1() {
  return (
    <div className="bg-[#f8f7f4] h-[44.097px] relative rounded-[9px] shrink-0 w-full" data-name="Contact">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[11px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">Agency / Pharma Co.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5.998px] h-[68.09px] items-start min-w-px relative" data-name="Field">
      <Label1 />
      <Contact1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <Field />
        <Field1 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#3f3f3f] text-[12px] top-[0.67px] tracking-[0.12px] whitespace-nowrap">
        <span className="leading-[18px]">Email Address</span>
        <span className="leading-[18px] text-[#c6a56b]">*</span>
      </p>
    </div>
  );
}

function Contact2() {
  return (
    <div className="bg-[#f8f7f4] h-[44.097px] relative rounded-[9px] shrink-0 w-full" data-name="Contact">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[11px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">you@company.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Field2() {
  return (
    <div className="h-[68.09px] relative shrink-0 w-full" data-name="Field">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.998px] items-start relative size-full">
        <Label2 />
        <Contact2 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#3f3f3f] text-[12px] top-[0.67px] tracking-[0.12px] whitespace-nowrap">Subject</p>
    </div>
  );
}

function Contact3() {
  return (
    <div className="bg-[#f8f7f4] h-[44.097px] relative rounded-[9px] shrink-0 w-full" data-name="Contact">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[11px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">e.g. ESCMID 2026 — 30 rooms, 4-star</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Field3() {
  return (
    <div className="h-[68.09px] relative shrink-0 w-full" data-name="Field">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.998px] items-start relative size-full">
        <Label3 />
        <Contact3 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#3f3f3f] text-[12px] top-[0.67px] tracking-[0.12px] whitespace-nowrap">
        <span className="leading-[18px]">Message</span>
        <span className="leading-[18px] text-[#c6a56b]">*</span>
      </p>
    </div>
  );
}

function Contact4() {
  return (
    <div className="bg-[#f8f7f4] h-[128.056px] relative rounded-[9px] shrink-0 w-full" data-name="Contact">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[14px] py-[11px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">Congress, dates, number of rooms, budget, preferred location, and any specific requirements.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Field4() {
  return (
    <div className="h-[158.264px] relative shrink-0 w-full" data-name="Field">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.998px] items-start relative size-full">
        <Label4 />
        <Contact4 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18.15px] min-w-px not-italic relative text-[#9ca3af] text-[11px]">{`Your data is processed per our Privacy Policy, used only to handle your enquiry. We don't share your details with third parties.`}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M3.125 7.5H11.875" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pb698300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#c6a56b] drop-shadow-[0px_2px_8px_rgba(198,165,107,0.35)] relative rounded-[10px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[24px] py-[12px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Send `}</p>
        <Icon />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Form">
      <Container5 />
      <Field2 />
      <Field3 />
      <Field4 />
      <Paragraph />
      <Link5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <Heading />
          <Form />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_0px_rgba(26,26,26,0.06)]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#3f3f3f] text-[13px] top-[0.67px] whitespace-nowrap">Direct Contact</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f8f7f4] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
        <Paragraph1 />
        <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[22.1px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">{`Prefer to reach out directly? `}</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p221d0a70} id="Vector" stroke="var(--stroke-0, #C6A56B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p24c9d00} id="Vector_2" stroke="var(--stroke-0, #C6A56B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(198,165,107,0.08)] relative rounded-[10px] shrink-0 size-[35.998px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.495px] pr-[10.504px] py-[0.556px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.67px] tracking-[1px] uppercase whitespace-nowrap">Email</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-0 not-italic text-[#3f3f3f] text-[13px] top-[0.67px] whitespace-nowrap">info@mice-maker.com</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[35.503px] relative shrink-0 w-[143.073px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.998px] items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[418.108px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p37570680} id="Vector" stroke="var(--stroke-0, #C6A56B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(198,165,107,0.08)] relative rounded-[10px] shrink-0 size-[35.998px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.495px] pr-[10.504px] py-[0.556px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.67px] tracking-[1px] uppercase whitespace-nowrap">Phone</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-0 not-italic text-[#3f3f3f] text-[13px] top-[0.67px] whitespace-nowrap">+49 89 37 98 76 27</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[35.503px] relative shrink-0 w-[122.335px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.998px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[418.108px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p12f37700} id="Vector" stroke="var(--stroke-0, #C6A56B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p23902e00} id="Vector_2" stroke="var(--stroke-0, #C6A56B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p5248800} id="Vector_3" stroke="var(--stroke-0, #C6A56B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(198,165,107,0.08)] relative rounded-[10px] shrink-0 size-[35.998px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.495px] pr-[10.504px] py-[0.556px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.67px] tracking-[1px] uppercase whitespace-nowrap">LinkedIn</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-0 not-italic text-[#3f3f3f] text-[13px] top-[0.67px] whitespace-nowrap">MICE MAKER GmbH</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[35.503px] relative shrink-0 w-[125.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.998px] items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[418.108px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pl-[23.993px] pr-[24px] py-[20px] relative size-full">
        <Link6 />
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[467.205px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.556px] relative rounded-[inherit] size-full">
        <Container7 />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[50px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3f3f3f] text-[40px] w-full">{`Want to stay ahead of high-demand congresses and hotel availability? `}</p>
      <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[29.75px] relative shrink-0 text-[#6b6b6b] text-[17px] w-full">{`Get updates on major medical congresses and accommodation options across Europe. `}</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[#f8f7f4] flex-[415.208_0_0] h-[44.097px] min-w-px relative rounded-[9px]" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] py-[11px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">your@email.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#c6a56b] h-[44.097px] relative rounded-[9px] shrink-0 w-[103.698px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-[52px] not-italic text-[13px] text-center text-white top-[12.96px] whitespace-nowrap">Get Updates</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[44.097px] relative shrink-0 w-[530.903px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-start relative size-full">
        <EmailInput />
        <Button />
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#f8f7f4] relative rounded-[2px] shrink-0 size-[12.995px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.56px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Label5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative size-full">
        <Checkbox />
        <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#9ca3af] text-[11px] whitespace-pre-wrap">
          <p className="leading-[18.15px] mb-0">{`I agree to receive congress and accommodation updates from MICE MAKER GmbH. `}</p>
          <p className="leading-[18.15px]">I can unsubscribe at any time. Processed in accordance with our Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] items-start relative shrink-0 w-full" data-name="Form">
      <Container17 />
      <Label5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_7px_rgba(26,26,26,0.05)] flex flex-col items-start p-[24px] relative rounded-[14px] shrink-0 w-[588.003px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Form1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[26px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <Container16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f0eadf] relative shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[50px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function MiceMakerLogo1() {
  return (
    <div className="h-[43px] relative shrink-0 w-[280px]" data-name="mice-maker-logo 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 43">
        <g clipPath="url(#clip0_4002_1387)" id="mice-maker-logo 1">
          <path d={svgPaths.p2ac9d000} fill="var(--fill-0, #C49201)" id="Vector" />
          <path d={svgPaths.pd2b4980} fill="var(--fill-0, #3F3F3F)" id="Vector_2" />
          <path d={svgPaths.p25185c00} fill="var(--fill-0, #3F3F3F)" id="Vector_3" />
          <path d={svgPaths.p3a77bb80} fill="var(--fill-0, #3F3F3F)" id="Vector_4" />
          <path d={svgPaths.pd0c47c0} fill="var(--fill-0, #3F3F3F)" id="Vector_5" />
          <path d={svgPaths.p1fbaa630} fill="var(--fill-0, #3F3F3F)" id="Vector_6" />
          <path d={svgPaths.p1c168800} fill="var(--fill-0, #3F3F3F)" id="Vector_7" />
          <path d={svgPaths.p207e3fc0} fill="var(--fill-0, #3F3F3F)" id="Vector_8" />
          <path d={svgPaths.p2fba200} fill="var(--fill-0, #3F3F3F)" id="Vector_9" />
          <path d={svgPaths.p68f100} fill="var(--fill-0, #3F3F3F)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1387">
            <rect fill="white" height="43" width="280" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container19() {
  return <div className="bg-[#c6a56b] h-[1.997px] relative rounded-[2px] shrink-0 w-[27.995px]" data-name="Container" />;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[280px]">
      <Container19 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.1px] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[13px] w-[min-content]">Accommodation solutions for international medical congresses.</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1399)" id="Icon">
          <path d={svgPaths.p5908c00} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p28e5d300} id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1399">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon4 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">info@mice-maker.com</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1408)" id="Icon">
          <path d={svgPaths.p52e7d70} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1408">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon5 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">+49 89 37 98 76 27</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1403)" id="Icon">
          <path d={svgPaths.p133c49f0} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3607d880} id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p952bd00} id="Vector_3" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1403">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon6 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">LinkedIn</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.1px] not-italic relative shrink-0 text-[#3f3f3f] text-[13px] whitespace-nowrap">MICE MAKER GmbH</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">Managing Director: Katharina Hanowski</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] w-[281px]">
        <p className="leading-[20.4px] mb-0">Alte Pasinger Straße 112</p>
        <p className="leading-[20.4px]">D-82166 Gräfelfing / Munich</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Paragraph8 />
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[18.689px] relative shrink-0 w-[280.009px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.7px] left-0 not-italic text-[#6b6b6b] text-[11px] top-[0.22px] whitespace-nowrap">HRB 210034 · District Court Munich</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[18.689px] relative shrink-0 w-[280.009px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.7px] left-0 not-italic text-[#6b6b6b] text-[11px] top-[0.22px] whitespace-nowrap">VAT: DE 815488156</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[280.009px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Link12() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Imprint</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Disclaimer</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Sitemap</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[11.997px] items-start relative shrink-0 w-[280px]" data-name="Container">
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.6px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">MICE MAKER GmbH is an independent accommodation provider and not affiliated with or endorsed by any congress organizer.</p>
      <Container23 />
    </div>
  );
}

function FooterAlternativ() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[50px] relative shrink-0 w-[1440px]" data-name="Footer Alternativ">
      <MiceMakerLogo1 />
      <Container18 />
      <Container22 />
    </div>
  );
}

export default function KontaktDraft() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Kontakt Draft">
      <Navigation />
      <Section />
      <Container2 />
      <Section1 />
      <FooterAlternativ />
    </div>
  );
}