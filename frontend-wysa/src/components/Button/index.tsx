import React from "react";
import "./index.css";

import useTheme from "../../hooks/useTheme";

interface ButtonProps {
  onClick(): void;
  title: string;
}

function Button({ onClick, title }: ButtonProps) {
  const { selectedTheme } = useTheme();

  return (
    <button
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: selectedTheme?.buttonColor,
        color: selectedTheme?.textColor,
      }}
    >
      {title}
    </button>
  );
}

export default Button;
