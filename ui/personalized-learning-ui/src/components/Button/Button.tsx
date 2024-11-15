import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonStyle?: "btn--primary" | "btn--outline";
  buttonSize?: "btn--medium" | "btn--large";
}) => {
  const checkButtonStyle =
    buttonStyle && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize =
    buttonSize && SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
