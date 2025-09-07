"use client";
import ButtonSecondary from "@/ui/ButtonSecondary";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, Easing } from "framer-motion";

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  // Track if animation has already run
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const ease: Easing = [0.42, 0, 0.58, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease } },
  };

  return (
    <div ref={ref} className="p-2 md:p-5 lg:p-10 mt-20">
      <h3>• About us</h3>
      <div className="lg:flex gap-10 md:gap-10 lg:gap-20 justify-between">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-between lg:w-1/3"
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"} // Animate only once
          variants={containerVariants}
        >
          <motion.p
            className="text-4xl md:text-4xl lg:text-6xl my-5"
            variants={itemVariants}
          >
            Where Spaces inspire, and Design Comes Alive
          </motion.p>

          <motion.div className="space-y-5" variants={containerVariants}>
            <motion.p variants={itemVariants}>
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.
            </motion.p>
            <motion.p variants={itemVariants}>
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you&apos;re looking to reimagine your
              living room.
            </motion.p>
            <motion.div className="w-1/2 md:w-1/3" variants={buttonVariants}>
              <ButtonSecondary href="#">More About us</ButtonSecondary>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image zoom effect */}
        <div className="overflow-hidden rounded-lg mt-5 lg:mt-0 md:w-1/2">
          <motion.div
            animate={{ scale: hasAnimated ? 1.1 : 1 }}
            transition={{ duration: 0.8, ease }}
          >
            <Image
              src="https://framerusercontent.com/images/vJzsJOlbUK8qkA5xxZA18jSC6SI.jpeg"
              alt="Image"
              width={1200}
              height={1200}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
