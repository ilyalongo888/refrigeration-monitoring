"use client";

import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { StatusBadge } from "./ui/StatusBadge";
import { MetricCard } from "./ui/MetricCard";
import { IncidentTimeline } from "./ui/IncidentTimeline";
import { EquipmentTable } from "./ui/EquipmentTable";

export function MonitoringDashboard() {
  const { t } = useLanguage();
  const d = t.dashboard;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-[560px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-accent-cyan/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-card border border-line bg-card shadow-card-lift">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />

        <div className="relative p-5 sm:p-6">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-secondary">
              <Radio className="h-3.5 w-3.5 text-accent-cyan" strokeWidth={2} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                {d.title}
              </span>
            </div>
            <StatusBadge variant="normal" dot>
              {d.online}
            </StatusBadge>
          </div>

          {/* Metrics */}
          <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
            <MetricCard value="24" label={d.metrics.objects} />
            <MetricCard value="23" label={d.metrics.normal} tone="normal" />
            <MetricCard value="1" label={d.metrics.alerts} tone="alert" />
          </div>

          {/* Equipment table */}
          <div className="mt-5">
            <EquipmentTable headers={d.tableHeaders} rows={d.equipment} labels={d.statusLabels} />
          </div>

          {/* Active incident */}
          <div className="mt-5 rounded-panel border border-status-alert/25 bg-status-alert/[0.04] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-status-alert">
                {d.incident.label}
              </span>
              <StatusBadge variant="alert" dot pulse>
                {d.statusLabels.alert}
              </StatusBadge>
            </div>
            <p className="mt-2 text-sm font-medium text-text-primary">
              {d.incident.unit}
            </p>
            <div className="mt-4">
              <IncidentTimeline items={[...d.incident.timeline]} highlightLast dense />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center gap-2 text-xs text-text-secondary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-blink-dot rounded-full bg-status-normal" />
            </span>
            {d.lastCheck}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
