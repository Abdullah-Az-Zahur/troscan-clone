"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    name: "Custom Furniture Design",
    imageUrl:
      "https://framerusercontent.com/images/sfKLQbWvWW6JhYVucFGGxxvK3A.jpeg",
  },
  {
    id: "02",
    name: "Room Decoration & Style",
    imageUrl:
      "https://framerusercontent.com/images/aqfXMublrraihocca3U6iDYHyc.jpeg",
  },
  {
    id: "03",
    name: "Space Planning & Interior Layout",
    imageUrl:
      "https://framerusercontent.com/images/PzGfS0tMVPZZc0jcqD3wHEmmQI.jpeg",
  },
  {
    id: "04",
    name: "Home Renovation & Remodeling",
    imageUrl:
      "https://framerusercontent.com/images/KdQ95Q3pfhLOIwVe9qSUBK1fk.jpeg",
  },
  {
    id: "05",
    name: "Lighting Design",
    imageUrl:
      "https://framerusercontent.com/images/5Bsk9IjkqVtzmXX71ASTIlfNp0.jpeg",
  },
  {
    id: "06",
    name: "Virtual Interior Design Consultations",
    imageUrl:
      "https://framerusercontent.com/images/5RDxKCHJwVzXuvUd5i9RY6vW3o.jpeg",
  },
];

const buttonVariants = {
  rest: {
    x: 0,
    color: "var(--foreground)",
    transition: { duration: 0.35, ease: "easeInOut" as const },
  },
  hover: {
    x: 8,
    color: "var(--background)",
    transition: { duration: 0.35, ease: "easeInOut" as const },
  },
};

const bgVariants = {
  rest: {
    scaleY: 0,
    originY: 1,
    transition: { duration: 0.35, ease: "easeInOut" as const },
  },
  hover: {
    scaleY: 1,
    originY: 1,
    transition: { duration: 0.35, ease: "easeInOut" as const },
  },
};

const OurExpertise = () => {
  const [activeId, setActiveId] = useState("01");
  const activeService = services.find((s) => s.id === activeId);
  const [direction, setDirection] = useState(0); // 1 = down, -1 = up
  const handleMouseEnter = (id: string) => {
    const currentIndex = services.findIndex((s) => s.id === activeId);
    const newIndex = services.findIndex((s) => s.id === id);

    setDirection(newIndex > currentIndex ? 1 : -1); // 1 = down, -1 = up
    setActiveId(id);
  };

  return (
    <div className="p-2 md:p-5 lg:p-10 mt-20 md:mt-52">
      <div>
        <div className="lg:w-1/2 lg:ml-auto mb-10">
          <h2 className="text-lg font-semibold">• Our Expertise</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl md:w-2/3 my-5 leading-snug">
            Where Spaces Inspire, and Design Comes Alive
          </p>
        </div>

        <div className="lg:flex gap-8">
          {/* Left side image */}
          <div className="hidden lg:block lg:flex-1 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <motion.div
              key={activeService?.id}
              initial={{ y: 200 * direction, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeService?.imageUrl || ""}
                alt={activeService?.name || ""}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right side buttons */}
          <div className="md:w-1/2 md:ml-5 my-auto flex flex-col">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onMouseEnter={() => handleMouseEnter(service.id)}
                className="relative px-6 py-4 text-left font-medium text-lg border-b-2 overflow-hidden border-foreground group"
                style={{ borderColor: "var(--foreground)" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Background wipe */}
                <motion.span
                  className="absolute inset-0 bg-foreground"
                  style={{ backgroundColor: "var(--foreground)" }}
                  variants={bgVariants}
                />

                {/* Text */}
                <motion.span
                  className="relative z-10 block"
                  variants={buttonVariants}
                >
                  {service.id}. {service.name}
                </motion.span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
