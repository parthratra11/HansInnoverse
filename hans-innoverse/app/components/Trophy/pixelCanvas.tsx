/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import { Pixel } from "./pixel";

export default function PixelCanvas({
  colors = ["#f8fafc", "#f1f5f9", "#cbd5e1"],
  gap = 5,
  speed = 35,
  noFocus = false,
}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);
  const parentRef = useRef(null);

  const normalizedGap = Math.min(Math.max(parseInt(gap), 4), 50);
  const normalizedSpeed = Math.min(Math.max(parseInt(speed), 0), 100) * 0.001;

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const initCanvas = () => {
      if (!parentRef.current) return;

      const rect = parentRef.current.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      createPixels(canvas, context, width, height, reducedMotion);
    };

    const resizeObserver = new ResizeObserver(initCanvas);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, normalizedGap, normalizedSpeed]);

  const getDistanceToCanvasCenter = (x, y, width, height) => {
    const dx = x - width / 2;
    const dy = y - height / 2;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const createPixels = (canvas, context, width, height, reducedMotion) => {
    pixelsRef.current = [];
    for (let x = 0; x < width; x += normalizedGap) {
      for (let y = 0; y < height; y += normalizedGap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = reducedMotion
          ? 0
          : getDistanceToCanvasCenter(x, y, width, height);
        pixelsRef.current.push(
          new Pixel(canvas, context, x, y, color, normalizedSpeed, delay)
        );
      }
    }
  };

  const animate = (fnName) => {
    if (!contextRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);

    pixelsRef.current.forEach((pixel) => pixel[fnName]());

    if (pixelsRef.current.every((pixel) => pixel.isIdle)) {
      cancelAnimationFrame(animationRef.current);
    } else {
      animationRef.current = requestAnimationFrame(() => animate(fnName));
    }
  };

  const handleAnimation = (name) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animate(name);
  };

  return (
    <div
      ref={parentRef}
      className="relative grid w-full h-full overflow-visible"
      onMouseEnter={() => handleAnimation("appear")}
      onMouseLeave={() => handleAnimation("disappear")}
      onFocus={() => !noFocus && handleAnimation("appear")}
      onBlur={() => !noFocus && handleAnimation("disappear")}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
