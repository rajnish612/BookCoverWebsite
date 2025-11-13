import React from "react";
import { Merriweather } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const merriweatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const merriweatherRegular = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const interMedium = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

const HeroSection = () => {
  return (
    <div
      id="heroSection"
      className="relative md:h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          src={"/images/covers/Home.jpg"}
          alt="Book Cover Design Background"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative pt-5 z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className={`text-white/90 text-sm ${interMedium.className}`}>
            ✨ Book Cover Designer
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight ${merriweatherBold.className}`}
        >
          Beautiful Book Covers
          <br />
          <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            That Tell Stories
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed ${merriweatherRegular.className}`}
        >
          Stunning book covers that capture attention and tell your story.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/portfolio"
            className={`px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg group ${interMedium.className}`}
          >
            View My Portfolio
            <svg
              className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className={`px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-semibold text-lg backdrop-blur-sm ${interMedium.className}`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>

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
