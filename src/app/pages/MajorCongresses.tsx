import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { congresses, Congress, AvailabilityStatus } from "../data/congresses";

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[13.993px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g>
          <path d="M6.4135 11.0809C8.9905 11.0809 11.0809 8.9905 11.0809 6.4135C11.0809 3.8365 8.9905 1.74609 6.4135 1.74609C3.8365 1.74609 1.74609 3.8365 1.74609 6.4135C1.74609 8.9905 3.8365 11.0809 6.4135 11.0809Z" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d="M12.2468 12.2471L9.7085 9.70874" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="pointer-events-none absolute left-[12px] top-1/2 -translate-y-1/2">
      <svg fill="none" height="14" viewBox="0 0 14 14" width="14">
        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
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

function ArrowRight({ dark }: { dark: boolean }) {
  const stroke = dark ? "#FFFFFF" : "#3D3A35";

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

function FilterField({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-w-[140px] flex-1 flex-col gap-[8px] ${className}`}>
      <p className="font-['Inter',sans-serif] text-[10px] font-bold uppercase tracking-[1px] text-[#6b6b6b]">
        {label}
      </p>
      {children}
    </div>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative h-[45px] w-full rounded-[8px] border-[0.556px] border-[#e8e4dc] bg-white">
      <ChevronDown />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-full w-full appearance-none bg-transparent pl-[34px] pr-[12px] font-['Inter',sans-serif] text-[13px] font-normal text-[#6b6b6b] outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function CongressCard({ congress }: { congress: Congress }) {
  const navigate = useNavigate();
  const hasListedHotels = congress.availability === "rooms-available";
  const ctaLabel = hasListedHotels ? "View Listed Hotels" : "Request Rooms";
  const ctaTarget = hasListedHotels
    ? `/congresses/${congress.id}`
    : `/contact?congress=${encodeURIComponent(congress.id)}`;

  return (
    <article className="flex min-h-[348px] flex-col rounded-[12px] border-[0.556px] border-[#e8e4dc] bg-white p-[20px] shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]">
      <div className="flex flex-1 flex-col justify-between gap-[24px]">
        <div className="flex flex-col gap-[12px] text-[#3f3f3f]">
          <h2 className="font-['Inter',sans-serif] text-[24px] font-semibold leading-[1.05]">
            {`${congress.acronym} ${congress.year} – ${congress.city}`}
          </h2>
          <p className="font-['Inter',sans-serif] text-[16px] font-medium leading-[1.25] text-[#3f3f3f]">
            {congress.name}
          </p>
        </div>

        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[5px]">
            <p className="font-['Inter',sans-serif] text-[12px] font-normal leading-[18px] text-[#6b6b6b]">
              {congress.venue}
            </p>
            <div className="flex flex-wrap gap-x-[12px] gap-y-[2px] font-['Inter',sans-serif] text-[12px] font-normal leading-[18px] text-[#6b6b6b]">
              <span>{congress.location}</span>
              <span>{congress.dateRange}</span>
            </div>
          </div>

          <div className="border-t-[0.556px] border-[#e8e4dc] pt-[14.556px]">
            <button
              type="button"
              onClick={() => navigate(ctaTarget)}
              className={`flex w-full items-center justify-between rounded-[10px] px-[24px] py-[12px] font-['Inter',sans-serif] text-[12px] font-semibold leading-[18px] shadow-[0px_2px_8px_rgba(198,165,107,0.35)] transition-colors ${
                hasListedHotels
                  ? "bg-[#c6a56b] text-white hover:bg-[#b9955b]"
                  : "border border-[#ddd8cf] bg-[#f5f3ef] text-[#3d3a35] shadow-[0px_4px_2px_rgba(0,0,0,0.04)] hover:bg-[#efebe4]"
              }`}
            >
              <span>{ctaLabel}</span>
              <ArrowRight dark={hasListedHotels} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MajorCongresses() {
  const [searchParams] = useSearchParams();
  const searchQueryFromUrl = searchParams.get("q") ?? "";
  const monthFilter = searchParams.get("month") ?? "";
  const statusFilter = searchParams.get("status") ?? "";
  const locationFilter = searchParams.get("location") ?? "";
  const yearFilterFromUrl = searchParams.get("year") ?? "Any Year";
  const specialtyFilterFromUrl = searchParams.get("specialty") ?? "Any Specialty";

  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [cityFilter, setCityFilter] = useState("All Cities");
  const [yearFilter, setYearFilter] = useState("Any Year");
  const [specialtyFilter, setSpecialtyFilter] = useState("Any Specialty");
  const [availabilityFilter, setAvailabilityFilter] = useState("All Availability");

  useEffect(() => {
    const normalizedStatus =
      statusFilter === "Rooms Available" || statusFilter === "rooms-available"
        ? "Rooms Available"
        : statusFilter === "Limited Availability" || statusFilter === "limited-availability"
          ? "Limited Availability"
          : statusFilter === "Request Rooms" || statusFilter === "request-rooms"
            ? "Request Rooms"
            : "All Availability";

    setSearchQuery(searchQueryFromUrl);
    setCityFilter(locationFilter || "All Cities");
    setYearFilter(yearFilterFromUrl || "Any Year");
    setSpecialtyFilter(specialtyFilterFromUrl || "Any Specialty");
    setAvailabilityFilter(normalizedStatus);
  }, [locationFilter, searchQueryFromUrl, specialtyFilterFromUrl, statusFilter, yearFilterFromUrl]);

  const countries = useMemo(
    () => ["All Countries", ...Array.from(new Set(congresses.map((congress) => congress.country)))],
    [],
  );
  const cities = useMemo(
    () => ["All Cities", ...Array.from(new Set(congresses.map((congress) => congress.city)))],
    [],
  );
  const years = useMemo(
    () => ["Any Year", ...Array.from(new Set(congresses.map((congress) => congress.year)))],
    [],
  );
  const specialties = useMemo(
    () => ["Any Specialty", ...Array.from(new Set(congresses.map((congress) => congress.specialty)))],
    [],
  );

  const filteredCongresses = useMemo(() => {
    return congresses.filter((congress) => {
      const searchableText = [
        congress.acronym,
        congress.name,
        congress.specialty,
        congress.venue,
        congress.location,
        congress.city,
        congress.country,
        congress.dateRange,
        congress.year,
      ]
        .join(" ")
        .toLowerCase();

      if (searchQuery && !searchableText.includes(searchQuery.toLowerCase())) {
        return false;
      }

      if (countryFilter !== "All Countries" && congress.country !== countryFilter) {
        return false;
      }

      if (cityFilter !== "All Cities" && congress.city !== cityFilter) {
        return false;
      }

      if (yearFilter !== "Any Year" && congress.year !== yearFilter) {
        return false;
      }

      if (specialtyFilter !== "Any Specialty" && congress.specialty !== specialtyFilter) {
        return false;
      }

      if (availabilityFilter === "Rooms Available" && congress.availability !== "rooms-available") {
        return false;
      }

      if (availabilityFilter === "Limited Availability" && congress.availability !== "limited-availability") {
        return false;
      }

      if (availabilityFilter === "Request Rooms" && congress.availability !== "request-rooms") {
        return false;
      }

      if (monthFilter && monthFilter !== "Any Month" && !congress.dateRange.toLowerCase().includes(monthFilter.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [availabilityFilter, cityFilter, countryFilter, monthFilter, searchQuery, specialtyFilter, yearFilter]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="congresses" />

      <main>
        <section className="bg-[#f0eadf]">
          <div className="mx-auto w-full max-w-[1440px] px-[30px] py-[72px] md:px-[50px] md:py-[100px]">
            <div className="max-w-[737px]">
              <h1 className="font-['Inter',sans-serif] text-[42px] font-semibold leading-[1.05] text-[#3f3f3f] md:text-[56px] md:leading-[60px]">
                Major Medical Congresses
              </h1>
              <p className="mt-[26px] max-w-[610px] font-['Inter',sans-serif] text-[17px] font-normal leading-[29.75px] text-[#6b6b6b]">
                High demand and limited availability make early planning essential. We provide access to
                secured hotel contingents across major congresses.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f7f4]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-[30px] py-[40px] md:px-[50px] md:py-[50px]">
            <div className="rounded-[12px] bg-white p-[24px] shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]">
              <div className="flex flex-col gap-[16px] xl:flex-row xl:items-end">
                <div className="w-full xl:w-[350px] xl:flex-none">
                  <div className="mb-[8px] flex items-center gap-[7.995px]">
                    <FilterIcon />
                    <p className="font-['Inter',sans-serif] text-[13px] font-bold leading-[19.5px] text-[#3f3f3f]">
                      Filters
                    </p>
                  </div>
                  <div className="flex h-[45px] items-center gap-[12px] rounded-[8px] border-[0.556px] border-[#e8e4dc] bg-white px-[12px] py-[8px]">
                    <SearchIcon />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search congresses..."
                      className="w-full bg-transparent font-['Inter',sans-serif] text-[13px] font-normal text-[#1a1a1a] outline-none placeholder:text-[rgba(26,26,26,0.5)]"
                    />
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-5">
                  <FilterField label="Country">
                    <FilterSelect value={countryFilter} onChange={setCountryFilter} options={countries} />
                  </FilterField>
                  <FilterField label="City">
                    <FilterSelect value={cityFilter} onChange={setCityFilter} options={cities} />
                  </FilterField>
                  <FilterField label="Year">
                    <FilterSelect value={yearFilter} onChange={setYearFilter} options={years} />
                  </FilterField>
                  <FilterField label="Specialty">
                    <FilterSelect value={specialtyFilter} onChange={setSpecialtyFilter} options={specialties} />
                  </FilterField>
                  <FilterField label="Availability">
                    <FilterSelect
                      value={availabilityFilter}
                      onChange={setAvailabilityFilter}
                      options={["All Availability", "Rooms Available", "Limited Availability", "Request Rooms"]}
                    />
                  </FilterField>
                </div>
              </div>
            </div>

            {filteredCongresses.length === 0 ? (
              <div className="rounded-[12px] border-[0.556px] border-[#e8e4dc] bg-white p-[32px] text-center shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]">
                <p className="font-['Inter',sans-serif] text-[14px] font-normal text-[#6b6b6b]">
                  No congresses match your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
                {filteredCongresses.map((congress) => (
                  <CongressCard key={congress.id} congress={congress} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
