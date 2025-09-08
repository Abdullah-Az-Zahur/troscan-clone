"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const images = [
  "https://framerusercontent.com/images/wxArQEjlcrBYFF8tdvyrSDA68Zw.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/nYgQL26JA1Ioq4xVHJRlasIEC6Y.jpeg?scale-down-to=512",
  "https://framerusercontent.com/images/rCYE8FEyC5lN6m5coOuFOOgDJ8A.jpeg?scale-down-to=512",
  "https://framerusercontent.com/images/VfSDa1aOzvtIWAcGV6dtAprgM.jpeg?scale-down-to=512",
  "https://framerusercontent.com/images/rZjzFX7RCkgqdY9yyhbi4hs.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/5SmAeNVODUEpPeB9LOhC2baAXP4.jpeg?scale-down-to=512",
];

const TransformingSpaces = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate responsive offsets based on window size with padding consideration
  const getResponsiveOffsets = () => {
    const isMobile = windowSize.width < 768;

    if (isMobile) {
      // Mobile layout: left 1, right 2 for both top and bottom
      const spreadFactor = 0.2;

      // Calculate available space after padding
      const horizontalPadding = 16;
      const verticalPadding = 8;

      const availableWidth = windowSize.width - horizontalPadding * 2;
      const availableHeight = windowSize.height - verticalPadding * 2;

      const maxX = availableWidth * spreadFactor;
      const maxY = availableHeight * spreadFactor;

      // Top row: left 1, right 2
      const finalOffsets = [
        { x: -maxX * 1.5, y: -maxY * 1.2 }, // top-left (single)
        { x: maxX * 0.5, y: -maxY * 1.5 }, // top-right (first of two)
        { x: maxX * 1.5, y: -maxY * 0.8 }, // top-right (second of two)
        { x: -maxX * 1.5, y: maxY * 1 }, // bottom-left (single)
        { x: maxX * 0.5, y: maxY * 2 }, // bottom-right (first of two)
        { x: maxX * 1.5, y: maxY * 1 }, // bottom-right (second of two)
      ];

      const initialOffsets = [
        { x: -50, y: -50 },
        { x: 10, y: -40 },
        { x: 70, y: -40 },
        { x: -70, y: 40 },
        { x: 0, y: 70 },
        { x: 70, y: 0 },
      ];

      return { initialOffsets, finalOffsets };
    } else {
      // Desktop layout (original logic)
      const isSmallScreen = windowSize.width < 768;
      const isMediumScreen = windowSize.width >= 768 && windowSize.width < 1024;

      const spreadFactor = isSmallScreen ? 0.25 : isMediumScreen ? 0.3 : 0.35;

      const initialOffsets = [
        { x: -100, y: -50 },
        { x: 10, y: -40 },
        { x: 120, y: -120 },
        { x: -150, y: 40 },
        { x: 0, y: 70 },
        { x: 80, y: 80 },
      ];

      const horizontalPadding = isSmallScreen ? 16 : isMediumScreen ? 40 : 80;
      const verticalPadding = isSmallScreen ? 8 : isMediumScreen ? 20 : 40;

      const availableWidth = windowSize.width - horizontalPadding * 2;
      const availableHeight = windowSize.height - verticalPadding * 2;

      const maxX = availableWidth * spreadFactor;
      const maxY = availableHeight * spreadFactor;

      const finalOffsets = [
        { x: -maxX, y: -maxY },
        { x: 0, y: -maxY * 1.1 },
        { x: maxX, y: -maxY },
        { x: -maxX, y: maxY },
        { x: 0, y: maxY * 1.1 },
        { x: maxX, y: maxY },
      ];

      return { initialOffsets, finalOffsets };
    }
  };

  const { initialOffsets, finalOffsets } = getResponsiveOffsets();

  // Create individual transforms for each image
  // Use a very narrow input range to make the transformation happen more abruptly
  const x1 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[0].x, finalOffsets[0].x]
  );
  const y1 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[0].y, finalOffsets[0].y]
  );

  const x2 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[1].x, finalOffsets[1].x]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[1].y, finalOffsets[1].y]
  );

  const x3 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[2].x, finalOffsets[2].x]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[2].y, finalOffsets[2].y]
  );

  const x4 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[3].x, finalOffsets[3].x]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[3].y, finalOffsets[3].y]
  );

  const x5 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[4].x, finalOffsets[4].x]
  );
  const y5 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[4].y, finalOffsets[4].y]
  );

  const x6 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[5].x, finalOffsets[5].x]
  );
  const y6 = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [initialOffsets[5].y, finalOffsets[5].y]
  );

  // Group transforms for easier access
  const transforms = [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 },
    { x: x5, y: y5 },
    { x: x6, y: y6 },
  ];

  // Text animation - appears after the transformation
  const textOpacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.45, 0.5], [0.9, 1]);

  // Adjust image size based on screen width
  const getImageSize = () => {
    if (windowSize.width < 640) return 100; // Smaller for mobile
    if (windowSize.width < 768) return 120;
    if (windowSize.width < 1024) return 180;
    if (windowSize.width < 1280) return 220;
    if (windowSize.width < 1536) return 260;
    return 300;
  };

  const imageSize = getImageSize();

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky container with padding */}
      <div className="sticky top-0 h-screen flex items-center justify-center p-2 md:p-5 lg:p-10 box-border">
        {/* Inner container to ensure proper positioning */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Images */}
          {images.map((src, i) => (
            <motion.div key={i} style={transforms[i]} className="absolute">
              <Image
                src={src}
                alt={`Interior design ${i + 1}`}
                width={imageSize}
                height={imageSize}
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          ))}

          {/* Text */}
          <motion.div
            style={{
              opacity: textOpacity,
              scale: textScale,
            }}
            className="absolute text-center text-foreground text-xl md:text-3xl lg:text-4xl w-4/5 md:w-1/2 lg:w-1/3 z-10 px-4"
          >
            Transforming spaces with style, through Troscán&apos;s exquisite
            design expertise.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TransformingSpaces;