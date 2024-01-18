import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./routes/appRoute";
import { AppContextProvider } from "./common/context/appContext";
import { ThemeContextProvider } from "./common/context/themeContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppContextProvider>
        <AppRoute />
      </AppContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
