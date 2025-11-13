import React from "react";
import { Playfair } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
const playFair = Playfair({
  subsets: ["vietnamese"],
  weight: ["700"],
});
const test = Dancing_Script({
  subsets: ["vietnamese"],
  weight: ["700"],
});

const HeroSection = () => {
  return (
    <div
      id="heroSection"
      className="md:h-[800px] sm:h-[500px] h-[400px]   relative  "
    >
      <Image
        width={1280}
        height={720}
        className="w-full h-full object-cover "
        src={"/images/covers/Home.jpg"}
        alt="Book Cover"
      />

      <div className="flex flex-col text-white bg-black/60 justify-center items-center absolute inset-0">
        <h1
          style={playFair.style}
          className="text-5xl text-center md:text-6xl lg:text-8xl font-bold text-white drop-shadow-2xl"
        >
          Discover Amazing Books
        </h1>
        <p
          style={test.style}
          className="mt-4 text-center text-xl md:text-2xl lg:text-3xl text-gray-100 drop-shadow-lg"
        >
          Explore the works of Bitu Buragohain!
        </p>
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
