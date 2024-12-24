/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

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
const Card = ({ name, title, image, linkedin, email, delay }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  return (
    <div
      ref={ref as any}
      className={`relative flex justify-evenly rounded-lg items-end overflow-hidden w-full text-center text-gray-100 bg-gray-100 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_8px_8px_rgba(0,0,0,0.1),0_16px_16px_rgba(0,0,0,0.1)] group transition-all duration-700 min-h-96 sm:min-h-60 md:h-[300px] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1050ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
        style={{
          backgroundImage: image
            ? `url(${image}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)`
            : "none",
          backgroundColor: !image ? "#2a2a2a" : "transparent",
        }}
      />
      <div className="relative bg-black bg-opacity-50 flex flex-col items-center w-full p-4 pt-3 translate-y-[calc(100%-3rem)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-6 z-10">
        <h2 className="text-md font-semibold text-lg font-sans mb-2">{name}</h2>
        <p className="text-xs font-semibold text-gray-300 mb-2">{title}</p>

        <div className="text-xs flex flex-row gap-1 font-bold tracking-wider mb-4 uppercase text-white focus:outline-dashed focus:outline-yellow-400 focus:outline-offset-2 opacity-0 transform translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="30" color="white" />
            </a>
          )}

          {email && (
            <a href={email}>
              <IoMailOutline size="30" color="white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const OrganizersComponent = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/organizers.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <>
      <div
        ref={headerRef as any}
        className={`text-gray-200 text-center flex flex-col justify-center items-center relative z-10 font-extrabold font-mont text-4xl md:text-5xl mb-6 mt-8 md:mt-6 transition-all duration-700 px-4 ${
          isHeaderVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        Organizers
        <p className="text-gray-400 lg:w-2/3 font-mono text-sm md:text-base mt-4">
          Meet our organizers: the driving force behind the event, dedicated to
          creating an engaging and impactful hackathon experience for everyone
          involved!
        </p>
      </div>

      <div className="grid gap-4 p-4 mx-auto lg:px-32 font-sans md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card key={index} {...(card as any)} delay={index * 100} />
        ))}
      </div>
    </>
  );
};

export default OrganizersComponent;
