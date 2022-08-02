import { useEffect, useState } from "react";
import "./App.css";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import Login from "./routes/login";
import Chatroom from "./routes/chatroom";

const CheckAuth = ({ children }: { children: React.ReactNode }) => {
  const nav = useNavigate();
  const authState = useAuth();

  useEffect(() => {
    if (!authState.isLoggedIn) {
      nav("/login", { replace: true });
    }
  }, []);

  return <>{children}</>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth>
              <Chatroom />
            </CheckAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
