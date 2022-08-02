import React, { useState, useEffect } from "react";
import axios from "axios";

interface AuthContextType {
  login: (a: string, b: string) => void;
  checkLogin?: () => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const initialValue: AuthContextType = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};
export const AuthContext = React.createContext(initialValue);

interface AuthManagerProps {
  children: React.ReactNode;
}

function AuthManager({ children }: AuthManagerProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    const l = localStorage.getItem("wysa-login");
    if (l == "loggedIn") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const login = async (email: string, password: string) => {
    if (!email || !password) return;

    try {
      const res = await axios.post("http://localhost:3002/auth/login", {
        email,
        password,
      });

      if (res.status == 200) {
        setIsLoggedIn(true);
        localStorage.setItem("wysa-login", "loggedIn");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    localStorage.removeItem("wysa-login");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ login, checkLogin, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthManager;
