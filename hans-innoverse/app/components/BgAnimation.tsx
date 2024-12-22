/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import styles from "./BgAnimation.module.css";

const BgAnimation: React.FC = () => {
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    const numberOfColorBoxes = 400;

    if (bgAnimation) {
      for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add(styles.colorBox);
        bgAnimation.append(colorBox);
      }
    }
  }, []);

  return (
    <div className={styles.bgAnimation} id="bgAnimation">
      <div className={styles.backgroundAmim}></div>
    </div>
  );
};

export default BgAnimation;
