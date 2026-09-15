interface TimelineItem {
  time: string;
  text: string;
}

interface IncidentTimelineProps {
  items: TimelineItem[];
  highlightLast?: boolean;
  dense?: boolean;
}

export function IncidentTimeline({
  items,
  highlightLast = false,
  dense = false,
}: IncidentTimelineProps) {
  return (
    <ol className="relative">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const emphasize = highlightLast && isLast;
        return (
          <li key={i} className="relative flex gap-3 pb-4 last:pb-0">
            {!isLast && (
              <span
                className="absolute left-[5px] top-3 h-full w-px bg-line"
                aria-hidden
              />
            )}
            <span
              className={`relative z-10 mt-1 h-[11px] w-[11px] shrink-0 rounded-full border-2 ${
                emphasize
                  ? "border-accent-cyan bg-accent-cyan shadow-glow-sm"
                  : "border-text-secondary/40 bg-bg-secondary"
              }`}
            />
            <div className={dense ? "text-[13px]" : "text-sm"}>
              <span className="font-mono text-text-secondary">{item.time}</span>
              <span
                className={`ml-2 ${
                  emphasize ? "font-medium text-text-primary" : "text-text-secondary"
                }`}
              >
                {item.text}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
