import { optionRent } from '@/data/property';
import BackToOptions from './ui/BackToOptions';
import Ledger from './ui/Ledger';
import ProjectedBadge from './ui/ProjectedBadge';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/** Option 02 -- buy and let the unit as it is, shown gross and net. */
export default function OptionRent() {
  return (
    <section id={optionRent.id} className="section bg-white">
      <div className="shell">
        <SectionHeading label={optionRent.label} heading={optionRent.heading} intro={optionRent.intro} />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Purchase costs */}
          <Reveal className="lg:col-span-5">
            <Ledger groups={[optionRent.purchase]} />
          </Reveal>

          {/* Gross rental positions */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <h3 className="mb-4 font-sans text-[11px] font-medium uppercase tracking-label text-orange-ink">
              {optionRent.rentalsHeading}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-3">
              {optionRent.rentals.map((rental) => (
                <li
                  key={`${rental.type}-${rental.terms}`}
                  className={`flex flex-col justify-between p-6 ${
                    rental.highlight ? 'bg-sand ring-1 ring-inset ring-orange/45' : 'border border-charcoal/15 bg-white'
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-label text-charcoal/60">{rental.type}</p>
                  <p
                    className={`mt-4 font-serif text-[1.5rem] leading-none tabular-nums ${
                      rental.highlight ? 'text-orange-ink' : 'text-charcoal'
                    }`}
                  >
                    {rental.amount}
                  </p>
                  <p className="mt-3 text-[12px] text-body">{rental.terms}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Gross -> net */}
        <Reveal delay={0.05}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-3 sm:mt-16">
            <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{optionRent.netHeading}</h3>
            <ProjectedBadge />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {optionRent.net.map((scenario, i) => (
            <Reveal key={scenario.heading} delay={i * 0.08}>
              <div className="flex h-full flex-col border border-charcoal/15 p-6 sm:p-8">
                <Ledger groups={[{ heading: scenario.heading, rows: scenario.rows }]} />
                <dl className="mt-6 grid grid-cols-2">
                  {scenario.yields.map((y, yi) => (
                    <div key={y.label} className={`px-5 py-5 ${yi === 0 ? 'bg-sand' : 'bg-charcoal'}`}>
                      <dt
                        className={`text-[11px] uppercase tracking-label ${yi === 0 ? 'text-charcoal/60' : 'text-white/60'}`}
                      >
                        {y.label}
                      </dt>
                      <dd
                        className={`mt-2 font-serif text-[2rem] leading-none tabular-nums sm:text-[2.4rem] ${
                          yi === 0 ? 'text-charcoal' : 'text-orange'
                        }`}
                      >
                        {y.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-[12px] text-body/80">{optionRent.yieldBasis}</p>

        {/* Assumptions */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="h-full border border-charcoal/15 p-7 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-label text-charcoal/60">{optionRent.appreciation.heading}</h3>
              <p className="mt-4 font-serif text-xl text-charcoal sm:text-2xl">{optionRent.appreciation.value}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-body">{optionRent.appreciation.note}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full border border-charcoal/15 p-7 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-label text-charcoal/60">{optionRent.rationale.heading}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-body">{optionRent.rationale.body}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-5 border-l-2 border-orange bg-sand/50 px-6 py-6 sm:px-8">
            <h3 className="text-[11px] uppercase tracking-label text-orange-ink">{optionRent.importantNote.heading}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal sm:text-[15px]">
              {optionRent.importantNote.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <BackToOptions />
        </div>
      </div>
    </section>
  );
}
