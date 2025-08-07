import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PortfolioGrid() {
    return (
        <section className="bg-black py-12 md:py-20">
            <div className="mx-auto">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                    {/* Meta Project */}
                    <div className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg">
                        <Image
                            src="/circular-tech-exhibition.png"
                            alt="Meta exhibition space"
                            width={1280}
                            height={720}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="h-full w-full object-cover transition-all duration-500 group-hover:grayscale-0"
                        />
                        {/* Logo - stays on right */}
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="rounded bg-black/50 px-3 py-2 text-xl font-bold text-white">Meta</div>
                        </div>
                        {/* Sliding card from logo */}
                        <div className="absolute bottom-4 right-4 z-10 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0">
                            <div className="min-w-[180px] rounded-lg bg-black/90 px-4 py-2 backdrop-blur-sm">
                                <h3 className="text-base font-semibold text-white">Meta Conversations</h3>
                            </div>
                        </div>
                    </div>
                    {/* IBM Think Project */}
                    <div className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg">
                        <Image
                            src="/interactive-think-display.png"
                            alt="IBM Think interactive display"
                            width={1280}
                            height={720}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="h-full w-full object-cover transition-all duration-500 group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="rounded bg-black/50 px-3 py-2 text-xl font-bold text-white">IBM</div>
                        </div>
                        <div className="absolute bottom-4 right-4 z-10 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0">
                            <div className="min-w-[180px] rounded-lg bg-black/90 px-4 py-2 backdrop-blur-sm">
                                <h3 className="text-base font-semibold text-white">Think Interactive Experience</h3>
                            </div>
                        </div>
                    </div>
                    {/* Cricket World Cup Project */}
                    <div className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg">
                        <Image
                            src="/cricket-stadium-event.png"
                            alt="DP World ICC Cricket World Cup"
                            width={1280}
                            height={720}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="h-full w-full object-cover transition-all duration-500 group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="rounded bg-black/50 px-3 py-2 text-sm font-bold text-white">DP WORLD</div>
                        </div>
                        <div className="absolute bottom-4 right-4 z-10 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0">
                            <div className="min-w-[180px] rounded-lg bg-black/90 px-4 py-2 backdrop-blur-sm">
                                <h3 className="text-base font-semibold text-white">Cricket World Cup Experience</h3>
                            </div>
                        </div>
                    </div>
                    {/* DP World Tour Project */}
                    <div className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg">
                        <Image
                            src="/outdoor-golf-event.png"
                            alt="DP World Tour event"
                            width={1280}
                            height={720}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="h-full w-full object-cover transition-all duration-500 group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="rounded bg-black/50 px-3 py-2 text-xs font-bold text-white">DP WORLD TOUR</div>
                        </div>
                        <div className="absolute bottom-4 right-4 z-10 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0">
                            <div className="min-w-[180px] rounded-lg bg-black/90 px-4 py-2 backdrop-blur-sm">
                                <h3 className="text-base font-semibold text-white">Golf Championship Series</h3>
                            </div>
                        </div>
                    </div>
                    {/* Adobe Conference Project */}
                    <div className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg">
                        <Image
                            src="/adobe-conference-presentation.png"
                            alt="Adobe conference space"
                            width={1280}
                            height={720}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="h-full w-full object-cover transition-all duration-500 group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                            <div className="rounded bg-black/50 px-3 py-2 text-xl font-bold text-white">Adobe</div>
                        </div>
                        <div className="absolute bottom-4 right-4 z-10 transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0">
                            <div className="min-w-[180px] rounded-lg bg-black/90 px-4 py-2 backdrop-blur-sm">
                                <h3 className="text-base font-semibold text-white">Creative Conference Summit</h3>
                            </div>
                        </div>
                    </div>
                    {/* Experience Work CTA Card */}
                    <div className="flex aspect-[16/9] cursor-pointer flex-col items-center justify-center rounded-lg bg-primary p-8 text-center transition-colors duration-300 hover:bg-primary/80">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">EXPERIENCE</h3>
                                <h3 className="inline-block border-2 border-black px-2 text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
                                    WORK
                                </h3>
                            </div>
                            <Button
                                variant="outline"
                                className="rounded-full border-2 border-black bg-transparent px-8 py-2 font-semibold text-black transition-all duration-300 hover:bg-black hover:text-primary"
                            >
                                EXPLORE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
