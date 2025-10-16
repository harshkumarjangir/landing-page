"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DemoSection({ data, colorTheme }) {
    const { leftText, rightButton, rightButtonUrl } = data;

    return (
        <section
            style={{ backgroundColor: colorTheme }}
            className="relative mt-0 py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
            {/* Left Section */}
            <div className="flex flex-row items-center gap-3 text-white text-2xl font-semibold">
                <span>{leftText}</span>
                <ArrowRight
                    className="rounded-full p-1 w-8 h-8"
                    style={{ backgroundColor: "white", color: colorTheme }}
                />
            </div>

            {/* Right Section - Button */}
            <Link
                href={rightButtonUrl}
                className="rounded-lg px-6 py-3 font-bold text-xl border transition-colors duration-300"
                style={{
                    backgroundColor: "white",
                    color: colorTheme,
                    borderColor: "white",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "white";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = colorTheme;
                    e.currentTarget.style.borderColor = "white";
                }}
            >
                {rightButton}
            </Link>
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
