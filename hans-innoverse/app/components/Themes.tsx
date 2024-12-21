"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const cards = [
  {
    title: "Education",
    image: "/Themes/education.jpg",
  },
  {
    title: "Health",
    image: "/Themes/health.jpg",
  },
  {
    title: "Transport",
    image: "/Themes/transport.jpg",
  },
  {
    title: "Gaming",
    image: "/Themes/gaming.jpg",
  },
  {
    title: "E-commerce",
    image: "/Themes/eCommerce.jpg",
  },
  {
    title: "Social Media",
    image: "/Themes/socialMedia.jpg",
  },
  {
    title: "Cybersecurity",
    image: "/Themes/cybersecurity.jpg",
  },
  {
    title: "FinTech",
    image: "/Themes/finTech.jpg",
  },
  // {
  //   title: "Blockchain",
  //   image: "/Themes/blockchain.jpg",
  // },
  {
    title: "IOT",
    image: "/Themes/iot.jpg",
  },
];

const Card = ({ image, title, content }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      className="relative w-[300px] h-[180px] sm:w-[200px] sm:h-[120px] m-[4px] cursor-pointer group lg:w-80 lg:h-48"
      // className="relative w-[200px] h-[120px] m-[4px] cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full rounded-[10px] bg-[#333] overflow-hidden transition-all duration-700 ease-out"
        style={cardStyle}
      >
        <div
          className="absolute inset-[-38px] bg-cover bg-center transition-all duration-700 ease-out opacity-50 group-hover:opacity-80"
          style={backgroundStyle}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 p-5 text-white transition-transform duration-700 ease-out ${
            isHovered ? "translate-y-8" : "translate-y-[40%]"
          }`}
        >
          <div className="relative z-10">
            <h2 className="font-[Playfair_Display] text-xl font-bold mb-10 text-shadow-lg">
              {title}
            </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent-z-0" />
        </div>
      </div>
    </div>
  );
};

const ThemesComponent = () => {
  useEffect(() => {
    // Load fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <>
      <section
        id="themes"
        className="py-12 sm:py-12 relative z-50 bg-[#07182d]"
      >
        <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
        <div className="text-gray-200 text-center relative z-20 font-extrabold font-mont text-5xl mt-2 animate-in slide-in-from-bottom-4 fade-in-5 duration-700 px-4">
          Themes + Problem Statement
        </div>
        <div className="text-gray-200 text-center relative z-20 font-bold font-sans text-lg mt-2 animate-in slide-in-from-bottom-4 fade-in-5 duration-700 px-4 lg:px-20">
          <div className="mt-8 font-mono text-gray-200">
            Teams must combine any two of the given themes to create their
            solution.
          </div>
          <div className="font-mono text-gray-200">
            Choose wisely to create innovative and impactful projects that
            bridge multiple domains.
          </div>
          <Link
            href="https://drive.google.com/file/d/1333PTTL9gVDrYo3P-OwYVsMFAEKTUW7Y/view"
            target="_blank"
          >
            <button className="text-center border justify-center items-center bg-gray-950 bg-opacity-60 hover:scale-105 border-yellow-500 rounded-lg py-3 px-10 relative mt-10 z-20 font-semibold font-sans text-yellow-500 text-xl animate-in slide-in-from-bottom-4 fade-in-5 duration-300">
              <span className="flex flex-row justify-center items-center gap-2 font-mono">
                PPT Template
                <MdOutlineArrowOutward size="30" />
              </span>
            </button>
          </Link>
        </div>
        <div className="min-h-screen py-10 px-5">
          <div className="max-w-6xl h-10 mx-auto flex flex-wrap justify-center gap-4">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="italic text-center relative z-20 font-semibold font-mono text-yellow-500 text-2xl animate-in slide-in-from-bottom-4 fade-in-5 duration-700 px-4">
          Final Round Twist: To be revealed during the event!
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

          .flip-animate {
            perspective: 1000px;
          }

          .flip-animate span {
            position: relative;
            display: inline-block;
            padding: 0;
            transition: transform 0.3s;
            transform-origin: 50% 0;
            transform-style: preserve-3d;
          }

          .flip-animate span:before {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            content: attr(data-hover);
            transition: color 0.3s;
            transform: rotateX(-90deg);
            transform-origin: 50% 0;
            text-align: center;
          }

          .flip-animate:hover span,
          .flip-animate:focus span {
            transform: rotateX(90deg) translateY(-22px);
          }

          .flip-animate:hover span:before,
          .flip-animate:focus span:before {
            color: cyan;
          }
        `}</style>
      </section>
    </>
  );
};

export default ThemesComponent;
