"use client";
import { motion } from "framer-motion";
import ButtonPrimary from "@/ui/ButtonPrimary";

const projects = [
  {
    id: "01",
    image:
      "https://framerusercontent.com/images/h8rMLidvtxgO37bgs0urvbSKFOk.jpeg",
    title: "Serene Urban Retreat",
    description: "Where modern comfort meets peaceful sophistication.",
    href: "#",
  },
  {
    id: "02",
    image:
      "https://framerusercontent.com/images/AkcINRgdRJWagCIMhlfAa6SCpcs.jpeg",
    title: "Luxurious Coastal Living",
    description: "Bringing the beauty of the shore into your home.",
    href: "#",
  },
  {
    id: "03",
    image:
      "https://framerusercontent.com/images/bzAxUIZb76NAbMbbTCNRKvwep8.jpeg",
    title: "Modern Elegance in Every Room",
    description: "Redefining spaces with timeless style and innovation.",
    href: "#",
  },
];

const Projects = () => {
  return (
    <div className="relative h-[300vh] mt-20 md:mt-52">
      {projects.map((project) => (
        <div
          key={project.id}
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        >
          {/* Background image with zoom */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5, once: false }}
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/20 z-0" />

          {/* Content */}
          <div className="relative z-10 text-white text-center space-y-6 px-5">
            <p className="text-lg font-semibold">{project.id}</p>
            <h2 className="text-4xl md:text-6xl font-bold">{project.title}</h2>
            <p className="max-w-2xl mx-auto">{project.description}</p>
            <div className="w-1/2 md:w-1/4 mx-auto"><ButtonPrimary href={project.href}>View Project</ButtonPrimary></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
