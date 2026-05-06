import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import svgPaths from "../../imports/KontaktDraft-1/svg-5qk7j54nnv";

const MAILCHIMP_FORM_ACTION = "";

function ArrowIcon() {
  return (
    <svg className="size-[15px]" fill="none" viewBox="0 0 15 15">
      <path d="M3.125 7.5H11.875" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.pb698300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function EmailIconGold() {
  return (
    <svg className="size-[15px]" fill="none" viewBox="0 0 15 15">
      <path d={svgPaths.p221d0a70} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p24c9d00} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function PhoneIconGold() {
  return (
    <svg className="size-[15px]" fill="none" viewBox="0 0 15 15">
      <path d={svgPaths.p37570680} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function LinkedInIconGold() {
  return (
    <svg className="size-[15px]" fill="none" viewBox="0 0 15 15">
      <path d={svgPaths.p12f37700} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p23902e00} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p5248800} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex w-full flex-col gap-[6px]">
      <span className="text-[12px] font-semibold leading-[18px] tracking-[0.12px] text-[#3f3f3f]">
        {label}
        {required ? <span className="text-[#c6a56b]">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-[44px] w-full rounded-[9px] border border-[#e8e4dc] bg-[#f8f7f4] px-[14px] text-[14px] font-normal text-[#1a1a1a] outline-none placeholder:text-[rgba(26,26,26,0.5)]"
    />
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-[36px] items-center justify-center rounded-[10px] border border-[rgba(198,165,107,0.28)] bg-[rgba(198,165,107,0.08)]">
        {icon}
      </div>
      <div className="flex flex-col gap-px">
        <span className="text-[10px] font-semibold uppercase leading-[15px] tracking-[1px] text-[#6b6b6b]">{label}</span>
        <span className="text-[13px] font-semibold leading-[19.5px] text-[#3f3f3f]">{value}</span>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });
  const [enquiryStatus, setEnquiryStatus] = useState<"idle" | "submitted">("idle");

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "consent-needed" | "configuration-needed" | "submitted"
  >("idle");

  const handleEnquirySubmit = (event: FormEvent) => {
    event.preventDefault();
    setEnquiryStatus("submitted");
  };

  const handleNewsletterSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!newsletterChecked) {
      setNewsletterStatus("consent-needed");
      return;
    }

    if (!MAILCHIMP_FORM_ACTION) {
      setNewsletterStatus("configuration-needed");
      return;
    }

    setNewsletterStatus("submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="contact" />

      <main>
        <section className="bg-[#f0eadf] px-6 py-16 md:px-[50px] md:py-[100px]">
          <div className="max-w-[848px]">
            <h1 className="max-w-[760px] text-[42px] font-semibold leading-[1.08] text-[#3f3f3f] md:text-[56px] md:leading-[60px]">
              Curious or already convinced?
            </h1>
          </div>
        </section>

        <section>
          <div className="flex w-full flex-col gap-8 px-[32px] py-[50px] md:px-[50px] lg:flex-row lg:items-start lg:gap-[42px]">
            <div className="min-w-0 flex-1 rounded-[16px] border border-[#e8e4dc] bg-white p-6 shadow-[0px_4px_24px_0px_rgba(26,26,26,0.06)]">
              <h2 className="text-[22px] font-bold leading-[33px] tracking-[-0.33px] text-[#3f3f3f]">Send an Enquiry</h2>

              {enquiryStatus === "submitted" ? (
                <div className="mt-6 flex flex-col gap-3">
                  <p className="text-[18px] font-bold text-[#3f3f3f]">Thank you for your enquiry.</p>
                  <p className="max-w-[520px] text-[14px] leading-[21px] text-[#6b6b6b]">
                    Your request has been captured in placeholder mode. We can wire this to a backend or CRM later.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnquiryStatus("idle")}
                    className="w-fit text-[13px] font-semibold text-[#c6a56b]"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="mt-6 flex flex-col gap-[14px]">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full Name" required>
                      <TextInput
                        placeholder="Jane Smith"
                        value={form.fullName}
                        onChange={(value) => setForm((current) => ({ ...current, fullName: value }))}
                      />
                    </Field>
                    <Field label="Company" required>
                      <TextInput
                        placeholder="Agency / Pharma Co."
                        value={form.company}
                        onChange={(value) => setForm((current) => ({ ...current, company: value }))}
                      />
                    </Field>
                  </div>

                  <Field label="Email Address" required>
                    <TextInput
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                    />
                  </Field>

                  <Field label="Subject">
                    <TextInput
                      placeholder="e.g. ESCMID 2026 — 30 rooms, 4-star"
                      value={form.subject}
                      onChange={(value) => setForm((current) => ({ ...current, subject: value }))}
                    />
                  </Field>

                  <Field label="Message" required>
                    <textarea
                      value={form.message}
                      onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                      placeholder="Congress, dates, number of rooms, budget, preferred location, and any specific requirements."
                      className="min-h-[128px] w-full rounded-[9px] border border-[#e8e4dc] bg-[#f8f7f4] px-[14px] py-[11px] text-[14px] leading-[21px] text-[#1a1a1a] outline-none placeholder:text-[rgba(26,26,26,0.5)]"
                    />
                  </Field>

                  <p className="text-[11px] leading-[18.15px] text-[#9ca3af]">
                    Your data is processed per our Privacy Policy, used only to handle your enquiry. We don&apos;t share
                    your details with third parties.
                  </p>

                  <button
                    type="submit"
                    className="flex w-fit items-center gap-[10px] rounded-[10px] bg-[#c6a56b] px-6 py-3 text-[14px] font-bold leading-[21px] text-white shadow-[0px_2px_8px_rgba(198,165,107,0.35)] transition-colors hover:bg-[#b8924a]"
                  >
                    <span>Send</span>
                    <ArrowIcon />
                  </button>
                </form>
              )}
            </div>

            <aside className="w-full max-w-[467px] shrink-0 overflow-hidden rounded-[16px] border border-[#e8e4dc] bg-white shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]">
              <div className="border-b border-[#e8e4dc] bg-[#f8f7f4] px-6 py-3">
                <p className="text-[13px] font-bold leading-[19.5px] text-[#3f3f3f]">Direct Contact</p>
                <p className="text-[13px] leading-[22.1px] text-[#6b6b6b]">Prefer to reach out directly?</p>
              </div>

              <div className="flex flex-col gap-5 px-6 py-5">
                <ContactItem icon={<EmailIconGold />} label="Email" value="info@mice-maker.com" />
                <ContactItem icon={<PhoneIconGold />} label="Phone" value="+49 89 37 98 76 27" />
                <ContactItem icon={<LinkedInIconGold />} label="LinkedIn" value="MICE MAKER GmbH" />
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-[#f0eadf]">
          <div className="flex w-full flex-col gap-6 px-[32px] py-[50px] md:px-[50px] lg:flex-row lg:items-center lg:justify-between lg:gap-[26px]">
            <div className="min-w-0 flex-1">
              <h2 className="max-w-[620px] text-[34px] font-bold leading-[1.1] text-[#3f3f3f] md:text-[40px]">
                Want to stay ahead of high-demand congresses and hotel availability?
              </h2>
              <p className="mt-3 max-w-[560px] text-[17px] leading-[29.75px] text-[#6b6b6b]">
                Get updates on major medical congresses and accommodation options across Europe.
              </p>
            </div>

            <div className="w-full max-w-[588px] rounded-[14px] border border-[#e8e4dc] bg-white p-6 shadow-[0px_2px_7px_rgba(26,26,26,0.05)]">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    placeholder="your@email.com"
                    required
                    className="h-[44px] min-w-0 flex-1 rounded-[9px] border border-[#e8e4dc] bg-[#f8f7f4] px-[14px] text-[14px] text-[#1a1a1a] outline-none placeholder:text-[rgba(26,26,26,0.5)]"
                  />
                  <button
                    type="submit"
                    className="h-[44px] rounded-[9px] bg-[#c6a56b] px-5 text-[13px] font-bold leading-[19.5px] text-white transition-colors hover:bg-[#b8924a]"
                  >
                    Get Updates
                  </button>
                </div>

                <label className="flex items-start gap-[10px]">
                  <input
                    type="checkbox"
                    checked={newsletterChecked}
                    onChange={(event) => setNewsletterChecked(event.target.checked)}
                    className="mt-[3px] size-[13px] rounded-[2px] border border-[#e8e4dc] accent-[#c6a56b]"
                  />
                  <span className="text-[11px] leading-[18.15px] text-[#9ca3af]">
                    I agree to receive congress and accommodation updates from MICE MAKER GmbH. I can unsubscribe at
                    any time. Processed in accordance with our Privacy Policy.
                  </span>
                </label>

                {newsletterStatus === "consent-needed" ? (
                  <p className="text-[12px] font-semibold leading-[18px] text-[#8a6930]">
                    Please confirm the newsletter consent before subscribing.
                  </p>
                ) : null}

                {newsletterStatus === "configuration-needed" ? (
                  <p className="text-[12px] font-semibold leading-[18px] text-[#3f3f3f]">
                    Newsletter signup is ready, but Mailchimp is not configured yet. Add the form action URL to the
                    `MAILCHIMP_FORM_ACTION` constant in this file.
                  </p>
                ) : null}

                {newsletterStatus === "submitted" ? (
                  <p className="text-[12px] font-semibold leading-[18px] text-[#3f3f3f]">
                    Thanks. Newsletter signup is connected and ready to submit.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
