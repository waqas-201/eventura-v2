import { Button } from "@/components/ui/button"

export default function JoinUsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="max-w-6xl mx-auto ">
                <div className="bg-zinc-900  rounded-4xl   p-6 md:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content Area */}
                    <div className="space-y-6">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Join us
                        </h2>
                        <div className="w-24 h-1 bg-emerald-400 rounded-full" />
                        <p className="text-white text-base md:text-lg leading-relaxed max-w-lg">
                            People are at the center of everything we do. If you're looking for a dynamic opportunity for creativity and growth – we should talk.
                        </p>
                        <Button
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
                        >
                            MORE
                        </Button>
                    </div>

                    {/* Right Image Area */}
                    <div>
                        <img
                            src="/"
                            alt="Group photo of the team"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}