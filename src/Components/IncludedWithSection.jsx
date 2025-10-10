"use client";
import React from "react";
import homeData from "@/data/homedata.json";
import { motion } from "framer-motion";
import {
    Monitor,
    Store,
    Smartphone,
    Globe,
    Package,
    Truck,
    Atom,
} from "lucide-react";

export default function IncludedWithSection() {
    const { includedSection } = homeData;

    // Icon mapping from JSON keys
    const iconMap = {
        Monitor: <Monitor size={28} />,
        Store: <Store size={28} />,
        Smartphone: <Smartphone size={28} />,
        Globe: <Globe size={28} />,
        Package: <Package size={28} />,
        Truck: <Truck size={28} />,
        Atom: <Atom size={28} />,
    };

    return (
        <section className="py-16 bg-blue-50">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                    {includedSection.title}
                </h2>
                <p className="text-gray-600 mb-10">{includedSection.subtitle}</p>

                {/* Included Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {includedSection.items.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-md p-6 text-center border border-blue-100"
                        >
                            <div className="flex justify-center mb-4">
                                <div
                                    className="w-14 h-14 flex items-center justify-center rounded-full"
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    {iconMap[item.icon]}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons */}
                <h3 className="text-2xl font-semibold text-blue-700 mb-8">
                    {includedSection.addonsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {includedSection.addons.map((addon, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-md p-6 text-center border border-blue-100 relative"
                        >
                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                {addon.tag}
                            </span>
                            <div className="flex justify-center mb-4">
                                <div
                                    className="w-14 h-14 flex items-center justify-center rounded-full"
                                    style={{ backgroundColor: addon.bgColor }}
                                >
                                    {iconMap[addon.icon]}
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-blue-700 mb-1">
                                {addon.title}
                            </h4>
                            <p className="text-blue-600 font-bold mb-2">{addon.price}</p>
                            <p className="text-gray-600 text-sm">{addon.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
