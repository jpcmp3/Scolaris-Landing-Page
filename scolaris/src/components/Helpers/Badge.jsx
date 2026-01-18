import React from "react";

const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-block text-sm uppercase tracking-wider
        py-1 px-6 border rounded-full
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
