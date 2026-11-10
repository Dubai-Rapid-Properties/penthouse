import { options } from '@/data/property';
import OptionIcon from './ui/OptionIcon';
import Reveal from './ui/Reveal';

/**
 * "One Property. Four Possibilities." -- the four ways to use the unit, as
 * cards that each link down to their own feasibility study. Options 01 and 02
 * need no renovation and are listed first, so end-users see straight away
 * that the penthouse works as it is.
 */
export default function Possibilities() {
  return (
    <section id="options" className="section bg-sand">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{options.label}</p>
          <h2 className="mt-5 text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem]">{options.heading}</h2>
          <p className="mt-5 text-[15px] leading-relaxed sm:text-base">{options.intro}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl border-l-2 border-orange pl-5 font-serif text-xl italic leading-snug text-charcoal sm:pl-6 sm:text-2xl">
            {options.tagline}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {options.cards.map((card, i) => (
            <Reveal as="li" key={card.id} delay={i * 0.07} className="flex">
              <article className="flex w-full flex-col bg-white p-6 shadow-[0_1px_0_rgba(17,17,17,0.06)] ring-1 ring-inset ring-charcoal/10 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center bg-charcoal text-orange">
                    <OptionIcon icon={card.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-serif text-sm text-charcoal/40 tabular-nums">{card.number}</span>
                </div>

                <h3 className="mt-5 text-[1.45rem] leading-tight">{card.title}</h3>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-label text-orange-ink">{card.tag}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-body">{card.summary}</p>

                <span
                  className={`mt-4 inline-flex self-start px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                    card.renovation === 'none' ? 'bg-charcoal text-white' : 'bg-bone text-charcoal ring-1 ring-inset ring-charcoal/15'
                  }`}
                >
                  {card.renovation === 'none' ? 'No renovation required' : 'Optional renovation'}
                </span>

                <ul className="mt-5 space-y-2.5 border-t border-charcoal/10 pt-5">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[13px] leading-snug text-body">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="mt-px h-4 w-4 flex-none text-orange"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* mt-auto pins the figure and button to the foot of the card so all four line up */}
                <div className="mt-auto pt-6">
                  <p className="text-[10px] uppercase tracking-label text-charcoal/55">{card.figure.label}</p>
                  <p className="mt-1.5 font-serif text-lg leading-snug text-charcoal tabular-nums">{card.figure.value}</p>

                  <a
                    href={`#${card.id}`}
                    className="btn-ghost-dark mt-5 w-full whitespace-nowrap px-4 py-3 text-[11px] tracking-[0.12em] sm:text-[12px]"
                    aria-label={`Explore this option: ${card.title}`}
                  >
                    Explore This Option
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-[12px] text-body/80">{options.footnote}</p>
      </div>
    </section>
  );
}
