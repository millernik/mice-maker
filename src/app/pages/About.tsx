import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const servicePoints = [
  "We secure hotel contingents for major medical congresses",
  "Access to contracted inventory and off-market availability",
  "One point of contact from sourcing to final booking",
  "Flexible setup depending on project needs",
];

const credentials = [
  { value: "12+", label: "Years MICE MAKER" },
  { value: "25", label: "Years of industry experience" },
  { value: "Trusted", label: "by international agencies & pharmaceutical clients" },
  { value: "Proven", label: "in high-demand environments" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />

      <main>
        <section className="bg-[#f0eadf] px-6 py-16 md:px-[50px] md:py-[100px]">
          <div className="max-w-[880px]">
            <h1 className="max-w-[780px] text-[42px] font-semibold leading-[1.08] tracking-0 text-[#3f3f3f] md:text-[56px] md:leading-[60px]">
              Finding hotel rooms for medical congresses isn't easy.
            </h1>
            <p className="mt-[26px] max-w-[520px] text-[17px] font-normal leading-[29.75px] text-[#6b6b6b]">
              Most hotels are blocked years in advance.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="flex w-full flex-col gap-10 px-[32px] pb-[64px] pt-[50px] md:px-[50px] md:pb-[72px] lg:flex-row lg:items-start lg:justify-between lg:gap-[50px]">
            <div className="min-w-0 flex-1">
              <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-0 text-[#3f3f3f] md:text-[40px] md:leading-[44.8px]">
                We secure what others can’t
              </h2>

              <div className="mt-[34px] max-w-[760px] text-[16px] font-normal leading-[29.6px] text-[#6b6b6b] md:mt-[50px]">
                <ul className="list-disc space-y-[2px] pl-6">
                  {servicePoints.map((point) => (
                    <li key={point} className="pl-[2px]">
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-[34px] max-w-[720px] md:mt-[42px]">
                  If you’ve worked in this space, you know how complex it gets. We keep it simple.
                </p>
              </div>
            </div>

            <aside className="w-full max-w-[469px] shrink-0 overflow-hidden rounded-[14px] border border-[#e8e4dc] bg-white shadow-[0px_4px_24px_0px_rgba(26,26,26,0.06)]">
              <div className="border-b border-[#e8e4dc] bg-[#f8f7f4] px-6 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[1.6px] text-[#c6a56b]">CREDENTIALS</p>
              </div>

              <div>
                {credentials.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex min-h-[62px] items-center gap-4 px-6 py-4 ${
                      index < credentials.length - 1 ? "border-b border-[#e8e4dc]" : ""
                    }`}
                  >
                    <div className="min-w-[72px] text-[20px] font-extrabold leading-[30px] tracking-0 text-[#1a1a1a]">
                      {item.value}
                    </div>
                    <p className="text-[13px] font-normal leading-[19.5px] text-[#6b6b6b]">{item.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
