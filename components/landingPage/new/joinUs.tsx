'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function JoinUsSection() {
    return (
        <section className="bg-black py-12 md:py-20 md:px-4 ">
            <div className="max-w-7xl mx-auto">
                <div className="bg-zinc-900 rounded-[0.5rem] p-6 md:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Content Area */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="inline-block">
                            <h2 className="bg-primary text-black text-2xl md:text-3xl lg:text-4xl font-bold  px-6 py-3 inline-block">
                                JOIN US
                            </h2>
                        </div>
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
                    <div className="order-1 lg:order-2">
                        <div className="relative w-full h-[100px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                            <Image
                                src="/eventCard.png" // Replace with your actual image path
                                alt="Group photo of the team"
                                fill
                                className="object-cover rounded-[0.5rem]"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
