import React from "react";

const Card = ({ step, title, text, icon: Icon }) => {
  return (
    <div
      className="text-white
        group relative overflow-hidden rounded-3xl
        border border-white/20 p-10 text-center
        transition-colors duration-300
      "
    >
      {/* Background fill */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-0
          bg-lime-300 transition-all duration-500
          group-hover:h-full
        "
      />

      {/* Content (above background) */}
      <div className="relative z-10">
        {/* Step */}
        <span className="block text-lg font-bold mb-4 transition-colors group-hover:text-black">
          {step}
        </span>

        {/* Icon */}
        <div
          className="
            mx-auto mb-6 flex h-40 w-40 items-center justify-center
            rounded-full border border-white/20 bg-white/10
            transition-all duration-300
            group-hover:bg-white group-hover:border-black
          "
        >
          {Icon && (
            <Icon
              size={48}
              className="transition-all duration-300 group-hover:-translate-y-1 group-hover:text-black"
            />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-4 transition-colors group-hover:text-black">
          {title}
        </h3>

        {/* Text */}
        <p className="text-white/80 transition-colors group-hover:text-black">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
