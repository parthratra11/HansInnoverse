"use client";

import React, { useEffect, useRef, useState } from "react";
import TrophyCard from "./Trophy/trophyCard";
import PixelCanvas from "./Trophy/pixelCanvas";

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};

const PrizeCard = ({ children, order, delay }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${order} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const PrizesComponent = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  const [swagRef, isSwagVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  return (
    <section
      id="prizes"
      className="min-h-screen py-12 sm:py-20 relative z-50 bg-[#05101d]"
    >
      <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>

      <div
        ref={headerRef}
        className={`text-gray-200 text-center relative z-10 font-extrabold font-mont mb-4 text-6xl px-4 transition-all duration-700 ${
          isHeaderVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        Prizes
      </div>

      <div
        ref={subtitleRef}
        className={`text-gray-400 relative z-10 font-semibold font-mono text-base mt-2 px-4 text-center transition-all duration-700 ${
          isSubtitleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        Rewards are the quiet echoes of your unwavering dedication.
      </div>

      <div className="flex items-center justify-center gap-8 p-4 pt-10 flex-col lg:flex-row">
        {/* Silver Trophy */}
        <PrizeCard order="order-2 lg:order-1" delay={200}>
          <TrophyCard size="medium" metalColor="" className="relative">
            <PixelCanvas
              gap={6}
              speed={30}
              colors={["#e5e7eb", "#d1d5db", "#9ca3af"]}
            />
            <img
              src="/Trophies/2nd.png"
              className="absolute inset-16 w-40 h-50 z-0 object-cover brightness-105"
              alt="Silver Trophy"
            />
            <div className="absolute bottom-8 text-gray-200 text-3xl font-bold">
              ₹3000
            </div>
          </TrophyCard>
        </PrizeCard>

        {/* Gold Trophy */}
        <PrizeCard order="order-1 lg:order-2" delay={300}>
          <TrophyCard size="large" metalColor="" className="relative">
            <PixelCanvas
              gap={5}
              speed={35}
              colors={["#fcd34d", "#f59e0b", "#d97706"]}
            />
            <img
              src="/Trophies/1st.png"
              className="absolute inset-18 w-44 h-52 z-0 object-cover mb-6 brightness-105"
              alt="Gold Trophy"
            />
            <div className="absolute bottom-8 text-gray-200 text-4xl font-bold">
              ₹5000
            </div>
          </TrophyCard>
        </PrizeCard>

        {/* Bronze Trophy */}
        <PrizeCard order="order-3" delay={400}>
          <TrophyCard size="medium" metalColor="" className="relative">
            <PixelCanvas
              gap={6}
              speed={30}
              colors={["#92400e", "#b45309", "#d97706"]}
            />
            <img
              src="/Trophies/3rd.png"
              className="absolute inset-16 w-40 h-50 z-0 object-cover brightness-110"
              alt="Bronze Trophy"
            />
            <div className="absolute bottom-8 text-gray-200 text-3xl font-bold">
              ₹2000
            </div>
          </TrophyCard>
        </PrizeCard>
      </div>

      <div
        ref={swagRef}
        className={`text-gray-200 text-center relative z-10 font-semibold text-3xl italic mt-6 px-4 transition-all duration-700 ${
          isSwagVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        + Swags, coupons & more for participants
      </div>

      <style jsx>{`
        .bg-scrolling-pattern {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC")
            repeat 0 0;
          filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(180deg)
            brightness(100%) contrast(100%);
        }

        @keyframes bg-scrolling-reverse {
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes bg-scrolling {
          0% {
            background-position: 50px 50px;
          }
        }

        :global(.animate-bg-scroll) {
          animation: bg-scrolling-reverse 2.92s infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </section>
  );
};

export default PrizesComponent;
