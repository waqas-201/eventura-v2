import PortfolioCard from "./PortfolioCard"
import { Button } from "@/components/ui/button"

export default function PortfolioGrid() {
    return (
        <section className="bg-black py-12 md:py-20 hidden md:block">
            <div className="mx-auto">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">

                    <PortfolioCard
                        image="/eventCard.png"
                        alt="IBM Think interactive display"
                        title="Think Interactive Experience"
                        logoAlt="some logo"
                        logoImage="/clients-logo/36.png"
                    />

                    <PortfolioCard
                        image="/eventCard.png"
                        alt="DP World ICC Cricket World Cup"
                        title="Cricket World Cup Experience"
                        logoAlt="some logo"
                        logoImage="/clients-logo/36.png"
                    />

                    <PortfolioCard
                        image="/eventCard.png"
                        alt="DP World Tour event"
                        title="Golf Championship Series"
                        logoAlt="some logo"
                        logoImage="/clients-logo/36.png"
                    />

                    <PortfolioCard
                        image="/eventCard.png"
                        alt="Adobe conference space"
                        title="Creative Conference Summit"
                        logoAlt="some logo"
                        logoImage="/clients-logo/36.png"
                    />

                    <PortfolioCard
                        image="/eventCard.png"
                        alt="Adobe conference space"
                        logoAlt="some logo"
                        logoImage="/clients-logo/36.png"
                        title="Creative Conference Summit"
                    />


                    {/* CTA Card */}
                    <div className="flex aspect-[16/9] cursor-pointer flex-col items-center justify-center rounded-lg bg-primary p-8 text-center transition-colors duration-300 hover:bg-primary/80">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
                                    EXPERIENCE
                                </h3>
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
