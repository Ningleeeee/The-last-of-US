"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { CharacterCard, TitleText, TypingText } from "../components";
import { characters } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("char-2");

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Characters" textStyles="text-center" />
        <TitleText
          title={<>Get to know the characters</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {characters.map((character, index) => (
            <CharacterCard
              key={character.id}
              {...character}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
