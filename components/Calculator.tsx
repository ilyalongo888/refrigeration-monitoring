"use client";

import { FormEvent, ReactNode, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { track } from "@/lib/analytics";

type Phase = "steps" | "result" | "success";

const TOTAL_STEPS = 4;
const SENSOR_MIN = 1;
const SENSOR_MAX = 25;
const RATE_LOW = 20;
const RATE_HIGH = 30;

export function Calculator() {
  const { t } = useLanguage();
  const c = t.calculator;

  const [phase, setPhase] = useState<Phase>("steps");
  const [step, setStep] = useState(1);
  const [started, setStarted] = useState(false);

  const [objects, setObjects] = useState<string | null>(null);
  const [sensors, setSensors] = useState(10);
  const [sensorsPlus, setSensorsPlus] = useState(false);
  const [equipment, setEquipment] = useState<string[]>([]);
  const [remote, setRemote] = useState<string | null>(null);

  const [lead, setLead] = useState({ name: "", company: "", phone: "", email: "" });

  const markStarted = () => {
    if (!started) {
      setStarted(true);
      track("calculator_started");
    }
  };

  const toggleEquipment = (label: string) => {
    setEquipment((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
    );
  };

  const canProceed =
    (step === 1 && objects !== null) ||
    (step === 2 && true) ||
    (step === 3 && equipment.length > 0) ||
    (step === 4 && remote !== null);

  const goNext = () => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    } else {
      track("calculator_completed", {
        objects,
        sensors: sensorsPlus ? `${SENSOR_MAX}+` : sensors,
        equipment,
        remote,
      });
      setPhase("result");
    }
  };

  const goBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const effectiveSensors = sensorsPlus ? SENSOR_MAX : sensors;
  const low = effectiveSensors * RATE_LOW;
  const high = effectiveSensors * RATE_HIGH;
  const monthlyDisplay = sensorsPlus
    ? `от €${low} ${c.result.monthlyUnit}`
    : `€${low}–€${high} ${c.result.monthlyUnit}`;

  const handleLeadSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    track("lead_form_submitted", {
      objects,
      sensors: sensorsPlus ? `${SENSOR_MAX}+` : sensors,
      equipment,
      remote,
      estimateLow: low,
      estimateHigh: sensorsPlus ? null : high,
    });
    setPhase("success");
  };

  return (
    <section id="calculator" className="scroll-mt-20 bg-[#0B1728] py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={c.heading} subtitle={c.subtitle} theme="dark" />

        <div className="mx-auto mt-12 max-w-2xl">
          {phase === "steps" && (
            <div className="rounded-card border border-line bg-card p-6 sm:p-9">
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>
                    {c.stepLabel} {step} {c.of} {TOTAL_STEPS}
                  </span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-accent-cyan transition-all duration-300"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  />
                </div>
              </div>

              {step === 1 && (
                <StepBlock question={c.steps.objects.question}>
                  <div className="grid grid-cols-3 gap-3">
                    {c.steps.objects.options.map((opt) => (
                      <OptionButton
                        key={opt}
                        active={objects === opt}
                        onClick={() => {
                          markStarted();
                          setObjects(opt);
                        }}
                      >
                        {opt}
                      </OptionButton>
                    ))}
                  </div>
                </StepBlock>
              )}

              {step === 2 && (
                <StepBlock question={c.steps.sensors.question}>
                  <div className="text-center">
                    <span className="font-mono text-5xl font-semibold text-accent-cyan">
                      {sensorsPlus ? `${SENSOR_MAX}+` : sensors}
                    </span>
                    <span className="ml-2 text-sm text-text-secondary">
                      {c.steps.sensors.unitLabel}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={SENSOR_MIN}
                    max={SENSOR_MAX}
                    value={sensors}
                    onChange={(e) => {
                      markStarted();
                      setSensorsPlus(false);
                      setSensors(Number(e.target.value));
                    }}
                    className="mt-6 w-full accent-accent-cyan"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs text-text-secondary">
                    <span>{SENSOR_MIN}</span>
                    <button
                      type="button"
                      onClick={() => {
                        markStarted();
                        setSensorsPlus(true);
                        setSensors(SENSOR_MAX);
                      }}
                      className={`rounded-full border px-2.5 py-1 transition-colors ${
                        sensorsPlus
                          ? "border-accent-cyan text-accent-cyan"
                          : "border-line text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {c.steps.sensors.plus}
                    </button>
                  </div>
                </StepBlock>
              )}

              {step === 3 && (
                <StepBlock question={c.steps.equipment.question}>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {c.steps.equipment.options.map((opt) => {
                      const active = equipment.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            markStarted();
                            toggleEquipment(opt);
                          }}
                          className={`flex items-center gap-2.5 rounded-btn border px-4 py-3 text-left text-sm transition-colors ${
                            active
                              ? "border-accent-cyan/60 bg-accent-cyan/10 text-text-primary"
                              : "border-line text-text-secondary hover:border-accent-cyan/30 hover:text-text-primary"
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                              active ? "border-accent-cyan bg-accent-cyan" : "border-line"
                            }`}
                          >
                            {active && <Check className="h-3 w-3 text-[#03141C]" strokeWidth={3} />}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </StepBlock>
              )}

              {step === 4 && (
                <StepBlock question={c.steps.remote.question}>
                  <div className="grid grid-cols-3 gap-3">
                    {c.steps.remote.options.map((opt) => (
                      <OptionButton
                        key={opt}
                        active={remote === opt}
                        onClick={() => {
                          markStarted();
                          setRemote(opt);
                        }}
                      >
                        {opt}
                      </OptionButton>
                    ))}
                  </div>
                </StepBlock>
              )}

              <div className="mt-9 flex items-center justify-between">
                {step > 1 ? (
                  <Button variant="secondary" onClick={goBack}>
                    <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                    {c.back}
                  </Button>
                ) : (
                  <span />
                )}
                <Button onClick={goNext} disabled={!canProceed}>
                  {c.next}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Button>
              </div>
            </div>
          )}

          {phase === "result" && (
            <div className="space-y-6">
              <div className="rounded-card border border-accent-cyan/30 bg-card p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan">
                  {c.result.heading}
                </p>

                <div className="mt-6 space-y-5 divide-y divide-line">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 pb-5">
                    <span className="text-sm text-text-secondary">{c.result.setupLabel}</span>
                    <div className="text-right">
                      <p className="font-mono text-lg font-semibold text-text-primary">
                        {c.result.setupPrice}
                      </p>
                      <p className="text-xs text-text-secondary">{c.result.installment}</p>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between gap-2 py-5">
                    <span className="text-sm text-text-secondary">{c.result.sensorsLabel}</span>
                    <span className="font-mono text-lg font-semibold text-text-primary">
                      {sensorsPlus ? `${SENSOR_MAX}+` : effectiveSensors}
                    </span>
                  </div>

                  <div className="pt-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm text-text-secondary">{c.result.monthlyLabel}</span>
                      <span className="font-mono text-2xl font-semibold text-accent-cyan">
                        {monthlyDisplay}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-text-secondary">{c.result.monthlyNote}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPhase("steps")}
                  className="mt-6 text-sm text-accent-cyan hover:text-accent-cyan/80"
                >
                  {c.result.editCta}
                </button>
              </div>

              <form
                onSubmit={handleLeadSubmit}
                className="rounded-card border border-line bg-card p-6 sm:p-9"
              >
                <p className="text-sm font-semibold text-text-primary">{c.leadForm.heading}</p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <LeadField
                    label={c.leadForm.fields.name}
                    value={lead.name}
                    onChange={(v) => setLead((l) => ({ ...l, name: v }))}
                  />
                  <LeadField
                    label={c.leadForm.fields.company}
                    value={lead.company}
                    onChange={(v) => setLead((l) => ({ ...l, company: v }))}
                  />
                  <LeadField
                    label={c.leadForm.fields.phone}
                    type="tel"
                    value={lead.phone}
                    onChange={(v) => setLead((l) => ({ ...l, phone: v }))}
                  />
                  <LeadField
                    label={c.leadForm.fields.email}
                    type="email"
                    value={lead.email}
                    onChange={(v) => setLead((l) => ({ ...l, email: v }))}
                  />
                </div>
                <div className="mt-6">
                  <Button type="submit" fullWidth size="lg">
                    {c.leadForm.submit}
                  </Button>
                </div>
              </form>
            </div>
          )}

          {phase === "success" && (
            <div className="rounded-card border border-line bg-card p-9 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-status-normal/10 text-status-normal">
                <CheckCircle2 className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text-primary">{c.success.title}</h3>
              <p className="mt-2 text-text-secondary">{c.success.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StepBlock({ question, children }: { question: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary">{question}</h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function OptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-btn border px-4 py-3 text-sm font-medium transition-colors ${
        active
          ? "border-accent-cyan/60 bg-accent-cyan/10 text-text-primary"
          : "border-line text-text-secondary hover:border-accent-cyan/30 hover:text-text-primary"
      }`}
    >
      {children}
    </button>
  );
}

function LeadField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-text-secondary">
      {label}
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-btn border border-line bg-white/[0.02] px-4 py-2.5 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-secondary/50 focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20"
      />
    </label>
  );
}
