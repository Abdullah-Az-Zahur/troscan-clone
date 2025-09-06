"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonPrimary = ({ children }: Props) => {
  return (
    <motion.button
      // whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 w-full rounded-lg bg-background text-foreground font-semibold shadow-lg hover:bg-[#E4CBB7] transition"
    >
      {children}
    </motion.button>
  );
};

export default ButtonPrimary;
