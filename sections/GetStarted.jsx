"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, anount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src="/building-2.jpg"
          alt="building"
          className="rounded-tl-[24px] rounded-bl-[24px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
