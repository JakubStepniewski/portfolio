"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import React from "react";
import { ReactNode } from "react";

interface ProjectModalProps {
  title: string;
  description: ReactNode;
  image: string;
  tech: string[];
  onClose: () => void;
}

export default function ProjectModal({
  title,
  description,
  image,
  tech,
  onClose,
}: ProjectModalProps) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    // blokada scrolla tła
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-auto modal-scroll"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#111] text-white p-6 rounded-2xl w-full max-w-3xl max-h-[90vh] shadow-xl relative overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>

        <div className="overflow-y-auto p-2 flex flex-col gap-4">
          <div className="relative w-full h-80 mb-4 rounded-xl overflow-hidden flex-shrink-0 mt-3">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="text-gray-300 leading-relaxed">{description}</div>

          <h3 className="text-lg font-semibold mt-2">Technologie</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-[#1057bb] border border-indigo-300/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
