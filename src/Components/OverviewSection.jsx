// "use client";
// import React from "react";
// import homeData from "@/data/homedata.json";
// import Image from "next/image";

// export default function OverviewSection() {
//     const { overviewSection } = homeData;

//     return (
//         <section className="py-20 bg-blue-50 relative overflow-hidden">
//             <div className="text-center mb-10">
//                 <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
//                     {overviewSection.heading}
//                 </h3>
//                 <h2 className="text-3xl font-bold text-blue-800 mt-2">
//                     {overviewSection.subheading}{" "}
//                     <span className="text-blue-600">{overviewSection.highlight}</span>
//                 </h2>
//                 <p className="text-gray-600 mt-4 max-w-xl mx-auto">
//                     {overviewSection.description}
//                 </p>
//             </div>

//             {/* Rotating Circle */}
//             <div className="relative flex items-center justify-center h-[500px]">
//                 {/* Rotating ring */}
//                 <div className="absolute w-[380px] h-[380px] rounded-full border-[2px] border-blue-200 animate-spin-slow">
//                     {overviewSection.features.map((feature, index) => {
//                         const angle = (index / overviewSection.features.length) * 360;
//                         const radius = 170; // distance from center
//                         const x = radius * Math.cos((angle * Math.PI) / 180);
//                         const y = radius * Math.sin((angle * Math.PI) / 180);

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute w-32 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-blue-100"
//                                 style={{
//                                     transform: `translate(${x}px, ${y}px)`,
//                                 }}
//                             >
//                                 <div className="w-10 h-10 mb-2">
//                                     <Image
//                                         src={feature.icon}
//                                         alt={feature.title}
//                                         width={40}
//                                         height={40}
//                                         className="object-contain mx-auto"
//                                     />
//                                 </div>
//                                 <p className="text-sm text-blue-700 font-medium">
//                                     {feature.title}
//                                 </p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Center logo */}
//                 <div className="absolute w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-blue-200">
//                     <Image
//                         src={overviewSection.centerLogo}
//                         alt="Center Logo"
//                         width={60}
//                         height={60}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }






// "use client";
// import React from "react";
// import Image from "next/image";
// import homeData from "@/data/homedata.json";

// export default function OverviewSection() {
//     const { overviewSection } = homeData;

//     return (
//         <section className="py-20 bg-blue-50 relative overflow-hidden">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
//                     {overviewSection.heading}
//                 </h3>
//                 <h2 className="text-3xl font-bold text-blue-800 mt-2">
//                     {overviewSection.subheading}{" "}
//                     <span className="text-blue-600">{overviewSection.highlight}</span>
//                 </h2>
//                 <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
//                     {overviewSection.description}
//                 </p>
//             </div>

//             {/* Rotating Circle */}
//             <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[500px]">
//                 {/* Rotating ring */}
//                 <div className="absolute w-[340px] sm:w-[380px] md:w-[420px] h-[340px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-blue-200 animate-spin-slow hover:[animation-play-state:paused]">
//                     {overviewSection.features.map((feature, index) => {
//                         const angle = (index / overviewSection.features.length) * 360;
//                         const radius = 160; // adjust spacing between center and icons
//                         const x = radius * Math.cos((angle * Math.PI) / 180);
//                         const y = radius * Math.sin((angle * Math.PI) / 180);

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute w-28 sm:w-32 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-blue-100 transition-transform duration-300 hover:scale-110"
//                                 style={{
//                                     top: "50%",
//                                     left: "50%",
//                                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                                 }}
//                             >
//                                 <div className="w-10 h-10 mb-1 flex items-center justify-center animate-spin-reverse">
//                                     <Image
//                                         src={feature.icon}
//                                         alt={feature.title}
//                                         width={40}
//                                         height={40}
//                                         className="object-contain"
//                                     />
//                                 </div>
//                                 <p className="text-xs sm:text-sm text-blue-700 font-medium">
//                                     {feature.title}
//                                 </p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Center logo */}
//                 <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-blue-200 z-10">
//                     <Image
//                         src={overviewSection.centerLogo}
//                         alt="Center Logo"
//                         width={60}
//                         height={60}
//                         className="object-contain"
//                     />
//                 </div>
//             </div>

//             {/* Animations */}
//             <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }

//         .animate-spin-reverse {
//           animation: spin-reverse 25s linear infinite;
//         }
//       `}</style>
//         </section>
//     );
// }





"use client";
import React from "react";
import * as Icons from "lucide-react";
import homeData from "@/data/homedata.json";

export default function OverviewSection() {
    const { overviewSection } = homeData;

    return (
        <section className="py-20 bg-blue-50 relative overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-10">
                <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
                    {overviewSection.heading}
                </h3>
                <h2 className="text-3xl font-bold text-blue-800 mt-2">
                    {overviewSection.subheading}{" "}
                    <span className="text-blue-600">{overviewSection.highlight}</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
                    {overviewSection.description}
                </p>
            </div>

            {/* Rotating Circle */}
            <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[500px]">
                {/* Rotating ring */}
                <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[340px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-blue-200 animate-spin-slow hover:[animation-play-state:paused]">
                    {overviewSection.features.map((feature, index) => {
                        const angle = (index / overviewSection.features.length) * 360;
                        const radius = 160;
                        const x = radius * Math.cos((angle * Math.PI) / 180);
                        const y = radius * Math.sin((angle * Math.PI) / 180);

                        const LucideIcon = Icons[feature.icon];

                        return (
                            <div style={{
                                top: "50%",
                                left: "50%",
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            }} className="absolute transition-transform duration-300 hover:scale-110" key={index}>
                                <div

                                    className=" w-28 sm:w-32 h-20 bg-white animate-spin-reverse2 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-blue-100 "

                                >
                                    <div className="w-10 h-10 mb-1 flex items-center justify-center  text-blue-600">
                                        {LucideIcon ? (
                                            <LucideIcon size={28} strokeWidth={1.5} />
                                        ) : (
                                            <Icons.Circle size={28} />
                                        )}
                                    </div>
                                    <p className="text-xs sm:text-sm text-blue-700 font-medium">
                                        {feature.title}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Center logo (can also be an icon if preferred) */}
                <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-blue-200 z-10">
                    <Icons.ShoppingBag className="text-blue-600" size={48} strokeWidth={1.5} />
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
        .animate-spin-reverse2 {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
        </section>
    );
}




// "use client";
// import React from "react";
// import * as Icons from "lucide-react";
// import homeData from "@/data/homedata.json";

// export default function OverviewSection() {
//     const { overviewSection } = homeData;

//     return (
//         <section className="py-20 bg-blue-50 relative overflow-hidden">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
//                     {overviewSection.heading}
//                 </h3>
//                 <h2 className="text-3xl font-bold text-blue-800 mt-2">
//                     {overviewSection.subheading}{" "}
//                     <span className="text-blue-600">{overviewSection.highlight}</span>
//                 </h2>
//                 <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
//                     {overviewSection.description}
//                 </p>
//             </div>

//             {/* Rotating Circle */}
//             <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[500px]">
//                 {/* Rotating ring */}
//                 <div className="absolute w-[340px] sm:w-[380px] md:w-[420px] h-[340px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-blue-200 animate-spin-slow hover:[animation-play-state:paused]">
//                     {overviewSection.features.map((feature, index) => {
//                         const angle = (index / overviewSection.features.length) * 360;
//                         const radius = 160;
//                         const x = radius * Math.cos((angle * Math.PI) / 180);
//                         const y = radius * Math.sin((angle * Math.PI) / 180);

//                         const LucideIcon = Icons[feature.icon];

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute w-28 sm:w-32 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-blue-100 transition-transform duration-300 hover:scale-110"
//                                 style={{
//                                     top: "50%",
//                                     left: "50%",
//                                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-angle}deg)`,
//                                 }}
//                             >
//                                 <div className="w-10 h-10 mb-1 flex items-center justify-center text-blue-600">
//                                     {LucideIcon ? (
//                                         <LucideIcon size={28} strokeWidth={1.5} />
//                                     ) : (
//                                         <Icons.Circle size={28} />
//                                     )}
//                                 </div>
//                                 <p className="text-xs sm:text-sm text-blue-700 font-medium">
//                                     {feature.title}
//                                 </p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Center logo (Lucide icon example) */}
//                 <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-blue-200 z-10">
//                     <Icons.ShoppingBag className="text-blue-600" size={48} strokeWidth={1.5} />
//                 </div>
//             </div>

//             {/* Animations */}
//             <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }
//       `}</style>
//         </section>
//     );
// }
