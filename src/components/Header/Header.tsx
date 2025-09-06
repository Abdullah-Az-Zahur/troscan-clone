"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const NavItem = [
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "News", href: "#" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <motion.nav
        layout
        className="fixed top-5 left-1/2 -translate-x-1/2 w-11/12 md:w-2/3 lg:w-1/2 bg-background z-50 rounded-xl shadow-md overflow-hidden"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between p-1 md:p-1">
          <h1 className="text-xl md:text-2xl font-bold pl-4">Troscan</h1>

          {/* Desktop */}
          <ul className="hidden md:flex space-x-6">
            {NavItem.map((item) => (
              <li key={item.label} className="font-bold">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link
            className="hidden md:block bg-foreground text-background rounded-lg px-5 py-3"
            href={"#"}
          >
            Contact us
          </Link>

          {/* Mobile */}
          <button
            className="md:hidden bg-foreground text-background p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-6 py-6 md:hidden"
            >
              {NavItem.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium hover:text-blue-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="text-lg font-medium hover:text-blue-500 transition-colors"
                href={"#"}
                onClick={() => setMobileOpen(false)}
              >
                Contact us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
