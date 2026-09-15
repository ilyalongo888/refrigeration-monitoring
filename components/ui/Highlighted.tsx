interface HighlightedProps {
  text: string;
  className?: string;
}

/**
 * Renders a string where segments wrapped in {{...}} are highlighted
 * with the cyan gradient accent. Used for hero/statement headlines
 * that need one or two emphasized words regardless of active language.
 */
export function Highlighted({ text, className = "" }: HighlightedProps) {
  const parts = text.split(/(\{\{.*?\}\})/g).filter(Boolean);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const match = part.match(/^\{\{(.*)\}\}$/);
        if (match) {
          return (
            <span
              key={i}
              className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent"
            >
              {match[1]}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
