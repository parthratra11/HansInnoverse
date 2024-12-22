/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect } from "react";
import styles from "./card.module.css";

export default function About() {
  useEffect(() => {
    document.documentElement.style.setProperty("--card-height", "65vh");
    document.documentElement.style.setProperty(
      "--card-width",
      "calc(var(--card-height) / 1.5)"
    );
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-10 sm:py-20 relative z-50 bg-gradient-to-r from-[#000000] to-[#05101d]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-20">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 text-center lg:text-left glitch"
              data-text="About हंसInnoverse"
            >
              About हंसInnoverse
            </h2>

            <div className="text-gray-200 space-y-4 sm:space-y-5 text-base sm:text-lg lg:text-xl font-mont pr-6">
              <p>
                Innovation? Check. Creativity? Double check. Impact? You bet!
              </p>
              <p>
                Welcome to the{" "}
                <span className="text-cyan-300 text-semibold text-xl sm:text-2xl">
                  हंसInnoverse
                </span>
                , where bright minds collide, ideas take flight, and solutions
                shape the future. Our mission? To spark genius by pushing
                participants to think outside the box, across disciplines, and
                beyond the ordinary. This hackathon isn&apos;t just about
                coding; it&apos;s about crafting meaningful change. From
                education to IoT, from fintech to gaming, we're here to tackle
                challenges and make waves in the tech world.
              </p>
              <p>
                Join us for an unforgettable experience of coding, creativity,
                and collaboration shaping tomorrow&apos;s world—one solution at
                a time!
              </p>
            </div>
          </div>

          {/* Right Card Section */}
          <div className="flex justify-center w-full">
            <div
              className={`${styles.card} w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] h-[50vh] sm:h-[60vh] lg:h-[70vh]`}
            >
              <img
                src="/about.jpg"
                alt="about"
                className="absolute inset-0 w-full h-full object-contain z-10 p-2"
              />
              <div className="flex flex-col gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl lg:text-4xl font-mont font-semibold">
                  Code.
                </span>
                <span className="text-lg sm:text-xl lg:text-4xl font-mont font-semibold">
                  Innovate.
                </span>
                <span className="text-lg sm:text-xl lg:text-4xl font-mont font-semibold">
                  Conquer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
