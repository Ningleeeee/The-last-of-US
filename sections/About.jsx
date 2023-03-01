"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About" textStyles="text-center  pt-[300px]" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The Last of Us </span>
        is set in 2023, twenty years into a global pandemic caused by a mass
        fungal infection, which forces its hosts to transform into zombie-like
        creatures and collapses society. The series follows Joel, a smuggler
        tasked with escorting the teenage Ellie across a post-apocalyptic United
        States.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
