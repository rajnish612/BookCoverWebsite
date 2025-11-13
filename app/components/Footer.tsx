import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "@deemlol/next-icons";
import { Merriweather } from "next/font/google";

const merriWeatherBold = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const merriWeatherMedium = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${merriWeatherBold.className}`}>
              Jane Doe
            </h2>
            <p className={`text-gray-600 mb-6 max-w-md leading-relaxed ${merriWeatherMedium.className}`}>
              Creating compelling book covers that capture the essence of your story 
              and attract readers at first glance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-3 text-gray-500" />
                <span className={`text-sm ${merriWeatherMedium.className}`}>hello@janedoe.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-3 text-gray-500" />
                <span className={`text-sm ${merriWeatherMedium.className}`}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-3 text-gray-500" />
                <span className={`text-sm ${merriWeatherMedium.className}`}>New York, NY</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`font-semibold text-gray-900 mb-4 ${merriWeatherBold.className}`}>
              Navigation
            </h3>
            <nav className="space-y-3">
              <Link href="/" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                Home
              </Link>
              <Link href="/portfolio" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                Portfolio
              </Link>
              <Link href="/services" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                Services
              </Link>
              <a href="#about" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                About
              </a>
              <a href="#contact" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className={`font-semibold text-gray-900 mb-4 ${merriWeatherBold.className}`}>
              Services
            </h3>
            <nav className="space-y-3">
              <Link href="/services" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                E-book Covers
              </Link>
              <Link href="/services" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                Print Covers
              </Link>
              <Link href="/services" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                3D Mockups
              </Link>
              <Link href="/services" className={`block text-gray-600 hover:text-gray-900 transition-colors text-sm ${merriWeatherMedium.className}`}>
                Series Design
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-gray-500 text-sm ${merriWeatherMedium.className}`}>
              © 2024 Jane Doe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className={`text-gray-500 hover:text-gray-900 text-sm transition-colors ${merriWeatherMedium.className}`}>
                Privacy Policy
              </a>
              <a href="#" className={`text-gray-500 hover:text-gray-900 text-sm transition-colors ${merriWeatherMedium.className}`}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
