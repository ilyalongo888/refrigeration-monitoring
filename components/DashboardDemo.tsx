"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { StatusBadge } from "./ui/StatusBadge";
import { EquipmentTable } from "./ui/EquipmentTable";
import { IncidentTimeline } from "./ui/IncidentTimeline";

export function DashboardDemo() {
  const { t } = useLanguage();
  const dd = t.dashboardDemo;
  const d = t.dashboard;

  return (
    <section className="bg-[#07111F] py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={dd.heading} theme="dark" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="rounded-card border border-line bg-card p-6 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                {dd.tableTitle}
              </span>
              <StatusBadge variant="normal" dot>
                {d.online}
              </StatusBadge>
            </div>
            <EquipmentTable headers={d.tableHeaders} rows={d.equipment} labels={d.statusLabels} />
          </div>

          <div className="rounded-card border border-status-alert/25 bg-status-alert/[0.04] p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-status-alert">
                {dd.incidentTitle}
              </span>
              <StatusBadge variant="alert" dot pulse>
                {dd.status}
              </StatusBadge>
            </div>

            <p className="mt-3 text-sm font-medium text-text-primary">{dd.unit}</p>

            <div className="mt-5 flex items-end gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-text-secondary">
                  {dd.currentTempLabel}
                </p>
                <p className="font-mono text-4xl font-semibold text-status-alert">-11.8°C</p>
              </div>
              <div className="pb-1">
                <p className="text-[11px] uppercase tracking-wide text-text-secondary">
                  {dd.targetLabel}
                </p>
                <p className="font-mono text-lg text-text-secondary">{dd.target}</p>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <IncidentTimeline items={[...dd.timeline]} highlightLast />
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-panel border border-line bg-white/[0.02] px-3 py-2.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-status-alert" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status-alert" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                {dd.inProgress}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
