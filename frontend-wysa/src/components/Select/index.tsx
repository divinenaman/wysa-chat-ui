import React from "react";
import "./index.css";

import useTheme from "../../hooks/useTheme";

interface SelectProps {
  selected: string;
  data: any[];
  getValue?: (a: any) => string;
  getText?: (a: any) => string;
  onChange: (a: any) => void;
}

function Select({
  selected,
  data,
  getValue = (e) => e,
  getText = (e) => e,
  onChange,
}: SelectProps) {
  const { selectedTheme } = useTheme();

  return (
    <select
      className="select"
      id="standard-select"
      onChange={(s) => onChange(s.target.value)}
      value={selected}
      style={{
        background: selectedTheme?.textInputColor,
        color: selectedTheme?.textColor,
      }}
    >
      {data.map((x, i) => {
        return (
          <option key={i} value={getValue(x)}>
            {getText(x)}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
