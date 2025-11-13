"use client";
import React from "react";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { AlignRight } from "@deemlol/next-icons";
import { AlignJustify } from "@deemlol/next-icons";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["600"],
});

const merriweatherLight = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  // const lastScrollTop = React.useRef(0);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop >= 100 && !scrolled) {
        setScrolled(true);
      } else if (scrollTop <= 100) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        id="navbar"
        className={`${
          !scrolled
            ? "w-full"
            : "md:w-[calc(100%-200px)] w-[calc(100%-50px)] mt-10  rounded-full"
        }  duration-400 mx-auto transition-all bg-white/50 backdrop-blur-sm  z-20 min-h-20  fixed left-0 right-0 top-0  flex items-center p-4 shadow-xl`}
      >
        <ul className="md:flex hidden gap-2 my-auto text-gray-700 ml-auto w-fit mr-20">
          <li>
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ${merriweatherLight.className}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ${merriweatherLight.className}`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ${merriweatherLight.className}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ${merriweatherLight.className}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setSideBarOpen(true)}
          className="md:hidden ml-auto px-5"
        >
          <AlignJustify size={30} color="black" />
        </div>
      </nav>

      <div
        className={`bg-white shadow-2xl md:hidden ${
          sideBarOpen ? "w-64" : "w-0"
        } h-full flex flex-col transition-all duration-300 items-center z-50 fixed right-0 top-0 overflow-hidden`}
      >
        <div
          className={`pt-6 pb-4 px-6 w-full border-b border-gray-200 ${
            !sideBarOpen ? "hidden" : "flex"
          } justify-end  items-center`}
        >
          <button
            onClick={() => setSideBarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <AlignRight size={24} color="black" />
          </button>
        </div>

        <ul
          className={`pt-8 ${
            !sideBarOpen ? "hidden" : "w-full"
          } px-6 flex items-end flex-col gap-2`}
        >
          <li className="w-full">
            <Link
              href="/"
              onClick={() => setSideBarOpen(false)}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 flex items-center ${merriweatherLight.className}`}
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/portfolio"
              onClick={() => setSideBarOpen(false)}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 flex items-center ${merriweatherLight.className}`}
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Portfolio
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/services"
              onClick={() => setSideBarOpen(false)}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 flex items-center ${merriweatherLight.className}`}
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Services
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/contact"
              onClick={() => setSideBarOpen(false)}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 flex items-center ${merriweatherLight.className}`}
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact
            </Link>
          </li>
        </ul>

        {/* Optional: Add a contact info section at the bottom */}
      </div>
    </>
  );
};

export default Navbar;
