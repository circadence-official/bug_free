import React from "react";
import "./Button.css";
import Icon from "../Icon/Icon";

const Button = ({ text, size = "medium", icon, onClick }) => {
  let buttonClass = `button ${size}`;
  if (icon && text) {
    buttonClass += " with-icon";
  } else if (icon && !text) {
    buttonClass += " icon-only";
  }
  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && <Icon type={icon} size={size === "large" ? "large" : "medium"} color="white"/>}
      {text && <span className="button-text">{text}</span>}
    </button>
  );
};

export default Button;
