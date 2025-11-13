import React from "react";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { ArrowRight, BookOpen, Star } from "@deemlol/next-icons";

const merriWeatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const TransformindIdeas = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight ${merriWeatherBold.className}`}>
            Transforming Ideas into 
            <span className="block text-gray-700">Compelling Covers</span>
          </h2>
          
          <p className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 ${merriWeatherMedium.className}`}>
            Every great book deserves a cover that captures its essence and draws readers in. 
            I specialize in creating visually stunning covers that not only look beautiful 
            but also effectively communicate your story&apos;s unique appeal to your target audience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/portfolio"
              className={`inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${merriWeatherMedium.className}`}
            >
              Explore My Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/services"
              className={`inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${merriWeatherMedium.className}`}
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 00-4-4V5z" />
              </svg>
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${merriWeatherBold.className}`}>
              Custom Design
            </h3>
            <p className={`text-gray-600 text-sm leading-relaxed ${merriWeatherMedium.className}`}>
              Each cover is uniquely crafted to reflect your book&apos;s genre, mood, and target audience.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <BookOpen className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${merriWeatherBold.className}`}>
              Print & Digital Ready
            </h3>
            <p className={`text-gray-600 text-sm leading-relaxed ${merriWeatherMedium.className}`}>
              High-resolution files optimized for both print publishing and digital platforms.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Star className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${merriWeatherBold.className}`}>
              Award-Winning Quality
            </h3>
            <p className={`text-gray-600 text-sm leading-relaxed ${merriWeatherMedium.className}`}>
              Professional designs that help your book stand out in a competitive marketplace.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${merriWeatherBold.className}`}>
                500+
              </div>
              <div className={`text-gray-600 text-sm ${merriWeatherMedium.className}`}>
                Books Designed
              </div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${merriWeatherBold.className}`}>
                5+
              </div>
              <div className={`text-gray-600 text-sm ${merriWeatherMedium.className}`}>
                Years Experience
              </div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${merriWeatherBold.className}`}>
                98%
              </div>
              <div className={`text-gray-600 text-sm ${merriWeatherMedium.className}`}>
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${merriWeatherBold.className}`}>
                24hr
              </div>
              <div className={`text-gray-600 text-sm ${merriWeatherMedium.className}`}>
                Turnaround Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformindIdeas;
