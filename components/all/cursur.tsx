"use client"
import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function PremiumLiquidCursor() {
    const [velocity, setVelocity] = useState({ vx: 0, vy: 0 })
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

    const cursorX = useSpring(0, { stiffness: 600, damping: 40 })
    const cursorY = useSpring(0, { stiffness: 600, damping: 40 })

    useEffect(() => {
        const move = (e: MouseEvent) => {
            const vx = e.clientX - lastPos.x
            const vy = e.clientY - lastPos.y
            setVelocity({ vx, vy })
            setLastPos({ x: e.clientX, y: e.clientY })

            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        window.addEventListener("mousemove", move)
        return () => window.removeEventListener("mousemove", move)
    }, [cursorX, cursorY, lastPos])

    // Refined distortion - much more subtle
    const distortX = Math.min(Math.max(velocity.vx * 0.15, -8), 8)
    const distortY = Math.min(Math.max(velocity.vy * 0.15, -8), 8)

    return (
        <>
            <motion.div
                className=" hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <svg width="32" height="32" viewBox="0 0 32 32">
                    <motion.ellipse
                        cx="16"
                        cy="16"
                        rx={12 + Math.abs(distortX)}
                        ry={12 + Math.abs(distortY)}
                        fill="white"
                        animate={{
                            rx: [12 + Math.abs(distortX), 13 + Math.abs(distortX), 12 + Math.abs(distortX)],
                            ry: [12 + Math.abs(distortY), 13 + Math.abs(distortY), 12 + Math.abs(distortY)]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </motion.div>

            
        </>
    )
}