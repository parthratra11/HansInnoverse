"use client";

import React, { useEffect } from "react";
import { FaRegCircle } from "react-icons/fa6";

const TimelineComponent = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  const timelineData = [
    {
      date: "27th December 2024",
      content: "Registration Starts",
    },
    {
      date: "31st January 2025",
      content: "Registration Closes",
    },
    {
      date: "7th February 2025",
      content: "Shortlisted Teams Result",
    },
    {
      date: "14th February 2025",
      content: "Online Presentation Round",
    },
    {
      date: "16th February 2025",
      content: "Online Round Results",
    },
    {
      date: "22nd February 2025",
      content: "Offline 12hr Hackathon",
    },
  ];

  return (
    <section
      className="min-h-screen py-12 sm:py-10 relative z-50 bg-custom-image bg-cover"
      id="timeline"
    >
      <h1 className="text-center text-gray-200 font-extrabold font-mont text-6xl mb-8">
        Timeline
      </h1>

      <div className="max-w-4xl mx-auto relative">
        {/* Central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2" />

        <div className="relative">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item flex items-center mb-6 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Date section */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-4" : "text-left pl-4"
                }`}
              >
                <span className="text-gray-200 font-semibold font-sans md:text-xl">
                  {item.date}
                </span>
              </div>

              {/* Center dot */}
              <div className="w-2/12 relative flex justify-center">
                <FaRegCircle
                  size="24"
                  className="timeline-dot z-10 bg-gray-900 rounded-full"
                  color="white"
                />
              </div>

              {/* Content section */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-left pl-4" : "text-right pr-4"
                }`}
              >
                <div className="timeline-text border-2 rounded-md border-gray-600 bg-gray-900 px-3 py-2 font-medium font-mono md:text-xl text-gray-200">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-gray-200 font-semibold text-2xl md:text-3xl font-mono mt-8">
        Results
      </div>
    </section>
  );
};

export default TimelineComponent;
