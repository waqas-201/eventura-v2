"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface LogoColumnProps {
  logos: { src: string; alt: string }[]
  direction: "up" | "down"
}

export function LogoColumn({ logos, direction }: LogoColumnProps) {
  const duplicatedLogos = [...logos, ...logos];

  // Define direction multiplier
  const yFrom = direction === "up" ? 0 : "-50%";
  const yTo = direction === "up" ? "-50%" : "0%";

  return (
    <div className="relative h-full overflow-hidden group py-6">
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: [yFrom, yTo] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear"
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-14 flex-shrink-0">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={40}
              className="object-contain max-w-[120px] max-h-[40px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
