"use client";

import React from "react";
import TrophyCard from "./Trophy/trophyCard";
import PixelCanvas from "./Trophy/pixelCanvas";

const PrizesComponent = () => {
  return (
    <>
      <section
        id="prizes"
        className="min-h-screen py-12 sm:py-20 relative z-50 bg-[#05101d]"
      >
        <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
        <div className="text-gray-200 text-center relative z-10 font-extrabold font-mont mb-4 text-6xl animate-in slide-in-from-bottom-4 fade-in-5 duration-700 px-4">
          Prizes
        </div>
        <div className="text-gray-400 relative z-10 font-semibold font-mono text-base mt-2 animate-in slide-in-from-bottom-4 fade-in-5 duration-700 px-4 text-center">
          Rewards are the quiet echoes of your unwavering dedication.
        </div>
        <div className="flex items-center justify-center gap-8 p-4 pt-10 animate-in slide-in-from-bottom-20 fade-in-0 duration-1000 flex-col lg:flex-row">
          {/* Silver Trophy */}
          <div className="order-2 lg:order-1">
            <TrophyCard size="medium" metalColor="" className="relative ">
              <PixelCanvas
                gap={6}
                speed={30}
                colors={["#e5e7eb", "#d1d5db", "#9ca3af"]}
              />
              <img
                src="/Trophies/2nd.png"
                className="absolute inset-16 w-40 h-50 z-0 object-cover brightness-105"
              ></img>
              <div className="absolute bottom-8 text-gray-200 text-3xl font-bold">
                ₹3000
              </div>
            </TrophyCard>
          </div>

          {/* Gold Trophy */}
          <div className="order-1 lg:order-2">
            <TrophyCard size="large" metalColor="" className="relative">
              <PixelCanvas
                gap={5}
                speed={35}
                colors={["#fcd34d", "#f59e0b", "#d97706"]}
              />
              <img
                src="/Trophies/1st.png"
                className="absolute inset-18 w-44 h-52 z-0 object-cover mb-6 brightness-105"
              ></img>
              <div className="absolute bottom-8 text-gray-200 text-4xl font-bold">
                ₹5000
              </div>
            </TrophyCard>
          </div>

          {/* Bronze Trophy */}
          <div className="order-3 lg:order-3">
            <TrophyCard size="medium" metalColor="" className="relative ">
              <PixelCanvas
                gap={6}
                speed={30}
                colors={["#92400e", "#b45309", "#d97706"]}
              />
              <img
                src="/Trophies/3rd.png"
                className="absolute inset-16 w-40 h-50 z-0 object-cover brightness-110"
              ></img>
              <div className="absolute bottom-8 text-gray-200 text-3xl font-bold">
                ₹2000
              </div>
            </TrophyCard>
          </div>
        </div>
        <div className="text-gray-200  text-center relative z-10 font-semibold text-3xl italic mt-6 animate-in slide-in-from-top-4 fade-in-5 duration-700 px-4">
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

export default PrizesComponent;
