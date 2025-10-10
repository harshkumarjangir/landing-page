"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  MapPin,
  Package,
  Globe,
  Lightbulb,
  Handshake,
} from "lucide-react";

export default function Overview() {
  const features = [
    { id: 1, text: "Smart Business Solutions", icon: Laptop },
    { id: 2, text: "Seamless Location Access", icon: MapPin },
    { id: 3, text: "Efficient Order Management", icon: Package },
    { id: 4, text: "Multi-language Support", icon: Globe },
    { id: 5, text: "Innovative Features", icon: Lightbulb },
    { id: 6, text: "Customer Engagement", icon: Handshake },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#000814] to-[#001D3D] overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl"></div>

      {/* Single circular ring */}
      <div className="absolute w-[550px] h-[550px] rounded-full border border-blue-500/30"></div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-3xl md:text-4xl mb- font-bold text-white">
          Why <span className="text-blue-400">Choose</span> MetaBlock Technologies
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Discover how MetaBlock empowers your business with innovative,
          technology-driven, and intelligent solutions designed for the future.
        </p>
      </motion.div>

      {/* Features Circle */}
      <div className="relative w-[550px] h-[550px] flex items-center justify-center">
        {/* Center logo */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 0 20px rgba(59,130,246,0.3)",
              "0 0 40px rgba(59,130,246,0.5)",
              "0 0 20px rgba(59,130,246,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bg-gradient-to-br from-blue-600 to-blue-700 w-28 h-28 flex items-center justify-center rounded-full text-3xl font-bold text-white z-10"
        >
          M
        </motion.div>

        {/* Feature Cards */}
        {features.map((feature, i) => {
          const Icon = feature.icon;
          const total = features.length;
          const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
          const radius = 230; // fixed circle distance
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute bg-[#0A1A33] border border-blue-700/40 rounded-2xl w-44 p-5 text-center text-gray-200 shadow-[0_0_20px_rgba(30,64,175,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center text-blue-400 mb-3">
                <Icon size={24} />
              </div>
              <p className="font-medium leading-snug text-sm">{feature.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
