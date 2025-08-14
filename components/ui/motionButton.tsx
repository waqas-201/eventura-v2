"use client"
import { motion, scale } from "framer-motion"
import { Button } from "./button"

const MotionButtonWrapper = motion(Button as any)

interface MotionButtonProps extends React.ComponentProps<typeof Button> { }

const transition = {
    duration: 0.3,
    delay:0.5,
    ease: "easeInOut",
}

export const MotionButton = ({ children, ...props }: MotionButtonProps) => {
    return (
        <MotionButtonWrapper
            style={{ transformOrigin: "left center" }}
            initial={{ scale: 1, boxShadow: "0 0 0px rgba(255,255,255,0)" }}
            whileHover={{
                boxShadow: "0 0 10px rgba(120 ,190,299 ,1)",
            }}
            whileTap={{
                boxShadow: "0 0 15px rgba(120 , 190, 230, 1)",
            }}
            transition={transition}
            {...props}
        >
            {children}
        </MotionButtonWrapper>
    )
}
