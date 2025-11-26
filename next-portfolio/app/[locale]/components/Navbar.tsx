"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikony (z lucide-react)
import AnimatedLink from "./AnimatedLink";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("HomePage");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      {/* PRZYCISK MENU (mobile) */}
      <button
        className="xl:hidden p-2 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MENU DESKTOP */}
      <div className="hidden xl:flex gap-10 items-center text-sm">
        <AnimatedLink text={t("about")} href="#about" />
        <AnimatedLink text={t("skills")} href="#skills" />
        <AnimatedLink text={t("education")} href="#education" />
        <AnimatedLink text={t("experience")} href="#experience" />
        <AnimatedLink text={t("languages")} href="#languages" />
        <AnimatedLink text={t("projects")} href="#projects" />
        <AnimatedLink text={t("contact")} href="#contact" />
        <LocaleSwitcher />
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="absolute top-19 left-0 w-full shadow-lg flex flex-col items-center gap-6 py-6 text-sm xl:hidden z-50 bg-zinc-950/90 backdrop-blur-md rounded-b-2xl">
          <AnimatedLink text={t("about")} href="#about" />
          <AnimatedLink text={t("skills")} href="#skills" />
          <AnimatedLink text={t("education")} href="#education" />
          <AnimatedLink text={t("experience")} href="#experience" />
          <AnimatedLink text={t("languages")} href="#languages" />
          <AnimatedLink text={t("projects")} href="#projects" />
          <AnimatedLink text={t("contact")} href="#contact" />
          <LocaleSwitcher />
        </div>
      )}
    </nav>
  );
}
