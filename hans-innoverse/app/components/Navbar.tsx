"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./LinkEffect.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#000000] to-[#05101d] backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-8xl mx-auto pl-3 sm:pl-3 lg:pl-3">
          <div className="flex justify-between h-[5rem] items-center">
            {/* Logo Section */}
            <div className="items-center grid grid-cols-[2fr_1.27fr_1fr_3fr]">
              <img
                src="/hrc.png"
                alt="Hansraj Logo"
                // width={120}
                // height={120}
                className="bg-white py-1 hidden md:block rounded-sm"
              />
              <img
                src="/iic.jpg"
                alt="IIC Logo"
                // width={70}
                // height={70}
                className="hidden md:block mx-1 rounded-sm"
              />
              <img
                src="/ordinateur.png"
                alt="Ordinateur Logo"
                className="mb-1 hidden md:block pl-1"
                // width={70}
                // height={70}
              />
              <img
                src="/logo.png"
                alt="हंसInnoverse Logo"
                // width={180}
                // height={180}
              />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-cyan-400"
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
                <Link href="#schedule">
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
              isOpen ? "block" : "hidden"
            } md:hidden bg-[#1D2543] py-4 top-[5rem] left-0 right-0 relative z-60 border-b border-cyan-500/30`}
          >
            <div className="flex flex-col space-y-4 px-4">
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
                className="inline-block text-white font-bold hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                [ REGISTER ]
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
