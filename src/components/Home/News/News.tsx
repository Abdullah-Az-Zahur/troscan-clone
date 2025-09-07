"use client";

import ButtonSecondary from "@/ui/ButtonSecondary";
import React, { useRef, useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";
import { motion, useInView, Easing, Variants } from "framer-motion";

const News = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
  });

  // Track if animation has already run
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const news = [
    {
      imageUrl:
        "https://framerusercontent.com/images/bZdh0mETTRfnrDNMinaVWCZqhqs.jpeg",
      date: "February 5, 2022",
      title: "The Art of Minimalist Interiors",
      subtitle: "Less is More: Designing Spaces That Speak Simplicity",
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/HXD1LGGH4sdyu2AfKcILOBWjBM.jpeg",
      date: "February 22, 2022",
      title: "Timeless Furniture Pieces Every Home Needs",
      subtitle: "Building a Home That Never Goes Out of Style",
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg",
      date: "January 21, 2023",
      title: "Psychology in Interior Design",
      subtitle: "Shaping Emotions Through Thoughtful Color Choices",
    },
  ];

  // Define easing function
  const ease: Easing = [0.42, 0, 0.58, 1];

  // Animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease 
      } 
    },
  };

  return (
    <div ref={ref} className="p-2 md:p-5 lg:p-10 mt-20">
      {/* Header */}
      <motion.div 
        className="md:flex md:my-10 items-end justify-between"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex-1" variants={itemVariants}>
          <h3>• News</h3>
          <motion.p 
            className="text-4xl md:text-4xl lg:text-6xl my-5 md:w-1/2"
            variants={itemVariants}
          >
            Stay Inspired with Interior Trends
          </motion.p>
        </motion.div>
        <motion.div 
          className="mt-4 md:mt-0 mb-5 md:mb-0"
          variants={buttonVariants}
        >
          <ButtonSecondary>View All News</ButtonSecondary>
        </motion.div>
      </motion.div>

      {/* News Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {news.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={index === 2 ? "md:hidden lg:block" : ""}
          >
            <NewsCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default News;