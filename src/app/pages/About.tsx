import { Navigation } from "../components/Navigation";
import svgPaths from "../../imports/AboutDraft-3/svg-2bvhy7pw3q";

function EmailIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1399)">
          <path d={svgPaths.p5908c00} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p28e5d300} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
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

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1408)">
          <path d={svgPaths.p52e7d70} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
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

function LinkedInIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1403)">
          <path d={svgPaths.p133c49f0} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3607d880} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p952bd00} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
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

function MiceMakerLogoFooter() {
  return (
    <div className="h-[43px] relative shrink-0 w-[280px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 43">
        <g clipPath="url(#clip0_4002_1387)">
          <path d={svgPaths.p2ac9d000} fill="#C49201" />
          <path d={svgPaths.pd2b4980} fill="#3F3F3F" />
          <path d={svgPaths.p25185c00} fill="#3F3F3F" />
          <path d={svgPaths.p3a77bb80} fill="#3F3F3F" />
          <path d={svgPaths.pd0c47c0} fill="#3F3F3F" />
          <path d={svgPaths.p1fbaa630} fill="#3F3F3F" />
          <path d={svgPaths.p1c168800} fill="#3F3F3F" />
          <path d={svgPaths.p207e3fc0} fill="#3F3F3F" />
          <path d={svgPaths.p2fba200} fill="#3F3F3F" />
          <path d={svgPaths.p68f100} fill="#3F3F3F" />
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

export default function About() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative min-h-screen w-full" data-name="About Draft">
      <Navigation currentPage="about" />
      <div className="w-full">
        {/* Hero */}
        <div className="bg-[#f0eadf] relative shrink-0 w-full" data-name="Section">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[50px] py-[100px] relative size-full">
              <div className="content-stretch flex flex-col gap-[26px] items-start not-italic relative shrink-0 w-[880px]">
                <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f3f3f] text-[56px] w-[1346px] whitespace-pre-wrap">
                  <p className="leading-[60px] mb-0">{`Finding hotel rooms for `}</p>
                  <p className="leading-[60px]">{`medical congresses isn't easy.`}</p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.75px] min-w-full relative shrink-0 text-[#6b6b6b] text-[17px] w-[min-content]">Most hotels are blocked years in advance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body section with credentials */}
        <div className="bg-white relative shrink-0 w-full" data-name="Section">
          <div className="content-stretch flex flex-col items-start p-[50px] relative size-full">
            <div className="content-stretch flex flex-col gap-[50px] items-start justify-end relative shrink-0 w-full">
              <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[44.8px] not-italic relative shrink-0 text-[#3f3f3f] text-[40px] tracking-[-0.88px] whitespace-nowrap">We secure what others can't</p>
              <div className="content-stretch flex gap-[42px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[42px] items-start justify-center min-w-px not-italic relative text-[#6b6b6b] text-[16px]">
                  <ul className="block font-['Inter:Regular','Noto_Sans:Regular',sans-serif] leading-[0] list-disc relative shrink-0 w-full whitespace-pre-wrap">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[29.6px]">{`We secure hotel contingents for major medical congresses  `}</span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[29.6px]">{`Access to contracted inventory and off-market availability  `}</span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[29.6px]">{`One point of contact from sourcing to final booking  `}</span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[29.6px]">{`Flexible setup depending on project needs  `}</span>
                    </li>
                  </ul>
                  <p className="font-['Inter:Regular',sans-serif] leading-[29.6px] relative shrink-0 w-full">If you've worked in this space, you know how complex it gets. We keep it simple.</p>
                </div>
                {/* Credentials card */}
                <div className="bg-white h-[298.316px] relative rounded-[14px] shrink-0 w-[469.34px]">
                  <div className="content-stretch flex flex-col items-start overflow-clip p-[0.556px] relative rounded-[inherit] size-full">
                    {/* Header */}
                    <div className="bg-[#f8f7f4] h-[47.552px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between pb-[16.556px] pl-[23.993px] pr-[357.023px] pt-[16px] relative size-full">
                          <p className="font-['Inter:Bold',sans-serif] font-bold h-[15px] leading-[15px] not-italic relative shrink-0 text-[#c6a56b] text-[10px] tracking-[1.6px] uppercase w-[87px]">Credentials</p>
                        </div>
                      </div>
                    </div>
                    {/* Credentials list */}
                    <div className="h-[249.653px] relative shrink-0 w-full">
                      {/* Years MICE MAKER */}
                      <div className="absolute content-stretch flex gap-[15.998px] h-[62.552px] items-center left-0 pb-[16.556px] pl-[23.993px] pr-[24px] pt-[16px] top-0 w-[468.229px]">
                        <div aria-hidden="true" className="absolute border-[#e8e4dc] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
                        <div className="relative shrink-0 w-[36px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[30px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[-0.4px] whitespace-nowrap">12+</p>
                          </div>
                        </div>
                        <div className="h-[19.505px] relative shrink-0 w-[203.854px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-[0.67px] whitespace-nowrap">Years MICE MAKER</p>
                          </div>
                        </div>
                      </div>
                      {/* Industry experience */}
                      <div className="absolute content-stretch flex gap-[15.998px] h-[62.552px] items-center left-0 pb-[16.556px] pl-[23.993px] pr-[24px] pt-[16px] top-[62.55px] w-[468.229px]">
                        <div aria-hidden="true" className="absolute border-[#e8e4dc] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
                        <div className="relative shrink-0 w-[26px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[30px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[-0.4px] whitespace-nowrap">25</p>
                          </div>
                        </div>
                        <div className="h-[19.505px] relative shrink-0 w-[176.519px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-[0.67px] whitespace-nowrap">Years of industry experience</p>
                          </div>
                        </div>
                      </div>
                      {/* Trusted */}
                      <div className="absolute content-stretch flex gap-[15.998px] h-[62.552px] items-center left-0 pb-[16.556px] pl-[23.993px] pr-[24px] pt-[16px] top-[125.1px] w-[468.229px]">
                        <div aria-hidden="true" className="absolute border-[#e8e4dc] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
                        <div className="relative shrink-0 w-[76px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[30px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[-0.4px] whitespace-nowrap">Trusted</p>
                          </div>
                        </div>
                        <div className="h-[19.505px] relative shrink-0 w-[169.948px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-[0.67px] whitespace-nowrap">{`by international agencies & pharmaceutical clients `}</p>
                          </div>
                        </div>
                      </div>
                      {/* Proven */}
                      <div className="absolute content-stretch flex gap-[15.998px] h-[61.997px] items-center left-0 pl-[23.993px] pr-[24px] py-[16px] top-[187.66px] w-[468.229px]">
                        <div className="relative shrink-0 w-[67px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[30px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[-0.4px] whitespace-nowrap">{`Proven `}</p>
                          </div>
                        </div>
                        <div className="h-[19.505px] relative shrink-0 w-[142.656px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-[0.67px] whitespace-nowrap">in high-demand environments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_24px_0px_rgba(26,26,26,0.06)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with detailed company info */}
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[50px] relative shrink-0 w-full">
          <MiceMakerLogoFooter />
          {/* Main footer content */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            {/* Left: Tagline */}
            <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[280px]">
              <div className="bg-[#c6a56b] h-[1.997px] relative rounded-[2px] shrink-0 w-[27.995px]" />
              <p className="font-['Inter',sans-serif] font-normal leading-[22.1px] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[13px] w-[min-content]">Accommodation solutions for international medical congresses.</p>
            </div>
            {/* Middle: Contact */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
              <div className="relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <EmailIcon />
                  <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">info@mice-maker.com</p>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <PhoneIcon />
                  <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">+49 89 37 98 76 27</p>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <LinkedInIcon />
                  <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">LinkedIn</p>
                </div>
              </div>
            </div>
            {/* Right: Company details */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[280.009px]">
                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter',sans-serif] font-semibold leading-[22.1px] not-italic relative shrink-0 text-[#3f3f3f] text-[13px] whitespace-nowrap">MICE MAKER GmbH</p>
                  <p className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">Managing Director: Katharina Hanowski</p>
                  <div className="font-['Inter',sans-serif] font-normal leading-[20.4px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] w-[281px]">
                    <p className="mb-0">Alte Pasinger Straße 112</p>
                    <p>D-82166 Gräfelfing / Munich</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                  <p className="font-['Inter',sans-serif] font-normal leading-[18.7px] not-italic text-[#6b6b6b] text-[11px] whitespace-nowrap">HRB 210034 · District Court Munich</p>
                  <p className="font-['Inter',sans-serif] font-normal leading-[18.7px] not-italic text-[#6b6b6b] text-[11px] whitespace-nowrap">VAT: DE 815488156</p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom disclaimer and links */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p className="font-['Inter',sans-serif] font-normal leading-[17.6px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">MICE MAKER GmbH is an independent accommodation provider and not affiliated with or endorsed by any congress organizer.</p>
            <div className="content-stretch flex gap-[11.997px] items-start relative shrink-0 w-[280px]">
              <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Imprint</p>
              <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Privacy Policy</p>
              <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Disclaimer</p>
              <p className="font-['Inter',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
