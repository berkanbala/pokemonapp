import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./routes/appRoute";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { AppContextProvider } from "./common/context/appContext";
import { ThemeContextProvider } from "./common/context/themeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <AppContextProvider>
          <AppRoute />
        </AppContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
