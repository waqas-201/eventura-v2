import { Button } from "../ui/button";




export const Pov = () => {
    return (
        <div className="flex flex-col   items-start justify-baseline  h-full md:gap-6 gap-4 order-1 md:order-2    ">
            {/* Heading */}
            <h1 className="font-extrabold text-3xl md:text-6xl text-center">
                <div className="flex flex-col items-start gap-1">
                    <span className="bg-primary/90 text-black px-2">GPJ POV

                    </span>



                </div>
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-left">
                We see things differently. Get clear insight into everything experience from the world’s leading experts on experiential marketing and design.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
                <Button
                    variant="outline"
                    className="rounded-full font-extrabold text-lg px-6 py-3 border-white border-2 hover:bg-white transition-all duration-300"
                >
                    More
                </Button>
            </div>
        </div>
    );
};
