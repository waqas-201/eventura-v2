import { Button } from "@/components/ui/button";

export default function PortfolioGrid() {
    return (
        <section className="bg-black py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Meta Project */}
                    <div className="relative group overflow-hidden rounded-lg aspect-[16/9] cursor-pointer">
                        <img
                            src="/circular-tech-exhibition.png"
                            alt="Meta exhibition space"
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        {/* Logo - stays on right */}
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="text-white font-bold text-xl bg-black/50 px-3 py-2 rounded">
                                Meta
                            </div>
                        </div>
                        {/* Sliding card from logo */}
                        <div className="absolute bottom-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-10">
                            <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg min-w-[180px]">
                                <h3 className="text-white text-base font-semibold">Meta Conversations</h3>
                            </div>
                        </div>
                    </div>
                    {/* IBM Think Project */}
                    <div className="relative group overflow-hidden rounded-lg aspect-[16/9] cursor-pointer">
                        <img
                            src="/interactive-think-display.png"
                            alt="IBM Think interactive display"
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="text-white font-bold text-xl bg-black/50 px-3 py-2 rounded">
                                IBM
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-10">
                            <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg min-w-[180px]">
                                <h3 className="text-white text-base font-semibold">Think Interactive Experience</h3>
                            </div>
                        </div>
                    </div>
                    {/* Cricket World Cup Project */}
                    <div className="relative group overflow-hidden rounded-lg aspect-[16/9] cursor-pointer">
                        <img
                            src="/cricket-stadium-event.png"
                            alt="DP World ICC Cricket World Cup"
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="text-white font-bold text-sm bg-black/50 px-3 py-2 rounded">
                                DP WORLD
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-10">
                            <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg min-w-[180px]">
                                <h3 className="text-white text-base font-semibold">Cricket World Cup Experience</h3>
                            </div>
                        </div>
                    </div>
                    {/* DP World Tour Project */}
                    <div className="relative group overflow-hidden rounded-lg aspect-[16/9] cursor-pointer">
                        <img
                            src="/outdoor-golf-event.png"
                            alt="DP World Tour event"
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="text-white font-bold text-xs bg-black/50 px-3 py-2 rounded">
                                DP WORLD TOUR
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-10">
                            <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg min-w-[180px]">
                                <h3 className="text-white text-base font-semibold">Golf Championship Series</h3>
                            </div>
                        </div>
                    </div>
                    {/* Adobe Conference Project */}
                    <div className="relative group overflow-hidden rounded-lg aspect-[16/9] cursor-pointer">
                        <img
                            src="/adobe-conference-presentation.png"
                            alt="Adobe conference space"
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="text-white font-bold text-xl bg-black/50 px-3 py-2 rounded">
                                Adobe
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-10">
                            <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg min-w-[180px]">
                                <h3 className="text-white text-base font-semibold">Creative Conference Summit</h3>
                            </div>
                        </div>
                    </div>
                    {/* Experience Work CTA Card */}
                    <div className="bg-emerald-400 rounded-lg aspect-[16/9] flex flex-col justify-center items-center p-8 text-center hover:bg-emerald-300 transition-colors duration-300 cursor-pointer">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    EXPERIENCE
                                </h3>
                                <h3 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight border-2 border-black px-2 inline-block">
                                    WORK
                                </h3>
                            </div>
                            <Button
                                variant="outline"
                                className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-emerald-400 font-semibold px-8 py-2 rounded-full transition-all duration-300"
                            >
                                EXPLORE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}