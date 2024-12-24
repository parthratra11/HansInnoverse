/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

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

// @ts-ignore
const Card = ({ image, title, content, delay = 0 }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  // @ts-ignore
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    setCoords({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.05,1.05,1.05)`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
  };

  const backgroundStyle = {
    transform: isHovered
      ? `translateX(${coords.y * -2}px) translateY(${coords.x * 2}px)`
      : "translateX(0) translateY(0)",
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      ref={ref as any}
      className={`relative w-full px-6 md:p-3 sm:w-[400px] h-[180px] md:h-[240px] mx-2 cursor-pointer group transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full rounded-xl bg-[#333] overflow-hidden transition-all duration-700 ease-out"
        style={cardStyle}
      >
        <div
          className="absolute inset-[-38px] bg-cover bg-center transition-all duration-700 ease-out opacity-50 group-hover:opacity-80"
          style={backgroundStyle}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-700 ease-out ${
            isHovered ? "translate-y-8" : "translate-y-[40%]"
          }`}
        >
          <div className="relative z-10">
            <h2 className="font-[Playfair_Display] text-lg sm:text-xl font-bold mb-8 text-shadow-lg">
              {title}
            </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
        </div>
      </div>
    </div>
  );
};

const ThemesComponent = () => {
  const [cards, setCards] = useState([]);
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  useEffect(() => {
    fetch("/themes.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // @ts-ignore
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <section id="themes" className="py-12 relative z-50 bg-[#07182d]">
      <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>

      <div className="container mx-auto px-4">
        <div
          ref={headerRef as any}
          className={`text-gray-200 text-center relative z-20 transition-all duration-700 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="font-extrabold font-mont text-4xl sm:text-5xl mt-2">
            Themes + Problem Statement
          </h1>

          <div className="mt-8 space-y-4 font-mono">
            <p>
              Teams must combine any two of the given themes to create their
              solution.
            </p>
            <p>
              Choose wisely to create innovative and impactful projects that
              bridge multiple domains.
            </p>
          </div>

          <Link
            href="https://drive.google.com/file/d/1333PTTL9gVDrYo3P-OwYVsMFAEKTUW7Y/view"
            target="_blank"
          >
            <button className="text-center border justify-center items-center bg-gray-950 bg-opacity-60 hover:scale-105 duration-300 border-yellow-500 rounded-lg py-3 px-10 relative mt-10 z-20 font-semibold font-mono text-yellow-500 text-xl">
              <span className="flex flex-row justify-center items-center gap-2">
                PPT Template
                <MdOutlineArrowOutward size="30" />
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-16 mb-12">
          <div className="grid grid-cols-1 md:px-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {cards.map((card, index) => (
              <Card key={index} {...(card as any)} delay={index * 100} />
            ))}
          </div>
        </div>

        <div className="italic text-center relative z-20 font-semibold font-mono text-yellow-500 text-lg sm:text-2xl">
          Final Round Twist: To be revealed during the event!
        </div>
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

export default ThemesComponent;
