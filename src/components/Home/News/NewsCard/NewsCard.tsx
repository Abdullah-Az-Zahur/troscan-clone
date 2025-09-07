"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface NewsCardProps {
  imageUrl: string;
  date: string;
  title: string;
  subtitle: string;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  date,
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={`rounded-xl flex flex-col ${className}`}>
      {/* Image Wrapper with rounded + overflow hidden */}
      <div className="overflow-hidden rounded-xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="pt-4 flex flex-col gap-2">
        <p className="text-sm">
          <span className="font-bold">• </span>
          {date}
        </p>
        <h4 className="text-xl">{title}</h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default NewsCard;
