/**
 * Minimal analytics placeholder.
 *
 * Wire this up to a real provider (GA4, Plausible, PostHog, etc.) when one
 * is chosen. Every call site in the app already fires the right event name
 * with a small payload, so swapping the implementation here is the only
 * change needed.
 */
export type AnalyticsEvent =
  | "calculator_started"
  | "calculator_completed"
  | "lead_form_submitted"
  | "hero_cta_clicked"
  | "pricing_cta_clicked"
  | "scenario_viewed";

export function track(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log(`[analytics] ${event}`, payload ?? {});
  }
  // TODO: forward to the real analytics provider once one is configured.
}
