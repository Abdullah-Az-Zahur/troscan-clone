"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  href?: string; 
  onClick?: () => void; 
}

const ButtonPrimary = ({ children, href, onClick }: Props) => {
  
  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link href={href} className="block text-center">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 w-full md:w-auto rounded-lg bg-background text-foreground font-semibold shadow-lg hover:bg-[#E4CBB7] transition cursor-pointer"
          >
            {children}
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-6 py-3 w-full md:w-auto rounded-lg bg-background text-foreground font-semibold shadow-lg hover:bg-[#E4CBB7] transition"
    >
      {children}
    </motion.button>
  );
};

export default ButtonPrimary;
