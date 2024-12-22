/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import styles from "./tracks.module.css";

export default function Tracks() {
  useEffect(() => {
    class ParallaxTiltEffect {
      constructor({ element, tiltEffect }) {
        this.element = element;
        this.container = element.querySelector(".container");
        this.size = [300, 360];
        [this.w, this.h] = this.size;
        this.tiltEffect = tiltEffect;
        this.mouseOnComponent = false;
        this.init();
      }

      handleMouseMove(event) {
        const { offsetX, offsetY } = event;
        let X, Y;

        if (this.tiltEffect === "reverse") {
          X = (offsetX - this.w / 2) / 3 / 3;
          Y = -(offsetY - this.h / 2) / 3 / 3;
        } else {
          X = -(offsetX - this.w / 2) / 3 / 3;
          Y = (offsetY - this.h / 2) / 3 / 3;
        }

        this.container.style.setProperty("--rY", X.toFixed(2));
        this.container.style.setProperty("--rX", Y.toFixed(2));
        this.container.style.setProperty("--bY", `${80 - (X / 4).toFixed(2)}%`);
        this.container.style.setProperty("--bX", `${50 - (Y / 4).toFixed(2)}%`);
      }

      handleMouseEnter = () => {
        this.mouseOnComponent = true;
        this.container.classList.add("container--active");
      };

      handleMouseLeave = () => {
        this.mouseOnComponent = false;
        this.defaultStates();
      };

      defaultStates() {
        this.container.classList.remove("container--active");
        this.container.style.setProperty("--rY", "0");
        this.container.style.setProperty("--rX", "0");
        this.container.style.setProperty("--bY", "80%");
        this.container.style.setProperty("--bX", "50%");
      }

      init() {
        this.element.addEventListener(
          "mousemove",
          this.handleMouseMove.bind(this)
        );
        this.element.addEventListener("mouseenter", this.handleMouseEnter);
        this.element.addEventListener("mouseleave", this.handleMouseLeave);
      }
    }

    const tracks = document.querySelectorAll(".wrap");
    tracks.forEach((track, i) => {
      new ParallaxTiltEffect({
        element: track,
        tiltEffect: i % 2 === 0 ? "reverse" : "normal",
      });
    });
  }, []);

  const tracks = [
    "Education",
    "Gaming",
    "Transport",
    "Health",
    "Cybersecurity",
    "FinTech",
    "E-commerce",
    "Social Media",
    "IoT",
    "Blockchain",
  ];

  return (
    <section
      id="tracks"
      className="min-h-screen py-20 relative z-50 bg-[#212534]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">Tracks</h2>
          <p className="text-cyan-300 mt-4">Choose your innovation path</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {tracks.map((track, index) => (
            <div key={index} className="wrap">
              <div className="container">
                <p>{track}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
