import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPostman } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

// Define animation variants for icons
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">
        Technology

      </motion.h2>
      <motion.div 
      whileInView={{opacity:1 , x:0}}
      initial={{opacity: 0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <TbBrandNextjs className="text-5xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <BsGithub className="text-5xl text-red-700" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <SiPostman className="text-5xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
