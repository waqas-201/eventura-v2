// Home.tsx
import styles from './main.module.css'
import PortfolioGrid from "@/components/landingPage/portfolioGrid";
import { ExperienceSection } from "@/components/landingPage/new/experianceSection";
import { Footer } from "@/components/landingPage/new/footer";
import JoinUsSection from "@/components/landingPage/new/joinUs";
import { LeadingEvent } from "@/components/landingPage/new/leadingEvent";
import VerticalSliderSection from "@/components/landingPage/new/verticalLogoSection";
import MakersSection from "@/components/landingPage/makersection";
import Hero from "@/components/landingPage/Hero";
import { TextScramble } from '@/components/motion-primitives/text-scramble';

export default function Home() {
  return (
  <main className="flex flex-col items-center justify-center">
      {/* <HeroVideo />  */}
      <Hero />
      <div className='w-[95%] sm:w-[88%] md:w-[75%]'>
        <PortfolioGrid />
        <VerticalSliderSection />
        <ExperienceSection />
        <LeadingEvent/>
        <MakersSection />
        <JoinUsSection />
        {/* <CarouselSection/> */}
        <Footer />

   </div>
  </main>
        
        
  );
}