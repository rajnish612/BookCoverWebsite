import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriWeatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const AboutMeCard = () => {
  return (
    <section id="aboutMeCard" className="py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl text-gray-900 mb-4 ${merriWeatherBold.className}`}
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full  max-w-xl rounded-lg overflow-hidden aspect-3/3 mx-auto lg:mx-0">
              {/* <div className="bg-amber-300 w-full max-w-xl   rounded-2xl overflow-hidden  shadow-lg"> */}
                <Image
                  src="/images/bitu/bitu1.jpg"
                  alt="Bitu Buragohain"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              {/* </div> */}
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h3
              className={`text-2xl text-gray-900 mb-6 ${merriWeatherBold.className}`}
            >
              Hi, I&apos;m Bitu Buragohain
            </h3>

            <div className="space-y-4">
              <p
                className={`text-gray-700 leading-relaxed ${merriWeatherMedium.className}`}
              >
                I&apos;m a passionate book cover designer with over 5 years of
                experience creating compelling visual narratives that capture
                the essence of every story. My designs help authors make
                powerful first impressions and connect with their target
                audience.
              </p>

              <p
                className={`text-gray-700 leading-relaxed ${merriWeatherMedium.className}`}
              >
                I specialize in both digital and print covers, working closely
                with authors to bring their vision to life. From romance to
                thriller, fantasy to non-fiction, I create covers that
                don&apos;t just look beautiful—they sell books.
              </p>

              <p
                className={`text-gray-700 leading-relaxed ${merriWeatherMedium.className}`}
              >
                When I&apos;m not designing, you can find me reading the latest
                bestsellers, exploring new design trends, or traveling to find
                inspiration for my next creative project.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div
                  className={`text-2xl font-bold text-gray-900 ${merriWeatherBold.className}`}
                >
                  500+
                </div>
                <div
                  className={`text-sm text-gray-600 ${merriWeatherMedium.className}`}
                >
                  Covers Created
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold text-gray-900 ${merriWeatherBold.className}`}
                >
                  5+
                </div>
                <div
                  className={`text-sm text-gray-600 ${merriWeatherMedium.className}`}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold text-gray-900 ${merriWeatherBold.className}`}
                >
                  98%
                </div>
                <div
                  className={`text-sm text-gray-600 ${merriWeatherMedium.className}`}
                >
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                className={`bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${merriWeatherMedium.className}`}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeCard;
