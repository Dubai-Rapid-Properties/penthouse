import type { LedgerGroup } from '@/data/property';

type LedgerProps = {
  groups: readonly LedgerGroup[];
  onDark?: boolean;
  className?: string;
};

/**
 * A feasibility breakdown read top to bottom: purchase costs, renovation,
 * rental and resale, each group closed by its own subtotal, so every cost
 * type stays visibly separate.
 */
export default function Ledger({ groups, onDark = false, className = '' }: LedgerProps) {
  const tone = onDark
    ? {
        heading: 'text-orange',
        label: 'text-white/70',
        note: 'text-white/45',
        value: 'text-white',
        rule: 'border-white/10',
        strong: 'border-white/30',
        totalLabel: 'text-white',
        totalBg: 'bg-white/[0.06]',
      }
    : {
        heading: 'text-orange-ink',
        label: 'text-body',
        note: 'text-body/70',
        value: 'text-charcoal',
        rule: 'border-charcoal/10',
        strong: 'border-charcoal',
        totalLabel: 'text-charcoal',
        totalBg: 'bg-sand/70',
      };

  return (
    <div className={`space-y-8 ${className}`}>
      {groups.map((group, gi) => (
        <div key={group.heading ?? `group-${gi}`}>
          {group.heading ? (
            <h3 className={`mb-2 font-sans text-[11px] font-medium uppercase tracking-label ${tone.heading}`}>
              {group.heading}
            </h3>
          ) : null}

          <dl>
            {group.rows.map((row) => {
              const kind = row.kind ?? 'item';

              if (kind === 'total') {
                return (
                  <div
                    key={row.label}
                    className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-4 py-5 sm:px-5 ${tone.totalBg}`}
                  >
                    <dt
                      className={`text-[13px] font-semibold uppercase tracking-[0.1em] sm:text-sm ${tone.totalLabel}`}
                    >
                      {row.label}
                    </dt>
                    <dd className={`font-serif text-xl tabular-nums sm:text-2xl ${tone.value}`}>{row.value}</dd>
                  </div>
                );
              }

              const subtotal = kind === 'subtotal';
              return (
                <div
                  key={row.label}
                  className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 ${
                    subtotal ? `border-t-2 py-4 ${tone.strong}` : `border-b py-3.5 ${tone.rule}`
                  }`}
                >
                  <dt className="min-w-0">
                    <span
                      className={
                        subtotal
                          ? `text-[13px] font-semibold sm:text-[15px] ${tone.totalLabel}`
                          : `text-[13px] sm:text-[15px] ${tone.label}`
                      }
                    >
                      {row.label}
                    </span>
                    {row.note ? <span className={`mt-0.5 block text-[12px] ${tone.note}`}>{row.note}</span> : null}
                  </dt>
                  <dd
                    className={`font-serif tabular-nums ${
                      subtotal ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                    } ${tone.value}`}
                  >
                    {row.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      ))}
    </div>
  );
}
