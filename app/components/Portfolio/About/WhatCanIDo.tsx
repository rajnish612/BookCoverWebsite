import React from 'react';
import { Merriweather } from "next/font/google";

const merriWeatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const WhatCanIDo = () => {
  const skills = [
    {
      category: "Design Software",
      items: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 85 },
        { name: "Figma", level: 80 },
      ]
    },
    {
      category: "Design Specialties",
      items: [
        { name: "Book Cover Design", level: 98 },
        { name: "Typography", level: 92 },
        { name: "Color Theory", level: 88 },
        { name: "Brand Identity", level: 85 },
      ]
    },
    {
      category: "Technical Skills",
      items: [
        { name: "Print Design", level: 95 },
        { name: "Digital Design", level: 92 },
        { name: "3D Mockups", level: 88 },
        { name: "Image Editing", level: 96 },
      ]
    }
  ];

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "E-book Covers",
      description: "Digital-first designs optimized for online platforms and e-readers."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      title: "Print Covers",
      description: "High-resolution designs ready for professional printing and publishing."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "3D Mockups",
      description: "Realistic 3D presentations to showcase your book in various settings."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Series Branding",
      description: "Consistent visual identity across multiple books in a series."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "Custom Illustrations",
      description: "Original artwork and illustrations tailored to your story&apos;s theme."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Design Revisions",
      description: "Unlimited revisions until you&apos;re completely satisfied with the result."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl text-gray-900 mb-6 ${merriWeatherBold.className}`}>
            What I Can Do
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${merriWeatherMedium.className}`}>
            With years of experience and a passion for visual storytelling, I bring a comprehensive 
            skill set to every book cover project.
          </p>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className={`text-2xl text-gray-900 text-center mb-12 ${merriWeatherBold.className}`}>
            Technical Skills & Expertise
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div key={groupIndex} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className={`text-lg font-semibold text-gray-900 mb-6 ${merriWeatherBold.className}`}>
                  {skillGroup.category}
                </h4>
                
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-gray-700 ${merriWeatherMedium.className}`}>
                          {skill.name}
                        </span>
                        <span className={`text-gray-500 text-sm ${merriWeatherMedium.className}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gray-800 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className={`text-2xl text-gray-900 text-center mb-12 ${merriWeatherBold.className}`}>
            Services I Offer
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-700">
                  {service.icon}
                </div>
                
                <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${merriWeatherBold.className}`}>
                  {service.title}
                </h4>
                
                <p className={`text-gray-600 leading-relaxed ${merriWeatherMedium.className}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className={`text-2xl text-gray-900 mb-4 ${merriWeatherBold.className}`}>
              Ready to Create Something Amazing?
            </h3>
            <p className={`text-gray-600 mb-6 max-w-2xl mx-auto ${merriWeatherMedium.className}`}>
              Let&apos;s work together to create a book cover that captures your story&apos;s essence 
              and attracts your ideal readers.
            </p>
            <button className={`bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${merriWeatherMedium.className}`}>
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatCanIDo
