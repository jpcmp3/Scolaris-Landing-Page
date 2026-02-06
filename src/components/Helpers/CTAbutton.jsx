import React from "react";

const CTAbutton = ({ title, length = 25 }) => {
  return (
    <a
      href="#booking"
      style={{ paddingLeft: `${length}px`, paddingRight: `${length}px` }}
      className="
        inline-flex items-center justify-center
        rounded-full py-2 font-semibold
        bg-[#1F2937] text-[#F9FAFB]
        hover:bg-[#374c81]
        hover:scale-105
      "
    >
      {title}
    </a>
  );
};

export default CTAbutton;
