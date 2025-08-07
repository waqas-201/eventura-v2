// Home.tsx
import { HeroVideo } from "@/components/landingPage/heroVide";
import styles from './main.module.css'
import PortfolioGrid from "@/components/landingPage/portfolioGrid";
import { ExperienceSection } from "@/components/landingPage/new/experianceSection";
import { Footer } from "@/components/landingPage/new/footer";
import JoinUsSection from "@/components/landingPage/new/joinUs";
import CarouselSection from "@/components/landingPage/new/sliderSection";
import { LeadingEvent } from "@/components/landingPage/new/leadingEvent";
import VerticalSliderSection from "@/components/landingPage/new/verticalLogoSection";
import MakersSection from "@/components/landingPage/makersection";

export default function Home() {
  return (
  <main className="flex flex-col items-center justify-center">
        <HeroVideo /> 
   <div className={`${styles.main} `}>
        <PortfolioGrid />
        <VerticalSliderSection />
        <ExperienceSection />
        <LeadingEvent/>
        <MakersSection />
        <JoinUsSection />
        {/* <CarouselSection/> */}
        <Footer/>
   </div>
  </main>
        
        
  );
}