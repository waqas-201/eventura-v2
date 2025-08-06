// Home.tsx
import { HeroVideo } from "@/components/landingPage/heroVide";
import { SliderTagLine } from "@/components/landingPage/sliderTagLine";
import { InfiniteSliderVertical } from "@/components/landingPage/verticalSlider";
import ColorChangeCards from "@/components/ui/colorCards";
import styles from './main.module.css'

export default function Home() {
  return (
  <main className={styles.main}>

      {/* Hero - Full Bleed */}
         <section className="w-full h-full">
        <HeroVideo />
      </section>

      {/* Content Section */}
      <section className={`${styles.cardSection} `}>
          <ColorChangeCards />
        </section> 
      {/* Slider and Tagline Section */}
      <div className=" w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] items-center px-4 sm:px-8 py-12">
        <SliderTagLine />
        <InfiniteSliderVertical />
      </div>


     
  </main>
        
        
  );
}