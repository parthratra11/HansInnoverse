"use client";

import React from "react";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[30vh] relative overflow-hidden ">
      <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
      <button
        className={`px-8 py-4 text-white text-2xl font-bold bg-black/50 rounded border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20 relative z-10 font-mono flip-animate`}
      >
        <Link href="https://unstop.com" target="_blank">
          <span data-hover="[ R E G I S T E R ]">[ R E G I S T E R ]</span>
        </Link>
      </button>
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
    </div>
  );
};

export default Banner;
