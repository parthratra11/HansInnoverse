/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import "./bgScroll.css";
import "./banner.css";

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[30vh] relative overflow-hidden ">
      <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
      <button
        className={`px-8 py-4 text-white text-lg md:text-2xl font-bold bg-black/50 rounded border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20 relative z-10 font-mono flip-animate`}
      >
        <Link href="https://unstop.com" target="_blank">
          <span data-hover="[ R E G I S T E R ]">[ R E G I S T E R ]</span>
        </Link>
      </button>
      <style jsx>{``}</style>
    </div>
  );
};

export default Banner;
