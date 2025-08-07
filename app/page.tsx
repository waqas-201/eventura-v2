// Home.tsx
import { HeroVideo } from "@/components/landingPage/heroVide";
import { SliderTagLine } from "@/components/landingPage/sliderTagLine";
import { InfiniteSliderVertical } from "@/components/landingPage/verticalSlider";
import ColorChangeCards from "@/components/ui/colorCards";
import styles from './main.module.css'
import { GameChanging } from "@/components/landingPage/gameChanging";
import { GameChangingPic } from "@/components/landingPage/gameChanginPic";
import { Pov } from "@/components/landingPage/pov";
import { PovPic } from "@/components/landingPage/povPic";

export default function Home() {
  return (
  <main >
      {/* Hero - Full Bleed */}
        <HeroVideo /> 
   <div className={`${styles.main} `}>
      {/* Content Section */}
      <section className="flex  w-[80%] items-center justify-center ">
          <ColorChangeCards />
      </section> 
      {/* Slider and Tagline Section */}
      {/* <div className=" border  grid grid-cols-1 md:grid-cols-2 justify-between align-middle items-center "> */}
        <div className="grid  w-[80%]   gap-6 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">

        <SliderTagLine />
        <InfiniteSliderVertical />
      </div>
        {/* Game changin section  */}
        <section className="grid  w-[80%]   gap-16 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            <GameChanging/>
            <GameChangingPic />
        </section>


        {/* Game changin section  */}
          <section className="grid w-[80%] gap-16 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
              <PovPic/>
              <Pov />
          </section>
        
          {/* Headigs  */}

        

   </div>
     
  </main>
        
        
  );
}