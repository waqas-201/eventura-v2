import * as  motion from 'motion/react-client'

export const PovPic = () => {
  return (
    <div className="w-full h-full flex items-center justify-center order-2 md:order-1 relative">
      <img
        src="https://www.gpj.com/wp-content/uploads/2025/03/Sports-Splash-Image-1296x729.png"
        alt="Game Changing Picture"
        className="w-full h-auto object-cover rounded-xl"
      />

      <motion.div
              initial={{  borderWidth: 1 }}
              whileInView={{  borderWidth: 3 }}
              transition={{ duration: 1, delay: 1 , ease: "easeInOut" }}
              viewport={{ once: false }}
      className=" w-[95%] top-10 left-10  h-[95%] absolute  border border-primary "  > </  motion.div>
    </div>
  );
};
