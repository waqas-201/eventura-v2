// Home.tsx
import { HeroVideo } from "@/components/landingPage/heroVide";
import { SliderTagLine } from "@/components/landingPage/sliderTagLine";
import { InfiniteSliderVertical } from "@/components/landingPage/verticalSlider";
import ColorChangeCards from "@/components/ui/colorCards";
import styles from './main.module.css'

export default function Home() {
  return (
  <main >

      {/* Hero - Full Bleed */}
        <HeroVideo />
      
   
   <div className={`${styles.main} `}>


      {/* Content Section */}
      <section className={`${styles.cardSection} `}>
          <ColorChangeCards />
        </section> 
      {/* Slider and Tagline Section */}
      <div className=" max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] items-center px-4 sm:px-8 py-12">
        <SliderTagLine />
        <InfiniteSliderVertical />
      </div>
   </div>
        {/* Game changin section  */}
      <section>

      </section>
     
  </main>
        
        
  );
}