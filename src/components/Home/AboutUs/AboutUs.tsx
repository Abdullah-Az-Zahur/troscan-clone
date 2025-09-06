"use client";
import ButtonSecondary from "@/ui/ButtonSecondary";
import { Dot } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // detect when middle of section hits viewport
  });

  return (
    <div ref={ref} className="p-2 md:p-5 lg:p-10 ">
      <h3 className="flex">
        <Dot />
        About us
      </h3>
      <div className="md:flex gap-5 md:gap-10 lg:gap-20 justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <p className="lg:text-6xl my-10">
              Where Spaces inspire, and Design Comes Alive
            </p>
          </div>
          <div className="space-y-5">
            <p>
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.
            </p>
            <p>
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you're looking to reimagine your living
              room.
            </p>
            <ButtonSecondary>More About us</ButtonSecondary>
          </div>
        </div>

        {/* Image zoom effect */}
        <div className="overflow-hidden rounded-lg">
          <motion.div
            animate={{ scale: isInView ? 1.1 : 1 }} // zoom in/out
            transition={{ duration: 0.8, ease: "easeInOut" }}
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
