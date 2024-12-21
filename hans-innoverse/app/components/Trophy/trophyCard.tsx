import React from "react";

const TrophyCard = ({
  children,
  size = "medium",
  metalColor,
  className = "",
}) => {
  const sizeClasses = {
    small: "w-64 h-72",
    medium: "w-72 h-80",
    large: "w-80 h-96",
  };

  const metalGradients = {
    gold: "bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600",
    silver: "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400",
    bronze: "bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800",
  };

  const shimmerEffect = `
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
    before:translate-x-[-200%] hover:before:translate-x-[200%]
    before:transition-transform before:duration-[1.5s] before:ease-in-out
  `;

  return (
    <div
      className={`
      relative
      ${sizeClasses[size]}
      ${metalGradients[metalColor]} 
      ${shimmerEffect}
      rounded-t-[8rem]
      isolate
      overflow-hidden
      border
      border-gray-500
      bg-gray-950
      bg-opacity-60
      transition-transform duration-300 ease-out
      hover:scale-105
      group
    `}
    >
      {/* Content Container */}
      <div className="relative h-full grid place-items-center">{children}</div>
    </div>
  );
};

export default TrophyCard;
