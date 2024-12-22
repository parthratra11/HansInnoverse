/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import styles from "./LinkEffect.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed md:relative w-full top-0 z-50">
      <div className="bg-gradient-to-r from-[#000000] to-[#05101d] backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-8xl mx-auto pl-3 sm:pl-3 lg:pl-3">
          <div className="flex justify-between h-[5rem] items-center">
            {/* Logo Section */}
            <div className="items-center grid grid-cols-[2fr_1.26fr_1fr_3fr] mr-20 md:mr-0">
              <img
                src="/hrc.png"
                alt="Hansraj Logo"
                className="bg-white py-0.5 md:py-1 md:block rounded-sm"
              />
              <img
                src="/iic.jpg"
                alt="IIC Logo"
                className="md:block mx-1 rounded-sm"
              />
              <img
                src="/ordinateur.png"
                alt="Ordinateur Logo"
                className="mb-1 md:block pl-1"
              />
              <img src="/logo.png" alt="हंसInnoverse Logo" />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-cyan-400 z-50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center ml-36 font-mont">
              <div className={styles["link-effect"]}>
                <Link href="/">
                  <span data-hover="Home">Home</span>
                </Link>
              </div>
              <div className={styles["link-effect"]}>
                <Link href="#about">
                  <span data-hover="About">About</span>
                </Link>
              </div>
              <div className={styles["link-effect"]}>
                <Link href="#themes">
                  <span data-hover="Themes">Themes</span>
                </Link>
              </div>
              <div className={styles["link-effect"]}>
                <Link href="#timeline">
                  <span data-hover="Schedule">Schedule</span>
                </Link>
              </div>
              <div className={styles["link-effect"]}>
                <Link href="#contact">
                  <span data-hover="Contact">Contact</span>
                </Link>
              </div>
            </div>

            {/* Register Button */}
            <div className="hidden md:flex items-center font-mono">
              <Link
                href="https://unstop.com"
                target="_blank"
                className="relative px-4 mx-2 py-4 text-white whitespace-nowrap font-semibold rounded hover:scale-105 transition-transform border border-cyan-400/50 shadow-lg shadow-cyan-500/20 group"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-600 to-fuchsia-600 transition-all duration-300 ease-out group-hover:w-full rounded"></span>
                <span className="relative">[ REGISTER ]</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            } fixed top-[5rem] left-0 right-0 bg-gradient-to-r from-[#000000] to-[#05101d] transition-all duration-300 ease-in-out md:hidden shadow-lg z-70`}
          >
            <div className="flex flex-col space-y-4 p-6 border-t font-mont border-cyan-500/30">
              <Link
                href="/"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#themes"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Themes
              </Link>
              <Link
                href="#schedule"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="https://unstop.com"
                target="_blank"
                className="inline-block text-white font-semibold py-2 w-1/3 px-3 bg-gradient-to-r from-cyan-600 to-fuchsia-600 rounded transition-all hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                [ REGISTER ]
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
