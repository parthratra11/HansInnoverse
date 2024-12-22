"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useEffect } from "react";
import { FaRegCircle } from "react-icons/fa6";

// import "./TimelineComponent.css"; // Include the CSS file

export default function TimelineComponent() {
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
      { threshold: 0.5 } // Trigger when 50% of the item is visible
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      <section
        id="timeline"
        // className="min-h-screen py-12 sm:py-20 relative z-50 bg-[#05101d]"
        // className="min-h-screen py-12 sm:py-12 relative z-50 bg-gradient-to-r from-[#05101d] to-[#000000]"
        className="min-h-screen py-12 sm:py-10 relative z-50 bg-custom-image bg-cover"
        // className="min-h-screen py-12 sm:py-20 relative z-50 bg-custom-image bg-cover"
      >
        <div className="text-center text-gray-200 font-extrabold font-mont text-6xl mb-8">
          Timeline
        </div>
        <Timeline
          position="alternate"
          className="w-full px-8 text-gray-200 flex items-center justify-center flex-wrap relative z-10"
        >
          <TimelineItem className="timeline-item w-full lg:w-2/3">
            <TimelineOppositeContent className="timeline-text mr-5 font-semibold font-sans md:text-xl">
              27th December 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot className="timeline-dot" /> */}
              <FaRegCircle
                size="40"
                className="timeline-dot my-2"
                color="white"
              />
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-text border-2 rounded-md border-gray-600 ml-4 mb-8 mt-2 bg-gray-900 px-4 py-2 font-medium font-mono md:text-xl">
              Registration Starts
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item w-full lg:w-2/3">
            <TimelineOppositeContent
              className="timeline-text ml-5
                font-semibold
                font-sans
                md:text-xl"
            >
              31st January 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot className="timeline-dot" /> */}
              <FaRegCircle
                size="40"
                className="timeline-dot my-2"
                color="white"
              />
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-text border-2 rounded-md border-gray-600 mr-4 mb-8 mt-2 bg-gray-900 px-4 py-2 font-medium font-mono md:text-xl">
              Registration Closes
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item w-full lg:w-2/3">
            <TimelineOppositeContent className="timeline-text mr-5 font-semibold font-sans md:text-xl">
              7th February 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot className="timeline-dot" /> */}
              <FaRegCircle
                size="40"
                className="timeline-dot my-2"
                color="white"
              />
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-text border-2 rounded-md border-gray-600 ml-4 mb-8 mt-2 bg-gray-900 px-4 py-2 font-medium font-mono md:text-xl">
              Shortlisted Teams Result
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item w-full lg:w-2/3">
            <TimelineOppositeContent
              className="timeline-text ml-5
                font-semibold
                font-sans
                md:text-xl"
            >
              14th February 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot className="timeline-dot" /> */}
              <FaRegCircle
                size="40"
                className="timeline-dot my-2"
                color="white"
              />
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-text border-2 rounded-md border-gray-600 mr-4 mb-8 mt-2 bg-gray-900 px-4 py-2 font-medium font-mono md:text-xl">
              Online Presentation Round
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item w-full lg:w-2/3">
            <TimelineOppositeContent className="timeline-text mr-5 font-semibold font-sans md:text-xl">
              16th February 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot className="timeline-dot" /> */}
              <FaRegCircle
                size="40"
                className="timeline-dot my-2"
                color="white"
              />
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-text border-2 rounded-md border-gray-600 ml-4 mb-8 mt-2 bg-gray-900 px-4 py-2 font-medium font-mono md:text-xl">
              Online Round Results
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item w-full lg:w-2/3">
            <TimelineOppositeContent className="timeline-text ml-5 font-semibold font-sans md:text-xl">
              22nd February 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot className="timeline-dot" /> */}
              <FaRegCircle
                size="40"
                className="timeline-dot my-2"
                color="white"
              />
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-text border-2 rounded-md border-gray-600 mr-4 mb-8 mt-2 bg-gray-900 px-4 py-2 font-medium font-mono md:text-xl">
              Offline 12hr Hackathon
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className=" text-center text-gray-200 font-semibold text-2xl md:text-3xl font-mono">
          Results
        </div>
      </section>
    </>
  );
}
