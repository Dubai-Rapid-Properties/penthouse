import Image from 'next/image';
import { location } from '@/data/property';
import Reveal from './ui/Reveal';
import ScrollableMap from './ui/ScrollableMap';
import SectionHeading from './ui/SectionHeading';

/**
 * Location: the branded DRP map from the investment deck, then an interactive
 * Google map, with approximate drive times alongside.
 */
export default function Location() {
  return (
    <section id="location" className="section bg-bone">
      <div className="shell">
        <SectionHeading label={location.label} heading={location.heading} intro={location.intro} />

        {/* Branded location map. Scrolls sideways on small screens so the
            street labels stay legible rather than shrinking to nothing. */}
        <Reveal className="mt-12 lg:mt-16">
          <figure className="border border-charcoal/10 bg-white">
            <ScrollableMap>
              <Image
                src={location.mapImage}
                alt={location.mapImageAlt}
                width={location.mapImageWidth}
                height={location.mapImageHeight}
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1248px"
                className="h-auto w-full min-w-[680px] sm:min-w-0"
              />
            </ScrollableMap>
            <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-charcoal/10 px-5 py-3.5 text-[11px] uppercase tracking-label text-charcoal/55 sm:px-7">
              <span>Park Towers within DIFC — Dubai Rapid Properties</span>
              <span className="text-orange-ink sm:hidden">Scroll to explore</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          {/* Interactive map */}
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col border border-charcoal/10 bg-white">
              <iframe
                src={location.embedSrc}
                title={location.embedTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[320px] w-full flex-1 border-0 sm:h-[420px] lg:h-auto lg:min-h-[440px]"
              />
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 border-t border-charcoal/10 px-5 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-charcoal transition-colors hover:bg-sand/50 sm:px-7"
              >
                <span className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-orange" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  {location.mapsLinkLabel}
                </span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>

          {/* Drive times */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col border border-charcoal/10 bg-white p-7 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-label text-charcoal/60">Getting around</h3>

              <ul className="mt-5 flex-1">
                {location.landmarks.map((landmark) => (
                  <li
                    key={landmark.name}
                    className="flex items-baseline justify-between gap-5 border-b border-charcoal/10 py-3.5 last:border-b-0"
                  >
                    <span className="text-[14px] text-body sm:text-[15px]">{landmark.name}</span>
                    <span className="whitespace-nowrap font-serif text-base text-charcoal tabular-nums sm:text-lg">
                      {landmark.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-charcoal/10 pt-4 text-[12px] text-body/80">
                {location.driveTimesNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
