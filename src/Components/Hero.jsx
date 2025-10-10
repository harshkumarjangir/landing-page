// import homedata from "@/data/homedata.json";
import homedata from "@/data/homedata.json"
import React from "react";

const HeroSection = ({ data }) => {
  const { backgroundVideo, heading, description, heroStats } = data;

  return (
    <div className="relative md:h-[90vh] w-full px-2 flex max-md:flex-col flex-row items-center max-md:justify-center justify-between  text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={backgroundVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* LEFT SIDE - TEXT + STATS */}
      <div className="lg:max-w-4xl px-4 max-md:py-12 md:px-8">
        <h2 className="text-3xl md:text-5xl mb-4">{heading}</h2>
        <p className="text md:text-lg mb-8 max-w-4xl">{description}</p>

        {/* STATS */}
        <div className="flex gap-6 mt-10">
          <button
            className="bg-[#1163FB] hover:bg-white/20 text-white font-medium py-3 px-8 rounded-xl transition-all"
          >
            Get Started
          </button>
          <button
            className="bg-white/10 hover:bg-[#0d47a1] text-white font-semibold py-3 px-8 rounded-xl border border-white/10 transition-all"
          >
            Request a Qoute
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - TRANSPARENT FORM */}
      <div className="md:mr-12 mt-10 md:mt-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-md border border-white/20 shadow-lg shadow-black/20">
        <h3 className="text-2xl font-semibold mb-6 text-center text-white">
          Send Your Query
        </h3>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Description (Interested Software) <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="3"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your interest..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1163FB]/90 hover:bg-[#1163FB] transition-colors rounded-md py-3 font-medium text-white"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default HeroSection;
