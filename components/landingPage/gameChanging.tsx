import { Button } from "../ui/button";




export const GameChanging = () => {
    return (
        <div className="flex flex-col  items-start justify-baseline  h-full md:gap-6 gap-4  ">
            {/* Heading */}
            <h1 className="font-extrabold text-3xl md:text-6xl text-center">
                <div className="flex flex-col items-start gap-1">
                    <span className="bg-primary/90 text-black px-2">Game-Changing </span>          
                    <span className="bg-primary/90 text-black px-2">Experiences</span>
                        
                </div>
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-left">
                Stronger brand affinity, deeper audience connections, tangible business growth and all the legendary moments – GPJ is  
                <span className="font-semibold text-primary"> redefining </span> 
                
                
                sports
                experiences.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
                <Button
                    variant="outline"
                    className="rounded-full font-extrabold text-lg px-6 py-3 hover:bg-white transition-all duration-300"
                >
                    More
                </Button>
            </div>

        </div>
    );
};
