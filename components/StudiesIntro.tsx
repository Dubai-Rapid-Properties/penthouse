import { options, studies } from '@/data/property';
import Reveal from './ui/Reveal';

/**
 * Charcoal band that opens the detailed numbers. It marks the shift from
 * "which option suits you" to "the full feasibility", and doubles as a jump
 * menu to each study.
 */
export default function StudiesIntro() {
  return (
    <section id="feasibility" className="on-dark bg-charcoal">
      <div className="shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow eyebrow-on-dark">{studies.label}</p>
            <h2 className="mt-5 text-[1.9rem] leading-[1.12] text-bone sm:text-[2.4rem]">{studies.heading}</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">{studies.intro}</p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <nav aria-label="Feasibility studies">
              <ul className="grid grid-cols-2 gap-px bg-white/10">
                {options.cards.map((card) => (
                  <li key={card.id} className="bg-charcoal">
                    <a
                      href={`#${card.id}`}
                      className="flex h-full flex-col gap-1 px-4 py-4 transition-colors hover:bg-white/[0.06] sm:px-5"
                    >
                      <span className="font-serif text-sm text-orange tabular-nums">{card.number}</span>
                      <span className="text-[14px] leading-snug text-white">{card.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
