import Assumptions from '@/components/Assumptions';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import MobileCtaBar from '@/components/MobileCtaBar';
import OptionCombined from '@/components/OptionCombined';
import OptionMoveIn from '@/components/OptionMoveIn';
import OptionRent from '@/components/OptionRent';
import OptionResale from '@/components/OptionResale';
import Opportunity from '@/components/Opportunity';
import Possibilities from '@/components/Possibilities';
import QuickFacts from '@/components/QuickFacts';
import StudiesIntro from '@/components/StudiesIntro';

export default function Page() {
  return (
    <>
      <Header />
      {/* room for the mobile CTA bar so it never covers the disclaimer */}
      <main className="pb-[76px] md:pb-0">
        <Hero />
        <QuickFacts />
        <Opportunity />
        {/* The four ways to use the unit, then the detail behind each one */}
        <Possibilities />
        <Gallery />
        <StudiesIntro />
        <OptionMoveIn />
        <OptionRent />
        <OptionResale />
        <OptionCombined />
        <Assumptions />
        <Location />
        <FinalCta />
        <Footer />
      </main>
      <MobileCtaBar />
    </>
  );
}
