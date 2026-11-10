type ProjectedBadgeProps = { onDark?: boolean; className?: string };

/** Marks a figure as a projection, so it is never read as a guaranteed return. */
export default function ProjectedBadge({ onDark = false, className = '' }: ProjectedBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${
        onDark ? 'border-white/30 text-white/80' : 'border-charcoal/20 text-charcoal/70'
      } ${className}`}
    >
      Projected · Not guaranteed
    </span>
  );
}
