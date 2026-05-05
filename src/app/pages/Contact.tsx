import { useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/KontaktDraft-1/svg-5qk7j54nnv";

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

function EmailIconGold() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d={svgPaths.p221d0a70} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p24c9d00} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function PhoneIconGold() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d={svgPaths.p37570680} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function LinkedInIconGold() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d={svgPaths.p12f37700} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p23902e00} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p5248800} stroke="#C6A56B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
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

function TextInput({ placeholder, value, onChange, type = 'text' }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-[#f8f7f4] h-[44.097px] relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[11px] relative size-full">
          <input
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className="font-['Inter',sans-serif] font-normal text-[14px] text-[#1a1a1a] bg-transparent outline-none w-full placeholder-[rgba(26,26,26,0.5)] focus:ring-0"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) setNewsletterSubmitted(true);
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative min-h-screen w-full" data-name="Kontakt Draft">
      <Navigation currentPage="contact" />
      <div className="w-full">
        {/* Hero */}
        <div className="bg-[#f0eadf] relative shrink-0 w-full" data-name="Section">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start px-[50px] py-[100px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]">
                <p className="font-['Inter',sans-serif] font-bold leading-[60px] not-italic relative shrink-0 text-[#3f3f3f] text-[56px] w-full">Curious or already convinced? </p>
              </div>
              {/* Decorative vector */}
              <div className="-translate-y-1/2 absolute h-[282px] left-[860px] top-1/2 w-[253px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 253 282">
                  <path d={svgPaths.p3678c600} stroke="url(#paint0_linear_contact)" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_contact" x1="244.567" x2="5.76524" y1="25.0161" y2="270.567">
                      <stop stopColor="#C6A56B" />
                      <stop offset="1" stopColor="#C6A56B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Form + Direct contact */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start p-[50px] relative size-full">
            <div className="content-stretch flex gap-[42px] items-start relative shrink-0 w-full">
              {/* Form card */}
              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
                    <p className="font-['Inter',sans-serif] font-bold leading-[33px] not-italic relative shrink-0 text-[#3f3f3f] text-[22px] tracking-[-0.33px] whitespace-nowrap">Send an Enquiry</p>
                    {submitted ? (
                      <div className="flex flex-col gap-[12px] items-start w-full py-[24px]">
                        <p className="font-['Inter',sans-serif] font-bold text-[18px] text-[#3f3f3f]">Thank you for your enquiry!</p>
                        <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#6b6b6b]">We'll get back to you shortly.</p>
                        <button onClick={() => setSubmitted(false)} className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#c6a56b] cursor-pointer">Send another enquiry</button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                        {/* Row: Name + Company */}
                        <div className="relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[20px] items-center relative size-full">
                            <div className="flex-1 min-w-0">
                              <FormField label="Full Name" required>
                                <TextInput placeholder="Jane Smith" value={form.fullName} onChange={v => setForm(f => ({ ...f, fullName: v }))} />
                              </FormField>
                            </div>
                            <div className="flex-1 min-w-0">
                              <FormField label="Company" required>
                                <TextInput placeholder="Agency / Pharma Co." value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} />
                              </FormField>
                            </div>
                          </div>
                        </div>
                        {/* Email */}
                        <FormField label="Email Address" required>
                          <TextInput placeholder="you@company.com" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} />
                        </FormField>
                        {/* Subject */}
                        <FormField label="Subject">
                          <TextInput placeholder="e.g. ESCMID 2026 — 30 rooms, 4-star" value={form.subject} onChange={v => setForm(f => ({ ...f, subject: v }))} />
                        </FormField>
                        {/* Message */}
                        <FormField label="Message" required>
                          <div className="bg-[#f8f7f4] h-[128.056px] relative rounded-[9px] shrink-0 w-full">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-start px-[14px] py-[11px] relative size-full">
                                <textarea
                                  value={form.message}
                                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                  placeholder="Congress, dates, number of rooms, budget, preferred location, and any specific requirements."
                                  className="font-['Inter',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-[#1a1a1a] bg-transparent outline-none w-full h-full resize-none placeholder-[rgba(26,26,26,0.5)]"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
                          </div>
                        </FormField>
                        {/* Privacy note */}
                        <div className="relative shrink-0 w-full">
                          <p className="font-['Inter',sans-serif] font-normal leading-[18.15px] not-italic text-[#9ca3af] text-[11px]">{`Your data is processed per our Privacy Policy, used only to handle your enquiry. We don't share your details with third parties.`}</p>
                        </div>
                        {/* Submit */}
                        <button
                          type="submit"
                          className="bg-[#c6a56b] drop-shadow-[0px_2px_8px_rgba(198,165,107,0.35)] relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#b8924a] transition-colors"
                        >
                          <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[12px] relative size-full">
                            <p className="font-['Inter',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Send Enquiry </p>
                            <ArrowIcon />
                          </div>
                        </button>
                      </form>
                    )}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_0px_rgba(26,26,26,0.06)]" />
              </div>

              {/* Direct contact card */}
              <div className="bg-white relative rounded-[16px] shrink-0 w-[467.205px]">
                <div className="content-stretch flex flex-col items-start overflow-clip p-[0.556px] relative rounded-[inherit] size-full">
                  {/* Header */}
                  <div className="bg-[#f8f7f4] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e8e4dc] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
                      <p className="font-['Inter',sans-serif] font-bold leading-[19.5px] not-italic relative shrink-0 text-[#3f3f3f] text-[13px] whitespace-nowrap">Direct Contact</p>
                      <p className="font-['Inter',sans-serif] font-normal leading-[22.1px] not-italic relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap">Prefer to reach out directly? </p>
                    </div>
                  </div>
                  {/* Contact items */}
                  <div className="relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-start pl-[23.993px] pr-[24px] py-[20px] relative size-full">
                      {/* Email */}
                      <div className="h-[35.998px] relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[11.997px] items-center relative size-full">
                          <div className="bg-[rgba(198,165,107,0.08)] relative rounded-[10px] shrink-0 size-[35.998px]">
                            <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                            <div className="content-stretch flex items-center justify-center pl-[10.495px] pr-[10.504px] py-[0.556px] relative size-full">
                              <EmailIconGold />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[0.998px] items-start relative shrink-0">
                            <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#6b6b6b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Email</p>
                            <p className="font-['Inter',sans-serif] font-semibold leading-[19.5px] not-italic text-[#3f3f3f] text-[13px] whitespace-nowrap">info@mice-maker.com</p>
                          </div>
                        </div>
                      </div>
                      {/* Phone */}
                      <div className="h-[35.998px] relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[11.997px] items-center relative size-full">
                          <div className="bg-[rgba(198,165,107,0.08)] relative rounded-[10px] shrink-0 size-[35.998px]">
                            <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                            <div className="content-stretch flex items-center justify-center pl-[10.495px] pr-[10.504px] py-[0.556px] relative size-full">
                              <PhoneIconGold />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[0.998px] items-start relative shrink-0">
                            <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#6b6b6b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Phone</p>
                            <p className="font-['Inter',sans-serif] font-semibold leading-[19.5px] not-italic text-[#3f3f3f] text-[13px] whitespace-nowrap">+49 89 37 98 76 27</p>
                          </div>
                        </div>
                      </div>
                      {/* LinkedIn */}
                      <div className="h-[35.998px] relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[11.997px] items-center relative size-full">
                          <div className="bg-[rgba(198,165,107,0.08)] relative rounded-[10px] shrink-0 size-[35.998px]">
                            <div aria-hidden="true" className="absolute border-[0.556px] border-[rgba(198,165,107,0.28)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                            <div className="content-stretch flex items-center justify-center pl-[10.495px] pr-[10.504px] py-[0.556px] relative size-full">
                              <LinkedInIconGold />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[0.998px] items-start relative shrink-0">
                            <p className="font-['Inter',sans-serif] font-semibold leading-[15px] not-italic text-[#6b6b6b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">LinkedIn</p>
                            <p className="font-['Inter',sans-serif] font-semibold leading-[19.5px] not-italic text-[#3f3f3f] text-[13px] whitespace-nowrap">MICE MAKER GmbH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(26,26,26,0.05)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="bg-[#f0eadf] relative shrink-0 w-full" data-name="Section">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[50px] relative size-full">
              <div className="content-stretch flex gap-[26px] items-center justify-center relative shrink-0 w-full">
                {/* Left text */}
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative">
                  <p className="font-['Inter',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3f3f3f] text-[40px] w-full">Want to stay ahead of high-demand congresses and hotel availability? </p>
                  <p className="font-['Inter',sans-serif] font-normal leading-[29.75px] relative shrink-0 text-[#6b6b6b] text-[17px] w-full">Get updates on major medical congresses and accommodation options across Europe. </p>
                </div>
                {/* Right form */}
                <div className="bg-white content-stretch drop-shadow-[0px_2px_7px_rgba(26,26,26,0.05)] flex flex-col items-start p-[24px] relative rounded-[14px] shrink-0 w-[588.003px]">
                  <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  {newsletterSubmitted ? (
                    <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#3f3f3f]">Thanks! You're subscribed.</p>
                  ) : (
                    <div className="content-stretch flex flex-col gap-[15.998px] items-start relative shrink-0 w-full">
                      <div className="h-[44.097px] relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[11.996px] items-start relative size-full">
                          <div className="bg-[#f8f7f4] flex-[1_0_0] h-[44.097px] min-w-px relative rounded-[9px]">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-center px-[14px] py-[11px] relative size-full">
                                <input
                                  type="email"
                                  placeholder="your@email.com"
                                  value={newsletterEmail}
                                  onChange={e => setNewsletterEmail(e.target.value)}
                                  className="font-['Inter',sans-serif] font-normal text-[14px] text-[#1a1a1a] bg-transparent outline-none w-full placeholder-[rgba(26,26,26,0.5)]"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[9px]" />
                          </div>
                          <button
                            onClick={handleNewsletterSubmit}
                            className="bg-[#c6a56b] h-[44.097px] relative rounded-[9px] shrink-0 w-[103.698px] cursor-pointer hover:bg-[#b8924a] transition-colors"
                          >
                            <p className="font-['Inter',sans-serif] font-bold leading-[19.5px] not-italic text-[13px] text-center text-white whitespace-nowrap">Subscribe</p>
                          </button>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[10px] items-start relative size-full">
                          <div
                            className={`bg-[#f8f7f4] relative rounded-[2px] shrink-0 size-[12.995px] cursor-pointer flex-shrink-0 mt-[3px] ${newsletterChecked ? 'bg-[#c6a56b]' : ''}`}
                            onClick={() => setNewsletterChecked(!newsletterChecked)}
                          >
                            <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.56px] border-solid inset-0 pointer-events-none rounded-[2px]" />
                            {newsletterChecked && (
                              <svg className="absolute inset-0 size-full" viewBox="0 0 13 13" fill="none">
                                <path d="M2.5 6.5L5.5 9.5L10.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-[1_0_0] font-['Inter',sans-serif] font-normal leading-[0] not-italic relative text-[#9ca3af] text-[11px] whitespace-pre-wrap">
                            <p className="leading-[18.15px] mb-0">I agree to receive congress and accommodation updates from MICE MAKER GmbH. </p>
                            <p className="leading-[18.15px]">I can unsubscribe at any time. Processed in accordance with our Privacy Policy.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}