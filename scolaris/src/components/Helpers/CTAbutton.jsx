import React from "react";

const CTAbutton = ({ className = "" }) => {
  return (
    <a
      href="#booking"
      className={`inline-flex items-center justify-center
        rounded-full px-6 py-2 font-semibold
        bg-indigo-900 text-white
        hover:bg-indigo-950
        transition-colors duration-900
        ${className}
      `}
    >
      Book a Class
    </a>
  );
};

export default CTAbutton;
