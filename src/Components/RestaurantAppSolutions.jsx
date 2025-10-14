// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const RestaurantAppSolutions = ({ data }) => {
//     const restaurantAppSolutions = data;
//     const [flipped, setFlipped] = useState(null);

//     // Handle flip (for both hover and tap)
//     const handleFlip = (index) => {
//         setFlipped(flipped === index ? null : index);
//     };

//     return (
//         <section className="py-16 bg-white">
//             <div className="max-w-6xl mx-auto px-6 text-center">
//                 {/* Heading */}
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                     {restaurantAppSolutions.title}
//                 </h2>
//                 <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
//                     {restaurantAppSolutions.description}
//                 </p>

//                 {/* Cards Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {restaurantAppSolutions.cards.map((card, index) => (
//                         <div
//                             key={index}
//                             className="relative group h-80 [perspective:1000px] cursor-pointer"
//                             onMouseEnter={() => setFlipped(index)}
//                             onMouseLeave={() => setFlipped(null)}
//                             onClick={() => handleFlip(index)}
//                         >
//                             {/* Card container */}
//                             <div
//                                 className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped === index ? "[transform:rotateY(180deg)]" : ""
//                                     }`}
//                             >
//                                 {/* FRONT SIDE */}
//                                 <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg backface-hidden">
//                                     {/* Background Image */}
//                                     {card.image && (
//                                         <Image
//                                             src={card.image}
//                                             alt={card.title}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                     )}

//                                     {/* Bottom Overlay */}
//                                     <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white py-4 px-4 flex flex-col items-center justify-center">
//                                         <h3 className="text-lg font-semibold">{card.title}</h3>
//                                         <p className="text-sm opacity-80">{card.subtitle}</p>
//                                     </div>
//                                 </div>

//                                 {/* BACK SIDE */}
//                                 <div
//                                     className={`absolute inset-0 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-6 [transform:rotateY(180deg)] backface-hidden ${index === 0
//                                             ? "bg-gradient-to-br from-orange-500 to-yellow-400 text-white"
//                                             : "bg-gradient-to-br from-orange-500 to-yellow-400 text-white"
//                                         }`}
//                                 >
//                                     <h3 className="text-2xl font-bold mb-3">
//                                         {card.backTitle || "Discover More"}
//                                     </h3>
//                                     <p className="text-sm mb-5 max-w-xs">
//                                         {card.backText ||
//                                             "Learn how this feature can grow your restaurant business."}
//                                     </p>
//                                     {card.cta && (
//                                         <Link href={card.ctaLink} className="mt-2 px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition">
//                                             {card.cta}
//                                         </Link>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default RestaurantAppSolutions;




"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";

const RestaurantAppSolutions = ({ data }) => {
    const restaurantAppSolutions = data;
    const [flipped, setFlipped] = useState(null);

    const handleFlip = (index) => {
        setFlipped(flipped === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {restaurantAppSolutions.title}
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    {restaurantAppSolutions.description}
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {restaurantAppSolutions.cards.map((card, index) => {
                        const LucideIcon = Icons[card.icon] || Icons.AppWindow;

                        return (
                            <div
                                key={index}
                                className="relative group h-80 [perspective:1000px] cursor-pointer"
                                onMouseEnter={() => setFlipped(index)}
                                onMouseLeave={() => setFlipped(null)}
                                onClick={() => handleFlip(index)}
                            >
                                <div
                                    className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped === index ? "[transform:rotateY(180deg)]" : ""
                                        }`}
                                >
                                    {/* FRONT SIDE */}
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg backface-hidden">
                                        {card.image && (
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>

                                        {/* Icon + Text */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-3 text-white">
                                            <div className="bg-white rounded-full p-3">
                                            <LucideIcon className="w-10 h-10 text-orange-500" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{card.title}</h3>
                                            <p className="text-sm opacity-80">{card.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* BACK SIDE */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-6 [transform:rotateY(180deg)] backface-hidden ${index === 0
                                                ? "bg-gradient-to-br from-orange-500 to-yellow-400 text-white"
                                                : "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                                            }`}
                                    >
                                        <LucideIcon className="w-10 h-10 mb-4" />
                                        <h3 className="text-2xl font-bold mb-3">
                                            {card.backTitle}
                                        </h3>
                                        <p className="text-sm mb-5 max-w-xs">{card.backText}</p>
                                        {card.cta && (
                                            <Link
                                                href={card.ctaLink}
                                                className="mt-2 px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition"
                                            >
                                                {card.cta}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RestaurantAppSolutions;
