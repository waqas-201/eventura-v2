'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { TextRoll } from '../motion-primitives/text-roll';

export default function MakersSection() {
    return (
        <section className="bg-black py-16 md:py-24 px-4 text-white">
            <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">

                {/* Meet the Makers */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="inline-block">
                            <TextRoll className="bg-primary text-black text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-3 inline-block">
                                MEET THE MAKERS
                            </TextRoll>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed max-w-lg text-gray-300">
                            Our experiences are made for and by humans. Meet some of the brilliant thinkers, designers and craftspeople who make us, us.
                        </p>
                        <Button
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
                        >
                            MORE
                        </Button>
                    </div>

                    {/* Image with animated border */}
                    <div className="order-1 lg:order-2 relative w-full lg:max-w-[600px] mx-auto">
                        <div className="relative aspect-video lg:aspect-[4/2.6] rounded-lg overflow-hidden border-2 border-transparent">
                            <Image
                                src="/eventCard.png"
                                alt="Jeep car showroom exhibition"
                                fill
                                className="object-cover rounded-[10px]"
                            />
                        </div>
                        <motion.div
                            initial={{ x: 0, y: 0 }}
                            whileInView={{ x: 18, y: -18 }}
                            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
                            className="absolute inset-0 border-3 border-primary rounded-[10px] z-50 pointer-events-none"
                        />
                    </div>
                </div>

                {/* Experience at Heart */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-8 lg:gap-16 items-center">

                    {/* Image with animated border */}
                    <div className="order-1 relative w-full lg:max-w-[600px] mx-auto">
                        <div className="relative aspect-video lg:aspect-[4/2.6] rounded-lg overflow-hidden border-2 border-transparent">
                            <Image
                                src="/eventCard.png"
                                alt="Abstract digital environment with purple and pink colors"
                                fill
                                className="object-cover rounded-[10px]"
                            />
                        </div>
                        <motion.div
                            initial={{ x: 0, y: 0 }}
                            whileInView={{ x: -18, y: -18 }}
                            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
                            className="absolute inset-0 border-3 border-primary rounded-[10px] z-50 pointer-events-none"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 order-2">
                        <div className="inline-block">
                            <TextRoll className="bg-primary text-black text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-3 inline-block">
                                EXPERIENCE AT HEART
                            </TextRoll>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed max-w-lg text-gray-300">
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
    );
}
