import React from "react";
import { Merriweather } from "next/font/google";
const merriWeatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["800"],
});
const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["600"],
});
const HeroSection = () => {
  return (
    <div id="heroSection" className="h-[800px]  relative  ">
      <img
        className="w-full h-full object-cover object-center"
        src={"https://picsum.photos/1600/900"}
        alt="Book Cover"
      />

      <div className="flex flex-col text-left justify-center items-start px-5 md:px-20 absolute inset-0">
        <span className="text-2xl  md:text-4xl ">
          FREELANCE BOOK COVER DESIGNER & DIGITAL ARTIST
        </span>
        <span
          style={merriWeatherBold.style}
          className="mt-4 text-2xl wrap-break-word  md:text-6xl"
        >
          BITU BURAGOHAIN
        </span>
        <button
          style={merriWeatherMedium.style}
          className="p-4 rounded-lg border-2 mt-5"
        >
          Contact With me
        </button>
      </div>
      
      {/* Bottom Wave */}
      <svg
        className="absolute -bottom-1 left-0 w-full h-20 md:h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C360,160 1080,0 1440,96 L1440,120 L0,120 Z"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
