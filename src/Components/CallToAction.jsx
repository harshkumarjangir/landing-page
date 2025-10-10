import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CallToAction = ({data}) => {
    const callToAction = data;

    return (
        <section className="bg-[#010409] py-12 px-6">
            <div
                className="relative max-w-6xl mx-auto bg-black border border-[#292929] rounded-2xl shadow-[0_0_20px_8px_rgba(37,99,235,0.4)] flex flex-col md:flex-row items-center overflow-hidden"
            >
                {/* Left content */}
                <div className="flex-1 p-8">
                    <div className="flex items-center mb-4">
                        <Sparkles className="w-6 h-6 text-white mr-2" />
                        <h3 className="text-xl font-semibold text-white">
                            {callToAction.title}
                        </h3>
                    </div>
                    <p className="text-gray-300 mb-6">{callToAction.description}</p>
                    <Link
                        href={callToAction.buttonUrl}
                        className="inline-block bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition"
                    >
                        {callToAction.buttonText}
                    </Link>
                </div>

                {/* Right image */}
                <div className="max-md:hidden md:w-1/2">
                    <Image
                        src={callToAction.image}
                        alt={callToAction.title}
                        width={350}
                        height={200}
                        className="object-cover ml-auto pr-5"
                    />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
