'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ExperienceSection() {
    return (
        <section className="bg-black text-white py-12 md:py-20">
            <div className="container mx-auto">
                {/* First Row - Game Changing Experiences */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-12 md:mb-20 lg:mb-24">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                                    <span className="bg-primary text-black px-2 py-1">GAME-CHANGING</span>
                                    <br />
                                    <span className="text-white">EXPERIENCES</span>
                                </h2>
                            </div>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                                Stronger brand affinity, deeper audience connections, tangible business growth and all the legendary
                                moments - GPJ is <span className="italic">redefining</span> sports experiences.
                            </p>
                        </div>
                        <div>
                            <Button
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-2 text-sm font-medium transition-all duration-300"
                            >
                                MORE
                            </Button>
                        </div>
                    </div>
                    {/* Right Image with animated border (right to left) */}
                    <div className="order-1 lg:order-2 relative z-10">
                        <motion.div
                            className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
                            initial={{ x: 20, y: 100 }}
                            animate={{ x: -20, y: 0 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                            }}
                        />
                        <div className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden border-2 border-transparent">
                            <Image
                                src="/cheering-sports-crowd.png"
                                alt="Sports event crowd"
                                fill
                                className="object-cover"
                            />
                           
                        </div>
                    </div>
                </div>
                {/* Second Row - GPJ POV */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Image with animated border (left to right) */}
                    <div className="order-1 relative">
                        <motion.div
                            className="absolute inset-0 border-2 border-teal-400 rounded-lg pointer-events-none"
                            initial={{ x: -20 }}
                            animate={{ x: 20 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                            }}
                        />
                        <div className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden border-2 border-transparent">
                            <Image
                                src="/abstract-geometric-shapes.png"
                                alt="Abstract geometric pattern"
                                fill
                                className="object-cover"
                            />
                            
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="flex flex-col justify-center space-y-6 order-2">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                                    <span className="bg-teal-400 text-black px-2 py-1">GPJ POV</span>
                                </h2>
                            </div>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                                We see things differently. Get clear insight into everything experience from the world's leading experts
                                on experiential marketing and design.
                            </p>
                        </div>
                        <div>
                            <Button
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-2 text-sm font-medium transition-all duration-300"
                            >
                                MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}