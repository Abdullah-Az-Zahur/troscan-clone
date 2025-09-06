"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ButtonSecondary = ({ children }: Props) => {
  return (
    <motion.button
      // whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 md:w-auto rounded-lg bg-foreground text-background font-semibold shadow-lg hover:bg-[#B75842] transition"
    >
      {children}
    </motion.button>
  );
};

export default ButtonSecondary ;
