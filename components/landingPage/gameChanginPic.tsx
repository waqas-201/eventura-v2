'use client';

import * as motion from 'motion/react-client';
import Image from 'next/image';

export const GameChangingPic = () => {
  return (
    <div className="relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] order-2 md:order-1 rounded-xl overflow-hidden">
      <Image
        src="https://www.gpj.com/wp-content/uploads/2025/03/Sports-Splash-Image-1296x729.png"
        alt="Game Changing Picture"
        fill
        className="object-cover rounded-xl"
        priority
      />

      <motion.div
        initial={{ borderWidth: 1 }}
        whileInView={{ borderWidth: 3 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="absolute  pointer-events-none rounded-xl"
        style={{
          top: '3%',
          bottom: '3%',
          left: '3%',
          right: '3%',
        }}
      />
    </div>
  );
};
