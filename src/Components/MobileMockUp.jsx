// "use client";

// import { useRef, useState, useEffect } from "react"
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     motion,
//     AnimatePresence,
//     useScroll,
//     useTransform,
// } from "framer-motion";

// export default function MobileMockUp({ data }) {
//     const slides = data || [];
//     const containerRef = useRef(null);

//     // track scroll progress
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         if (!scrollYProgress || slides.length === 0) return;

//         const unsubscribe = scrollYProgress.on("change", (v) => {
//             const idx = Math.min(
//                 slides.length - 1,
//                 Math.floor(v * slides.length)
//             );
//             setActiveIndex(idx);
//         });

//         return () => unsubscribe();
//     }, [scrollYProgress, slides.length]);

//     if (!slides.length) return null;

//     // Parallax shift
//     const yParallax = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

//     // Scroll to a specific index when clicking indicator
//     const scrollToIndex = (idx) => {
//         if (!containerRef.current) return;
//         const sectionHeight = window.innerHeight;
//         const targetScroll = containerRef.current.offsetTop + idx * sectionHeight;
//         window.scrollTo({ top: targetScroll, behavior: "smooth" });
//     };

//     return (
//         <section
//             ref={containerRef}
//             style={{ height: `${slides.length * 100}vh` }}
//             className="relative bg-black text-white"
//         >
//             <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-12 max-md:pt-10 gap-10">
//                 {/* --- Left Text --- */}
//                 <div className="w-full lg:w-[38%] relative z-20">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeIndex}
//                             initial={{ opacity: 0, x: -40 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 40 }}
//                             transition={{ duration: 0.5, ease: "easeOut" }}
//                             className="space-y-5"
//                         >
//                             <p className="text-blue-500 text-sm sm:text-base font-medium">
//                                 Case Study
//                             </p>
//                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
//                                 {slides[activeIndex].company}
//                             </h2>
//                             <p className="text-sm sm:text-base font-light leading-relaxed text-gray-300">
//                                 {slides[activeIndex].description}
//                             </p>
//                             <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">
//                                 {slides[activeIndex].result}
//                             </p>

//                             {/* Stats */}
//                             <motion.div
//                                 className="flex flex-wrap sm:flex-nowrap sm:space-x-10 mt-2"
//                                 initial="hidden"
//                                 animate="show"
//                                 variants={{
//                                     hidden: { opacity: 0, y: 20 },
//                                     show: {
//                                         opacity: 1,
//                                         y: 0,
//                                         transition: { staggerChildren: 0.15 },
//                                     },
//                                 }}
//                             >
//                                 {slides[activeIndex].stats.map((s, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className=" first:pr-8 border-r-2 border-gray-700 last:border-r-0 max-md:last:pl-8 mb-4 sm:mb-0"
//                                         variants={{
//                                             hidden: { opacity: 0, y: 20 },
//                                             show: { opacity: 1, y: 0 },
//                                         }}
//                                     >
//                                         <p className="text-2xl sm:text-3xl font-bold">{s.count}</p>
//                                         <p className="text-xs sm:text-sm text-gray-400">{s.title}</p>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>

//                             {/* Button */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3 }}
//                                 whileHover="hover"
//                             >
//                                 <Link
//                                     href={slides[activeIndex].buttonLink}
//                                     className="inline-flex items-center mt-6 px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-white hover:bg-[#1163FB] hover:border-[#1163FB] transition"
//                                 >
//                                     <span className="text-xs sm:text-sm font-medium">
//                                         {slides[activeIndex].buttonText}
//                                     </span>
//                                     <motion.div
//                                         className="ml-2"
//                                         variants={{
//                                             hover: { x: [0, 6, 0] }
//                                         }}
//                                         transition={{ repeat: Infinity, duration: 1.0 }}
//                                     >
//                                         <ChevronRight className="ml-2 w-6 h-6" />
//                                     </motion.div>
//                                 </Link>
//                             </motion.div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* --- Right Image --- */}
//                 {/* <div className="w-full lg:w-[62%] h-[250px] sm:h-[350px] lg:h-[80%] relative overflow-hidden rounded-2xl shadow-2xl">
//                     {slides.map((slide, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: idx === 0 ? 1 : 0 }}
//                             animate={{
//                                 opacity: activeIndex === idx ? 1 : 0,
//                                 scale: activeIndex === idx ? 1 : 1.05,
//                             }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             className="absolute inset-0"
//                         >
//                             <motion.div style={{ y: yParallax }} className="w-full h-full overflow-hidden rounded-2xl">
//                                 <Image
//                                     src={slide.image}
//                                     alt={slide.company}
//                                     fill
//                                     className="object-cover overflow-hidden"
//                                     priority={idx === 0}
//                                 />
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div> */}
//                 {/* --- Right Image --- */}
//                 <div className="w-full lg:w-[62%] h-[250px] sm:h-[350px] lg:h-[70%] relative overflow-hidden rounded-2xl shadow-2xl">
//                     {slides.map((slide, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, y: 40 }} // Start slightly below
//                             animate={{
//                                 opacity: activeIndex === idx ? 1 : 0,
//                                 y: activeIndex === idx ? 0 : -40, // Active → center, Inactive → move up
//                                 scale: activeIndex === idx ? 1 : 1.05, // Optional zoom effect
//                             }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             className="absolute inset-0"
//                         >
//                             <Image
//                                 src={slide.image}
//                                 alt={slide.company}
//                                 fill
//                                 className="object-cover rounded-2xl"
//                                 priority={idx === 0}
//                             />
//                         </motion.div>
//                     ))}
//                 </div>



//                 {/* --- Progress Indicator --- */}
//                 {/* Desktop → Right Center */}
//                 <div className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 flex-col items-center gap-3">
//                     {slides.map((_, idx) => (
//                         <motion.button
//                             key={idx}
//                             onClick={() => scrollToIndex(idx)}
//                             className="w-[3px] rounded-full bg-gray-600 overflow-hidden transition-all cursor-pointer"
//                             style={{
//                                 height: activeIndex === idx ? "32px" : "16px",
//                                 backgroundColor:
//                                     activeIndex === idx ? "#1163FB" : "rgba(255,255,255,0.3)",
//                             }}
//                             transition={{ duration: 0.4 }}
//                         />
//                     ))}
//                 </div>

//                 {/* Mobile/Tablet → Bottom Center */}
//                 <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row items-center gap-3">
//                     {slides.map((_, idx) => (
//                         <motion.button
//                             key={idx}
//                             onClick={() => scrollToIndex(idx)}
//                             className="h-[3px] rounded-full bg-gray-600 overflow-hidden transition-all"
//                             style={{
//                                 width: activeIndex === idx ? "32px" : "16px",
//                                 backgroundColor:
//                                     activeIndex === idx ? "#1163FB" : "rgba(255,255,255,0.3)",
//                             }}
//                             transition={{ duration: 0.4 }}
//                         />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }






// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ChevronUp, ChevronDown } from "lucide-react";

// export default function MobileMockUp({ data }) {
//     const section = data;
//     const images = section?.screens || [];
//     const [activeIndex, setActiveIndex] = useState(0);
//     const containerRef = useRef(null);

//     // Update active image on scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = containerRef.current.scrollTop;
//             const height = containerRef.current.clientHeight;
//             const index = Math.round(scrollTop / height);
//             setActiveIndex(index);
//         };

//         const ref = containerRef.current;
//         if (ref) ref.addEventListener("scroll", handleScroll);
//         return () => ref?.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Scroll to image manually
//     const scrollToImage = (index) => {
//         const height = containerRef.current.clientHeight;
//         containerRef.current.scrollTo({
//             top: height * index,
//             behavior: "smooth",
//         });
//         setActiveIndex(index);
//     };

//     if (!images.length) {
//         return <p className="text-gray-400 text-center">No mockup images found.</p>;
//     }

//     return (
//         <section className="flex flex-col items-center gap-4 py-10 bg-gray-100">
//             {/* Title */}
//             {section.title && (
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                     {section.title}
//                 </h2>
//             )}

//             {/* Mobile Mockup Frame */}
//             <div className="relative border-[10px] border-gray-800 rounded-[2rem] overflow-hidden w-[280px] h-[550px] bg-black shadow-xl">
//                 <div
//                     ref={containerRef}
//                     className="h-full w-full overflow-y-scroll no-scrollbar scroll-smooth snap-y snap-mandatory"
//                 >
//                     {images.map((item, i) => (
//                         <div
//                             key={i}
//                             className="w-full h-full snap-center flex-shrink-0 relative"
//                         >
//                             <Image
//                                 src={item.img}
//                                 alt={item.caption || `screen ${i + 1}`}
//                                 fill
//                                 className="object-cover"
//                             />
//                             {item.caption && (
//                                 <div className="absolute bottom-3 left-0 right-0 text-center text-sm text-white bg-black/40 py-1">
//                                     {item.caption}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex flex-col gap-2">
//                 <button
//                     onClick={() => scrollToImage(Math.max(0, activeIndex - 1))}
//                     disabled={activeIndex === 0}
//                     className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-30"
//                 >
//                     <ChevronUp />
//                 </button>
//                 <button
//                     onClick={() => scrollToImage(Math.min(images.length - 1, activeIndex + 1))}
//                     disabled={activeIndex === images.length - 1}
//                     className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-30"
//                 >
//                     <ChevronDown />
//                 </button>
//             </div>

//             {/* Dots Indicator */}
//             <div className="flex gap-2 mt-2">
//                 {images.map((_, i) => (
//                     <div
//                         key={i}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-blue-500 scale-110" : "bg-gray-400"
//                             }`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }





// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ChevronUp, ChevronDown } from "lucide-react";

// export default function MobileMockUp({ data }) {
//     const section = data;
//     const images = section?.screens || [];
//     const [activeIndex, setActiveIndex] = useState(0);
//     const containerRef = useRef(null);

//     // Update active image on scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = containerRef.current.scrollTop;
//             const height = containerRef.current.clientHeight;
//             const index = Math.round(scrollTop / height);
//             setActiveIndex(index);
//         };

//         const ref = containerRef.current;
//         if (ref) ref.addEventListener("scroll", handleScroll);
//         return () => ref?.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Scroll to image manually
//     const scrollToImage = (index) => {
//         const height = containerRef.current.clientHeight;
//         containerRef.current.scrollTo({
//             top: height * index,
//             behavior: "smooth",
//         });
//         setActiveIndex(index);
//     };

//     if (!images.length) {
//         return (
//             <p className="text-gray-400 text-center">No mockup images found.</p>
//         );
//     }

//     return (
//         <section className="flex flex-col items-center gap-4 py-10 bg-gray-100">
//             {/* Title */}
//             {section.title && (
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                     {section.title}
//                 </h2>
//             )}

//             {/* iPhone Frame */}
//             <div className="relative w-[280px] h-[580px] flex justify-center items-center">
//                 {/* Outer frame */}
//                 <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-700">
//                     {/* Inner border glass effect */}
//                     <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

//                     {/* Notch */}
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-2xl z-20"></div>

//                     {/* Side buttons (just visual) */}
//                     <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
//                     <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
//                     <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

//                     {/* Screen content */}
//                     <div
//                         ref={containerRef}
//                         className="relative z-10 h-full w-full overflow-y-scroll no-scrollbar scroll-smooth snap-y snap-mandatory rounded-[2.5rem]"
//                     >
//                         {images.map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="w-full h-full snap-center flex-shrink-0 relative"
//                             >
//                                 <Image
//                                     src={item.img}
//                                     alt={item.caption || `screen ${i + 1}`}
//                                     fill
//                                     className="object-cover rounded-[2.5rem]"
//                                 />
//                                 {item.caption && (
//                                     <div className="absolute bottom-3 left-0 right-0 text-center text-sm text-white bg-black/40 py-1">
//                                         {item.caption}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex flex-col gap-2 mt-3">
//                 <button
//                     onClick={() => scrollToImage(Math.max(0, activeIndex - 1))}
//                     disabled={activeIndex === 0}
//                     className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-30"
//                 >
//                     <ChevronUp />
//                 </button>
//                 <button
//                     onClick={() =>
//                         scrollToImage(Math.min(images.length - 1, activeIndex + 1))
//                     }
//                     disabled={activeIndex === images.length - 1}
//                     className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-30"
//                 >
//                     <ChevronDown />
//                 </button>
//             </div>

//             {/* Dots Indicator */}
//             <div className="flex gap-2 mt-2">
//                 {images.map((_, i) => (
//                     <div
//                         key={i}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex
//                                 ? "bg-blue-500 scale-110"
//                                 : "bg-gray-400"
//                             }`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }




// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// // import homeData from "@/data/homedata.json";

// const MobileMockUp = ({data}) => {
//     const mobiledata = data;
//     const { title, screens } = mobiledata;
//     const swiperRef = useRef(null);

//     return (
//         <section className="py-16 bg-black text-white">
//             <div className="mx-auto px-4 relative">
//                 {/* Section Title */}
//                 <h2 className="text-3xl md:text-[40px] font-medium mb-16 text-center">
//                     {title}
//                 </h2>

//                 {/* Swiper for Screens */}
//                 <Swiper
//                     modules={[Navigation]}
//                     centeredSlides={true}
//                     spaceBetween={24}
//                     slidesPerView={3.2} // Show 2 full + partial preview
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     className="pb-12"
//                     breakpoints={{
//                         0: { slidesPerView: 1.1, centeredSlides: true },
//                         640: { slidesPerView: 1.3, centeredSlides: true },
//                         1024: { slidesPerView: 2.2, centeredSlides: true },
//                     }}
//                 >
//                     {screens.map((screen, index) => (
//                         <SwiperSlide key={index} className="h-auto">
//                             {({ isActive }) => (
//                                 <motion.div
//                                     transition={{ duration: 0.3 }}
//                                     className={`p-6 rounded-3xl flex flex-col items-center justify-center text-center
//                                     border border-[#343434] bg-[#1a1a1a] shadow-md transition-all duration-300
//                                     ${isActive
//                                             ? "opacity-100 scale-100 h-[520px]"
//                                             : "opacity-50 scale-90 h-[480px] mt-3"
//                                         }`}
//                                 >
//                                     <div className="relative w-[260px] h-[500px] overflow-hidden rounded-[2rem] border-4 border-gray-700">
//                                         <Image
//                                             src={screen.img}
//                                             alt={screen.caption}
//                                             width={250}
//                                             height={500}
//                                             className="object-cover rounded-2xl"
//                                         />
//                                     </div>
//                                     <p className="mt-4 text-gray-300 text-sm">
//                                         {screen.caption}
//                                     </p>
//                                 </motion.div>
//                             )}
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center gap-4 mt-6">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MobileMockUp;



// "use client";
// import { useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// export default function MobileMockUp({ data }) {
//     const section = data;
//     const images = section?.screens || [];
//     const swiperRef = useRef(null);

//     if (!images.length) {
//         return (
//             <p className="text-gray-400 text-center">No mockup images found.</p>
//         );
//     }

//     return (
//         <section className="flex flex-col items-center gap-6 py-16 bg-gray-100">
//             {/* Title */}
//             {section.title && (
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                     {section.title}
//                 </h2>
//             )}

//             {/* iPhone Mockup with Horizontal Swiper */}
//             <div className="relative w-[280px] h-[580px] flex justify-center items-center">
//                 {/* Outer frame */}
//                 <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-700 overflow-hidden">
//                     {/* Inner border glass effect */}
//                     <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

//                     {/* Notch */}
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-2xl z-20"></div>

//                     {/* Side buttons (visual only) */}
//                     <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
//                     <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
//                     <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

//                     {/* Swiper inside the phone screen */}
//                     <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem]">
//                         <Swiper
//                             modules={[Autoplay, Navigation]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             slidesPerView={1}
//                             loop={true}
//                             autoplay={{
//                                 delay: 2500,
//                                 disableOnInteraction: false,
//                             }}
//                             navigation={false}
//                             className="w-full h-full"
//                         >
//                             {images.map((item, i) => (
//                                 <SwiperSlide key={i}>
//                                     <div className="relative w-full h-full">
//                                         <Image
//                                             src={item.img}
//                                             alt={item.caption || `screen ${i + 1}`}
//                                             fill
//                                             className="object-cover rounded-[2.5rem]"
//                                         />
//                                         {item.caption && (
//                                             <div className="absolute bottom-3 left-0 right-0 text-center text-sm text-white bg-black/40 py-1 rounded-b-[2.5rem]">
//                                                 {item.caption}
//                                             </div>
//                                         )}
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>

//                 {/* Left Button */}
//                 <button
//                     onClick={() => swiperRef.current?.slidePrev()}
//                     className="absolute -left-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-blue-500 transition disabled:opacity-40"
//                 >
//                     <ChevronLeft />
//                 </button>

//                 {/* Right Button */}
//                 <button
//                     onClick={() => swiperRef.current?.slideNext()}
//                     className="absolute -right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-blue-500 transition disabled:opacity-40"
//                 >
//                     <ChevronRight />
//                 </button>
//             </div>
//         </section>
//     );
// }




// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function MobileMockUp({ data }) {
//     const { title, screens } = data;
//     const swiperRef = useRef(null);

//     return (
//         <section className="py-16 bg-black text-white relative overflow-hidden">
//             {/* Title */}
//             <h2 className="text-3xl md:text-[40px] font-medium mb-16 text-center">
//                 {title}
//             </h2>

//             {/* Swiper Section */}
//             <div className="relative px-6 md:px-12">
//                 <Swiper
//                     modules={[Navigation]}
//                     centeredSlides={true}
//                     spaceBetween={40}
//                     slidesPerView={3.2}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     className="pb-12"
//                     breakpoints={{
//                         0: { slidesPerView: 1.1, centeredSlides: true },
//                         640: { slidesPerView: 1.4, centeredSlides: true },
//                         1024: { slidesPerView: 2.5, centeredSlides: true },
//                     }}
//                 >
//                     {screens.map((screen, index) => (
//                         <SwiperSlide key={index} className="flex justify-center">
//                             {({ isActive }) => (
//                                 <motion.div
//                                     transition={{ duration: 0.4 }}
//                                     className={`relative flex flex-col items-center justify-center transition-all duration-300
//                                         ${isActive
//                                             ? "scale-100 opacity-100"
//                                             : "scale-90 opacity-60"
//                                         }`}
//                                 >
//                                     {/* Realistic iPhone Mockup Frame */}
//                                     <div className="relative w-[260px] h-[520px] flex justify-center items-center">
//                                         {/* Outer frame */}
//                                         <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
//                                             {/* Inner glass effect */}
//                                             <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

//                                             {/* Notch */}
//                                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-2xl z-20"></div>

//                                             {/* Side buttons */}
//                                             <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

//                                             {/* Image (screen) */}
//                                             <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]">
//                                                 <Image
//                                                     src={screen.img}
//                                                     alt={screen.caption}
//                                                     fill
//                                                     className="object-cover rounded-[2.5rem]"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Caption */}
//                                     <p className="mt-4 text-gray-400 text-sm text-center w-[260px]">
//                                         {screen.caption}
//                                     </p>
//                                 </motion.div>
//                             )}
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center gap-4 mt-8">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// }






// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function MobileMockUp({ data }) {
//     const { title, screens } = data;
//     const swiperRef = useRef(null);

//     return (
//         <section className="py-16 bg-black text-white relative overflow-hidden">
//             {/* Title */}
//             <h2 className="text-3xl md:text-[40px] font-medium mb-16 text-center">
//                 {title}
//             </h2>

//             {/* Swiper Section */}
//             <div className="relative px-6 md:px-12">
//                 <Swiper
//                     modules={[Autoplay, Navigation]}
//                     centeredSlides={true}
//                     spaceBetween={40}
//                     slidesPerView={3.2}
//                     loop={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     className="pb-12"
//                     breakpoints={{
//                         0: { slidesPerView: 1.1, centeredSlides: true },
//                         640: { slidesPerView: 1.4, centeredSlides: true },
//                         1024: { slidesPerView: 3.5, centeredSlides: true },
//                     }}
//                 >
//                     {screens.map((screen, index) => (
//                         <SwiperSlide key={index} className="flex justify-center">
//                             {({ isActive }) => (
//                                 <motion.div
//                                     transition={{ duration: 0.4 }}
//                                     className={`relative flex flex-col items-center justify-center transition-all duration-300
//                                         ${isActive
//                                             ? "scale-100 opacity-100"
//                                             : "scale-90 opacity-60"
//                                         }`}
//                                 >
//                                     {/* Realistic iPhone Mockup Frame */}
//                                     <div className="relative w-[260px] h-[520px] flex justify-center items-center">
//                                         {/* Outer frame */}
//                                         <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
//                                             {/* Inner glass effect */}
//                                             <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

//                                             {/* Notch */}
//                                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-2xl z-20"></div>

//                                             {/* Side buttons */}
//                                             <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

//                                             {/* Image (screen) */}
//                                             <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]">
//                                                 <Image
//                                                     src={screen.img}
//                                                     alt={screen.caption}
//                                                     fill
//                                                     className="object-cover rounded-[2.5rem]"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Caption */}
//                                     <p className="mt-4 text-gray-400 text-sm text-center w-[260px]">
//                                         {screen.caption}
//                                     </p>
//                                 </motion.div>
//                             )}
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center gap-4 mt-8">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// }





"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function MobileMockUp({ data }) {
    const { title, screens } = data;
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-16 bg-black text-white relative overflow-hidden">
            {/* Title */}
            <h2 className="text-3xl md:text-[40px] font-medium mb-16 text-center">
                {title}
            </h2>

            {/* Swiper Section */}
            <div className="relative px-6 md:px-12">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={4.2}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="pb-12"
                    breakpoints={{
                        0: { slidesPerView: 1.1, centeredSlides: true },
                        640: { slidesPerView: 1.4, centeredSlides: true },
                        1024: { slidesPerView: 4.5, centeredSlides: true },
                    }}
                >
                    {screens.map((screen, index) => {
                        // Compute distance from active slide (accounting for loop)
                        const total = screens.length;
                        const leftIndex = (activeIndex - 1 + total) % total;
                        const rightIndex = (activeIndex + 1) % total;

                        let scale = "scale-75 opacity-40"; // Default (far slides)
                        if (index === activeIndex) scale = "scale-100 opacity-100";
                        else if (index === leftIndex || index === rightIndex)
                            scale = "scale-85 opacity-60";

                        return (
                            <SwiperSlide key={index} className="flex justify-center">
                                <motion.div
                                    transition={{ duration: 0.4 }}
                                    className={`relative flex flex-col items-center justify-center transition-all duration-300 ${scale}`}
                                >
                                    {/* Realistic iPhone Mockup Frame */}
                                    <div className="relative w-[260px] h-[520px] flex justify-center items-center">
                                        {/* Outer frame */}
                                        <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
                                            {/* Inner glass effect */}
                                            <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

                                            {/* Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-2xl z-20"></div>

                                            {/* Side buttons */}
                                            <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
                                            <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
                                            <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

                                            {/* Image (screen) */}
                                            <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]">
                                                <Image
                                                    src={screen.img}
                                                    alt={screen.caption}
                                                    fill
                                                    className="object-cover rounded-[2.5rem]"
                                                />
                                                <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white w-full h-40 z-50 p-2">Build a powerful restaurant platform development solution like go4food with seamless table reservations, real-time availability, and an easy-to-use booking system.</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caption */}
                                    <p className="mt-4 text-gray-400 text-sm text-center w-[260px]">
                                        {screen.caption}
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
