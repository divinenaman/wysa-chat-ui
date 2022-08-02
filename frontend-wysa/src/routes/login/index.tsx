import React, { useState } from "react";
import "./index.css";

import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";

import TextInput from "../../components/TextInput";

import { Navigate } from "react-router-dom";
import Button from "../../components/Button";

function Login() {
  const AuthState = useAuth();
  const { selectedTheme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    AuthState.login(email, password);
  };

  return (
    <>
      {AuthState.isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div
          className="login"
          style={{
            background: selectedTheme?.background,
            color: selectedTheme?.textColor,
          }}
        >
          <h1>Wysa</h1>
          <TextInput value={email} onChange={setEmail} placeholder="email" />
          <TextInput
            value={password}
            onChange={setPassword}
            placeholder="password"
          />
          <Button onClick={() => login()} title="Login" />
        </div>
      )}
    </>
  );
}

export default Login;
