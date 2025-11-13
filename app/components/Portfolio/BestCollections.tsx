import React from "react";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { ArrowRight } from "@deemlol/next-icons";
import CoverCard from "./Cover/CoverCard";

const merriWeatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const BestCollections = () => {
  return (
    <section id="bestCollection" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl text-gray-900 mb-6 ${merriWeatherBold.className}`}>
            Best Collections
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${merriWeatherMedium.className}`}>
            Discover our most popular and award-winning book cover designs that have 
            helped authors captivate readers and achieve bestseller status.
          </p>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Cover Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          <CoverCard bookIndex={0} />
          <CoverCard bookIndex={1} />
          <CoverCard bookIndex={2} />
          <CoverCard bookIndex={3} />
          <CoverCard bookIndex={0} />
          <CoverCard bookIndex={1} />
          <CoverCard bookIndex={2} />
          <CoverCard bookIndex={3} />
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className={`inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${merriWeatherMedium.className}`}
          >
            View All Collections
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestCollections;
