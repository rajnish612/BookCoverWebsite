"use client";
import React, { useState } from "react";
import HeroSection from "../components/Services/HeroSection";
import ServiceCard from "../components/Services/ServiceCard";
import { Book, Printer } from "@deemlol/next-icons";
import { Merriweather } from "next/font/google";

const merriweatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const merriweatherRegular = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const services = [
  {
    title: "Book Cover Design",
    description:
      "Stunning book covers that capture your story's essence and attract readers at first glance.",
    icon: <Book size={28} />,
    features: [
      "Custom cover illustrations",
      "Typography design",
      "Genre-specific styling",
      "Print & digital formats",
      "Multiple revisions included",
    ],
    buttonText: "Get Quote",
    buttonLink: "#contact",
  },
  {
    title: "Layout & Print Design",
    description:
      "Professional layout design for books, magazines, and marketing materials with perfect formatting.",
    icon: <Printer size={28} />,
    features: [
      "Interior book layout",
      "Magazine design",
      "Brochure & flyers",
      "Business cards",
      "Print-ready files",
    ],
    buttonText: "Get Quote",
    buttonLink: "/contact",
  },
  {
    title: "Graphic Design",
    description:
      "Creative graphic design solutions for branding, marketing, and digital presence.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
        <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
        <path d="M14.5 17.5 4.5 15" />
      </svg>
    ),
    features: [
      "Logo design",
      "Social media graphics",
      "Website banners",
      "Promotional materials",
      "Brand identity",
    ],
    buttonText: "Get Quote",
    buttonLink: "/contact",
  },
];

// Contact Section Component

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From stunning book covers to complete design solutions, we bring
              your creative vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
