import { optionCombined } from '@/data/property';
import BackToOptions from './ui/BackToOptions';
import Ledger from './ui/Ledger';
import ProjectedBadge from './ui/ProjectedBadge';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/**
 * Option 04 -- renovate, let for a year, then sell. Net rent stacks on top of
 * the resale gain. Runs on charcoal to stand apart from the light sections
 * either side.
 */
export default function OptionCombined() {
  return (
    <section id={optionCombined.id} className="on-dark bg-charcoal">
      <div className="shell section">
        <SectionHeading
          label={optionCombined.label}
          heading={optionCombined.heading}
          intro={optionCombined.intro}
          onDark
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <Ledger groups={optionCombined.ledger} onDark />
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {/* Rental yields */}
            <Reveal delay={0.06}>
              <dl className="grid grid-cols-2 border border-white/15">
                {optionCombined.yields.map((y, i) => (
                  <div key={y.label} className={`px-5 py-6 ${i === 1 ? 'border-l border-white/15' : ''}`}>
                    <dt className="text-[11px] uppercase tracking-label text-white/55">{y.label}</dt>
                    <dd className="mt-3 font-serif text-[2rem] leading-none text-white tabular-nums">{y.value}</dd>
                    <dd className="mt-2 text-[11px] text-white/45">{y.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Headline outcome */}
            {optionCombined.results.map((item, i) => (
              <Reveal key={item.label} delay={0.1 + i * 0.06}>
                <div className="border border-orange/50 px-6 py-7 sm:px-8 sm:py-8">
                  <p className="text-[11px] font-medium uppercase tracking-label text-orange">{item.label}</p>
                  <p className="mt-4 font-serif text-[1.65rem] leading-[1.15] text-orange tabular-nums sm:text-[2rem]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[12px] text-white/55">{item.note}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <ProjectedBadge onDark />
              <p className="mt-4 flex items-baseline gap-3 text-[13px] leading-relaxed text-white/60 sm:text-sm">
                <span aria-hidden="true" className="mt-2 h-px w-6 flex-none bg-orange" />
                {optionCombined.comparison}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12">
          <BackToOptions onDark />
        </div>
      </div>
    </section>
  );
}
