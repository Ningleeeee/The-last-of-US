"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="mb-[50px] h-[2px] bg-white opacity-10" />
      <div className="flex items-center justify-between flex-wrp gap-4">
        <h4 className="font-extrabold text-[24px] text-white">
          THE LAST OF US
        </h4>
        <p className="font-normal text-[14px] text-white opacity-50">
          Copyright 2023 The last of us.
        </p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a href={social.link}>
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
