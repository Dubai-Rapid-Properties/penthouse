import { assumptions } from '@/data/property';
import Reveal from './ui/Reveal';

/** The basis behind every figure, and the projected-not-guaranteed statement. */
export default function Assumptions() {
  return (
    <section id="assumptions" className="section bg-white">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">{assumptions.label}</p>
          <h2 className="mt-5 text-[1.9rem] leading-[1.12] sm:text-[2.4rem]">{assumptions.heading}</h2>
          <p className="mt-5 text-[15px] leading-relaxed">{assumptions.intro}</p>
          <p className="mt-6 border-l-2 border-orange bg-sand/50 px-5 py-4 text-[13px] leading-relaxed text-charcoal">
            {assumptions.projectedNote}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <ol className="border-t border-charcoal/15">
            {assumptions.items.map((item, i) => (
              <li key={item} className="flex gap-5 border-b border-charcoal/10 py-4">
                <span className="w-6 flex-none font-serif text-sm text-orange-ink tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[14px] leading-relaxed text-body">{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
