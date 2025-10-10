"use client";

import { useState } from "react";
import footerData from "@/data/footerData.json";
import {
  Instagram,
  Twitter,
  Linkedin,
  Plus,
  Minus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import dmca from "@/public/dmca.png"; // apna DMCA image path yahaan rakho

const iconMap = {
  Instagram: Instagram,
  Twitter: Twitter,
  Linkedin: Linkedin,
};

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <footer className="bg-[#1D1D25] text-gray-300">
      {/* Footer Top */}
      <div className="container mx-auto px-10 py-10">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-8">
          {footerData.columns.map((col, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {footerData.columns.map((col, idx) => (
            <div key={idx} className="border-b border-gray-700 pb-2">
              <button
                onClick={() => toggleAccordion(idx)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold"
              >
                {col.title}
                {openIndex === idx ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>

              {/* Animate open/close */}
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ul className="mt-2 space-y-2 text-sm overflow-hidden">
                      {col.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.url} className="hover:underline">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#15151F] py-8">
        <div className="container mx-auto px-6 flex flex-col gap-6">
          {/* DMCA + Description */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <Image src="/assets/home/footer/dmca-badge-w150-2x1-02.png" alt="DMCA Protected" width={100} height={40} />
              <p className="max-w-md text-sm text-gray-400">
                Full stack mobile (iOS, Android) and web app design and
                development agency
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <hr className="border-gray-700" />

          {/* Legal + Copyright + Socials */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Left */}
            <p className="text-sm text-gray-400">
              Statutory legal information
            </p>

            {/* Center */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <p className="text-sm text-gray-400">
                2025-2026 (c) Appinventiv
              </p>
              <ul className="flex gap-6 text-sm">
                {footerData.links.map((l, i) => (
                  <li key={i}>
                    <a href={l.url} className="hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <ul className="flex gap-4 text-xl">
              {footerData.socials.map((s, i) => {
                const Icon = iconMap[s.icon];
                return (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
