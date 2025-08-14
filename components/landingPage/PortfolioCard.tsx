"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

type PortfolioCardProps = {
    image: string
    alt: string
    logoImage: string
    logoAlt: string
    title: string // e.g. "DP WORLD CHALET @ HERO INDIAN OPEN"
}

export default function PortfolioCard({ image, alt, logoImage, logoAlt, title }: PortfolioCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Image */}
            <Image
                src={image || "/placeholder.svg"}
                alt={alt}
                width={1280}
                height={720}
                className={`h-full w-full object-cover transition-all duration-500 ${isHovered ? "filter-none" : "grayscale sepia-[0.6] hue-rotate-[90deg] saturate-[1.2] brightness-90"
                    }`}
            />

            <div className="absolute bottom-4 right-4 z-20 flex items-center">
                {/* Sliding content panel that comes from inside the logo */}
                <motion.div
                    className="flex items-center overflow-hidden rounded-l bg-black/70 backdrop-blur-sm"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                        width: isHovered ? Math.min(340, title.length * 8 + 40) : 0,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.6,
                    }}
                    style={{ height: 60 }}
                >
                    <motion.div
                        className="px-3 text-white font-medium text-sm whitespace-nowrap"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : 20,
                        }}
                        transition={{
                            duration: 0.4,
                            delay: isHovered ? 0.3 : 0,
                        }}
                    >
                        {title}
                    </motion.div>
                </motion.div>

                <div className="flex h-[60px] w-[70px] shrink-0 items-center justify-center bg-black/90 rounded z-30 p-2">
                    <Image
                        src={logoImage || "/placeholder.svg?height=32&width=44&query=logo"}
                        alt={logoAlt}
                        width={60}
                        height={60}
                        className={`object-contain transition-all duration-500 ${isHovered ? "filter-none" : "grayscale sepia-[0.6] hue-rotate-[90deg] saturate-[1.2] brightness-90"
                            }`}
                    />
                </div>
            </div>
        </div>
    )
}
