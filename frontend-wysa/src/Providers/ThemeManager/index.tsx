import React, { useState, useEffect } from "react";
import { ThemeType, ThemesType } from "../../data/themes";
import axios from "axios";

interface ThemeContextType {
  selectedTheme: ThemeType | null;
  themeName: string;
  themes: ThemesType;
  changeTheme: (a: string) => void;
}

const initialValue: ThemeContextType = {
  selectedTheme: null,
  themeName: "",
  themes: {},
  changeTheme: (a) => {},
};

export const ThemeContext = React.createContext(initialValue);

interface ThemeManagerProps {
  children: React.ReactNode;
}

function ThemeManager({ children }: ThemeManagerProps) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType | null>(null);
  const [themeName, setThemeName] = useState("");
  const [themes, setThemes] = useState<ThemesType>({});

  useEffect(() => {
    retrieveTheme();
  }, []);

  useEffect(() => {
    setInitialTheme();
  }, [themes]);

  const retrieveTheme = async () => {
    try {
      const res = await axios.get("http://localhost:3002/theme");

      if (res.data) {
        setThemes(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setInitialTheme = () => {
    if (themes) {
      const th = localStorage.getItem("wysa-theme");

      if (th && Object.hasOwn(themes, th)) {
        setSelectedTheme(themes[th]);
        setThemeName(th);
      } else {
        setSelectedTheme(themes["default"]);
        setThemeName("default");
      }
    }
  };

  const changeTheme = (name: string) => {
    if (Object.hasOwn(themes, name)) {
      setSelectedTheme(themes[name]);
      setThemeName(name);
      localStorage.setItem("wysa-theme", name);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ selectedTheme, themes, changeTheme, themeName }}
    >
      {selectedTheme ? children : null}
    </ThemeContext.Provider>
  );
}

export default ThemeManager;
