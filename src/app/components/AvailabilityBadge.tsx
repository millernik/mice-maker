import type { Availability } from "../data/congresses";

const CONFIG: Record<
  Availability,
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  available: {
    label: "Rooms Available",
    bg: "#eef7f2",
    text: "#2d7a4a",
    border: "#b6dec8",
    dot: "#2d7a4a",
  },
  limited: {
    label: "Limited Availability",
    bg: "rgba(198,165,107,0.1)",
    text: "#8a6930",
    border: "rgba(198,165,107,0.35)",
    dot: "#c6a56b",
  },
  request: {
    label: "Request Rooms",
    bg: "#f3f3f5",
    text: "#6b6358",
    border: "#ddd5c6",
    dot: "#9c9082",
  },
};

interface Props {
  availability: Availability;
  size?: "sm" | "md";
}

export function AvailabilityBadge({ availability, size = "md" }: Props) {
  const cfg = CONFIG[availability];
  const padding = size === "sm" ? "3px 8px" : "4px 10px";
  const fontSize = size === "sm" ? "10px" : "11px";

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full"
      style={{
        backgroundColor: cfg.bg,
        border: `1px solid ${cfg.border}`,
        padding,
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize,
        color: cfg.text,
        letterSpacing: "0.3px",
        lineHeight: 1,
      }}
    >
      <span
        className="rounded-full flex-shrink-0"
        style={{
          width: 6,
          height: 6,
          backgroundColor: cfg.dot,
        }}
      />
      {cfg.label}
    </span>
  );
}
