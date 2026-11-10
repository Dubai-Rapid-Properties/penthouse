type BackToOptionsProps = { onDark?: boolean };

/** Return link to the four option cards, so a visitor never gets lost in the numbers. */
export default function BackToOptions({ onDark = false }: BackToOptionsProps) {
  return (
    <a
      href="#options"
      className={`inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] underline-offset-4 hover:underline ${
        onDark ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-charcoal'
      }`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to all options
    </a>
  );
}
