import { Link, useNavigate } from "react-router";
import svgPaths from "../../imports/AboutDraft-1/svg-knq4q6scw2";

interface NavigationProps {
  currentPage?: 'home' | 'congresses' | 'about' | 'contact';
}

function NavLogo() {
  return (
    <div className="h-[52px] relative shrink-0 w-[338px]" data-name="mice-maker-logo 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 338 52">
        <g clipPath="url(#clip0_nav_logo)" id="mice-maker-logo 1">
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
          <clipPath id="clip0_nav_logo">
            <rect fill="white" height="52" width="338" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function Navigation({ currentPage }: NavigationProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[80px] relative shrink-0 w-full sticky top-0 z-50" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(232,228,220,0.55)] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[50px] relative size-full">
          <Link to="/" className="cursor-pointer">
            <NavLogo />
          </Link>
          <div className="content-stretch flex gap-[3.993px] h-[31.502px] items-center relative shrink-0 w-[360.469px]" data-name="Container">
            <Link
              to="/"
              className={`h-[31.502px] relative rounded-[8px] shrink-0 w-[64.991px] flex items-center cursor-pointer ${currentPage === 'home' ? 'bg-[#f8f7f4]' : ''}`}
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className={`absolute leading-[19.5px] left-[13.99px] not-italic text-[13px] top-[6.66px] whitespace-nowrap font-['Inter',sans-serif] ${currentPage === 'home' ? 'font-semibold text-[#3f3f3f]' : 'font-medium text-[#6b6b6b]'}`}>Home</p>
              </div>
            </Link>
            <Link
              to="/congresses"
              className={`flex-[1_0_0] h-[31.502px] min-w-px relative rounded-[8px] flex items-center cursor-pointer ${currentPage === 'congresses' ? 'bg-[#f8f7f4]' : ''}`}
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className={`absolute leading-[19.5px] left-[13.99px] not-italic text-[13px] top-[6.66px] whitespace-nowrap font-['Inter',sans-serif] ${currentPage === 'congresses' ? 'font-semibold text-[#3f3f3f]' : 'font-medium text-[#6b6b6b]'}`}>Major Congresses</p>
              </div>
            </Link>
            <Link
              to="/about"
              className={`h-[31.502px] relative rounded-[8px] shrink-0 w-[65.339px] flex items-center cursor-pointer ${currentPage === 'about' ? 'bg-[#f8f7f4]' : ''}`}
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className={`absolute leading-[19.5px] left-[13.99px] not-italic text-[13px] top-[6.66px] whitespace-nowrap font-['Inter',sans-serif] ${currentPage === 'about' ? 'font-semibold text-[#3f3f3f]' : 'font-medium text-[#6b6b6b]'}`}>About</p>
              </div>
            </Link>
            <Link
              to="/contact"
              className={`h-[31.502px] relative rounded-[8px] shrink-0 w-[76.988px] flex items-center cursor-pointer ${currentPage === 'contact' ? 'bg-[#f8f7f4]' : ''}`}
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className={`absolute leading-[19.5px] left-[13.99px] not-italic text-[13px] top-[6.66px] whitespace-nowrap font-['Inter',sans-serif] ${currentPage === 'contact' ? 'font-semibold text-[#3f3f3f]' : 'font-medium text-[#6b6b6b]'}`}>Contact</p>
              </div>
            </Link>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#c6a56b] drop-shadow-[0px_1px_4px_rgba(198,165,107,0.3)] h-[37.491px] relative rounded-[8px] shrink-0 w-[139.453px] cursor-pointer hover:bg-[#b8924a] transition-colors"
            data-name="Link"
          >
            <p className="absolute font-['Inter',sans-serif] font-bold leading-[19.5px] left-[20px] not-italic text-[13px] text-white top-[9.66px] tracking-[0.13px] whitespace-nowrap">Request Rooms</p>
          </button>
        </div>
      </div>
    </div>
  );
}
