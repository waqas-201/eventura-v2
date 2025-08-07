import { Button } from "@/components/ui/button"

export default function MakersSection() {
    return (
        <section className="bg-black py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">

                {/* Meet the Makers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="inline-block">
                            <h2 className="bg-primary text-black text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-3 inline-block">
                                MEET THE MAKERS
                            </h2>
                        </div>
                        <p className="text-white text-base md:text-lg leading-relaxed max-w-lg">
                            Our experiences are made for and by humans. Meet some of the brilliant thinkers, designers and craftspeople who make us, us.
                        </p>
                        <Button
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
                        >
                            MORE
                        </Button>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <div className="border-2 border-primary rounded-lg p-2">
                                <img
                                    src="/jeep-showroom-.png"
                                    alt="Jeep car showroom exhibition"
                                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience at Heart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="order-1">
                        <div className="relative">
                            <div className="border-2 border-primary rounded-lg p-2">
                                <img
                                    src="/"
                                    alt="Abstract digital environment with purple and pink colors"
                                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 order-2">
                        <div className="inline-block">
                            <h2 className="bg-primary text-black text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-3 inline-block">
                                EXPERIENCE AT HEART
                            </h2>
                        </div>
                        <p className="text-white text-base md:text-lg leading-relaxed max-w-lg">
                            We are a community made up of people passionate about what we do. That passion manifests in all shapes and sizes, from those who sweat the details to those who dream big – and everywhere in between.
                        </p>
                        <Button
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
                        >
                            MORE
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    )
}
