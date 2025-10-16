import { ArrowRight } from "lucide-react";

export default function DemoSection({ data, colorTheme }) {
    const { leftText, rightButton } = data;
    return (
        <section className={`relative mt-0 bg-[${colorTheme}] py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6`}>
            {/* Left Section */}
            <div className="flex flex-row items-center gap-3 text-white text-2xl font-semibold">
                <span>{leftText}</span>
                <ArrowRight className="bg-white text-[#12A84E] rounded-full p-1 w-8 h-8" />
            </div>

            {/* Right Section - Logo Placeholder */}
            <div className="bg-white rounded-lg px-6 py-3">
                <span className="text-[#12A84E] font-bold text-xl">{rightButton}</span>
            </div>
        </section>
    );
}




// import { ArrowRight } from "lucide-react";

// export default function DemoSection({ data }) {
//     const { leftText, rightButton } = data;

//     return (
//         <section className="relative mt-0 bg-[#1E3A8A] py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex flex-row items-center gap-3 text-white text-2xl font-semibold">
//                 <span>{leftText}</span>
//                 <ArrowRight className="bg-white text-[#1E3A8A] rounded-full p-1 w-8 h-8" />
//             </div>
//             <div className="bg-white rounded-lg px-6 py-3">
//                 <span className="text-[#1E3A8A] font-bold text-xl">{rightButton}</span>
//             </div>
//         </section>

//     );
// }
