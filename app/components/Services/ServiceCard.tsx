import React from 'react'
import { Merriweather } from "next/font/google";

const merriWeatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});
const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features = [],
  buttonText = "Learn More",
  onButtonClick
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border flex flex-col max-w-lg w-full aspect-square border-gray-100 p-6">
      {/* Icon */}
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center text-gray-700">
            {icon}
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className={`text-xl text-gray-900 text-center mb-3 ${merriWeatherBold.className}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-gray-600 text-center mb-4 leading-relaxed text-sm ${merriWeatherMedium.className}`}>
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 text-sm">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 shrink-0"></div>
              <span className={merriWeatherMedium.className}>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Call to Action Button */}
      <button
        onClick={onButtonClick}
        className={`w-full mt-auto py-3 px-4 bg-black text-white hover:bg-gray-800 font-medium rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${merriWeatherMedium.className}`}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default ServiceCard
