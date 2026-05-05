import { useNavigate } from "react-router";
import { MapPin, Calendar } from "lucide-react";
import type { Congress } from "../data/congresses";
import { AvailabilityBadge } from "./AvailabilityBadge";

interface Props {
  congress: Congress;
  compact?: boolean;
}

export function CongressCard({ congress, compact = false }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/congresses/${congress.id}`)}
      className="group cursor-pointer flex flex-col justify-between transition-all duration-200"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e8e4dc",
        borderRadius: 14,
        padding: compact ? "20px 24px" : "24px 28px",
        minHeight: compact ? 220 : 260,
        boxShadow: "0px 2px 6px rgba(26,26,26,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0px 6px 20px rgba(26,26,26,0.10)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0px 2px 6px rgba(26,26,26,0.04)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Top: Badge */}
      <div className="flex flex-col gap-3">
        <AvailabilityBadge availability={congress.availability} size="sm" />

        {/* Congress Name */}
        <h3
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: compact ? 22 : 26,
            lineHeight: 1.2,
            color: "#1c1814",
            margin: 0,
          }}
        >
          {congress.name}
        </h3>
      </div>

      {/* Bottom: Meta info */}
      <div
        className="flex flex-col gap-2 pt-4"
        style={{ borderTop: "1px solid #e8e4dc", marginTop: 16 }}
      >
        {/* Location */}
        <div className="flex items-center gap-1.5">
          <MapPin size={11} style={{ color: "#9c9082", flexShrink: 0 }} />
          <span
            className="text-[12px]"
            style={{ color: "#6b6358", fontFamily: "Inter, sans-serif" }}
          >
            {congress.city}, {congress.country}
          </span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1.5">
          <Calendar size={11} style={{ color: "#9c9082", flexShrink: 0 }} />
          <span
            className="text-[12px]"
            style={{ color: "#6b6358", fontFamily: "Inter, sans-serif" }}
          >
            {congress.date}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-1 flex items-center gap-1">
          <span
            className="text-[11px] tracking-[0.66px] uppercase group-hover:opacity-70 transition-opacity"
            style={{
              color: "#b8924a",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
            }}
          >
            View Details
          </span>
          <span
            className="text-[11px] group-hover:translate-x-1 transition-transform"
            style={{ color: "#b8924a" }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}
