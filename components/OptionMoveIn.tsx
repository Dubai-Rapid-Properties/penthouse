import { optionMoveIn } from '@/data/property';
import BackToOptions from './ui/BackToOptions';
import Ledger from './ui/Ledger';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/** Option 01 -- buy the unit and live in it as it is. */
export default function OptionMoveIn() {
  return (
    <section id={optionMoveIn.id} className="section bg-bone">
      <div className="shell">
        <SectionHeading label={optionMoveIn.label} heading={optionMoveIn.heading} intro={optionMoveIn.intro} />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <Ledger groups={optionMoveIn.ledger} />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="h-full bg-sand p-7 sm:p-9">
              <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{optionMoveIn.highlights.heading}</h3>
              <ul className="mt-5 space-y-3">
                {optionMoveIn.highlights.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-body sm:text-[15px]">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 flex-none bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="my-7 h-px w-full bg-charcoal/15" />

              <h3 className="text-[11px] font-medium uppercase tracking-label text-orange-ink">
                {optionMoveIn.optionalNote.heading}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-body">{optionMoveIn.optionalNote.body}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <BackToOptions />
        </div>
      </div>
    </section>
  );
}
