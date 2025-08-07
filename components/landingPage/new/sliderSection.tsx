'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const carouselItems = [
    { src: '/singapore-team.png', alt: 'Team in Singapore', location: 'SINGAPORE' },
    { src: '/stuttgart-team.png', alt: 'Team in Stuttgart', location: 'STUTTGART' },
    { src: '/sydney-team.png', alt: 'Team in Sydney', location: 'SYDNEY' },
    { src: '/beijing-team.png', alt: 'Team in Beijing', location: 'BEIJING' },
];

export default function CarouselSection() {
    const duplicatedItems = [...carouselItems, ...carouselItems];

    return (
        <section className="bg-black py-12 md:py-20 overflow-hidden">
            <div className="relative w-full">
                <motion.div
                    className="flex group"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                        duration: 20,
                    }}
                >
                    {duplicatedItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[calc(100vw/1)] md:w-[calc(100vw/1.5)] lg:w-[calc(100vw/2)] xl:w-[calc(100vw/2.5)] relative"
                        >
                            <Image
                                src={item.src || '/placeholder.svg'}
                                alt={item.alt}
                                width={1200}
                                height={1600}
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-base font-semibold px-4 py-2 rounded-md">
                                {item.location}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
