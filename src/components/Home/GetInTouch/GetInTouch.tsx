"use client";

import ButtonSecondary from "@/ui/ButtonSecondary";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const GetInTouch = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const y = useTransform(scrollYProgress, [0, 0.5], [300, 0]);

  const stickyClass =
    scrollYProgress && scrollYProgress.get() < 0.5
      ? "sticky top-0"
      : "relative";

  return (
    <div ref={ref} className="relative w-full h-[200vh] my-10 md:my-52">
      <div className={`${stickyClass} h-screen w-full overflow-hidden`}>
        <Image
          src={
            "https://framerusercontent.com/images/Uv9jeirMiBGocQPSDko8jsMMolo.jpeg"
          }
          alt="Background"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        style={{ y }}
        className="text-center bg-background max-w-[700px] max-h-[350px] rounded-xl relative top-0 mt-[50vh] transform -translate-y-1/2 mx-5 md:mx-auto"
      >
        <div className="p-5 py-10 md:p-20">
          <p className="text-xl md:text-3xl mb-5">
            Ready to reimagine your space? Connect with us at Troscán to bring
            your vision to life with our expertise in design and decoration.
          </p>
          <ButtonSecondary>Get in Touch</ButtonSecondary>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
