import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import AuthManager from "./Providers/AuthManager";
import ThemeManager from "./Providers/ThemeManager";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeManager>
        <AuthManager>
          <App />
        </AuthManager>
      </ThemeManager>
    </BrowserRouter>
  </React.StrictMode>
);
