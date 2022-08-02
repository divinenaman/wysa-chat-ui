import React from "react";
import useTheme from "../../hooks/useTheme";
import "./index.css";

interface TextInputProps {
  onChange(e: string): void;
  value: string;
  placeholder: string;
  hide?: boolean;
}

function TextInput({
  onChange,
  value,
  placeholder,
  hide = false,
}: TextInputProps) {
  const { selectedTheme } = useTheme();

  return (
    <input
      className="text_input"
      type={hide ? "password" : "text"}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        backgroundColor: selectedTheme?.textInputColor,
        color: selectedTheme?.textColor,
      }}
    />
  );
}

export default TextInput;
