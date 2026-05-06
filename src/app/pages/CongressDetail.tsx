import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Link, useParams } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { getCongressById } from "../data/congresses";

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M18 10C18 14.5 12 21 12 21C12 21 6 14.5 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10Z" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M8 2V6" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 2V6" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 8H3" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function DistanceIcon() {
  return (
    <div className="relative shrink-0 size-[10.998px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <path d="M5.5 1.375L8.938 3.313V7.688L5.5 9.625L2.063 7.688V3.313L5.5 1.375Z" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.92" />
        <path d="M5.5 5.5L8.938 3.313" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.92" />
        <path d="M5.5 5.5V9.625" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.92" />
        <path d="M5.5 5.5L2.063 3.313" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.92" />
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[10.998px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <path
          d="M5.5 1.146L6.837 3.856L9.829 4.291L7.664 6.401L8.175 9.381L5.5 7.974L2.825 9.381L3.336 6.401L1.171 4.291L4.163 3.856L5.5 1.146Z"
          fill="#C6A56B"
          stroke="#C6A56B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.92"
        />
      </svg>
    </div>
  );
}

function ArrowIcon({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "#8A6930" : "#FFFFFF";

  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d="M3.125 7.5H11.875" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 3.125L11.875 7.5L7.5 11.875" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-[5px]">
      <p className="font-['Inter',sans-serif] text-[11px] font-semibold leading-[16.5px] tracking-[0.11px] text-[#3f3f3f]">
        {label}
        {required ? <span className="text-[#c6a56b]">*</span> : null}
      </p>
      {children}
    </div>
  );
}

function FormInput({
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-[40.599px] w-full rounded-[8px] border-[0.556px] border-[#e8e4dc] bg-[#f8f7f4] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] font-normal text-[#1a1a1a] outline-none placeholder:text-[rgba(26,26,26,0.5)]"
    />
  );
}

export default function CongressDetail() {
  const { id } = useParams<{ id: string }>();
  const congress = getCongressById(id || "");
  const requestFormRef = useRef<HTMLDivElement | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    rooms: "",
    preferredLocation: "",
    hotelType: "",
    additionalNotes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!congress) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navigation />
        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
          <p className="font-['Inter',sans-serif] text-[24px] font-bold text-[#3f3f3f]">Congress not found</p>
          <Link
            to="/congresses"
            className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#c6a56b]"
          >
            ← Back to all congresses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleRequestOptions = () => {
    setSubmitted(false);
    setForm((current) => ({
      ...current,
      additionalNotes:
        current.additionalNotes ||
        `Please send additional hotel options for ${congress.name}.`,
    }));

    requestFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstInput = requestFormRef.current?.querySelector("input, textarea") as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;
    firstInput?.focus();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="congresses" />

      <main>
        <section className="bg-[#f0eadf]">
          <div className="mx-auto w-full max-w-[1440px] px-[32px] py-[72px] md:px-[50px] md:py-[100px]">
            <div className="max-w-[1080px]">
              <h1 className="font-['Inter',sans-serif] text-[44px] font-semibold leading-[1.07] text-[#3f3f3f] md:text-[56px] md:leading-[60px]">
                {congress.name}
              </h1>
              <div className="mt-[26px] flex flex-wrap items-center gap-[12px]">
                <div className="flex items-center gap-[7.995px]">
                  <LocationIcon />
                  <p className="font-['Inter',sans-serif] text-[17px] font-normal leading-[18px] text-[#6b6b6b]">
                    {congress.location}
                  </p>
                </div>
                <div className="flex items-center gap-[7.995px]">
                  <CalendarIcon />
                  <p className="font-['Inter',sans-serif] text-[17px] font-normal leading-[18px] text-[#6b6b6b]">
                    {congress.dateRange}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f7f4]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[32px] px-[32px] py-[32px] md:px-[50px] md:py-[50px] xl:flex-row xl:gap-[42px]">
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-[24px]">
                <div className="rounded-tr-[12px] rounded-br-[12px] border-t-[0.556px] border-r-[0.556px] border-b-[0.556px] border-l-[3.889px] border-[#c6a56b] bg-white px-[24px] py-[12px] shadow-[0px_2px_5px_rgba(26,26,26,0.04)]">
                  <p className="font-['Inter',sans-serif] text-[15px] font-normal leading-[27.75px] text-[#3f3f3f]">
                    {congress.description}
                  </p>
                </div>

                <div className="flex flex-col gap-[16px]">
                  <h2 className="font-['Inter',sans-serif] text-[20px] font-bold leading-[30px] tracking-[-0.3px] text-[#3f3f3f]">
                    Hotel Options
                  </h2>

                  <div className="flex flex-col gap-[11.997px]">
                    {congress.hotels.map((hotel) => (
                      <div
                        key={hotel.name}
                        className="rounded-[12px] border-[0.556px] border-[#e8e4dc] bg-white px-[20.556px] pt-[18.55px] pb-[18px] shadow-[0px_1px_3px_rgba(26,26,26,0.04)]"
                      >
                        <div className="flex min-h-[48px] flex-col justify-center gap-[5.998px]">
                          <p className="font-['Inter',sans-serif] text-[15px] font-semibold leading-[22.5px] tracking-[-0.15px] text-[#3f3f3f]">
                            {hotel.name}
                          </p>
                          <div className="flex flex-wrap items-center gap-[12px]">
                            <div className="flex gap-[1.997px]">
                              {Array.from({ length: hotel.stars }).map((_, index) => (
                                <StarIcon key={`${hotel.name}-${index}`} />
                              ))}
                            </div>
                            <div className="flex items-center gap-[3.993px]">
                              <DistanceIcon />
                              <p className="font-['Inter',sans-serif] text-[12px] font-normal leading-[18px] text-[#6b6b6b]">
                                {hotel.distanceKm} km from venue
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-[16px] rounded-[12px] border-[0.556px] border-[rgba(198,165,107,0.28)] bg-[rgba(198,165,107,0.08)] p-[20.556px]">
                  <p className="font-['Inter',sans-serif] text-[15px] font-bold leading-[22.5px] tracking-[-0.15px] text-[#3f3f3f]">
                    Need other hotel options?
                  </p>
                  <button
                    type="button"
                    onClick={handleRequestOptions}
                    className="flex shrink-0 items-center gap-[8px] rounded-[8px] border-[0.556px] border-[rgba(198,165,107,0.28)] bg-white px-[20px] py-[10px] text-[13px] font-semibold leading-[19.5px] text-[#8a6930] shadow-[0px_1px_3px_rgba(198,165,107,0.12)] transition-colors hover:bg-[#fbf8f2]"
                  >
                    <span>Request Options</span>
                    <ArrowIcon dark />
                  </button>
                </div>
              </div>
            </div>

            <div ref={requestFormRef} className="w-full xl:w-[516px] xl:flex-none">
              <div className="overflow-hidden rounded-[16px] border-[0.556px] border-[#e8e4dc] bg-white shadow-[0px_6px_28px_0px_rgba(26,26,26,0.08)]">
                <div className="px-[23.993px] py-[16px]">
                  <p className="font-['Inter',sans-serif] text-[14px] font-bold leading-[21px] tracking-[-0.14px] text-[#3f3f3f]">
                    Submit a Request
                  </p>
                </div>

                <div className="px-[24px] pb-[24px]">
                  {submitted ? (
                    <div className="flex flex-col gap-[12px] py-[12px]">
                      <p className="font-['Inter',sans-serif] text-[18px] font-bold text-[#3f3f3f]">
                        Request submitted
                      </p>
                      <p className="font-['Inter',sans-serif] text-[14px] font-normal text-[#6b6b6b]">
                        We&apos;ll be in touch shortly about accommodation for {congress.name}.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="w-fit font-['Inter',sans-serif] text-[13px] font-semibold text-[#c6a56b]"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
                      <FormField label="Full Name" required>
                        <FormInput
                          placeholder="Jane Smith"
                          value={form.fullName}
                          onChange={(value) => setForm((current) => ({ ...current, fullName: value }))}
                        />
                      </FormField>

                      <div className="flex flex-col gap-[17px] md:flex-row">
                        <div className="flex-1">
                          <FormField label="Company" required>
                            <FormInput
                              placeholder="Agency / Pharma Co."
                              value={form.company}
                              onChange={(value) => setForm((current) => ({ ...current, company: value }))}
                            />
                          </FormField>
                        </div>
                        <div className="flex-1">
                          <FormField label="Email" required>
                            <FormInput
                              placeholder="you@company.com"
                              type="email"
                              value={form.email}
                              onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                            />
                          </FormField>
                        </div>
                      </div>

                      <FormField label="Number of Rooms" required>
                        <FormInput
                          placeholder="10"
                          type="number"
                          value={form.rooms}
                          onChange={(value) => setForm((current) => ({ ...current, rooms: value }))}
                        />
                      </FormField>

                      <FormField label="Preferred Location">
                        <FormInput
                          placeholder=""
                          value={form.preferredLocation}
                          onChange={(value) =>
                            setForm((current) => ({ ...current, preferredLocation: value }))
                          }
                        />
                      </FormField>

                      <FormField label="Hotel Type">
                        <FormInput
                          placeholder=""
                          value={form.hotelType}
                          onChange={(value) => setForm((current) => ({ ...current, hotelType: value }))}
                        />
                      </FormField>

                      <FormField label="Additional Notes">
                        <textarea
                          value={form.additionalNotes}
                          onChange={(event) =>
                            setForm((current) => ({ ...current, additionalNotes: event.target.value }))
                          }
                          placeholder="Any specific requirements..."
                          className="h-[79.575px] w-full resize-none rounded-[8px] border-[0.556px] border-[#e8e4dc] bg-[#f8f7f4] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] font-normal leading-[19.5px] text-[#1a1a1a] outline-none placeholder:text-[rgba(26,26,26,0.5)]"
                        />
                      </FormField>

                      <div className="font-['Inter',sans-serif] text-[10px] font-normal leading-[16.5px] text-[#9ca3af]">
                        <p>Rooms are offered on a first-come, first-served basis.</p>
                        <p>All hotel arrangements are subject to availability and individual agreements.</p>
                      </div>

                      <p className="font-['Inter',sans-serif] text-[10px] font-normal leading-[16.5px] text-[#9ca3af]">
                        Data processed per our Privacy Policy. Used only to handle your accommodation request.
                      </p>

                      <button
                        type="submit"
                        className="flex w-fit items-center gap-[10px] rounded-[10px] bg-[#c6a56b] px-[24px] py-[12px] font-['Inter',sans-serif] text-[14px] font-bold leading-[21px] text-white shadow-[0px_2px_8px_rgba(198,165,107,0.35)] transition-colors hover:bg-[#b8924a]"
                      >
                        <span>Submit request</span>
                        <ArrowIcon />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
