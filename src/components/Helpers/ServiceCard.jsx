import React from "react";

const ServiceCard = ({ title, text, Icon }) => {
  return (
    <div
      className="
        group relative rounded-3xl border 
        p-6 transition-all duration-300
        hover:bg-lime-300 hover:border-lime-300
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-10 w-10 items-center justify-center
          rounded-xl 
          transition-colors duration-300
          group-hover:bg-gray
        "
      >
        <Icon size={26} className=" group-hover:text-black" />
      </div>
      {/* Title */}
      <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-black">
        {title}
      </h3>
      {/* Text */}
      <p className=" transition-colors group-hover:text-black whitespace-pre-line">
        {text}
      </p>{" "}
    </div>
  );
};

export default ServiceCard;
