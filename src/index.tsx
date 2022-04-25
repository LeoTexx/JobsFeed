import React from "react";
import ReactDOM from "react-dom/client";

import "@textkernel/oneui/dist/oneui.min.css";
import "leaflet/dist/leaflet.css";
import "./styles/global.scss";

import App from "./App";
import { ApiProvider } from "./hooks/useApi";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
