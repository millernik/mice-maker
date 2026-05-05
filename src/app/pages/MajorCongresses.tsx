import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/MajorCongressesDraft-1/svg-i2jf36z96n";
import { congresses, Congress, AvailabilityStatus } from "../data/congresses";

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

function ArrowRightGold() {
  return (
    <div className="relative shrink-0 size-[12.995px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9948 12.9948">
        <g>
          <path d="M2.70725 6.4974H10.2875" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0829" />
          <path d={svgPaths.p31223a00} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0829" />
        </g>
      </svg>
    </div>
  );
}

function LocationIconSmall() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip_loc_mc)">
          <path d={svgPaths.p9931180} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p3f162900} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip_loc_mc">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CalendarIconSmall() {
  return (
    <div className="relative shrink-0 size-[11.997px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g clipPath="url(#clip_cal_mc)">
          <path d="M3.99884 0.999711V2.99913" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M7.99769 0.999711V2.99913" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p9d58900} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M1.49957 4.99855H10.497" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
        <defs>
          <clipPath id="clip_cal_mc">
            <rect fill="white" height="11.9965" width="11.9965" />
          </clipPath>
        </defs>
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

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <mask id="mask_chevron" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" height="14" x="0" y="0">
            <rect fill="#D9D9D9" height="14" width="14" />
          </mask>
          <g mask="url(#mask_chevron)">
            <path d={svgPaths.p29a29700} fill="#6B6B6B" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d="M13.125 2.5H8.75" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M6.25 2.5H1.875" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M13.125 7.5H7.5" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5 7.5H1.875" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M13.125 12.5H10" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 12.5H1.875" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.75 1.25V3.75" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5 6.25V8.75" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10 11.25V13.75" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AvailabilityBadge({ status }: { status: AvailabilityStatus }) {
  if (status === 'rooms-available') {
    return (
      <div className="bg-[#f0fdf4] rounded-[8px] shrink-0 w-fit relative">
        <div aria-hidden="true" className="absolute border-[#bbf7d0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex items-center gap-[6px] px-[10px] py-[6px]">
          <div className="bg-[#16a34a] rounded-[2.999px] size-[5.998px] shrink-0" />
          <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#14532d] text-[10px] whitespace-nowrap">Rooms Available</p>
        </div>
      </div>
    );
  }
  if (status === 'limited-availability') {
    return (
      <div className="bg-[#fdf8f0] rounded-[8px] shrink-0 w-fit relative">
        <div aria-hidden="true" className="absolute border-[#e8d5b3] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex items-center gap-[6px] px-[10px] py-[6px]">
          <div className="bg-[#c6a56b] rounded-[2.999px] size-[5.998px] shrink-0" />
          <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#78501a] text-[10px] whitespace-nowrap">Limited Availability</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#f5f3ef] rounded-[8px] shrink-0 w-fit relative">
      <div aria-hidden="true" className="absolute border-[#ddd8cf] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex items-center gap-[6px] px-[10px] py-[6px]">
        <div className="bg-[#8c8880] rounded-[2.999px] size-[5.998px] shrink-0" />
        <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#3d3a35] text-[10px] whitespace-nowrap">Request Rooms</p>
      </div>
    </div>
  );
}

function CongressCardWithHover({ congress }: { congress: Congress }) {
  return (
    <Link to={`/congresses/${congress.id}`} className="block">
      <CongressCardLarge congress={congress} />
    </Link>
  );
}

function CongressCardLarge({ congress }: { congress: Congress }) {
  return (
    <div className="bg-white h-[348.22px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-[0px_4px_20px_0px_rgba(26,26,26,0.12)] hover:scale-[1.02] transition-all duration-300" data-name="CongressCard">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
            {/* Top: badge + title */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col h-[28.837px] items-start pt-[0.729px] relative shrink-0 w-fit">
                <div className="w-fit min-w-[108px]">
                  <AvailabilityBadge status={congress.availability} />
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3f3f3f] text-[24px] w-full">{congress.name}</p>
              </div>
            </div>
            {/* Bottom: location + date + view details */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                <div className="h-[17.995px] relative shrink-0">
                  <div className="content-stretch flex gap-[7.995px] items-center relative size-full">
                    <LocationIconSmall />
                    <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">{congress.location}</p>
                  </div>
                </div>
                <div className="h-[17.995px] relative shrink-0">
                  <div className="content-stretch flex gap-[7.995px] items-center relative size-full">
                    <CalendarIconSmall />
                    <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">{congress.dateRange}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[32.543px] items-center justify-between pt-[14.556px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e8e4dc] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
                <p className="font-['Inter',sans-serif] font-semibold leading-[18px] not-italic text-[#c6a56b] text-[12px] whitespace-nowrap">View details</p>
                <ArrowRightGold />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

export default function MajorCongresses() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState<AvailabilityStatus | ''>('');
  const [cityFilter, setCityFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'city' | 'availability'>('date');

  // Initialize filters from URL parameters
  useEffect(() => {
    const query = searchParams.get('q');
    const location = searchParams.get('location');
    const month = searchParams.get('month');
    const status = searchParams.get('status');

    if (query) setSearchQuery(query);
    if (location) setCityFilter(location);

    if (status) {
      const statusMap: { [key: string]: AvailabilityStatus } = {
        'Rooms Available': 'rooms-available',
        'Limited Availability': 'limited-availability',
        'Request Rooms': 'request-rooms'
      };
      const mappedStatus = statusMap[status];
      if (mappedStatus) setAvailabilityFilter(mappedStatus);
    }
  }, [searchParams]);

  // Get unique cities and countries
  const cities = ['All Cities', ...Array.from(new Set(congresses.map(c => c.city)))];
  const countries = ['All Countries', ...Array.from(new Set(congresses.map(c => c.country)))];

  // Get month from URL params for filtering
  const monthFilter = searchParams.get('month');

  // Filter and sort congresses
  const filtered = congresses
    .filter(c => {
      if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !c.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (availabilityFilter && c.availability !== availabilityFilter) return false;
      if (cityFilter && cityFilter !== 'All Cities' && c.city !== cityFilter) return false;
      if (countryFilter && countryFilter !== 'All Countries' && c.country !== countryFilter) return false;

      // Month filtering - check if the dateRange contains the selected month
      if (monthFilter && monthFilter !== 'Any Month') {
        if (!c.dateRange.toLowerCase().includes(monthFilter.toLowerCase())) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'city') return a.city.localeCompare(b.city);
      if (sortBy === 'availability') {
        const order = { 'rooms-available': 0, 'limited-availability': 1, 'request-rooms': 2 };
        return order[a.availability] - order[b.availability];
      }
      // date sort - by dateRange string
      return a.dateRange.localeCompare(b.dateRange);
    });

  const countByAvailability = (status: AvailabilityStatus) => congresses.filter(c => c.availability === status).length;

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative min-h-screen w-full" data-name="Major Congresses Draft">
      <Navigation currentPage="congresses" />
      <div className="w-full">
        {/* Hero */}
        <div className="bg-[#f0eadf] relative shrink-0 w-full" data-name="Section">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start px-[50px] py-[100px] relative size-full">
              <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-[737px]">
                <p className="font-['Inter',sans-serif] font-bold leading-[60px] min-w-full not-italic relative shrink-0 text-[#3f3f3f] text-[56px] w-[min-content]">Major Medical Congresses across Europe </p>
                <p className="font-['Inter',sans-serif] font-normal leading-[29.75px] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[17px] w-[min-content]">High demand and limited availability make early planning essential. We provide access to secured hotel contingents across major congresses. </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-[#c6a56b] content-stretch drop-shadow-[0px_2px_8px_rgba(198,165,107,0.35)] flex gap-[10px] items-center px-[24px] py-[12px] relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#b8924a] transition-colors"
                >
                  <p className="font-['Inter',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Explore how it works</p>
                  <ArrowIcon />
                </button>
              </div>
              {/* Decorative vector */}
              <div className="-translate-y-1/2 absolute h-[432px] left-[902px] top-[calc(50%+5.5px)] w-[388px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 388 432">
                  <path d={svgPaths.p2e7f6e80} stroke="url(#paint0_linear_mc)" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_mc" x1="375.067" x2="9.25461" y1="38.3226" y2="414.887">
                      <stop stopColor="#C6A56B" />
                      <stop offset="1" stopColor="#C6A56B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main content: filter + cards */}
        <div className="px-[50px] py-[50px] flex gap-[30px] items-start">
          {/* Filter sidebar */}
          <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
                {/* Header */}
                <div className="content-stretch flex gap-[7.995px] h-[19.505px] items-center relative shrink-0 w-full">
                  <FilterIcon />
                  <p className="font-['Inter',sans-serif] font-bold leading-[19.5px] not-italic text-[#3f3f3f] text-[13px] whitespace-nowrap">Filters & Sort</p>
                </div>
                {/* Search */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex h-[45px] items-center relative shrink-0 w-full">
                    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[8px]">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
                          <SearchIcon />
                          <input
                            type="text"
                            placeholder="Search congresses…"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="font-['Inter',sans-serif] font-normal not-italic text-[13px] text-[#1a1a1a] bg-transparent outline-none w-full placeholder-[rgba(26,26,26,0.5)]"
                          />
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
                {/* Divider */}
                <div className="bg-[#e8e4dc] h-px relative shrink-0 w-full" />
                {/* Availability */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter',sans-serif] font-bold leading-[15px] not-italic text-[#6b6b6b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Availability</p>
                  <div className="content-stretch flex flex-col gap-[7.995px] items-start relative shrink-0 w-full">
                    {/* Rooms Available */}
                    {[
                      { status: 'rooms-available' as AvailabilityStatus, color: '#16a34a', label: 'Rooms Available' },
                      { status: 'limited-availability' as AvailabilityStatus, color: '#c6a56b', label: 'Limited Availability' },
                      { status: 'request-rooms' as AvailabilityStatus, color: '#8c8880', label: 'Request Rooms' },
                    ].map(item => (
                      <button
                        key={item.status}
                        onClick={() => setAvailabilityFilter(availabilityFilter === item.status ? '' : item.status)}
                        className={`bg-white h-[38.698px] relative rounded-[8px] shrink-0 w-full text-left cursor-pointer ${availabilityFilter === item.status ? 'ring-1 ring-[#c6a56b]' : ''}`}
                      >
                        <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[10px] items-center pl-[12.553px] pr-[12.552px] py-[9.556px] relative size-full">
                            <div className="rounded-[3.498px] shrink-0 size-[6.997px]" style={{ background: item.color }} />
                            <div className="flex-[132.839_0_0] h-[17.995px] min-w-px relative">
                              <p className="absolute font-['Inter',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#3f3f3f] text-[12px] top-[0.67px] whitespace-nowrap">{item.label}</p>
                            </div>
                            <div className="bg-[#f8f7f4] h-[19.601px] relative rounded-[10px] shrink-0 w-[21.962px]">
                              <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                              <p className="absolute font-['Inter',sans-serif] font-semibold leading-[16.5px] left-[7.55px] not-italic text-[#6b6b6b] text-[11px] top-[1.66px] whitespace-nowrap">{countByAvailability(item.status)}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Divider */}
                <div className="bg-[#e8e4dc] h-px relative shrink-0 w-full" />
                {/* City */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter',sans-serif] font-bold leading-[15px] not-italic text-[#6b6b6b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">City</p>
                  <div className="bg-white h-[36.606px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                        <ChevronDown />
                        <select
                          value={cityFilter || 'All Cities'}
                          onChange={e => setCityFilter(e.target.value === 'All Cities' ? '' : e.target.value)}
                          className="font-['Inter',sans-serif] font-normal not-italic text-[#6b6b6b] text-[13px] bg-transparent outline-none w-full cursor-pointer"
                        >
                          {cities.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Country */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter',sans-serif] font-bold leading-[15px] not-italic text-[#6b6b6b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Country</p>
                  <div className="bg-white h-[36.606px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
                        <ChevronDown />
                        <select
                          value={countryFilter || 'All Countries'}
                          onChange={e => setCountryFilter(e.target.value === 'All Countries' ? '' : e.target.value)}
                          className="font-['Inter',sans-serif] font-normal not-italic text-[#6b6b6b] text-[13px] bg-transparent outline-none w-full cursor-pointer"
                        >
                          {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Divider */}
                <div className="bg-[#e8e4dc] h-px relative shrink-0 w-full" />
                {/* Sort By */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter',sans-serif] font-bold leading-[15px] not-italic text-[#6b6b6b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Sort By</p>
                  <div className="content-stretch flex flex-col gap-[5.998px] items-start relative shrink-0 w-full">
                    <button
                      onClick={() => setSortBy('date')}
                      className={`relative rounded-[8px] shrink-0 w-full cursor-pointer ${sortBy === 'date' ? 'bg-[rgba(198,165,107,0.08)]' : 'bg-white'}`}
                    >
                      {sortBy === 'date' && <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[8px]" />}
                      {sortBy !== 'date' && <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />}
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between px-[13px] py-[9px] relative size-full">
                          <p className={`font-['Inter',sans-serif] font-${sortBy === 'date' ? 'semibold text-[#8a6930]' : 'normal text-[#3f3f3f]'} leading-[18px] not-italic text-[12px] whitespace-nowrap`}>Date (earliest first)</p>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => setSortBy('city')}
                      className={`h-[35.095px] relative rounded-[8px] shrink-0 w-full cursor-pointer ${sortBy === 'city' ? 'bg-[rgba(198,165,107,0.08)]' : 'bg-white'}`}
                    >
                      {sortBy !== 'city' && <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />}
                      {sortBy === 'city' && <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[8px]" />}
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pl-[12.553px] pr-[12.556px] py-[8.556px] relative size-full">
                          <p className={`font-['Inter',sans-serif] font-${sortBy === 'city' ? 'semibold text-[#8a6930]' : 'normal text-[#3f3f3f]'} leading-[18px] not-italic text-[12px] whitespace-nowrap`}>City (A → Z)</p>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => setSortBy('availability')}
                      className={`relative rounded-[8px] shrink-0 w-full cursor-pointer ${sortBy === 'availability' ? 'bg-[rgba(198,165,107,0.08)]' : 'bg-white'}`}
                    >
                      {sortBy !== 'availability' && <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />}
                      {sortBy === 'availability' && <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[8px]" />}
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pl-[12.553px] pr-[12.556px] py-[8.556px] relative size-full">
                          <p className={`font-['Inter',sans-serif] font-${sortBy === 'availability' ? 'semibold text-[#8a6930]' : 'normal text-[#3f3f3f]'} leading-[18px] not-italic text-[12px] whitespace-nowrap`}>Availability</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {/* Divider */}
                <div className="bg-[#e8e4dc] h-px relative shrink-0 w-full" />
                {/* Count */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[60px] relative size-full">
                      <p className="font-['Inter',sans-serif] not-italic relative shrink-0 text-[#3f3f3f] text-[0px] text-center whitespace-nowrap">
                        <span className="leading-[18px] text-[12px] font-bold">{filtered.length}</span>
                        <span className="font-['Inter',sans-serif] font-normal leading-[18px] text-[#6b6b6b] text-[12px]"> congresses listed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Congress grid */}
          <div className="flex-[3_0_0] min-w-px">
            {filtered.length === 0 ? (
              <div className="flex items-center justify-center h-[200px]">
                <p className="font-['Inter',sans-serif] text-[#6b6b6b] text-[14px]">No congresses match your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-[24px]">
                {filtered.map(congress => (
                  <CongressCardWithHover key={congress.id} congress={congress} />
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}