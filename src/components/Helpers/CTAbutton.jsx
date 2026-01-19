import React from "react";

const CTAbutton = ({ title }) => {
  return (
    <a
      href="#booking"
      className="inline-flex items-center justify-center
        rounded-full px-6 py-2 font-semibold
        bg-blue-300 text-black
        hover:bg-indigo-100
        transition-colors duration-300
        "
    >
      {title}
    </a>
  );
};

export default CTAbutton;
