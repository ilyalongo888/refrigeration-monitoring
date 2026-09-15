"use client";

import { FormEvent, ReactNode, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function ContactForm() {
  const { t } = useLanguage();
  const cf = t.contactForm;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={cf.heading} subtitle={cf.subheading} theme="light" />

        <div className="mx-auto mt-12 max-w-2xl rounded-card border border-slate-200/80 bg-white p-7 shadow-card-lift sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-status-normal/10 text-status-normal">
                <CheckCircle2 className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#0B1728]">
                {cf.successTitle}
              </h3>
              <p className="mt-2 text-slate-500">{cf.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label={cf.fields.name}>
                <input required type="text" className={inputClass} />
              </Field>
              <Field label={cf.fields.company}>
                <input required type="text" className={inputClass} />
              </Field>
              <Field label={cf.fields.phone}>
                <input required type="tel" className={inputClass} />
              </Field>
              <Field label={cf.fields.email}>
                <input required type="email" className={inputClass} />
              </Field>
              <Field label={cf.fields.units}>
                <input required type="number" min={1} className={inputClass} />
              </Field>
              <Field label={cf.fields.businessType}>
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {cf.selectPlaceholder}
                  </option>
                  {cf.businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="sm:col-span-2 mt-2">
                <Button type="submit" size="lg" fullWidth>
                  {cf.submit}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-btn border border-slate-200 bg-white px-4 py-2.5 text-[15px] text-[#0B1728] outline-none transition-colors placeholder:text-slate-400 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-600">
      {label}
      {children}
    </label>
  );
}
