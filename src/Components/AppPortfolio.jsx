// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";


// // const restaurantData = {
// //     title: "Our Restaurant App Development Portfolio",
// //     subtitle: "We have delivered cutting-edge restaurant app solutions for businesses of all sizes, from single-location eateries to large restaurant chains.",
// //     brandName: "Brand",
// //     appScreens: [
// //         "/assets/home/mobileMockup/easy.png",
// //         "/assets/home/mobileMockup/swiggy.png",
// //         "/assets/home/mobileMockup/zomato.png",
// //         "/assets/home/mobileMockup/ubereats.png",
// //     ],
// // };



// const AppPortfolio = ({ data }) => {
//     const { title, subtitle, appScreens, brandName } = data;

//     return (
//         <section className="bg-white py-16 px-6 lg:px-20 overflow-hidden">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                     {title || "Our Restaurant App Development Portfolio"}
//                 </h2>
//                 <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
//                     {subtitle ||
//                         "We have delivered cutting-edge restaurant app solutions for businesses of all sizes, from single-location eateries to large restaurant chains."}
//                 </p>
//             </div>

//             {/* Portfolio Showcase */}
//             <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 bg-[#0E9F9F] rounded-3xl p-6 md:p-10">
//                 {/* App Screens */}
//                 <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 z-10">
//                     {appScreens?.map((src, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, scale: 0.8, y: 50 }}
//                             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.15 }}
//                             viewport={{ once: true }}
//                             className="bg-white rounded-2xl shadow-lg overflow-hidden w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] hover:scale-105 transition-transform duration-300"
//                         >
//                             <Image
//                                 src={src}
//                                 alt={`App Screen ${i + 1}`}
//                                 width={220}
//                                 height={440}
//                                 className="w-full h-auto"
//                             />
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Brand Block */}
//                 <motion.div
//                     initial={{ x: 100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="w-full md:w-[220px] lg:w-[280px] bg-[#078C8C] rounded-2xl md:rounded-l-3xl flex items-center justify-center text-center py-8 md:py-0"
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold text-orange-400">
//                         {brandName || "Brand"}
//                     </h3>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default AppPortfolio;





"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const AppPortfolio = ({ data }) => {
    const { title, subtitle, appScreens, brandName } = data;
    const controls = useAnimation();

    // Infinite scroll animation loop
    useEffect(() => {
        const loopAnimation = async () => {
            while (true) {
                await controls.start({
                    x: ["0%", "-50%"],
                    transition: {
                        duration: 20,
                        ease: "linear",
                    },
                });
                controls.set({ x: "0%" });
            }
        };
        loopAnimation();
    }, [controls]);

    return (
        <section className="bg-white py-16 px-6 lg:px-20 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {title || "Our Restaurant App Development Portfolio"}
                </h2>
                <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
                    {subtitle ||
                        "We have delivered cutting-edge restaurant app solutions for businesses of all sizes, from single-location eateries to large restaurant chains."}
                </p>
            </div>

            {/* Portfolio Showcase */}
            <div className="relative bg-[#0E9F9F] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-center overflow-hidden">
                {/* Scrolling Screens */}
                <div className="relative w-full overflow-hidden md:flex-1">
                    <motion.div
                        animate={controls}
                        className="flex gap-6 md:gap-8 w-max"
                    >
                        {[...appScreens, ...appScreens].map((src, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src={src}
                                    alt={`App Screen ${i + 1}`}
                                    width={220}
                                    height={440}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient fade edges */}
                    <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#0E9F9F] to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#0E9F9F] to-transparent pointer-events-none"></div>
                </div>

                {/* Brand Block */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-0 md:w-[220px] lg:w-[280px] bg-[#078C8C] rounded-2xl md:rounded-l-3xl flex items-center justify-center text-center py-8 md:py-0"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-orange-400">
                        {brandName || "Brand"}
                    </h3>
                </motion.div>
            </div>
        </section>
    );
};

export default AppPortfolio;
