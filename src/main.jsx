import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
