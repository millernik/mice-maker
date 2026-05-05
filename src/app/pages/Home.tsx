import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/HomeDraft-3/svg-g76zxkgt46";

// Import congress images
import imgEscmid from "../../imports/Container-1/8b0585e729c511525a2f8850a915b6b062164d4b.png";
import imgEasd from "../../imports/Container-1/5a477468543c0ef90e3e09106bd0967d3e1f577e.png";
import imgEha from "../../imports/Container-1/a4390ece8ee60a3ef770e0d6a5e6da032cad318c.png";
import imgEsmo from "../../imports/Container-1/d7eea08a110f77edab3991feb72e8651aeea7fb3.png";
import imgEsc from "../../imports/Container-1/8d735113eec3f323fcdc91234049efc03f43ec90.png";

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d="M3.125 7.5H11.875" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pb698300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[13.993px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g>
          <path d={svgPaths.p3c6b7300} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p26889000} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <mask height="14" id="mask0_4002_1307" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="0" y="0">
            <rect fill="#D9D9D9" height="14" width="14" />
          </mask>
          <g mask="url(#mask0_4002_1307)">
            <path d={svgPaths.p29a29700} fill="#6B6B6B" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[8.993px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99306 8.99306">
        <g clipPath="url(#clip0_4002_1245)">
          <path d={svgPaths.pc74c180} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.749421" />
          <path d={svgPaths.p5e7d800} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.749421" />
        </g>
        <defs>
          <clipPath id="clip0_4002_1245">
            <rect fill="white" height="8.99306" width="8.99306" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1237)">
          <path d={svgPaths.p9931180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3f162900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
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

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip0_4002_1219)">
          <path d="M3.99884 0.999711V2.99913" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M7.99769 0.999711V2.99913" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p9d58900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M1.49957 4.99855H10.497" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
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

function CheckItem({ text }: { text: string }) {
  return (
    <div className="h-[18.594px] relative shrink-0 w-[326.892px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[rgba(198,165,107,0.12)] content-stretch flex items-center justify-center left-0 px-[2.5px] py-[0.556px] rounded-[6.997px] size-[13.993px] top-[2.99px]">
          <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[6.997px]" />
          <CheckIcon />
        </div>
        <div className="absolute h-[18.594px] left-[23.99px] top-0">
          <p className="absolute font-['Inter',sans-serif] font-normal leading-[18.6px] left-0 not-italic text-[#6b6b6b] text-[12px] top-[-0.33px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <div className="bg-white drop-shadow-[0px_2px_6px_rgba(26,26,26,0.05)] flex-[1_0_0] min-w-px relative rounded-[14px] hover:drop-shadow-[0px_6px_22px_rgba(198,165,107,0.35)] hover:scale-[1.02] transition-all duration-300">
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[27px] items-start p-[33px] relative size-full">
        <div className="h-[22.092px] relative shrink-0 w-full">
          <p className="absolute font-['Inter',sans-serif] font-bold leading-[22.1px] left-0 not-italic text-[#3f3f3f] text-[24px] top-[0.56px] tracking-[-0.17px] whitespace-nowrap">{title}</p>
        </div>
        <div className="h-[48.993px] relative shrink-0 w-full">
          <p className="absolute font-['Inter',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.89px] whitespace-pre-wrap">{description}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[7.995px] h-[71.771px] items-start relative shrink-0 w-full">
          {items.map((item, i) => <CheckItem key={i} text={item} />)}
        </div>
      </div>
    </div>
  );
}

function CongressCard({ title, location, dateRange, imgSrc }: { title: string; location: string; dateRange: string; imgSrc: string }) {
  return (
    <Link to="/congresses" className="block shrink-0">
      <div
        className="h-[438px] relative w-[586px] cursor-pointer hover:scale-[1.02] transition-all duration-300"
        style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-[24px] gap-[16px]">
          <p className="font-['Inter',sans-serif] font-semibold leading-[normal] not-italic text-[20px] text-white whitespace-pre-wrap">{title}</p>
          <div className="flex gap-[12px] items-center">
            <div className="flex gap-[6px] items-center">
              <LocationIcon />
              <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic text-[12px] text-white whitespace-nowrap">{location}</p>
            </div>
            <div className="flex gap-[6px] items-center">
              <CalendarIcon />
              <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic text-[12px] text-white whitespace-nowrap">{dateRange}</p>
            </div>
          </div>
        </div>
        {/* Figma outline overlay */}
        <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative min-h-screen w-full">
      <Navigation currentPage="home" />
      <div className="w-full">
        {/* Hero section */}
        <div className="bg-[#f0eadf] h-[665px] relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start justify-center p-[50px] relative size-full">
              <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0">
                <div className="font-['Inter',sans-serif] font-semibold leading-[60px] not-italic relative shrink-0 text-[#3f3f3f] text-[56px] w-[1103px] whitespace-pre-wrap">
                  <p className="mb-0">{`Accommodation Solutions `}</p>
                  <p>
                    <span>{`for International `}</span>
                    <span className="text-[#c6a56b]">Medical</span>
                    <span>{` `}</span>
                    <span className="text-[#c6a56b]">Congresses</span>
                  </p>
                </div>
                {/* Search interface */}
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  {/* Search input */}
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex h-full items-center relative shrink-0">
                      <div className="bg-white h-full relative rounded-[8px] shrink-0">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
                            <SearchIcon />
                            <p className="font-['Inter',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">Search congress (e.g. ESC, EHA, ESMO, city or specialty)</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                    </div>
                  </div>
                  {/* Filters */}
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
                      {['Specialty', 'Year', 'Any Status'].map((label) => (
                        <div key={label} className="bg-white h-full relative rounded-[8px] shrink-0">
                          <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                              <p className="font-['Inter',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">{label}</p>
                              <DropdownIcon />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Search button */}
                  <Link to="/congresses" className="bg-[#c6a56b] content-stretch drop-shadow-[0px_2px_8px_rgba(198,165,107,0.35)] flex gap-[10px] items-center px-[24px] py-[12px] relative rounded-[10px] shrink-0 hover:bg-[#b8924a] transition-colors">
                    <p className="font-['Inter',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Search Congresses</p>
                    <ArrowIcon />
                  </Link>
                </div>
                <div className="font-['Inter',sans-serif] font-normal leading-[29.75px] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[17px] w-[min-content] whitespace-pre-wrap">
                  <p className="mb-0">{`Secure hotel availability for major medical congresses across Europe for agencies `}</p>
                  <p>and pharmaceutical clients working under pressure and limited supply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services section */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start p-[50px] relative size-full">
            <div className="content-stretch flex flex-col gap-[50px] items-start justify-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[1340px]">
                <div className="bg-[rgba(198,165,107,0.08)] h-[25.59px] relative rounded-[6px] shrink-0 w-[120.269px]">
                  <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <p className="absolute font-['Inter',sans-serif] font-bold leading-[16.5px] left-[12.55px] not-italic text-[#8a6930] text-[11px] top-[4.66px] tracking-[0.88px] uppercase whitespace-nowrap">How We Work</p>
                </div>
                <p className="font-['Inter',sans-serif] font-extrabold leading-[44.8px] not-italic relative shrink-0 text-[#3f3f3f] text-[40px] whitespace-nowrap">Three ways to work with MICE MAKER</p>
              </div>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                <ServiceCard
                  title="Full Service Booking"
                  description="We manage the entire process. \nOne point of contact from start to finish."
                  items={["Full coordination", "Ongoing support", "Complete handling"]}
                />
                <ServiceCard
                  title="Transparent Sourcing Model"
                  description="You stay in control. \nWe handle sourcing and negotiation."
                  items={["Direct contracts with hotels", "Full rate & VAT transparency", "Fixed, transparent fee structure"]}
                />
                <ServiceCard
                  title="Individual Solutions"
                  description="Not a standard setup? \nBuilt around your project."
                  items={["Flexible setup", "Tailored scope", "No standard solution"]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Congresses section */}
        <div className="bg-[#f8f7f4] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full py-[50px]">
            <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full px-[50px]">
              <p className="font-['Inter',sans-serif] font-extrabold leading-[42.56px] relative shrink-0 text-[#3f3f3f] text-[38px] whitespace-nowrap">Major Medical Congresses across Europe</p>
              <p className="font-['Inter',sans-serif] font-normal leading-[23.1px] relative shrink-0 text-[#6b6b6b] text-[14px] w-[441px]">Selected major medical congresses across Europe</p>
            </div>
            <div className="relative w-full overflow-hidden">
              <style>{`
                @keyframes mmCarouselScroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .mm-carousel-track {
                  animation: mmCarouselScroll 30s linear infinite;
                }
              `}</style>
              <div className="mm-carousel-track flex" style={{ width: "max-content" }}>
                {/* First set */}
                <CongressCard
                  title="European Society of Clinical Microbiology \nand Infectious Diseases"
                  location="Munich, Germany"
                  dateRange="17–21 April 2026"
                  imgSrc={imgEscmid}
                />
                <CongressCard
                  title="European Association for the Study of Diabetes"
                  location="Hamburg, Germany"
                  dateRange="28 September – 2 October 2026"
                  imgSrc={imgEasd}
                />
                <CongressCard
                  title="European Hematology Association Congress"
                  location="Milan, Italy"
                  dateRange="11–14 June 2026"
                  imgSrc={imgEha}
                />
                <CongressCard
                  title="European Society for \nMedical Oncology Congress"
                  location="Prague, Czech Republic"
                  dateRange="23–27 October 2026"
                  imgSrc={imgEsmo}
                />
                <CongressCard
                  title="European Society of Cardiology Congress"
                  location="London, United Kingdom"
                  dateRange="29 August – 1 September 2026"
                  imgSrc={imgEsc}
                />
                {/* Duplicate set for seamless loop */}
                <CongressCard
                  title="European Society of Clinical Microbiology \nand Infectious Diseases"
                  location="Munich, Germany"
                  dateRange="17–21 April 2026"
                  imgSrc={imgEscmid}
                />
                <CongressCard
                  title="European Association for the Study of Diabetes"
                  location="Hamburg, Germany"
                  dateRange="28 September – 2 October 2026"
                  imgSrc={imgEasd}
                />
                <CongressCard
                  title="European Hematology Association Congress"
                  location="Milan, Italy"
                  dateRange="11–14 June 2026"
                  imgSrc={imgEha}
                />
                <CongressCard
                  title="European Society for \nMedical Oncology Congress"
                  location="Prague, Czech Republic"
                  dateRange="23–27 October 2026"
                  imgSrc={imgEsmo}
                />
                <CongressCard
                  title="European Society of Cardiology Congress"
                  location="London, United Kingdom"
                  dateRange="29 August – 1 September 2026"
                  imgSrc={imgEsc}
                />
              </div>
            </div>
            {/* Explore all congresses button */}
            <Link to="/congresses" className="bg-[#c6a56b] content-stretch drop-shadow-[0px_2px_8px_rgba(198,165,107,0.35)] flex gap-[10px] items-center px-[24px] py-[12px] relative rounded-[10px] shrink-0 hover:bg-[#b8924a] transition-colors">
              <p className="font-['Inter',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Explore all congresses</p>
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}