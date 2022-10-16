import React from "react";
import "./Button.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="main-btn">
      {children}
    </button>
  );
};

export default Button;
