"use client";

import ButtonPrimary from "@/ui/ButtonPrimary";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // parallax effect
  const yBg = useTransform(scrollY, [0, 500], [0, 200]);
  const yText = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden p-5"
    >
      {/* Background Image */}
      <motion.div
        style={{
          y: yBg,
          backgroundImage:
            "url('https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg')",
        }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        style={{ y: yText }}
        className="relative z-10 text-center text-white flex flex-col gap-6"
      >
        {/* Animated Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold w-1/2 mx-auto"
        >
          Timeless Comfort & Endless Luxury
        </motion.h1>

        {/* Buttons */}
        <div className="md:flex gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <ButtonPrimary href="#"> Our Vision </ButtonPrimary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-transparent text-background font-semibold border hover:bg-background hover:text-foreground hover:border-background transition mt-2 md:mt-0 w-full"
            >
              Explore Expertise
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
