import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/KongressDetailseiteDraft-1/svg-2g8ezt0tpo";
import { getCongressById, AvailabilityStatus } from "../data/congresses";

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d="M3.125 7.5H11.875" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 3.125L11.875 7.5L7.5 11.875" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function ArrowIconDark() {
  return (
    <div className="relative shrink-0 size-[13.995px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d="M2.91637 6.99754H11.0788" stroke="#3F3F3F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          <path d="M7.49756 2.91638L11.0789 6.49776L7.49756 10.079" stroke="#3F3F3F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
        </g>
      </svg>
    </div>
  );
}

function LocationIconMed() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p32274680} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p2d59bff0} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
      </svg>
    </div>
  );
}

function CalendarIconMed() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M8 2V6" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M16 2V6" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d={svgPaths.p32f12c00} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
          <path d="M3 10H21" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999711" />
        </g>
      </svg>
    </div>
  );
}

function DistanceIcon() {
  return (
    <div className="relative shrink-0 size-[10.998px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9983 10.9983">
        <g clipPath="url(#clip_dist)">
          <path d={svgPaths.p2c273d70} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916522" />
        </g>
        <defs>
          <clipPath id="clip_dist">
            <rect fill="white" height="10.9983" width="10.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[10.998px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9983 10.9983">
        <g clipPath="url(#clip_star)">
          <path d={svgPaths.pa447900} fill="#C6A56B" stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916522" />
        </g>
        <defs>
          <clipPath id="clip_star">
            <rect fill="white" height="10.9983" width="10.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvailabilityBadgeLarge({ status }: { status: AvailabilityStatus }) {
  if (status === 'rooms-available') {
    return (
      <div className="bg-[#f0fdf4] h-[33.099px] relative rounded-[10px] shrink-0 w-[142.995px]">
        <div aria-hidden="true" className="absolute border-[#bbf7d0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="absolute bg-[#16a34a] left-[14.55px] rounded-[3.997px] size-[7.995px] top-[12.55px]" />
        <div className="absolute h-[17.995px] left-[29.54px] top-[7.55px]">
          <p className="absolute font-['Inter',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#14532d] text-[12px] top-[0.67px] tracking-[0.24px] whitespace-nowrap">Rooms Available</p>
        </div>
      </div>
    );
  }
  if (status === 'limited-availability') {
    return (
      <div className="bg-[#fdf8f0] h-[33.099px] relative rounded-[10px] shrink-0 w-[160px]">
        <div aria-hidden="true" className="absolute border-[#e8d5b3] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="absolute bg-[#c6a56b] left-[14.55px] rounded-[3.997px] size-[7.995px] top-[12.55px]" />
        <div className="absolute h-[17.995px] left-[29.54px] top-[7.55px]">
          <p className="absolute font-['Inter',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#78501a] text-[12px] top-[0.67px] tracking-[0.24px] whitespace-nowrap">Limited Availability</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#f5f3ef] h-[33.099px] relative rounded-[10px] shrink-0 w-[140px]">
      <div aria-hidden="true" className="absolute border-[#ddd8cf] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="absolute bg-[#8c8880] left-[14.55px] rounded-[3.997px] size-[7.995px] top-[12.55px]" />
      <div className="absolute h-[17.995px] left-[29.54px] top-[7.55px]">
        <p className="absolute font-['Inter',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#3d3a35] text-[12px] top-[0.67px] tracking-[0.24px] whitespace-nowrap">Request Rooms</p>
      </div>
    </div>
  );
}

function HotelAvailabilityBadgeSmall({ status }: { status: AvailabilityStatus }) {
  if (status === 'rooms-available') {
    return (
      <div className="bg-[#f0fdf4] h-[22.101px] relative rounded-[6px] shrink-0 w-fit px-[8px] min-w-[110px]">
        <div aria-hidden="true" className="absolute border-[#bbf7d0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex items-center gap-[7px] h-full">
          <div className="bg-[#16a34a] rounded-[2.999px] size-[5.998px] flex-shrink-0" />
          <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#14532d] text-[10px] tracking-[0.2px] whitespace-nowrap">Rooms Available</p>
        </div>
      </div>
    );
  }
  if (status === 'limited-availability') {
    return (
      <div className="bg-[#fdf8f0] h-[22.101px] relative rounded-[6px] shrink-0 w-fit px-[8px] min-w-[122px]">
        <div aria-hidden="true" className="absolute border-[#e8d5b3] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex items-center gap-[7px] h-full">
          <div className="bg-[#c6a56b] rounded-[2.999px] size-[5.998px] flex-shrink-0" />
          <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#78501a] text-[10px] tracking-[0.2px] whitespace-nowrap">Limited Availability</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#f5f3ef] h-[22.101px] relative rounded-[6px] shrink-0 w-fit px-[8px] min-w-[110px]">
      <div aria-hidden="true" className="absolute border-[#ddd8cf] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex items-center gap-[7px] h-full">
        <div className="bg-[#8c8880] rounded-[2.999px] size-[5.998px] flex-shrink-0" />
        <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#3d3a35] text-[10px] tracking-[0.2px] whitespace-nowrap">Request Rooms</p>
      </div>
    </div>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col gap-[5.998px] items-start relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] font-semibold leading-[18px] not-italic text-[12px] tracking-[0.12px] whitespace-nowrap">
        <span className="text-[#3f3f3f]">{label}</span>
        {required && <span className="text-[#c6a56b]">*</span>}
      </p>
      {children}
    </div>
  );
}

function FormInput({ placeholder, value, onChange, type = 'text' }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-white h-[44.097px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[11px] relative size-full">
          <input
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className="font-['Inter',sans-serif] font-normal text-[14px] text-[#1a1a1a] bg-transparent outline-none w-full placeholder-[rgba(26,26,26,0.5)]"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function CongressDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const congress = getCongressById(id || '');

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    rooms: '',
    preferredLocation: '',
    hotelType: '',
    additionalNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!congress) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <Navigation />
        <div className="flex items-center justify-center flex-1 flex-col gap-[16px]">
          <p className="font-['Inter',sans-serif] font-bold text-[24px] text-[#3f3f3f]">Congress not found</p>
          <Link to="/congresses" className="font-['Inter',sans-serif] text-[14px] text-[#c6a56b] font-semibold">← Back to all congresses</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative min-h-screen w-full" data-name="Kongress Detailseite Draft">
      <Navigation currentPage="congresses" />
      <div className="w-full">
        {/* Hero */}
        <div className="bg-[#f0eadf] relative shrink-0 w-full" data-name="Section">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start px-[50px] py-[100px] relative size-full">
              <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-[722px]">
                <p className="font-['Inter',sans-serif] font-bold leading-[60px] not-italic relative shrink-0 text-[#3f3f3f] text-[56px] w-full">{congress.name}</p>
                <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
                  <AvailabilityBadgeLarge status={congress.availability} />
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="relative shrink-0">
                      <div className="content-stretch flex gap-[7.995px] items-center relative size-full">
                        <LocationIconMed />
                        <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b6b] text-[17px] whitespace-nowrap">{congress.location}</p>
                      </div>
                    </div>
                    <div className="relative shrink-0">
                      <div className="content-stretch flex gap-[7.995px] items-center relative size-full">
                        <CalendarIconMed />
                        <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b6b] text-[17px] whitespace-nowrap">{congress.dateRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative vector */}
              <div className="-translate-y-1/2 absolute h-[399px] left-[849px] top-[calc(50%-0.05px)] w-[358px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 399">
                  <path d={svgPaths.pdf41740} stroke="url(#paint0_linear_detail)" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_detail" x1="346.067" x2="8.1889" y1="35.3951" y2="382.854">
                      <stop stopColor="#C6A56B" />
                      <stop offset="1" stopColor="#C6A56B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="px-[50px] py-[50px] flex gap-[40px] items-start">
          {/* Left: description + hotels */}
          <div className="flex-[1_0_0] min-w-px flex flex-col gap-[30px]">
            {/* Description */}
            <div className="bg-white drop-shadow-[0px_2px_5px_rgba(26,26,26,0.04)] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#c6a56b] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
              <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
                <p className="flex-[1_0_0] font-['Inter',sans-serif] font-normal leading-[27.75px] min-w-px not-italic relative text-[#3f3f3f] text-[15px]">{congress.description}</p>
              </div>
            </div>

            {/* Hotel Options */}
            <div className="flex flex-col gap-[16px]">
              <p className="font-['Inter',sans-serif] font-bold leading-[30px] not-italic text-[#3f3f3f] text-[20px] tracking-[-0.3px] whitespace-nowrap">Hotel Options</p>
              {congress.hotels.map((hotel, i) => (
                <div key={i} className="bg-white drop-shadow-[0px_1px_3px_rgba(26,26,26,0.04)] h-[85.2px] relative rounded-[12px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col items-start pb-[0.556px] pt-[18.55px] px-[20.556px] relative size-full">
                    <div className="h-[48.099px] relative shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between relative size-full">
                          {/* Hotel info */}
                          <div className="h-[48.099px] relative shrink-0 flex flex-col gap-[5.998px] justify-start">
                            <div className="content-stretch flex gap-[10px] h-[22.5px] items-center relative shrink-0 w-full">
                              <p className="font-['Inter',sans-serif] font-semibold leading-[22.5px] not-italic text-[#3f3f3f] text-[15px] tracking-[-0.15px] whitespace-nowrap">{hotel.name}</p>
                              <div className="h-[10.998px] relative shrink-0 flex gap-[1.997px] items-start">
                                {Array.from({ length: hotel.stars }).map((_, s) => <StarIcon key={s} />)}
                              </div>
                            </div>
                            <div className="h-[19.601px] relative shrink-0 w-full flex items-center gap-[8px]">
                              <div className="flex gap-[3.993px] items-center">
                                <DistanceIcon />
                                <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic text-[#6b6b6b] text-[12px] whitespace-nowrap">{hotel.distanceKm} km from venue</p>
                              </div>
                              <div className="bg-[#f8f7f4] border-[#e8e4dc] border-[0.556px] border-solid h-[19.601px] rounded-[6px] px-[7.99px] flex items-center">
                                <p className="font-['Inter',sans-serif] font-semibold leading-[16.5px] not-italic text-[#6b6b6b] text-[11px] whitespace-nowrap">{hotel.category}</p>
                              </div>
                              <p className="font-['Inter',sans-serif] font-bold leading-[19.5px] not-italic text-[#3f3f3f] text-[13px] tracking-[-0.13px] whitespace-nowrap">from € {hotel.priceFrom} / night</p>
                            </div>
                          </div>
                          {/* Availability badge */}
                          <div className="h-[25.833px] relative shrink-0 flex flex-col items-start pt-[3.733px]">
                            <HotelAvailabilityBadgeSmall status={hotel.availability} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Other options CTA */}
              <div className="bg-white drop-shadow-[0px_1px_3px_rgba(26,26,26,0.04)] relative rounded-[12px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
                  <div>
                    <p className="font-['Inter',sans-serif] font-bold leading-[22px] not-italic text-[#3f3f3f] text-[15px] whitespace-nowrap">Looking for different options?</p>
                    <p className="font-['Inter',sans-serif] font-normal leading-[20px] not-italic text-[#6b6b6b] text-[12px]">Different budget, hotel type, location range, or room count.</p>
                  </div>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f8f7f4] transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <p className="font-['Inter',sans-serif] font-semibold leading-[19.5px] not-italic text-[#3f3f3f] text-[13px] whitespace-nowrap">Get Other Options</p>
                    <ArrowIconDark />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: request form */}
          <div className="w-[497px] flex-shrink-0">
            <div className="bg-white relative rounded-[12px]">
              <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_24px_0px_rgba(26,26,26,0.06)]" />
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
                <p className="font-['Inter',sans-serif] font-bold leading-[30px] not-italic text-[#3f3f3f] text-[20px] tracking-[-0.3px] whitespace-nowrap">Submit a Request</p>
                {submitted ? (
                  <div className="flex flex-col gap-[12px] items-start w-full py-[24px]">
                    <p className="font-['Inter',sans-serif] font-bold text-[18px] text-[#3f3f3f]">Request submitted!</p>
                    <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#6b6b6b]">We'll be in touch shortly about availability for {congress.name}.</p>
                    <button onClick={() => setSubmitted(false)} className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#c6a56b] cursor-pointer">Submit another request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <FormField label="Full Name" required>
                      <FormInput placeholder="Jane Smith" value={form.fullName} onChange={v => setForm(f => ({ ...f, fullName: v }))} />
                    </FormField>
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <div className="flex-1 min-w-0">
                        <FormField label="Company" required>
                          <FormInput placeholder="Agency / Pharma Co." value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} />
                        </FormField>
                      </div>
                      <div className="flex-1 min-w-0">
                        <FormField label="Email" required>
                          <FormInput placeholder="you@company.com" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} />
                        </FormField>
                      </div>
                    </div>
                    <FormField label="Number of Rooms" required>
                      <FormInput placeholder="10" type="number" value={form.rooms} onChange={v => setForm(f => ({ ...f, rooms: v }))} />
                    </FormField>
                    <FormField label="Preferred Location">
                      <FormInput placeholder="" value={form.preferredLocation} onChange={v => setForm(f => ({ ...f, preferredLocation: v }))} />
                    </FormField>
                    <FormField label="Hotel Type">
                      <FormInput placeholder="" value={form.hotelType} onChange={v => setForm(f => ({ ...f, hotelType: v }))} />
                    </FormField>
                    <FormField label="Additional Notes">
                      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <textarea
                            value={form.additionalNotes}
                            onChange={e => setForm(f => ({ ...f, additionalNotes: e.target.value }))}
                            placeholder="Any specific requirements..."
                            className="font-['Inter',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-[#1a1a1a] bg-transparent outline-none w-full h-[80px] resize-none placeholder-[rgba(26,26,26,0.5)] px-[14px] py-[11px]"
                          />
                        </div>
                        <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                    </FormField>
                    <div className="relative shrink-0 w-full">
                      <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic text-[#9ca3af] text-[11px] mb-0">Rooms are offered on a first-come, first-served basis.</p>
                      <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic text-[#9ca3af] text-[11px]">All hotel arrangements are subject to availability and individual agreements.</p>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic text-[#9ca3af] text-[11px]">Data processed per our Privacy Policy. Used only to handle your accommodation request.</p>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#c6a56b] content-stretch drop-shadow-[0px_2px_8px_rgba(198,165,107,0.35)] flex gap-[10px] items-center px-[24px] py-[12px] relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#b8924a] transition-colors"
                    >
                      <p className="font-['Inter',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Submit request </p>
                      <ArrowIcon />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}