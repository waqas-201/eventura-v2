// components/SliderTagLine.tsx
import React from "react";
import * as motion from 'motion/react-client';

export const SliderTagLine = () => {
    return (
        <div className="w-full md:w-auto grow">
            <motion.div
                initial={{ opacity: 0.5, lineHeight: 0,fontWeight:100 }}
                whileInView={{  lineHeight: 0.8, opacity: 1  , fontWeight: 900 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: false }}
                className="text-3xl md:text-6xl font-[900] text-left space-y-2 uppercase leading-tight"
            >
                <h1>EVENTURA IS THE</h1>
                <motion.h1
                    initial={{ opacity: 0.5, color: "#fff" }}
                    whileInView={{ opacity: 1, color: "#00C3B4" }}
                    transition={{ duration: 2, delay:1 }}
                    viewport={{ once: false }}
                >
                    WORLD’S
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0.5, color: "#fff" }}
                    whileInView={{ opacity: 1, color: "#00C3B4" }}
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: false }}
                >
                    LEADING
                </motion.h1>
                <h1>STRATEGIC</h1>
                <h1>EXPERIENCE</h1>
                <h1>MARKETING</h1>
                <h1>AGENCY</h1>
            </motion.div>
        </div>

    );
};