"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  href?: string; // Make href optional
  onClick?: () => void; // Add optional onClick for button behavior
}

const ButtonSecondary = ({ children, href, onClick }: Props) => {
  // If href is provided, use Link. Otherwise, use a regular button
  if (href) {
    return (
      <Link href={href} className="block text-center">
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 md:w-auto rounded-lg bg-foreground text-background font-semibold shadow-lg hover:bg-[#B75842] transition cursor-pointer"
        >
          {children}
        </motion.div>
      </Link>
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
