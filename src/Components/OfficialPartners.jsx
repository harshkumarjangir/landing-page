"use client";
import Image from "next/image";
import { Star } from "lucide-react";

export default function OfficialPartners({ data }) {
    if (!data) return null;

    const { title, partners, ratings } = data;

    return (
        <section className="w-full bg-black py-6 text-white">
            <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left side - Official Partners */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                        {partners.map((partner, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="relative w-20 h-8">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain"
                                        sizes="80px"
                                    />
                                </div>
                                <span
                                    className={`text-sm sm:text-base font-medium ${partner.label === "Partner Network"
                                            ? "text-gray-400"
                                            : "text-white"
                                        }`}
                                >
                                    {partner.label.split(" ").slice(0, 1).join(" ")}
                                    <br />
                                    {partner.label.split(" ").slice(1).join(" ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Ratings */}
                <div className="flex flex-wrap items-center justify-center gap-6 px-4 py-4 rounded-full bg-gradient-to-r from-gray-700 to-black shadow-lg border border-gray-700">
                    {ratings.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className="relative w-16 h-6">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            </div>
                            <span className="flex items-center gap-1 text-gray-200 text-sm font-medium">
                                {item.score}
                                <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
