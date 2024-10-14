import Link from "next/link";
import React, { useState } from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <img
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/logo_no_text.svg"
              width="60"
            />
            {"adev07".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>

      {/* Burger Icon for Mobile */}
      <div className="md:hidden z-[1000] mb-8 mx-6">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {!isMenuOpen ? (
            // Burger icon SVG
            <svg
              className="h-5 w-5 absolute text-gray-100"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Close icon SVG
            <svg
              className="h-5 w-5 absolute text-gray-100"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Full menu for desktop */}
      <ul className="hidden md:flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${currentPage === item.title
                ? "opacity-100"
                : "opacity-40 hover:opacity-100 transition-opacity"
                }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`${isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-0 mt-[90px] left-0 w-full bg-[#000a1f] flex flex-col items-center space-y-4 p-4 h-full z-[100]`}
      >
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${currentPage === item.title
                ? "opacity-100"
                : "opacity-40 hover:opacity-100 transition-opacity"
                }`}
            >
              <div onClick={toggleMenu}>
                <Link href={item.path}>
                  {item.title}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
