"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, anount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          The <br />
          Last <br />
          of us
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[150px] mb-50px">
          <img
            src="/cover.jpg"
            alt="cover"
            className="w-full sm:h-[400px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
