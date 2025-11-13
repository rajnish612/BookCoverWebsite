import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

interface CoverCardProps {
  url: string;
}

const CoverCard: React.FC<CoverCardProps> = ({ url }) => {
  return (
    <div className="group relative aspect-2/3 rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <Image
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        src={url}
        alt="Book Cover"
        width={300}
        height={450}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
          <span className={`font-medium ${merriWeatherMedium.className}`}>
            View Details
          </span>
        </button>
      </div>

      {/* Optional: Book info overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white">
          <h3
            className={`text-sm font-semibold mb-1 ${merriWeatherMedium.className}`}
          >
            Book Cover Design
          </h3>
          <p className="text-xs text-gray-200">Fiction • Romance</p>
        </div>
      </div>
    </div>
  );
};

export default CoverCard;
