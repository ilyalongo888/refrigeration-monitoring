import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  type?: "button" | "submit";
  className?: string;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-cyan text-[#03141C] hover:bg-accent-cyan/90 shadow-glow-sm active:bg-accent-cyan/80",
  secondary:
    "bg-transparent text-text-primary border border-line hover:border-accent-cyan/50 hover:bg-white/5",
  ghost:
    "bg-transparent text-accent-cyan hover:text-accent-cyan/80 px-0",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[15px]",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = false,
  type = "button",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${
    variant !== "ghost" ? sizes[size] : "py-1"
  } ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
