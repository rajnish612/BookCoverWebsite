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

      <div className="flex flex-col text-left justify-center items-start px-20 absolute inset-0">
        <span className="text-4xl  md:text-2xl ">
          FREELANCE BOOK COVER DESIGNER & DIGITAL ARTIST
        </span>
        <span
          style={merriWeatherBold.style}
          className="mt-4 text-6xl  md:text-5xl"
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
      <svg
        className="absolute -bottom-5 left-0"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C360,160 1080,0 1440,96 L1440,150 L0,150 Z"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
