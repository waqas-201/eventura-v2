"use client"
import { useEffect, useState } from "react"
import { motion, useSpring, AnimatePresence } from "framer-motion"

export default function PremiumLiquidCursor() {
    const [velocity, setVelocity] = useState({ vx: 0, vy: 0 })
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(true)

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
            setIsVisible(true)
        }

        const hide = () => setIsVisible(false)

        window.addEventListener("mousemove", move)
        window.addEventListener("mouseleave", hide)
        window.addEventListener("mouseenter", () => setIsVisible(true))

        return () => {
            window.removeEventListener("mousemove", move)
            window.removeEventListener("mouseleave", hide)
            window.removeEventListener("mouseenter", () => setIsVisible(true))
        }
    }, [cursorX, cursorY, lastPos])

    const distortX = Math.min(Math.max(velocity.vx * 0.15, -8), 8)
    const distortY = Math.min(Math.max(velocity.vy * 0.15, -8), 8)

    const transition = {

    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
                    style={{
                        x: cursorX,
                        y: cursorY,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }} // fade in/out easing
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
                            }} // imported from Cursor style
                        />
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
