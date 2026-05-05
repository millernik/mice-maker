import svgPaths from "../../imports/AboutDraft-1/svg-knq4q6scw2";

function FooterLogo() {
  return (
    <div className="h-[43px] relative shrink-0 w-[280px]" data-name="mice-maker-logo 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 43">
        <g clipPath="url(#clip0_footer_logo)" id="mice-maker-logo 1">
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
          <clipPath id="clip0_footer_logo">
            <rect fill="white" height="43" width="280" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip_email_icon)">
          <path d={svgPaths.p5908c00} stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p28e5d300} stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip_email_icon">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip_phone_icon)">
          <path d={svgPaths.p52e7d70} stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip_phone_icon">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip_linkedin_icon)">
          <path d={svgPaths.p133c49f0} stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3607d880} stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p952bd00} stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip_linkedin_icon">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[50px] relative shrink-0 w-full" data-name="Footer Alternativ">
      <FooterLogo />
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
        {/* Left: tagline */}
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[280px]">
          <div className="bg-[#c6a56b] h-[1.997px] rounded-[2px] shrink-0 w-[27.995px]" />
          <p className="font-['Inter',sans-serif] font-normal leading-[22.1px] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[13px] w-[min-content]">Accommodation solutions for international medical congresses.</p>
        </div>
        {/* Middle: contact links */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
              <EmailIcon />
              <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">info@mice-maker.com</p>
            </div>
          </div>
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
              <PhoneIcon />
              <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">+49 89 37 98 76 27</p>
            </div>
          </div>
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
              <LinkedInIcon />
              <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">LinkedIn</p>
            </div>
          </div>
        </div>
        {/* Right: legal */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[280.009px]">
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] font-semibold leading-[22.1px] not-italic relative shrink-0 text-[#3f3f3f] text-[13px] whitespace-nowrap">MICE MAKER GmbH</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">Managing Director: Katharina Hanowski</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                <div className="font-['Inter',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] w-[281px]">
                  <p className="leading-[20.4px] mb-0">Alte Pasinger Straße 112</p>
                  <p className="leading-[20.4px]">D-82166 Gräfelfing / Munich</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
              <div className="h-[18.689px] relative shrink-0 w-[280.009px]">
                <p className="absolute font-['Inter',sans-serif] font-normal leading-[18.7px] left-0 not-italic text-[#6b6b6b] text-[11px] top-[0.22px] whitespace-nowrap">HRB 210034 · District Court Munich</p>
              </div>
              <div className="h-[18.689px] relative shrink-0 w-[280.009px]">
                <p className="absolute font-['Inter',sans-serif] font-normal leading-[18.7px] left-0 not-italic text-[#6b6b6b] text-[11px] top-[0.22px] whitespace-nowrap">VAT: DE 815488156</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
        <p className="font-['Inter',sans-serif] font-normal leading-[17.6px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">MICE MAKER GmbH is an independent accommodation provider and not affiliated with or endorsed by any congress organizer.</p>
        <div className="content-stretch flex gap-[11.997px] items-start relative shrink-0 w-[280px]" data-name="Container">
          <div className="relative shrink-0 cursor-pointer">
            <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Imprint</p>
          </div>
          <div className="relative shrink-0 cursor-pointer">
            <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Privacy Policy</p>
          </div>
          <div className="relative shrink-0 cursor-pointer">
            <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Disclaimer</p>
          </div>
          <div className="relative shrink-0 cursor-pointer">
            <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  );
}
