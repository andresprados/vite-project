import React from "react";
import './button.css'

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-3 font-bold rounded-lg shadow-md transition-transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;