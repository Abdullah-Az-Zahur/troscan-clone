"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, Easing, Variants } from "framer-motion";

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

// Define easing function
const ease: Easing = [0.42, 0, 0.58, 1];
const easeInOut: Easing = "easeInOut";

// Create proper variant types
const buttonVariants: Variants = {
  rest: {
    x: 0,
    color: "var(--foreground)",
    transition: { duration: 0.35, ease: easeInOut },
  },
  hover: {
    x: 8,
    color: "var(--background)",
    transition: { duration: 0.35, ease: easeInOut },
  },
};

const bgVariants: Variants = {
  rest: {
    scaleY: 0,
    originY: 1,
    transition: { duration: 0.35, ease: easeInOut },
  },
  hover: {
    scaleY: 1,
    originY: 1,
    transition: { duration: 0.35, ease: easeInOut },
  },
};

const OurExpertise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
  });

  // Track if animation has already run
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeId, setActiveId] = useState("01");
  const [direction, setDirection] = useState(0); // 1 = down, -1 = up

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleMouseEnter = (id: string) => {
    const currentIndex = services.findIndex((s) => s.id === activeId);
    const newIndex = services.findIndex((s) => s.id === id);

    setDirection(newIndex > currentIndex ? 1 : -1); // 1 = down, -1 = up
    setActiveId(id);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease 
      } 
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease 
      } 
    },
  };

  return (
    <div ref={ref} className="p-2 md:p-5 lg:p-10 mt-20 md:mt-52">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="lg:w-1/2 lg:ml-auto mb-10"
          variants={itemVariants}
        >
          <h2 className="text-lg font-semibold">• Our Expertise</h2>
          <motion.p 
            className="text-4xl md:text-5xl lg:text-6xl md:w-2/3 my-5 leading-snug"
            variants={itemVariants}
          >
            Where Spaces Inspire, and Design Comes Alive
          </motion.p>
        </motion.div>

        <div className="lg:flex gap-8">
          {/* Left side image */}
          <motion.div 
            className="hidden lg:block lg:flex-1 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
            variants={imageVariants}
          >
            <motion.div
              key={activeId}
              initial={{ y: 200 * direction, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: easeInOut }}
              className="absolute inset-0"
            >
              <Image
                src={services.find(s => s.id === activeId)?.imageUrl || ""}
                alt={services.find(s => s.id === activeId)?.name || ""}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right side buttons */}
          <motion.div 
            className="md:w-1/2 md:ml-5 my-auto flex flex-col"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
              >
                <motion.button
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurExpertise;