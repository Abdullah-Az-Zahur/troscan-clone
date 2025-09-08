"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

const ButtonSecondary = ({ children, href, onClick }: Props) => {
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
            className="px-3 py-3 md:w-auto rounded-lg bg-foreground text-background font-semibold shadow-lg hover:bg-[#B75842] transition cursor-pointer"
          >
            {children}
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  // If no href but has onClick, use button with onClick
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-6 py-3 md:w-auto rounded-lg bg-foreground text-background font-semibold shadow-lg hover:bg-[#B75842] transition"
    >
      {children}
    </motion.button>
  );
};

export default ButtonSecondary;
