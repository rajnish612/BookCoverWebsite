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
    <div id="heroSection" className="h-[500px]  relative  ">
      <img
        className="w-full h-full object-cover object-center"
        src={"https://picsum.photos/1600/900"}
        alt="Book Cover"
      />

      <div className="flex flex-col text-left justify-center items-center px-20 absolute inset-0">
        <span
          style={merriWeatherBold.style}
          className="mt-4 text-black text-6xl  md:text-5xl"
        >
          SERVICES
        </span>
        <button
          style={merriWeatherMedium.style}
          className="p-4 text-black rounded-lg border-2 mt-5"
        >
          Contact With me
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
