import { optionResale } from '@/data/property';
import BackToOptions from './ui/BackToOptions';
import Ledger from './ui/Ledger';
import ProjectedBadge from './ui/ProjectedBadge';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/** Option 03 -- optional value-add: renovate, then resell. */
export default function OptionResale() {
  const { comparables } = optionResale;

  return (
    <section id={optionResale.id} className="section bg-bone">
      <div className="shell">
        <SectionHeading label={optionResale.label} heading={optionResale.heading} intro={optionResale.intro} />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <Ledger groups={optionResale.ledger} />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="h-full bg-sand p-7 sm:p-9">
              <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{optionResale.renovation.heading}</h3>
              <p className="mt-4 font-serif text-2xl text-orange-ink sm:text-[1.75rem]">
                {optionResale.renovation.budget}
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-body">{optionResale.renovation.scope}</p>

              <div className="my-6 h-px w-full bg-charcoal/15" />

              <p className="text-[11px] uppercase tracking-label text-charcoal/60">
                {optionResale.renovation.timelineLabel}
              </p>
              <p className="mt-2 font-serif text-xl text-charcoal sm:text-2xl">{optionResale.renovation.timeline}</p>
              <p className="mt-5 text-[14px] leading-relaxed text-body">{optionResale.renovation.exit}</p>
            </div>
          </Reveal>
        </div>

        {/* Headline outcome */}
        <Reveal delay={0.05}>
          <div className="mt-10 bg-orange-deep px-7 py-8 sm:px-10 sm:py-9">
            <ProjectedBadge onDark />
            <dl className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
              {optionResale.results.map((result) => (
                <div key={result.label}>
                  <dt className="text-[11px] font-medium uppercase tracking-label text-white/85 sm:text-xs">
                    {result.label}
                  </dt>
                  <dd className="mt-3">
                    <span className="block font-serif text-[1.65rem] leading-tight text-white tabular-nums sm:text-[2.1rem] lg:text-[2.4rem]">
                      {result.value}
                    </span>
                    <span className="mt-2 block text-[12px] text-white/80">{result.note}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Comparables */}
        <Reveal delay={0.05}>
          <div className="mt-14 sm:mt-16">
            <h3 className="text-[11px] font-medium uppercase tracking-label text-charcoal/70 sm:text-xs">
              {comparables.heading}
            </h3>

            {/* The subject unit first, so the entry rate reads directly
                against the district rate below it. */}
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 bg-sand px-6 py-5 ring-1 ring-inset ring-orange/40 sm:px-7 sm:py-6">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-lg text-charcoal">{comparables.subject.name}</span>
                <span className="text-[12px] uppercase tracking-label text-charcoal/60">
                  {comparables.subject.sizeLabel}
                </span>
              </span>
              <span className="flex items-baseline gap-3 sm:gap-4">
                <span className="font-serif text-lg text-charcoal tabular-nums">{comparables.subject.price}</span>
                <span className="font-serif text-lg text-orange-ink tabular-nums">{comparables.subject.rate}</span>
              </span>
            </div>

            <ul className="mt-4 grid gap-px border-t border-charcoal/15 sm:grid-cols-2 sm:gap-4 sm:border-t-0">
              {comparables.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-charcoal/10 py-4 sm:border sm:border-charcoal/15 sm:px-6 sm:py-6"
                >
                  <span className="font-serif text-lg text-charcoal">{item.name}</span>
                  <span className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-serif text-lg text-charcoal tabular-nums">{item.price}</span>
                    <span className="text-[12px] text-body tabular-nums sm:text-[13px]">{item.rate}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-body sm:text-[15px]">{comparables.note}</p>
            <p className="mt-3 text-[12px] text-body/80">{comparables.footnote}</p>
          </div>
        </Reveal>

        <div className="mt-10">
          <BackToOptions />
        </div>
      </div>
    </section>
  );
}
