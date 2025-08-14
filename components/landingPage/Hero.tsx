"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion } from "motion/react"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentWord, setCurrentWord] = useState(0)
    const heroRef = useRef<HTMLDivElement>(null)

    const words = ["EXPERIENCES", "MOMENTS", "CONNECTIONS", "MEMORIES"]

    useEffect(() => {
        setIsLoaded(true)

        const wordInterval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
        }, 3000)

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            clearInterval(wordInterval)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "100vh", "150vh"])

    return (
        <>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }}
                transition={{ duration: 5, delay: 0.5, ease: "easeInOut" }}
                className="relative bg-cover bg-center min-h-screen h-screen w-full bg-black bg-[url('/Hero.png')] text-white overflow-hidden"
            >
                {/* Left-side blur overlay */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/40 via-transparent to-transparent backdrop-blur-[6px]" />
                </div>

                <motion.div style={{ y }} className="relative h-full z-10">
                    <div
                        ref={heroRef}
                        className="
                            relative z-10 px-4 sm:px-6 lg:px-12
                            pt-0 sm:pt-20 lg:pt-32
                            flex flex-col justify-center sm:block
                            min-h-screen
                        "
                    >
                        <div className="max-w-7xl mx-auto">
                            {/* Headline */}
                            <div className="space-y-4 sm:space-y-8 mb-12 sm:mb-16">
                                <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
                                    <div
                                        className={`transition-all duration-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                                        style={{ transitionDelay: "0.4s" }}
                                    >
                                        <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                                            WE
                                        </span>{" "}
                                        <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-[#00C3B4]">
                                            CREATE
                                        </span>
                                    </div>

                                    <div
                                        className={`relative overflow-hidden transition-all duration-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                                        style={{ transitionDelay: "0.7s", height: "1.2em" }}
                                    >
                                        {words.map((word, index) => (
                                            <div
                                                key={word}
                                                className={`absolute inset-0 transition-all duration-700 ${index === currentWord
                                                    ? "translate-y-0 opacity-100"
                                                    : index < currentWord
                                                        ? "-translate-y-full opacity-0"
                                                        : "translate-y-full opacity-0"
                                                    }`}
                                            >
                                                <span className="bg-gradient-to-r from-primary via-[#00C3B4] to-[#00C3B4] bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]">
                                                    {word}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        className={`transition-all duration-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                                        style={{ transitionDelay: "1s" }}
                                    >
                                        <span className="inline-block transition-transform duration-300 cursor-default">
                                            THAT
                                        </span>{" "}
                                        <span className="inline-block transition-transform duration-300 cursor-default relative">
                                            MATTER
                                        </span>
                                    </div>
                                </h1>

                                <p
                                    className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl leading-relaxed transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                        }`}
                                    style={{ transitionDelay: "1.3s" }}
                                >
                                    From corporate events to brand activations, we transform your vision into{" "}
                                    <span className="text-[#00C3B4] font-semibold">unforgettable moments</span> that drive{" "}
                                    <span className="text-[#00C3B4] font-semibold">real business results</span>.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div
                                className={`flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-16 sm:mb-24 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: "1.5s" }}
                            >
                                <Button
                                    size="lg"
                                    className="group relative bg-gradient-to-r from-[#00C3B4] to-[#00C3B4]/80 hover:from-[#00C3B4]/90 hover:to-[#00C3B4]/70 text-black text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 h-auto rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00C3B4]/25 border-2 border-[#00C3B4]/20 w-full sm:w-auto"
                                >
                                    <span className="relative z-10 flex items-center justify-center font-bold">
                                        START YOUR PROJECT
                                        <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00C3B4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00C3B4] to-[#00C3B4] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                </Button>

                                <button className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-all duration-500 group w-full sm:w-auto justify-center sm:justify-start">
                                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#00C3B4]/30 rounded-full flex items-center justify-center group-hover:border-[#00C3B4] transition-all duration-500 group-hover:scale-110 overflow-hidden">
                                        <Play className="w-5 h-5 sm:w-7 sm:h-7 ml-1 text-[#00C3B4] transition-all duration-300 group-hover:scale-125" />
                                        <div className="absolute inset-0 bg-[#00C3B4]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                                        <div className="absolute inset-0 border-2 border-[#00C3B4] rounded-full scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-50 transition-all duration-500" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <span className="text-lg sm:text-xl font-semibold block">Watch Our Work</span>
                                        <span className="text-sm text-gray-400">See the magic in action</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
