import React, { useContext } from "react";

import { ThemeContext } from "../Providers/ThemeManager";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
