"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import AiCarDet from "./AiCarDet";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  longDescription: ReactNode;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  longDescription,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-2xl shadow-lg bg-white/10 backdrop-blur-md 
                   border border-white/20 p-5 flex flex-col gap-4 hover:border-[#1057bb] hover:shadow-[#1057bb]/20
                   transition"
      >
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-[#1057bb] border border-indigo-300/20"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {open && (
        <ProjectModal
          title={title}
          description={longDescription}
          image={image}
          tech={tech}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
