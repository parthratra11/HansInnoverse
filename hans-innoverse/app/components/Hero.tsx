"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./card.module.css";

const TypewriterText = () => {
  const [text, setText] = useState("");
  const fullText =
    "> INITIALIZING 12-HOUR NEURAL NETWORK CONVERGENCE...\n> PREPARE FOR DIGITAL ASCENSION";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="relative text-md md:text-lg h-auto min-h-[8rem] text-cyan-300 mb-2 max-w-2xl font-mono border border-cyan-500/20 p-3 sm:p-4 bg-black/40 backdrop-blur-sm z-30 overflow-hidden">
      <div
        className="invisible h-0 whitespace-pre-line break-words"
        aria-hidden="true"
      >
        {fullText}
      </div>
      <div className="whitespace-pre-line break-words px-2 text-left md:text-center absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4">
        {text}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};

export default function Hero() {
  useEffect(() => {
    const updateCardSize = () => {
      const vh = window.innerHeight * 0.65;
      document.documentElement.style.setProperty("--card-height", `${vh}px`);
      document.documentElement.style.setProperty(
        "--card-width",
        `${vh / 1.5}px`
      );
    };

    updateCardSize();
    window.addEventListener("resize", updateCardSize);
    return () => window.removeEventListener("resize", updateCardSize);
  }, []);

  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-21T07:00:00");
    const difference = eventDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0"),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0"),
      minutes: Math.floor((difference / 1000 / 60) % 60)
        .toString()
        .padStart(2, "0"),
      seconds: Math.floor((difference / 1000) % 60)
        .toString()
        .padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const slideTextClass = "animate-slideText";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col mt-20 sm:mt-0">
      {/* Hero Section */}
      <section className="flex-1 py-8 sm:py-12 flex flex-col items-center justify-center text-center px-4 sm:px-8 relative">
        <div className="w-full max-w-4xl mx-auto">
          <h2
            className="text-5xl md:text-6xl xl:text-7xl mb-4 sm:mb-6 font-bold relative z-10 text-white/90 text-center glitch break-words"
            data-text="हंसInnoverse"
          >
            हंसInnoverse
          </h2>
        </div>

        <TypewriterText />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 z-30 mt-4 sm:mt-6 w-full max-w-xl mx-auto">
          <Link
            href="https://unstop.com/p/hansinnoverse-hackathon-hansraj-collegeuniversity-of-delhi-1318509"
            target="_blank"
            className={`px-4 sm:px-6 py-2 sm:py-3 mx-1 md:ml-4 bg-gradient-to-r font-mono text-base from-cyan-600 to-fuchsia-800 text-white font-bold rounded hover:scale-105 transition-transform border border-cyan-400/50 shadow-lg shadow-cyan-500/20 flex-1 text-center ${slideTextClass}`}
          >
            [ REGISTER ]
          </Link>
          <Link
            href="https://docs.google.com/document/d/1be5pkCyeRR_UDj7JGUkNt6_CkJ3h7-i9m4Ye_EaPI_A/edit?usp=sharing"
            target="_blank"
            className={`px-4 sm:px-6 py-2 sm:py-3 md:mr-3 font-mono text-base bg-black/50 text-cyan-400 font-bold rounded border border-cyan-500/30 hover:bg-cyan-900/20 transition-colors backdrop-blur-sm flex-1 text-center ${slideTextClass}`}
          >
            [ SYSTEM INFO ]
          </Link>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-8 sm:py-12 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center z-30 md:mx-60">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 font-mono z-30">
          SYSTEM LAUNCH IN
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6 z-50 w-full max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-black/60 rounded border border-cyan-500/30 p-2 sm:p-3 shadow-lg shadow-cyan-500/20 z-50"
            >
              <div className="text-2xl lg:text-3xl font-bold text-cyan-400 font-mono">
                {value}
              </div>
              <div className="text-sm text-cyan-300 uppercase font-mono">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
