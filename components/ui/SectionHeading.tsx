import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
  /** Optional overrides for this instance's text color, leaving `theme`'s default for every other usage untouched. */
  headingClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = "center",
  theme = "light",
  as = "h2",
  className = "",
  headingClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const Heading = as;
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const headingColor = headingClassName ?? (theme === "dark" ? "text-text-primary" : "text-[#0B1728]");
  const subtitleColor = subtitleClassName ?? (theme === "dark" ? "text-text-secondary" : "text-slate-500");

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan">
          {eyebrow}
        </p>
      )}
      <Heading
        className={`text-balance text-[32px] font-semibold leading-[1.15] tracking-tight sm:text-[38px] lg:text-[42px] ${headingColor}`}
      >
        {heading}
      </Heading>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
